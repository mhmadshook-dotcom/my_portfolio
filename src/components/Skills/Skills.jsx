import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt, 
  FaGithub 
} from 'react-icons/fa';
import { 
  SiVite, 
  SiPostman 
} from 'react-icons/si';
import { 
  MdGridOn, 
  MdDevices 
} from 'react-icons/md';
import { TbBoxModel } from 'react-icons/tb';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact />, color: '#61DAFB' }
      ]
    },
    {
      category: 'Styling & Layout',
      skills: [
        { name: 'Flexbox', icon: <TbBoxModel />, color: '#2563eb' },
        { name: 'CSS Grid', icon: <MdGridOn />, color: '#2563eb' },
        { name: 'Responsive Design', icon: <MdDevices />, color: '#2563eb' }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
        { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <motion.div 
        ref={ref}
        className="skills-container"
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
          Skills & Technologies
        </motion.h2>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillsData.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category"
              variants={categoryVariants}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
