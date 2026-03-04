import { motion } from 'framer-motion';
import { Code, Palette, Zap, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Creating visually appealing and user-friendly interfaces"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Building robust applications with security in mind"
    }
  ];

  const techStack = [
    "React", "Node.js", "Spring Boot", "Java", "MongoDB", "MySQL",
    "Express", "JavaScript", "Git", "CSS","HTML"
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="mobile-heading font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mobile-text text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate web developer focused on building clean, responsive, and user-friendly web applications.
            With hands-on experience in real-world projects and internships,
            I specialize in crafting modern frontends and robust backend systems using the MERN stack.
            I enjoy solving real problems through code, learning new technologies, and continuously improving my skills to deliver high-quality digital experiences.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16 px-4 sm:px-0">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card-gradient p-6 lg:p-8 text-center touch-target h-full flex flex-col"
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mobile-subheading font-semibold text-gray-900 dark:text-white mb-2 lg:mb-3">
                {feature.title}
              </h3>
              <p className="mobile-text text-gray-600 dark:text-gray-400 leading-relaxed mt-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center px-4 sm:px-0"
        >
          <h3 className="mobile-subheading font-semibold text-gray-900 dark:text-white mb-6 lg:mb-8">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 text-primary-700 dark:text-primary-300 rounded-full font-medium border border-primary-200 dark:border-primary-700 mobile-text touch-target"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 