
// Multi-language translations
const translations = {
    en: { heroTitle:"24/7 Super Fast Delivery Across Russia", heroText:"Packages, food, documents & express delivery — always on time.", heroBtn:"Send Package" },
    ru: { heroTitle:"Доставка 24/7 по всей России", heroText:"Посылки, еда, документы и экспресс-доставка — всегда вовремя.", heroBtn:"Отправить посылку" },
    es: { heroTitle:"Entrega súper rápida 24/7 en Rusia", heroText:"Paquetes, comida, documentos y entrega exprés, siempre a tiempo.", heroBtn:"Enviar paquete" },
    fr: { heroTitle:"Livraison ultra rapide 24/7 en Russie", heroText:"Colis, nourriture, documents et livraison express — toujours à l’heure.", heroBtn:"Envoyer un colis" }
};// Example: creating an order in Firestore (used in order.html)
function createOrder(userId, pickup, dropoff, details){
    const trackingId="OD"+Date.now();
    db.collection("orders").add({
        userId: userId,
        pickup: pickup,
        dropoff: dropoff,
        details: details,
        trackingId: trackingId,
        status: "Pending",
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(()=>{
        alert("Order created! Your Tracking ID: "+trackingId);
    }).catch(err=>alert(err.message));
}

