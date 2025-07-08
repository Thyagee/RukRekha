// const { initializeApp } = require('firebase/app');
// const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');
// const fs = require('fs');

// // ✅ Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyBKJdtJ7Zs57af0cyv-cF6thnBS_4wng3o",
//   authDomain: "grukrekha-45ad3.firebaseapp.com",
//   projectId: "rukrekha-45ad3",
//   storageBucket: "rukrekha-45ad3.firebasestorage.app",
//   messagingSenderId: "573455531940",
//   appId: "1:573455531940:web:0a4d02e98dc08b4f664b31",
//   measurementId: "G-8LD20STWPC"
// };

// // ✅ Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// // ✅ Upload file
// const file = fs.readFileSync('./tree_photo.png');
// const storageRef = ref(storage, 'tree_photos/tree_photo.png');

// uploadBytes(storageRef, file).then((snapshot) => {
//     console.log('✅ File uploaded successfully!');
//     return getDownloadURL(snapshot.ref);
// }).then((url) => {
//     console.log('🌍 File available at:', url);
// }).catch((error) => {
//     console.error('❌ Upload failed:', error);
// });



// const admin = require('firebase-admin');
// const fs = require('fs');
// const path = require('path');

// // ✅ Initialize Firebase Admin with the service account
// const serviceAccount = require('./serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   storageBucket: "rukrekha-45ad3.firebasestorage.app"  // ✅ Corrected bucket name
// });

// // ✅ Reference the storage bucket
// const bucket = admin.storage().bucket();

// // ✅ File to upload (local file)
// const filePath = './tree_photo.png';  // File should be in the same folder
// const destination = 'tree_photos/tree_photo.png'; // Storage path

// // ✅ Upload the file to Firebase Storage
// bucket.upload(filePath, {
//   destination: destination
// }).then(() => {
//   console.log('✅ File uploaded successfully!');

//   // ✅ Get a public download URL
//   const file = bucket.file(destination);
//   return file.getSignedUrl({
//     action: 'read',
//     expires: '03-01-2030',  // Valid until 2030
//   });
// }).then((url) => {
//   console.log('🌍 Public URL:', url[0]);
// }).catch((error) => {
//   console.error('❌ Error uploading file:', error);
// });




// // ✅ Import modules
// import admin from 'firebase-admin';
// import { readFile } from 'fs/promises';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import dotenv from 'dotenv';

// dotenv.config();

// // ✅ Resolve __dirname in ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ✅ Import Firebase credentials
// import serviceAccount from './serviceAccountKey.json' assert { type: 'json' };

// // ✅ Initialize Firebase Admin
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   storageBucket: process.env.FIREBASE_BUCKET // Keep bucket name in .env file
// });

// // ✅ Reference the storage bucket
// const bucket = admin.storage().bucket();

// // ✅ Upload File Function
// async function uploadFile() {
//   const localFile = path.join(__dirname, 'tree_photo.png');
//   const destination = 'tree/tree_photo.png';

//   try {
//     const fileData = await readFile(localFile);
//     const file = bucket.file(destination);

//     await file.save(fileData, {
//       metadata: {
//         cacheControl: 'public, max-age=31536000',
//       },
//     });

//     console.log('✅ File uploaded successfully!');

//     const [url] = await file.getSignedUrl({
//       action: 'read',
//       expires: '03-01-2030',
//     });

//     console.log('🌍 Public URL:', url);
//     return url;
//   } catch (err) {
//     console.error('❌ Error uploading file:', err);
//   }
// }

// // ✅ Run Upload
// uploadFile();
