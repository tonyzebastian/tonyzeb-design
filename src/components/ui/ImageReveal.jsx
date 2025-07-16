'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ImageReveal({ leftImage, middleImage, rightImage }) {
    const containerVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.15,
            }
        }
    };

    const leftImageVariants = {
        initial: { rotate: 0, x: 0, y: 0 },
        animate: {
            rotate: -8,
            x: -150,
            y: 10,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 12
            }
        },
        hover: {
            rotate: 1,
            x: -160,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    const middleImageVariants = {
        initial: { rotate: 0, x: 0, y: 0 },
        animate: {
            rotate: 6,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 12
            }
        },
        hover: {
            rotate: 0,
            x: 0,
            y: -10,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    const rightImageVariants = {
        initial: { rotate: 0, x: 0, y: 0 },
        animate: {
            rotate: -6,
            x: 200,
            y: 20,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 12
            }
        },
        hover: {
            rotate: 3,
            x: 200,
            y: 10,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    return (
        <motion.div 
            className="relative flex items-center justify-center w-64 h-64 my-12 "
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            {/* Left Image - Lowest z-index */}
            <motion.div 
                className="absolute w-48 h-48 origin-bottom-right overflow-hidden rounded-xl shadow-lg bg-white hidden md:block "
                variants={leftImageVariants}
                whileHover="hover"
                animate="animate"
                style={{ zIndex: 10 }}
            >
                <Image
                    src={leftImage}
                    alt="Left image"
                    fill
                    className="object-cover p-2 rounded-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </motion.div>
            
            {/* Middle Image - Middle z-index */}
            <motion.div 
                className="absolute w-48 h-48 origin-bottom-left overflow-hidden rounded-xl shadow-lg bg-white"
                variants={middleImageVariants}
                whileHover="hover"
                animate="animate"
                style={{ zIndex: 20 }}
            >
                <Image
                    src={middleImage}
                    alt="Middle image"
                    fill
                    className="object-cover p-2 rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw "
                />
            </motion.div>
            
            {/* Right Image - Highest z-index */}
            <motion.div 
                className="absolute w-48 h-48 origin-bottom-right overflow-hidden rounded-xl shadow-lg bg-white hidden md:block "
                variants={rightImageVariants}
                whileHover="hover"
                animate="animate"
                style={{ zIndex: 30 }}
            >
                <Image
                    src={rightImage}
                    alt="Right image"
                    fill
                    className="object-cover p-2 rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </motion.div>
        </motion.div>
    );
}