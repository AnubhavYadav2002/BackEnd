# File Upload API - README

Welcome to the **File Upload API**. This API allows users to upload images, videos, and other files either locally or to Cloudinary. It also supports image size reduction and sends email notifications upon successful uploads.

## Features
- **Local File Upload**: Upload files to the local server.
- **Cloudinary Upload**: Upload images and videos to Cloudinary.
- **Image Size Reduction**: Upload and compress image size during the upload.
- **Database Integration**: Store file metadata in MongoDB.
- **Email Notification**: Send email notifications after successful uploads.

---

## Prerequisites
1. **Node.js**: Ensure Node.js is installed on your system.
2. **MongoDB**: Set up a MongoDB instance.
3. **Cloudinary**: Create a Cloudinary account and get your API credentials.
4. **Email Service**: Use a valid email service for sending notifications (e.g., Gmail, SMTP).

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd file-upload-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   PORT=3000
   MONGODB_URL=<your-mongodb-connection-string>
   CLOUD_NAME=<your-cloudinary-cloud-name>
   API_KEY=<your-cloudinary-api-key>
   API_SECRET=<your-cloudinary-api-secret>
   MAIL_HOST=<your-email-host>
   MAIL_USER=<your-email-user>
   MAIL_PASS=<your-email-password>
   ```

---

## Usage

### Start the Server
Run the following command to start the server:
```bash
npm start
```
The server will run on the port specified in your `.env` file (default is `3000`).

---

### API Endpoints

#### **1. Local File Upload**
- **Endpoint**: `/api/v1/upload/localFileUpload`
- **Method**: `POST`
- **Payload**:
  - `file`: The file to be uploaded.

#### **2. Image Upload to Cloudinary**
- **Endpoint**: `/api/v1/upload/imageUpload`
- **Method**: `POST`
- **Payload**:
  - `imageFile`: The image file to be uploaded.
  - `name`: Name of the file.
  - `tags`: Tags for the file.
  - `email`: User's email address.

#### **3. Video Upload to Cloudinary**
- **Endpoint**: `/api/v1/upload/videoUpload`
- **Method**: `POST`
- **Payload**:
  - `videoFile`: The video file to be uploaded.
  - `name`: Name of the file.
  - `tags`: Tags for the file.
  - `email`: User's email address.

#### **4. Image Size Reducer**
- **Endpoint**: `/api/v1/upload/imageSizeReducer`
- **Method**: `POST`
- **Payload**:
  - `imageFile`: The image file to be uploaded and compressed.
  - `name`: Name of the file.
  - `tags`: Tags for the file.
  - `email`: User's email address.

---

### Database Schema
The following schema is used for storing file metadata:
```javascript
{
  name: String,
  imageUrl: String,
  tags: String,
  email: String
}
```

---

### Post-save Middleware
- Sends an email notification after a new file entry is saved in the database.

---

## Dependencies
- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **Cloudinary**: Cloud-based image and video management.
- **Nodemailer**: Email sending library.
- **dotenv**: Environment variable loader.
- **express-fileupload**: Middleware for file uploads.

---

