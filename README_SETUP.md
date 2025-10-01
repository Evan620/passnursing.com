# NursingExamCoach.com - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nursingguide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your actual values:
   ```env
   # Contact Information
   REACT_APP_WHATSAPP_NUMBER=+14802680707
   REACT_APP_CONTACT_PHONE=+14802680707
   REACT_APP_CONTACT_EMAIL=acenursingexampro@gmail.com
   
   # Social Media Links (Update with your actual URLs)
   REACT_APP_FACEBOOK_URL=https://facebook.com/yourpage
   REACT_APP_INSTAGRAM_URL=https://instagram.com/yourpage
   REACT_APP_LINKEDIN_URL=https://linkedin.com/company/yourpage
   
   # Form Submission (EmailJS Configuration)
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm start
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📧 Setting Up Form Submissions (EmailJS)

To enable actual form submissions instead of simulated ones:

1. **Create an EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account

2. **Set up Email Service**
   - Add an email service (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create Email Template**
   - Create a new email template
   - Use these template variables:
     - `{{from_name}}` - User's name
     - `{{from_email}}` - User's email
     - `{{subject}}` - Subject line
     - `{{message}}` - Message content
   - Note your Template ID

4. **Get Public Key**
   - Go to Account > API Keys
   - Copy your Public Key

5. **Update Environment Variables**
   - Add the IDs to your `.env.local` file

6. **Install EmailJS Package**
   ```bash
   npm install @emailjs/browser
   ```

7. **Update Form Components**
   - Update `src/components/ContactFormPopup.js`
   - Update `src/pages/RequestService.js`
   - Replace the TODO comments with actual EmailJS implementation

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: '#007BFF',    // Blue
  secondary: '#28A745',  // Green
  accent: '#FF6F61',     // Coral
  // ... add more colors
}
```

### Logo
Replace the logo file:
- Location: `public/nursing-exams-coach-high-resolution-logo-transparent.png`
- Recommended size: 512x512px or larger
- Format: PNG with transparent background

### Contact Information
All contact info is centralized in `src/config/constants.js`

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🚀 Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Add environment variables in Netlify dashboard

### Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Create React App
4. Add environment variables in Vercel dashboard

### Traditional Hosting
1. Run `npm run build`
2. Upload the `build` folder contents to your web server
3. Configure server for single-page application routing

## 🔧 Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (one-way operation)

## 📝 Important Notes

### SEO
- Update `public/sitemap.xml` with your actual domain
- Update `public/robots.txt` if needed
- Meta tags are in `public/index.html`

### Images
- Optimize images before adding them to `public/successimages/`
- Use WebP format when possible
- Recommended tools: TinyPNG, ImageOptim, Squoosh

### Performance
- Code splitting is enabled by default
- Images use lazy loading
- Consider adding a CDN for static assets

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process using port 3000
npx kill-port 3000
# Or use a different port
PORT=3001 npm start
```

### Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
# Clear cache and rebuild
npm run build -- --reset-cache
```

## 📞 Support

For issues or questions:
- Email: acenursingexampro@gmail.com
- Phone: +1 480-268-0707

## 📄 License

© 2025 Nursing Exams Coach – All Rights Reserved
