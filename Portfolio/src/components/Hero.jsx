import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

// Custom LeetCode icon component
const LeetCode = ({ size = 24, ...props }) => (
  <img
    src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png"
    width={size}
    height={size}
    alt="LeetCode"
    {...props}
  />
);

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/meganathanv2', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/meganathan-v-2b210725a/', label: 'LinkedIn' },
    { icon: LeetCode, href: 'https://leetcode.com/u/Meganathanv2005/', label: 'LeetCode' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient pt-16">
      <div className="container-custom px-4 py-8 sm:section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">MEGANATHAN V</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Full Stack Developer
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                I craft modern, responsive web applications using the MERN stack, blending clean UI design with robust backend architecture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://drive.google.com/drive/folders/1HZ7n2Kp70WGcGnEs4MfPvwBlRYLEbHUo?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto touch-target"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                <span className="mobile-text">Download CV</span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-accent flex items-center justify-center gap-2 w-full sm:w-auto touch-target"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
                <span className="mobile-text">Contact Me</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 justify-center lg:justify-start"
            >
              <span className="mobile-text text-gray-600 dark:text-gray-400 font-medium">Follow me:</span>
              <div className="flex gap-3 lg:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 border border-gray-200 dark:border-gray-600 flex items-center justify-center touch-target"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary-400 via-accent-400 to-primary-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-2">
                  <img
                    src="https://res.cloudinary.com/dr6n03ecb/image/upload/v1755249559/My_Photo_nmsjox.jpg"
                    alt="Meganathan V"
                    className="w-full h-full rounded-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
              
              {/* Floating Elements - Hidden on mobile for better UX */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg shadow-lg p-3 floating-element hidden sm:block"
              >
                <div className="text-sm font-medium">React</div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-lg shadow-lg p-3 floating-element hidden sm:block"
              >
                <div className="text-sm font-medium">Node.js</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 