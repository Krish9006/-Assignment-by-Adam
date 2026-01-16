import React from 'react';
import { motion } from 'framer-motion';

import PageHero from '../layout/PageHero';
import { ABOUT_IMG_URL } from '../utils/constants';


const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { duration: .3 }
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' }
    }
  };

  const underlineAnimate = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 1,
        duration: .8,
      },
    },
};


const About = () => {


    return (
        <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <PageHero title="about" />
            <div className='w-full py-32'>
                <div className='w-[85vw] flex mx-auto'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className="rounded-xl overflow-hidden shadow-xl">
                            <img src={ABOUT_IMG_URL} alt="Professional Tech Team" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <motion.h2 className='text-4xl lg:text-6xl font-bold capitalize tracking-wider'
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: .5 }}
                            >
                                Our Story
                                <svg
                                    className="svg-underline stroke-[#ffb81c] relative z-10 w-1/2"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={7}
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
                            </motion.h2>
                            <motion.p className='leading-8 text-gray-700 py-8 text-lg'
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: .5, duration: .8 }}
                            >
                                Founded with a passion for technology and innovation, we are dedicated 
                                to providing our customers with the latest and greatest tech products 
                                at competitive prices. Our team of experts carefully curates each product 
                                to ensure quality, reliability, and value.
                                <br /><br />
                                We believe that everyone deserves access to cutting-edge technology, 
                                whether you're a professional, student, or tech enthusiast. With years 
                                of experience in the industry, we've built strong relationships with 
                                leading manufacturers to bring you exclusive deals and the newest 
                                releases before anyone else.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.main>
    );
};

export default About;