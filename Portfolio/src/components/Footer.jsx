import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/meganathanv2', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/meganathan-v-2b210725a/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:meganathanm056@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 lg:py-16">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 text-center sm:text-left"
          >
            <h3 className="mobile-subheading font-bold mb-4">
              Meganathan V
            </h3>
            <p className="mobile-text text-gray-300 mb-6 leading-relaxed">
              Full Stack Developer specializing in MERN stack development. 
              Passionate about building clean, efficient, and user-friendly web applications.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 lg:gap-4 justify-center sm:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-600 transition-all duration-300 touch-target"
                >
                  <social.icon size={18} className="lg:w-5 lg:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h4 className="mobile-text font-semibold mb-4 lg:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="mobile-text text-gray-300 hover:text-white transition-colors duration-300 touch-target"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h4 className="mobile-text font-semibold mb-4 lg:mb-6">
              Contact
            </h4>
            <div className="space-y-2 lg:space-y-3">
              <motion.a
                href="mailto:meganathanm056@gmail.com"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="mobile-text text-gray-300 hover:text-white transition-colors duration-300 block touch-target"
              >
               meganathanm056@gmail.com
              </motion.a>
              <motion.a
                href="tel:+918438970203"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="mobile-text text-gray-300 hover:text-white transition-colors duration-300 block touch-target"
              >
                +91 8438970203
              </motion.a>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="mobile-text text-gray-300"
              >
                Coimbatore, India
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 lg:mt-12 pt-8 lg:pt-12 text-center"
        >
          <p className="mobile-text text-gray-400">
            © {new Date().getFullYear()} Meganathan V. All rights reserved.
          </p>
          <p className="mobile-text text-gray-500 mt-2">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 