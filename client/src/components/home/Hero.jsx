import React from "react";
import { Link } from "react-router-dom";
import { HERO_URL } from '../../utils/constants';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {




    const underlineAnimate = {
        hidden: {
          opacity: 0,
          pathLength: 0,
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          transition: {
            delay: 0.8,
            duration: .6,
          },
        },
    };

    const headerAnimate = {
        hidden: {
          opacity: 0,
          y: 25,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        },
      };

      const textAnimate = {
        hidden: {
          opacity: 0,
          y: 25,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.3
          }
        },
      };

      const linksAnimate = {
        hidden: {
          opacity: 0,
          x: '-100vw',
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            delay: 0.5,
            type: 'spring',
            stiffness: 120
          }
        },
      };

      const buttonVariants = {
        hover: {
          scale: 1.1,
          textShadow: "0px 0px 2px #ffffff",
          boxShadow: "0px 0px 4px #243E8B",
          transition: {
            duration: 0.3,
          },
        },
      };


    return (
        <div className="relative overflow-hidden">
            <div className="absolute top-1/4 -left-8 w-40 h-40 xl:w-72 xl:h-60 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-3xl transform-gpu -rotate-12 z-0 opacity-80 blur-sm"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 xl:w-48 xl:h-48 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full transform-gpu rotate-12 z-0 opacity-60 blur-sm"></div>
            <div className='w-full min-h-screen flex flex-col justify-between px-8 md:px-12 lg:px-16 py-12 md:py-16 z-10 relative bg-gradient-to-b from-white via-gray-50 to-white'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col mt-16">
                        <motion.h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-display font-extrabold text-gray-900 leading-tight"
                            variants={headerAnimate}
                            initial="hidden"
                            animate="visible"
                        >
                            Premium Technology
                            <br />
                            <span className="text-secondary-500 font-black italic tracking-wide drop-shadow-lg">
                                Delivered to You
                            </span>
                            <svg
                                className="svg-underline stroke-secondary-500 relative z-10 w-64 md:w-1/2 lg:w-3/4 mt-2"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth={4}
                                viewBox="0 0 422 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <motion.path
                                    d="M3 9C118.957 4.47226 364.497 -1.86658 419 9"
                                    variants={underlineAnimate}
                                    initial="hidden"
                                    animate="visible"
                                />
                            </svg>
                        </motion.h1>
                        <motion.p className="text-lg md:text-xl text-gray-600 py-6 leading-relaxed max-w-2xl"
                            variants={textAnimate}
                            initial="hidden"
                            animate="visible"
                        >
                            Discover cutting-edge technology products with unbeatable quality and service. 
                            From the latest gadgets to essential accessories, we bring innovation directly to your doorstep.
                        </motion.p>
                        <motion.div
                            variants={linksAnimate}
                            initial="hidden"
                            animate="visible"
                            className="flex gap-4"
                        >
                            <Link to='/products'>
                                <motion.button className="btn-primary text-base px-8 py-4"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >
                                    Explore Products
                                </motion.button>
                            </Link>
                            <Link to='/about'>
                                <motion.button className="btn-secondary text-base px-8 py-4"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Learn More
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                    <motion.div className="block mx-auto"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .4 }}
                    >
                        <img className="h-[75%] w-full object-cover rounded-2xl shadow-2xl" src={HERO_URL} alt="Modern Technology Products" />
                    </motion.div>
                </div>
            </div>
        </div>
        //     {/* <div className="absolute z-0 -left-20 top-0 w-40 h-40 bg-secondary-200 rounded-2xl transform-gpu -rotate-12 lg:-left-40 lg:-top-8 xl:w-80 xl:h-80"></div> */}
    );
};

export default Hero;