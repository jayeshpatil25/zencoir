# Zencoir - Coir Export Company Website

A modern, responsive landing page website for Zencoir, a coir export company. Built with React and designed for easy customization.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Easy Customization**: Simple text and image replacement
- **Contact Form**: Functional contact form for customer inquiries
- **SEO Optimized**: Proper meta tags and structure for search engines
- **Fast Loading**: Optimized for performance

## Sections

1. **Header**: Navigation with smooth scrolling
2. **Hero**: Compelling headline and call-to-action
3. **About**: Company story and statistics
4. **Products**: Showcase of coir products
5. **Services**: Export services and value propositions
6. **Contact**: Contact form and company information
7. **Footer**: Links and social media

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory:

   ```bash
   cd zencoir-website
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization Guide

### Easy Text Changes

#### 1. Company Information

- **File**: `src/components/Header.js`
- **Change**: Company name "Zencoir" and tagline "Export Excellence"

#### 2. Hero Section

- **File**: `src/components/Hero.js`
- **Change**: Main headline, description, and feature text

#### 3. About Section

- **File**: `src/components/About.js`
- **Change**: Company description, statistics, and feature cards

#### 4. Products

- **File**: `src/components/Products.js`
- **Change**: Product names, descriptions, and features

#### 5. Services

- **File**: `src/components/Services.js`
- **Change**: Service titles, descriptions, and details

#### 6. Contact Information

- **File**: `src/components/Contact.js`
- **Change**: Phone numbers, email addresses, and address

#### 7. Footer

- **File**: `src/components/Footer.js`
- **Change**: Company description, contact info, and links

### Adding Images

1. Place your images in the `public` folder
2. Reference them in your components like this:
   ```jsx
   <img src="/your-image.jpg" alt="Description" />
   ```

### Color Scheme

The website uses a green color scheme (#2c5530). To change colors:

1. **Primary Color**: Search for `#2c5530` in all CSS files
2. **Secondary Color**: Search for `#1e3a21` in all CSS files
3. **Background Colors**: Look for `#f8f9fa` and other background colors

### Font Changes

1. **File**: `src/App.css`
2. **Change**: The `font-family` property in the `body` selector

## Building for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically

### Other Platforms

- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use `npm run build` and deploy the `build` folder
- **Traditional Hosting**: Upload the `build` folder contents

## File Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Products.js & Products.css
│   ├── Services.js & Services.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js
├── App.css
└── index.js
```

## Technologies Used

- **React**: Frontend framework
- **React Icons**: Icon library
- **React Scroll**: Smooth scrolling navigation
- **CSS Grid & Flexbox**: Modern layout
- **CSS Transitions**: Smooth animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Support

For customization help or questions, please refer to the component files and CSS files. Each component is well-commented and structured for easy modification.

## License

This project is created for Zencoir. Feel free to modify and use for your business needs.

---

**Zencoir** - Export Excellence in Coir Products
