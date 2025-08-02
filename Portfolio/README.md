# Personal Portfolio Website

A modern, responsive personal portfolio built with Vite, React, and Tailwind CSS. Features smooth animations, professional design, and mobile-first responsive layout.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient accents and smooth animations
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Components**: Hover effects, smooth scrolling, and interactive elements
- **Contact Form**: Functional contact form with validation and success feedback
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📋 Sections

1. **Hero Section**: Introduction with profile image, CTA buttons, and social links
2. **About Section**: Personal introduction with tech stack and key features
3. **Projects Section**: Featured projects with images, descriptions, and links
4. **Experience Section**: Timeline-style work experience with achievements
5. **Skills Section**: Animated progress bars for technical skills
6. **Contact Section**: Contact form and contact information
7. **Footer**: Social links and additional information

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icons
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/data/projects.js` - Your projects
- `src/data/experience.js` - Your work experience
- `src/data/skills.js` - Your technical skills
- `src/components/Hero.jsx` - Your name, title, and social links
- `src/components/Contact.jsx` - Your contact information

### Styling
- Colors: Update the color palette in `tailwind.config.js`
- Fonts: Change the font family in `src/index.css`
- Animations: Modify animation settings in component files

### Images
- Replace the profile image in the Hero component
- Update project images in the projects data
- Add your own images to the `public` folder

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/portfolio"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Build and deploy: `npm run build && npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

Made with ❤️ using React and Tailwind CSS
