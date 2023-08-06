// CONEXIÓN A LA DATABASE
import admin from "firebase-admin";
import mercadopago from "mercadopago";

admin.initializeApp({
  credential: admin.credential.cert(process.env.SERVICE_ACCCOUNT),
  databaseURL: process.env.FIREBASE_DB_URL,
});

const firestoreDB = admin.firestore();
const realtimeDB = admin.database();

/* mercadopago.configure({
  access_token: process.env.MP_TOKEN,
});
 */
export async function getMerchantOrder(id) {
  const res = await mercadopago.merchant_orders.get(id);
  console.log(res.body);
}

export { firestoreDB, realtimeDB };
