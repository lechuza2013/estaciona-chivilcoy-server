// CONEXIÓN A LA DATABASE
import admin from "firebase-admin";
import * as serviceAccount from "../key.json";
// Mercadopago

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://estaciona-chivilcoy-37816-default-rtdb.firebaseio.com",
});

const firestoreDB = admin.firestore();
const realtimeDB = admin.database();
const authDB = admin.auth();

export { firestoreDB, realtimeDB, authDB };
