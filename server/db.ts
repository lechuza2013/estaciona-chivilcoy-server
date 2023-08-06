// CONEXIÓN A LA DATABASE
import admin from "firebase-admin";
// Mercadopago
import mercadopago from "mercadopago";

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(SERVICE_ACCOUNT)),
  databaseURL: FIREBASE_DB_URL,
});

const firestoreDB = admin.firestore();
const realtimeDB = admin.database();

export { firestoreDB, realtimeDB };

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

export async function getMerchantOrder(id) {
  console.log("Soy la function getMerchantOrder(id)");
  const res = await mercadopago.merchant_orders.get(id);

  return res.body.order_status;
}
