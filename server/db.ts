// CONEXIÓN A LA DATABASE
import admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.SERVICE_ACCOUNT)),
  databaseURL: process.env.FIREBASE_DB_URL,
});

const firestoreDB = admin.firestore();
const realtimeDB = admin.database();
const authDB = admin.auth();

export { firestoreDB, realtimeDB, authDB };
