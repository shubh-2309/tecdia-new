const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024 // 5MB default
  },
  fileFilter: (req, file, cb) => {
    // Allow only PDF, DOC, DOCX files
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
    }
  }
});

// Create transporter for email
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Job application submission
router.post('/submit', upload.single('resume'), async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      role,
      department,
      experience,
      coverLetter,
      additionalInfo
    } = req.body;

    const resumeFile = req.file;

    // Basic validation
    if (!firstName || !lastName || !email || !role) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'First name, last name, email, and role are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format',
        message: 'Please provide a valid email address'
      });
    }

        // If email is not configured or using placeholder values, return success (for development)
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || 
        process.env.EMAIL_USER === 'your-email@gmail.com' || 
        process.env.EMAIL_PASS === 'your-app-password') {
      console.log('Job application submission (email not configured):', {
        firstName,
        lastName,
        email,
        phone,
        role,
        department,
        experience,
        resumeFile: resumeFile ? resumeFile.filename : 'No file uploaded',
        coverLetter,
        additionalInfo
      });

      return res.json({
        success: true,
        message: 'Application submitted successfully (email not configured)',
        applicationId: Date.now().toString()
      });
    }

    // Create email content
    const emailContent = `
      New Job Application Submission from Tecdia Website
      
      Applicant Details:
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      
      Position Details:
      Role: ${role}
      Department: ${department || 'Not specified'}
      Experience: ${experience || 'Not specified'}
      
      Cover Letter:
      ${coverLetter || 'Not provided'}
      
      Additional Information:
      ${additionalInfo || 'Not provided'}
      
      Resume: ${resumeFile ? resumeFile.filename : 'No file uploaded'}
      
      Submitted at: ${new Date().toLocaleString()}
    `;

    // Send email
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Job Application - ${role} - ${firstName} ${lastName}`,
      text: emailContent,
      html: `
        <h2>New Job Application Submission</h2>
        
        <h3>Applicant Details:</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        
        <h3>Position Details:</h3>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Department:</strong> ${department || 'Not specified'}</p>
        <p><strong>Experience:</strong> ${experience || 'Not specified'}</p>
        
        <h3>Cover Letter:</h3>
        <p>${coverLetter ? coverLetter.replace(/\n/g, '<br>') : 'Not provided'}</p>
        
        <h3>Additional Information:</h3>
        <p>${additionalInfo ? additionalInfo.replace(/\n/g, '<br>') : 'Not provided'}</p>
        
        <p><strong>Resume:</strong> ${resumeFile ? resumeFile.filename : 'No file uploaded'}</p>
        
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `
    };

    // Attach resume if uploaded
    if (resumeFile) {
      mailOptions.attachments = [{
        filename: resumeFile.originalname,
        path: resumeFile.path
      }];
    }

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Application submitted successfully',
      applicationId: Date.now().toString()
    });

  } catch (error) {
    console.error('Application submission error:', error);
    
    // Clean up uploaded file if there was an error
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }

    res.status(500).json({
      error: 'Failed to submit application',
      message: 'Please try again later'
    });
  }
});

// Get application status (placeholder for future implementation)
router.get('/status/:applicationId', (req, res) => {
  const { applicationId } = req.params;
  
  // This would typically query a database
  // For now, return a mock response
  res.json({
    applicationId,
    status: 'received',
    message: 'Application received and under review',
    submittedAt: new Date().toISOString()
  });
});

module.exports = router; 