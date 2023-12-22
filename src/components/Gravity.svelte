<script>
    import { onMount } from "svelte";
    import Matter from "matter-js";
    import { selectedBall } from "@stores";

    let width;
    let height;

    const balls = [
        {
            color: "blue",
            title: "title1",
            descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            media: "https://media.licdn.com/dms/image/C4E03AQFGdKHgR_4wKQ/profile-displayphoto-shrink_800_800/0/1663252181387?e=2147483647&v=beta&t=FsOUqpTDpG4KskpJkHC3-m64BjwVWEAijRpMuGuYYcA",
        },
        {
            color: "blue",
            title: "title2",
            descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            media: "https://i.ytimg.com/vi/SrfpBwVyFjs/maxresdefault.jpg",
        },
        {
            color: "blue",
            title: "title3",
            descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            media: "https://i.ytimg.com/vi/SrfpBwVyFjs/maxresdefault.jpg",
        },
        {
            color: "blue",
            title: "title4",
            descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            media: "https://i.ytimg.com/vi/SrfpBwVyFjs/maxresdefault.jpg",
        },
        {
            color: "blue",
            title: "title5",
            descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            media: "https://i.ytimg.com/vi/SrfpBwVyFjs/maxresdefault.jpg",
        },
    ];

    onMount(() => {
        createAvalanche();
    });

    function createAvalanche() {
        Matter.use("matter-wrap");

        // create engine
        const engine = Matter.Engine.create();
        const world = engine.world;
        const canvas = document.getElementById("matter-canvas");

        // create renderer
        const render = Matter.Render.create({
            element: document.getElementById("matter-container"),
            engine: engine,
            canvas: canvas,
            options: {
                width,
                height,
                background:
                    "linear-gradient(180deg, #efff82 0%, #efff82 55%, #cfcfcf 85%, #cfcfcf 100%)", // Set background to transparent
                wireframes: false,
            },
        });

        Matter.Render.run(render);

        // create runner
        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, engine);

        // add bodies with colors
        const delay = 1000; // 1 second delay
        const ballData = [];
        for (let i = 0; i < balls.length; i++) {
            setTimeout(() => {
                const ball = Matter.Bodies.circle(
                    Matter.Common.random(-width, width),
                    -height,
                    50,
                    {
                        friction: 0.0000001,
                        restitution: .1,
                        density: 10,
                        render: {
                            fillStyle: balls[i].color,
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
                underMouse[0].render.fillStyle = "red";
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
            Matter.Bodies.rectangle(0, height, width * 2, 20, {
                isStatic: true,
                render: { fillStyle: "none" },
            }),
        ];

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const minDistance = 200; // Minimum distance between shapes

        const randomShapes = generateShapes([], 50);

        function generateShapes(shapesArray, remaining) {
            if (remaining <= 0) {
                return shapesArray;
            }

            const newShape = Matter.Bodies.rectangle(
                getRandomInt(-width, width),
                getRandomInt(-height, height - 250),
                250,
                10,
                {
                    isStatic: true,
                    angle: getRandomInt(45, 90),
                },
            );

            if (!isTooClose(newShape, shapesArray, minDistance)) {
                const rotationDirection = remaining % 2 === 1 ? -1 : 1;

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
                            fillStyle: "black",
                        },
                    },
                );

                // Create the circle body with the radial gradient fill
                const circle1 = Matter.Bodies.circle(
                    newShape.position.x,
                    newShape.position.y,
                    50,
                    {
                        isStatic: true,
                        render: {
                            fillStyle: "#cfcfcf", // Use the radial gradient as the fill style
                            opacity: 0.6,
                        },
                    },
                );

                shapesArray.push(circle1, circle, newShape);

                return generateShapes(
                    [...shapesArray, newShape],
                    remaining - 1,
                );
            } else {
                // If the new shape is too close, try generating another one
                return generateShapes(shapesArray, remaining);
            }
        }

        function isTooClose(newShape, shapesArray, minDistance) {
            for (const shape of shapesArray) {
                const distance = Matter.Vector.magnitude(
                    Matter.Vector.sub(newShape.position, shape.position),
                );
                if (distance < minDistance) {
                    return true; // Too close
                }
            }
            return false; // Not too close
        }
        Matter.World.add(world, [...walls, ...randomShapes]);

        // add mouse control
        const mouse = Matter.Mouse.create(render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 2,
                render: {
                    visible: false,
                },
            },
        });

        Matter.World.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.mouse = mouse;

        // fit the render viewport to the scene
        Matter.Render.lookAt(render, Matter.Composite.allBodies(world));

        // wrapping using matter-wrap plugin
        for (let i = 0; i < world.bodies.length; i += 1) {
            world.bodies[i].plugin.wrap = {
                min: { x: render.bounds.min.x, y: render.bounds.min.y },
                max: { x: render.bounds.max.x, y: render.bounds.max.y },
            };
        }

        // context for cleanup
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
        height: 99vh;
        margin: 0;
        overflow: hidden; /* Prevent scrollbars */
    }
</style>
