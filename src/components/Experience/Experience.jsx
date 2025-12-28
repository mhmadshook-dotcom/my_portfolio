import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      id: 1,
      role: 'Financial Accountant and Administrative Officer',
      company: 'Engineering Company for Industrial Equipment Manufacturing',
      period: '2021 - 2024',
      responsibilities: [
        'Managed complex data structures and reporting systems for financial tracking and analysis',
        'Coordinated administrative workflows and organized systematic documentation processes',
        'Developed cost calculation systems and maintained accurate data records',
        'Collaborated with cross-functional teams to streamline operations and improve efficiency',
        'Utilized software tools for data management, reporting, and process automation'
      ],
      skills: ['Data Management', 'System Organization', 'Process Optimization', 'Team Collaboration', 'Detail-Oriented']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="experience" className="experience">
      <motion.div 
        ref={ref}
        className="experience-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Work Experience
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Professional background with transferable skills in data management and system organization
        </motion.p>

        <motion.div 
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id} 
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-period">
                    <FaCalendarAlt />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>

                <div className="experience-skills">
                  {exp.skills.map((skill, index) => (
                    <span key={index} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
