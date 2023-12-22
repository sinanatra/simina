<script>
    import { onMount } from "svelte";
    import Matter from "matter-js";
    import { selectedBall } from "@stores";

    export let data;
    let width;
    let height;

    const balls = data;

    onMount(() => {
        createAvalanche();
    });

    function createAvalanche() {
        Matter.use("matter-wrap");

        // create engine
        const engine = Matter.Engine.create();
        const world = engine.world;
        const canvas = document.getElementById("matter-canvas");

        const render = Matter.Render.create({
            element: document.getElementById("matter-container"),
            engine: engine,
            canvas: canvas,
            options: {
                width,
                height,
                background:
                    "linear-gradient(180deg, #efff82 0%, #efff82 55%, #cfcfcf 85%, #cfcfcf 100%)",
                wireframes: false,
            },
        });

        Matter.Render.run(render);

        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, engine);

        const delay = 1000;
        const ballData = [];
        for (let i = 0; i < balls.length; i++) {
            setTimeout(() => {
                const ball = Matter.Bodies.circle(
                    Matter.Common.random(-width, width),
                    -height,
                    50,
                    {
                        friction: 0.9,
                        restitution: 0.5,
                        density: 0.6,
                        render: {
                            fillStyle: "blue",
                        },
                        data: balls[i],
                    },
                );
                ballData.push(ball);
                Matter.World.add(world, ball);
            }, i * delay);
        }

        Matter.Events.on(runner, "tick", (event) => {
            const underMouse = Matter.Query.point(
                ballData,
                mouseConstraint.mouse.position,
            );

            if (underMouse.length && underMouse[0]?.data) {
                // let fill = underMouse[0].render.fillStyle;
                underMouse[0].render.fillStyle = "yellow";
                $selectedBall = underMouse[0].data;
            }

            if (mouseConstraint.body && underMouse[0]?.data) {
                $selectedBall = underMouse[0].data;
            }
        });

        const walls = [
            Matter.Bodies.rectangle(-width, 0, 20, height * 2, {
                isStatic: true,
                render: { fillStyle: "none" },
            }),

            Matter.Bodies.rectangle(width, 0, 20, height * 2, {
                isStatic: true,
                render: { fillStyle: "none" },
            }),
            Matter.Bodies.rectangle(0, height, width * 2.1, 5, {
                isStatic: true,
                render: { fillStyle: "none" },
            }),
        ];

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const minDistance = 252;

        const randomShapes = generateShapes([], width / 35);

        function generateShapes(shapesArray, remaining) {
            if (remaining <= 0) {
                return shapesArray;
            }

            const newShape = Matter.Bodies.rectangle(
                getRandomInt(-width, width - 100),
                getRandomInt(-height, height - 80),
                250,
                10,
                {
                    isStatic: true,
                    angle: getRandomInt(45, 90),
                },
            );

            if (!isTooClose(newShape, shapesArray, minDistance)) {
                const rotationDirection = Math.random() < 0.5 ? -1 : 1;
                Matter.Events.on(engine, "beforeUpdate", function (event) {
                    Matter.Body.rotate(
                        newShape,
                        rotationDirection * (Math.PI / 180),
                    );
                });

                const circle = Matter.Bodies.circle(
                    newShape.position.x,
                    newShape.position.y,
                    10,
                    {
                        isStatic: true,
                        render: {
                            fillStyle: "blue",
                        },
                    },
                );

                const circle1 = Matter.Bodies.circle(
                    newShape.position.x,
                    newShape.position.y,
                    15,
                    {
                        isStatic: true,
                        render: {
                            // fillStyle: "white",
                            sprite: {
                                texture: "gradient.png",
                            },
                            opacity: 0.3,
                        },
                    },
                );

                shapesArray.push(circle1, newShape, circle);

                return generateShapes(
                    [...shapesArray, newShape],
                    remaining - 1,
                );
            } else {
                return generateShapes(shapesArray, remaining);
            }
        }

        function isTooClose(newShape, shapesArray, minDistance) {
            for (const shape of shapesArray) {
                const distance = Matter.Vector.magnitude(
                    Matter.Vector.sub(newShape.position, shape.position),
                );
                if (distance < minDistance) {
                    return true;
                }
            }
            return false;
        }
        Matter.World.add(world, [...walls, ...randomShapes]);

        const mouse = Matter.Mouse.create(render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        Matter.World.add(world, mouseConstraint);

        render.mouse = mouse;

        Matter.Render.lookAt(render, Matter.Composite.allBodies(world));

        for (let i = 0; i < world.bodies.length; i += 1) {
            world.bodies[i].plugin.wrap = {
                min: { x: render.bounds.min.x, y: render.bounds.min.y },
                max: { x: render.bounds.max.x, y: render.bounds.max.y },
            };
        }

        const context = {
            engine: engine,
            runner: runner,
            render: render,
            canvas: render.canvas,
            stop: function () {
                Matter.Render.stop(render);
                Matter.Runner.stop(runner);
            },
        };

        // Matter.Render.setPixelRatio(render, window.devicePixelRatio); // added this

        return context;
    }
</script>

<article
    id="matter-container"
    bind:clientWidth={width}
    bind:clientHeight={height}
>
    <canvas id="matter-canvas" />
</article>

<style>
    article {
        width: 100vw;
        height: 100vh;
        margin: 0;
        overflow: hidden; /* Prevent scrollbars */
    }
</style>
