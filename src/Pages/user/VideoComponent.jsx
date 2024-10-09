import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Video from '../../assets/video.mp4'

const VideoComponent = () => {
    return (
        <div className="relative w-full mb-5">

            <motion.video
                className="w-full h-auto rounded-lg shadow-lg"
                autoPlay
                muted
                loop
                playsInline
                initial={ { scale: 0.9, opacity: 0 } }
                whileInView={ { scale: 1, opacity: 1 } }
                transition={ { duration: 0.5 } }
                viewport={ { once: false, amount: 0.1 } }
            >
                <source src={ Video } type="video/mp4" />
                Your browser does not support the video tag.
            </motion.video>

            <motion.div
                className="absolute inset-0 flex items-center justify-center z-10"
                initial={ { opacity: 0, y: -50 } }
                whileInView={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.5 } }
                viewport={ { once: false, amount: 0.2 } }
            >
                <h2 className="text-white text-center text-xl md:text-3xl font-bold">
                    <Typewriter
                        words={ [
                            "Explore the Beauty of Our Properties!",
                            "Discover Your Dream Home Today!",
                            "Luxury and Comfort Await You!"
                        ] }
                        loop={ Infinity }
                        cursor
                        cursorStyle="_"
                        typeSpeed={ 50 }
                        deleteSpeed={ 50 }
                        delaySpeed={ 1000 }
                    />
                </h2>
            </motion.div>
        </div>
    );
};

export default VideoComponent;
