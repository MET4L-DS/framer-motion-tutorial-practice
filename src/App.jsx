import "./App.css";

import { motion, useScroll } from "framer-motion";

function App() {
    const { scrollYProgress: progress } = useScroll();
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
                ></motion.div>
            </motion.section>
        </div>
    );
}

export default App;
