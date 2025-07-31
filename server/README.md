# Tecdia Backend

A Node.js/Express backend for the Tecdia recruitment website.

## Features

- **Contact Form API**: Handle contact form submissions with email notifications
- **Job Application API**: Handle job applications with file uploads and email notifications
- **File Upload**: Resume upload functionality with validation
- **Email Integration**: Nodemailer integration for sending notifications
- **Security**: Rate limiting, CORS, and Helmet for security
- **Production Ready**: Configured for both development and production

## Setup

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Environment Configuration
Copy `config.env` to `.env` and update the values:

```bash
cp config.env .env
```

Update the `.env` file with your email credentials:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (for contact form)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Security
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads
```

### 3. Email Setup (Optional)
For email functionality, you'll need to:

1. **Gmail Setup**:
   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password in `EMAIL_PASS`

2. **Alternative Email Services**:
   - Update `EMAIL_HOST` and `EMAIL_PORT` for other providers
   - Update authentication as needed

### 4. Run the Server

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

## API Endpoints

### Contact Form
- **POST** `/api/contact/submit`
  - Body: `{ name, email, phone?, message }`
  - Sends email notification

### Job Application
- **POST** `/api/application/submit`
  - Body: `{ firstName, lastName, email, phone?, position, department?, experience?, coverLetter?, additionalInfo? }`
  - File: `resume` (PDF, DOC, DOCX)
  - Sends email with resume attachment

### Health Check
- **GET** `/api/health`
  - Returns server status

### Application Status
- **GET** `/api/application/status/:applicationId`
  - Returns application status (placeholder)

## File Structure

```
server/
├── server.js          # Main server file
├── routes/
│   ├── contact.js     # Contact form routes
│   └── application.js # Job application routes
├── uploads/           # Resume uploads (auto-created)
├── package.json
├── config.env         # Environment template
└── README.md
```

## Security Features

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CORS**: Configured for development and production
- **Helmet**: Security headers
- **File Validation**: Only allows PDF, DOC, DOCX files
- **File Size Limits**: 5MB default limit

## Development vs Production

### Development
- Email not required (logs to console)
- CORS allows localhost
- Detailed error messages

### Production
- Email configuration required
- CORS restricted to your domain
- Generic error messages
- Serves React build files

## Next Steps

1. **Database Integration**: Add MongoDB/PostgreSQL for data persistence
2. **Authentication**: Add JWT-based user authentication
3. **File Storage**: Move to cloud storage (AWS S3, Cloudinary)
4. **Email Templates**: Create professional email templates
5. **Application Tracking**: Add application status tracking
6. **Admin Panel**: Create admin interface for managing applications

## Deployment

The backend is configured to serve the React frontend in production. Build your React app and the backend will serve it automatically.

For deployment platforms:
- **Heroku**: Add `NODE_ENV=production` and configure environment variables
- **Vercel**: Configure as Node.js function
- **Railway**: Direct deployment with environment variables 