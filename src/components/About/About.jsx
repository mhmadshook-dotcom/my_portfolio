import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="about">
      <motion.div 
        ref={ref}
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="about-text">
            I'm an <strong>IT engineer</strong> specializing in software development, user interface
            design,and software solution implementation.<br/><br/>
            I'm a passionate <strong>React Frontend Developer</strong> specializing in building modern, 
            responsive web applications that deliver exceptional user experiences. With expertise in 
            React, JavaScript, and contemporary web technologies, I transform complex requirements 
            into elegant, intuitive interfaces.
          </p>
          
          <p className="about-text">
            My focus is on creating <strong>pixel-perfect, responsive designs</strong> that work 
            seamlessly across all devices. I excel at integrating RESTful APIs, implementing 
            dynamic UI/UX patterns, and writing clean, maintainable code that follows industry 
            best practices.
          </p>
          
          <p className="about-text">
            I'm committed to staying current with the latest frontend trends and technologies, 
            ensuring every project leverages modern tools and methodologies to achieve optimal 
            performance and user satisfaction.
          </p>
        </motion.div>

        <motion.div 
          className="about-highlights"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >

          <div className="highlight-item">
            <h3>Qualification</h3>
            <p>Bachelor's Degree in Information Engineering</p>
          </div>
          <div className="highlight-item">
            <h3>Position</h3>
            <p>Software Engineer</p>
          </div>
          <div className="highlight-item">
            <h3>Languages</h3>
            <p>Arabic: Native<br />English: Professional Working Proficiency</p>
          </div>
          
          <div className="highlight-item">
            <h3>Frontend Expertise</h3>
            <p>React, JavaScript, HTML5, CSS3</p>
          </div>
          <div className="highlight-item">
            <h3>UI/UX Focus</h3>
            <p>Responsive Design, User-Centered</p>
          </div>
          <div className="highlight-item">
            <h3>Integration</h3>
            <p>RESTful APIs, Modern Tools</p>
          </div>
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
