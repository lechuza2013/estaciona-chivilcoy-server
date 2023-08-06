// CONEXIÓN A LA DATABASE
import admin from "firebase-admin";
// Mercadopago
import mercadopago from "mercadopago";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://estaciona-chivilcoy-37816-default-rtdb.firebaseio.com",
});

const firestoreDB = admin.firestore();
const realtimeDB = admin.database();

export { firestoreDB, realtimeDB };

mercadopago.configure({
  access_token:
    "TEST-2039711323530302-072700-102a314cf2e5d98a9a91f5c25c49f643-1102603889",
});

export async function getMerchantOrder(id) {
  console.log("Soy la function getMerchantOrder(id)");
  const res = await mercadopago.merchant_orders.get(id);

  return res.body.order_status;
}
