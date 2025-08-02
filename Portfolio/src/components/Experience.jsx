import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="mobile-heading font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mobile-text text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed">
            My professional journey in software development, showcasing my growth and 
            contributions to various projects and teams.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>

          <div className="space-y-8 lg:space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row gap-6 lg:gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-6 w-3 h-3 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="experience-card p-6 lg:p-8 ml-12 sm:ml-16 lg:ml-0 touch-target"
                  >
                    {/* Period */}
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                      <span className="mobile-text text-primary-600 dark:text-primary-400 font-medium">
                        {exp.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mobile-subheading font-semibold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>

                    {/* Company */}
                    <div className="flex items-center gap-2 mb-4">
                      <Building className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      <span className="mobile-text text-gray-600 dark:text-gray-400 font-medium">
                        {exp.company}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mobile-text text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium border border-primary-200 dark:border-primary-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 w-full">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="mobile-text text-gray-600 dark:text-gray-400 leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 