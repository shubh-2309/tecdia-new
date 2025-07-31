# Tecdia Full-Stack Setup Guide

This guide will help you set up and run both the frontend and backend of the Tecdia recruitment website.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## Quick Start

### 1. Clone and Setup Backend

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Copy environment file
cp config.env .env

# Edit .env file with your settings (optional for development)
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password

# Start backend server
npm run dev
```

The backend will run on `http://localhost:5000`

### 2. Setup Frontend

```bash
# In a new terminal, navigate to project root
cd ..

# Install frontend dependencies
npm install

# Start frontend development server
npm run dev
```

The frontend will run on `http://localhost:5173`

### 3. Test the Application

1. **Contact Form**: Go to `/contact` and submit the form
2. **Job Application**: Go to `/apply` and submit an application
3. **Backend Health**: Visit `http://localhost:5000/api/health`

## Development Mode

### Backend Features (Development)
- ✅ Contact form submissions (logs to console)
- ✅ Job applications with file uploads
- ✅ File validation (PDF, DOC, DOCX only)
- ✅ Rate limiting and security headers
- ✅ CORS enabled for localhost

### Frontend Features
- ✅ Real API integration
- ✅ Loading states and error handling
- ✅ Form validation
- ✅ File upload for resumes
- ✅ Success/error messages

## Production Setup

### 1. Backend Environment
Update `server/.env`:
```env
NODE_ENV=production
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASS=your-app-password
JWT_SECRET=your-production-secret
```

### 2. Frontend Build
```bash
npm run build
```

### 3. Deploy Backend
The backend is configured to serve the React build files in production.

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Server health check |
| `/api/contact/submit` | POST | Contact form submission |
| `/api/application/submit` | POST | Job application with file upload |
| `/api/application/status/:id` | GET | Application status (placeholder) |

## File Structure

```
tecdia-new/
├── src/                    # Frontend React app
│   ├── components/         # React components
│   ├── services/          # API service
│   └── ...
├── server/                 # Backend Express app
│   ├── routes/            # API routes
│   ├── uploads/           # File uploads
│   └── ...
└── SETUP.md              # This file
```

## Troubleshooting

### Backend Issues
- **Port 5000 in use**: Change `PORT` in `.env`
- **Email not working**: Check Gmail app password setup
- **File upload errors**: Check file size and type

### Frontend Issues
- **API connection failed**: Ensure backend is running on port 5000
- **CORS errors**: Backend CORS is configured for localhost
- **Build errors**: Check Node.js version

### Common Issues
1. **"Module not found"**: Run `npm install` in both directories
2. **"Address already in use"**: Change ports in configuration
3. **"Network error"**: Check if backend is running

## Next Steps

1. **Email Setup**: Configure Gmail app password for email notifications
2. **Database**: Add MongoDB/PostgreSQL for data persistence
3. **File Storage**: Move to cloud storage (AWS S3, Cloudinary)
4. **Authentication**: Add user login/admin panel
5. **Deployment**: Deploy to Heroku, Railway, or Vercel

## Development Commands

```bash
# Backend
cd server
npm run dev          # Development with nodemon
npm start           # Production

# Frontend
npm run dev         # Development server
npm run build       # Production build
npm run preview     # Preview production build
```

## Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
JWT_SECRET=your-secret-key
MAX_FILE_SIZE=5242880
```

### Frontend
The frontend automatically detects the environment and uses the appropriate API URL.

---

🎉 **Your full-stack Tecdia recruitment website is now ready!** 