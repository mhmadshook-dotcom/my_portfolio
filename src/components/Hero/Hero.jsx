import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import profileImage from '../../assets/profile.png';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.4
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-wrapper">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-greeting" variants={itemVariants}>
            Hello, I'm
          </motion.div>
          
          <motion.h1 className="hero-name" variants={itemVariants}>
            Mohammad Sheakh Shouk
          </motion.h1>
          
          <motion.h2 className="hero-title" variants={itemVariants}>
            {/*React*/} 
            Frontend Developer
          </motion.h2>
          
          <motion.p className="hero-tagline" variants={itemVariants}>
            Crafting modern, responsive web applications with clean code and exceptional user experiences.
            Specialized in React, JavaScript, and cutting-edge frontend technologies.
          </motion.p>
          
          <motion.div className="hero-buttons" variants={itemVariants}>
            {/*<button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </button>*/}
            <a 
              href="/cv.png"
              download="Mohammad_Sheakh_Shouk_CV.png"
              className="btn btn-secondary"
            >
              <FaDownload />
              <span>Download CV</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-image-wrapper">
            <img 
              src={profileImage} 
              alt="Mohammad Sheakh Shouk" 
              className="hero-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
