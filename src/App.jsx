import { useEffect, useRef } from "react";
import "./App.css";

import {
    motion,
    useAnimation,
    useInView,
    useScroll,
    useTransform,
} from "framer-motion";

function App() {
    const { scrollYProgress: progress } = useScroll();

    const containerRef = useRef(null);

    const isInView = useInView(containerRef, { once: true });
    const mainControls = useAnimation();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const paragraphOneValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["-100%", "0%"],
    );

    const paragraphTwoValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["100%", "0%"],
    );

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    const gridContainerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.25, delayChildren: 0.25 },
        },
    };

    const gridItemVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1 } },
    };

    const svgIconVarients = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(252, 211, 77, 0)",
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "rgba(252, 211, 77, 1)",
        },
    };

    const text =
        "The Bharatiya Nyaya Sanhita (BNS) defines theft under **Section 304**. \n\n**Section 304(1)** states that theft is committed when a person dishonestly takes any movable property out of the possession of another person without that person’s consent. \n\n**Section 304(2)** outlines the punishment for theft, which is imprisonment of either description for a term which may extend to two years, or with fine, or with both. \n";

    return (
        <div className="flex flex-col gap-10 overflow-x-hidden">
            <motion.section
                variants={gridContainerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-3 gap-10 p-10"
            >
                <motion.div
                    variants={gridItemVariants}
                    className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
                >
                    <motion.div
                        className="h-20 w-20 rounded-full bg-stone-100"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                delay: 0.25,
                                type: "tween",
                            },
                        }}
                    />
                    <motion.div
                        className="h-20 w-20 rounded-lg bg-stone-100"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                delay: 0.5,
                                type: "tween",
                            },
                        }}
                    />
                </motion.div>
                <motion.div
                    variants={gridItemVariants}
                    className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
                >
                    <motion.div
                        className="h-1/3 w-1/3 rounded-lg bg-rose-400"
                        animate={{
                            scale: [1, 2, 2, 1],
                            rotate: [0, 90, 90, 0],
                            borderRadius: ["20%", "30%", "50%", "20%"],
                        }}
                        transition={{
                            duration: 5,
                            delay: 0.75,
                            repeat: Infinity,
                            repeatDelay: 1,
                            type: "tween",
                        }}
                    />
                </motion.div>
                <motion.div
                    variants={gridItemVariants}
                    className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
                >
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            type: "spring",
                            stiffness: 600,
                            damping: 10,
                        }}
                        className=" w-1/2 rounded-lg bg-emerald-600 py-4 text-2xl font-thin tracking-wide text-gray-100"
                    >
                        Subscribe
                    </motion.button>
                </motion.div>
                <motion.div
                    variants={gridItemVariants}
                    className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
                >
                    <motion.div
                        className="h-1/3 w-1/3 rounded-lg bg-orange-500"
                        drag
                        dragConstraints={{
                            left: -100,
                            right: 100,
                            top: -100,
                            bottom: 100,
                        }}
                        dragTransition={{
                            bounceStiffness: 600,
                            bounceDamping: 10,
                        }}
                    />
                </motion.div>
                <motion.div
                    variants={gridItemVariants}
                    className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
                >
                    <motion.div className="aspect-square w-40 rounded-lg bg-gray-50/20">
                        <motion.div
                            className="h-full w-full origin-bottom rounded-lg bg-gray-400"
                            style={{
                                scaleY: progress,
                            }}
                        />
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={gridItemVariants}
                    className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
                >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-1/2 stroke-amber-500 stroke-[0.5]"
                    >
                        <motion.path
                            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                            variants={svgIconVarients}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: {
                                    duration: 2,
                                    ease: "easeInOut",
                                    delay: 1,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 1,
                                },
                                fill: {
                                    duration: 2,
                                    ease: "easeInOut",
                                    delay: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 1,
                                },
                            }}
                        />
                    </motion.svg>
                </motion.div>
            </motion.section>
            <section className="mb-10 flex flex-col gap-10" ref={containerRef}>
                <motion.h1
                    className="text-center text-5xl tracking-wide text-slate-100"
                    animate={mainControls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 75 },
                    }}
                    transition={{ delay: 0.5, duration: 0.5, type: "tween" }}
                >
                    Lorem ipsum dolor.
                </motion.h1>
                <motion.p
                    style={{ translateX: paragraphOneValue }}
                    className="mx-auto w-1/2 text-4xl font-thin text-slate-100"
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eius consequatur corrupti omnis aliquid voluptatum
                    voluptates explicabo fugiat, repudiandae quis excepturi?
                </motion.p>
                <motion.div
                    style={{ translateX: paragraphTwoValue }}
                    className="mx-auto w-1/2 text-4xl font-thin text-slate-100"
                >
                    {"Lorem ipsum dolor sit amet consectetur adipisicing elit.\nNobis cum corporis dolorum! Deserunt animi odit alias repudiandae asperiores autem!\nExercitationem, eveniet harum minus molestias praesentium saepe pariatur.\nNihil, voluptatem harum."
                        .split("\n")
                        .map((line, index) => (
                            <motion.p
                                key={index}
                                style={{ translateX: paragraphTwoValue }}
                                className="flex flex-wrap gap-2"
                                initial={{
                                    opacity: 0,
                                    // y: 25,
                                }}
                                animate={{
                                    opacity: 1,
                                    // y: 0,
                                    transition: {
                                        delay: index * 0.05,
                                        duration: 0.5,
                                    },
                                }}
                            >
                                {line.split(" ").map((word, index) => (
                                    <motion.span
                                        key={index}
                                        className="inline-block"
                                        initial={{
                                            opacity: 0,
                                            y: 25,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: index * 0.05,
                                                duration: 0.5,
                                            },
                                        }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.p>
                        ))}
                </motion.div>
                <motion.p
                    style={{ translateX: paragraphOneValue }}
                    className="mx-auto w-1/2 text-4xl font-thin text-slate-100"
                >
                    {text}
                </motion.p>
            </section>
        </div>
    );
}

export default App;
