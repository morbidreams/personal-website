# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a clean design with smooth animations, working contact form, and mobile-first responsive layout.

## 🚀 Technologies Used

### Core Framework
- **Next.js 15** - React framework with App Router for modern web development
- **TypeScript** - Type-safe JavaScript for better development experience
- **React 18** - Latest React with Server Components support

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Lucide React** - Beautiful, customizable SVG icons
- **CSS Animations** - Custom animations for smooth user interactions

### Functionality
- **Resend** - Modern email API for contact form functionality
- **Google Maps Embed** - Interactive map showing location
- **Server Actions** - Next.js server-side form handling

### Development Tools
- **ESLint** - Code linting for consistent code quality
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic CSS vendor prefixing

## ✨ Features

- **Responsive Design** - Mobile-first approach that works on all devices
- **Fixed Sidebar Navigation** - Easy navigation with smooth scrolling
- **About Section** - Personal information with profile image
- **Skills Section** - Animated progress bars showing technical skills
- **Resume Timeline** - Professional experience and education history
- **Portfolio Gallery** - Showcase of projects with hover effects
- **Working Contact Form** - Sends emails directly to your inbox
- **Interactive Map** - Google Maps integration showing your location
- **Smooth Animations** - CSS animations and transitions throughout
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance Optimized** - Next.js Image optimization and lazy loading

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed on your machine
- A Resend account for email functionality (free tier available)

### 1. Clone the Repository
\`\`\`bash
git clone <your-repo-url>
cd portfolio
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

### 3. Environment Variables
Create a \`.env.local\` file in the root directory:

\`\`\`env
RESEND_API_KEY=your_resend_api_key_here
\`\`\`

To get your Resend API key:
1. Sign up at [resend.com](https://resend.com)
2. Go to your dashboard
3. Create a new API key
4. Copy and paste it into your \`.env.local\` file

### 4. Run the Development Server
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

\`\`\`
portfolio/
├── app/
│   ├── actions/
│   │   └── contact.ts          # Server action for contact form
│   ├── portfolio-details/
│   │   └── page.tsx           # Portfolio detail page
│   ├── globals.css            # Global styles and Tailwind imports
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Home page
├── components/
│   ├── about.tsx              # About section component
│   ├── contact.tsx            # Contact form and info
│   ├── footer.tsx             # Footer component
│   ├── header.tsx             # Sidebar navigation
│   ├── portfolio.tsx          # Portfolio gallery
│   ├── resume.tsx             # Resume timeline
│   └── skills.tsx             # Skills with progress bars
├── public/                    # Static assets
├── .env.local                 # Environment variables (create this)
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies and scripts
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
\`\`\`

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **components/header.tsx** - Name, profile image, social links
2. **components/about.tsx** - Personal details, bio, contact info
3. **components/skills.tsx** - Your technical skills and percentages
4. **components/resume.tsx** - Education and work experience
5. **components/contact.tsx** - Contact information and location

### Portfolio Projects
Edit **components/portfolio.tsx** to add your projects:

\`\`\`typescript
const portfolioItems = [
  {
    id: 1,
    category: "web",
    title: "Your Project Name",
    image: "/path/to/your/image.jpg"
  },
  // Add more projects...
]
\`\`\`

### Styling
- Colors: Edit \`tailwind.config.ts\` to change the color scheme
- Fonts: Update \`app/globals.css\` to change typography
- Layout: Modify component files for layout changes

### Contact Form
The contact form sends emails to the address specified in \`app/actions/contact.ts\`. Change the \`to\` field to your email address.

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your \`RESEND_API_KEY\` environment variable in Vercel dashboard
4. Deploy automatically

### Other Platforms
This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📧 Contact Form Setup

The contact form uses Resend for email delivery. Here's how it works:

1. User fills out the contact form
2. Form data is sent to a Next.js Server Action
3. Server Action uses Resend API to send email
4. Email is delivered to your inbox
5. User sees success/error message

### Email Template
The email includes:
- Sender's name and email
- Subject line
- Full message content
- Formatted HTML for better readability

## 🔧 Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint for code quality

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Visit [Resend documentation](https://resend.com/docs)
4. Open an issue in this repository

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Icons provided by [Lucide React](https://lucide.dev)
- Email service by [Resend](https://resend.com)
- Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com)

---

**Made with ❤️ using Next.js 15 and modern web technologies**
