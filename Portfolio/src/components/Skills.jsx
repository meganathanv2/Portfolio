import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  const skillCategories = [
    { title: "Frontend Development", skills: skills.frontend },
    { title: "Backend Development", skills: skills.backend },
    { title: "Tools & Platforms", skills: skills.tools },
    { title: "Other Skills", skills: skills.other }
  ];

  return (
    <section id="skills" className="section-padding section-gradient">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="mobile-heading font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="mobile-text text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed">
            My technical expertise spans across various technologies and tools, 
            with a focus on modern web development practices and best industry standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="card-gradient p-6 lg:p-8"
            >
              <h3 className="mobile-subheading font-semibold text-gray-900 dark:text-white mb-6 lg:mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid gap-3 lg:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="skill-card touch-target"
                  >
                    <div className="flex items-start gap-3 lg:gap-4">
                      <div className="flex-shrink-0">
                        <span className="text-2xl lg:text-3xl">{skill.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1 lg:mb-2 mobile-text">
                          {skill.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 text-center"
        >
          <h3 className="mobile-subheading font-semibold text-gray-900 dark:text-white mb-6 lg:mb-8">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              "Responsive Design", "Performance Optimization", "SEO", "Accessibility",
              "Version Control", "Agile/Scrum", "Problem Solving", "Communication"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-3 lg:p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-gray-500 touch-target"
              >
                <span className="font-medium text-gray-900 dark:text-white mobile-text">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 