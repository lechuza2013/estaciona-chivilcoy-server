// CONEXIÓN A LA DATABASE
import admin from "firebase-admin";

export const mercadopago = require('mercadopago');
admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.SERVICE_ACCOUNT)),
  databaseURL: process.env.FIREBASE_DB_URL,
});

const firestoreDB = admin.firestore();
const realtimeDB = admin.database();

mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});
 
export async function getMerchantOrder(id) {
  console.log("Soy la function getMerchantOrder(id)");
  const res = await mercadopago.merchant_orders.get(id);
  console.log(res.body);
}

export { firestoreDB, realtimeDB };
