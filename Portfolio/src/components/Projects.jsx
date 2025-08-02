import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Eye, ChevronUp } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Get featured projects or all projects based on state
  const displayProjects = showAllProjects ? projects : projects.filter(project => project.featured);
  
  // Toggle function for showing all projects
  const toggleShowAllProjects = () => {
    setShowAllProjects(prevState => !prevState);
    
    // Scroll back to projects section header when toggling
    if (showAllProjects) {
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="mobile-heading font-bold text-gray-900 dark:text-white mb-4">
            {showAllProjects ? "All" : "Featured"} <span className="gradient-text">Projects</span>
          </h2>
          <p className="mobile-text text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for creating 
            innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="project-card overflow-hidden group touch-target"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 lg:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 lg:gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:text-primary-600 transition-colors duration-300 touch-target"
                  >
                    <Github size={18} className="lg:w-5 lg:h-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:text-primary-600 transition-colors duration-300 touch-target"
                  >
                    <ExternalLink size={18} className="lg:w-5 lg:h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 lg:p-6">
                <h3 className="mobile-subheading font-semibold text-gray-900 dark:text-white mb-2 lg:mb-3">
                  {project.title}
                </h3>
                <p className="mobile-text text-gray-600 dark:text-gray-400 mb-3 lg:mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 lg:gap-2 mb-3 lg:mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 lg:px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 text-primary-700 dark:text-primary-300 text-xs lg:text-sm rounded-full font-medium border border-primary-200 dark:border-primary-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-2 lg:gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 lg:gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium mobile-text transition-colors duration-300 touch-target"
                  >
                    <Github size={14} className="lg:w-4 lg:h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 lg:gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium mobile-text transition-colors duration-300 touch-target"
                  >
                    <Eye size={14} className="lg:w-4 lg:h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-10 lg:mt-12"
        >
          <motion.button
            onClick={toggleShowAllProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-accent flex items-center justify-center gap-2 mx-auto touch-target"
          >
            {showAllProjects ? (
              <>
                <ChevronUp size={18} className="lg:w-5 lg:h-5" />
                <span className="mobile-text">Show Featured Projects</span>
              </>
            ) : (
              <>
                <Eye size={18} className="lg:w-5 lg:h-5" />
                <span className="mobile-text">View All Projects</span>
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 