
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB-IZAYocOcpZSswIgeqzN6n3vFIqA361w",
    authDomain: "esteras-alvarez.firebaseapp.com",
    projectId: "esteras-alvarez",
    storageBucket: "esteras-alvarez.appspot.com",
    messagingSenderId: "59706498818",
    appId: "1:59706498818:web:1724cb38a1000d94852c1b"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


// const myProducts = [
//     {
//         idCat: "Carpets",
//         title: "Carpet Tina",
//         stock: 3, size: "40 x 60 cm",
//         description: "This is a unique, colorful hand tufted rug made from 100% New Zealand wool yarn in Monks fabric, backed with fiber glue and cotton canvas. It has a playful, funky pattern and an exclusive, stylish look. Made by the talented Estera Studio.",
//         price: 2700,
//         img: "src/assets/Img/productos/alfombra1.jpg"
//     },
//     {
//         idCat: "Carpets",
//         title: "Carpet Gaming",
//         stock: 1,
//         size: "80 x 45 cm",
//         description: "Add color to your floor or wall with this unique, stylish and patterned rug! Specially made for kids play room.",
//         price: 2450, img: "src/assets/Img/productos/alfombra2.png"
//     },
//     {
//         idCat: "Carpets",
//         title: "Carpet Clara",
//         stock: 2,
//         size: "61 x 42 cm",
//         description: "Add color to your floor or wall with this unique, stylish and patterned rug! It is hand tufted by the designer Estera Studio, making it one of a kind. The rug made of 100% acrylic yarn in Monk's fabric, backed with fiber glue and cotton canvas.",
//         price: 1950, img: "src/assets/Img/productos/alfombra3.jpg"
//     },
//     {
//         idCat: "Carpets",
//         title: "Carpet Simona",
//         stock: 3,
//         size: "62 x 50 cm",
//         description: "Estera Studio's rug Simona has a unique, rounded shape in two different colors. It is the perfect decoration to make your living room feel more personal and unique. This product is hand tufted and made from 100% acrylic yarn in Monks fabric, backed with fiber glue and cotton canvas.",
//         price: 2050,
//         img: "src/assets/Img/productos/alfombra4.jpg"
//     },
//     {
//         idCat: "Bananas",
//         title: "Banana",
//         stock: 4, size: "36 x 10 cm",
//         description: "Estera Studio's yellow and black mini banana rug made with the tufting technique. Ready to be hung on the wall to add a unique decorative touch, or to be placed on your desk, bedside table or any other surface that suits your preference. A colorful and playful design! Handmade with 100% acrylic yarn in Monk's fabric, baked with fiber glue and acrylic felt. A  product that is unique and may have small imperfections. In addition, there may be variations between individual products, which contributes to their uniqueness.",
//         price: 350,
//         img: "src/assets/Img/productos/banana.png"
//     },
//     {
//         idCat: "Bananas",
//         title: "Pink Banana",
//         stock: 2,
//         size: "36 x 10 cm",
//         description: "Estera Studios pink and black mini banana rug made with the tufting technique. Ready to be hung on the wall to add a unique decorative touch, or to be placed on your desk, bedside table or any other surface that suits your preference. A colorful and playful design! Handmade with 100% acrylic yarn in Monk's fabric, baked with fiber glue and acrylic felt. A  product that is unique and may have small imperfections. In addition, there may be variations between individual products, which contributes to their uniqueness.",
//         price: 350,
//         img: "src/assets/Img/productos/bananarosa.png"
//     },
//     {
//         idCat: "Coasters",
//         title: "Flower Power",
//         stock: 5,
//         size: "17 cm diameter",
//         description: "A unique coaster in the shape of a flower by the designer Estera Studio. This design is made with 100% acrylic yarn in Monk's fabric, backed with fiber glue and acrylic felt. Perfect for adding more color and personality to your home, while avoiding marks on your table.",
//         price: 200,
//         img: "src/assets/Img/productos/coasterFlores.png"
//     },
//     {
//         idCat: "Coasters",
//         title: "Checkered",
//         stock: 5,
//         size: "15 cm diameter",
//         description: "Scandinavian designer Estera Studio's multi-colored, checkered coasters. Perfect for avoiding marks on your table, while making your home more unique, fun and stylish. This design is made with 100% acrylic yarn in Monk's fabric, backed with fiber glue and acrylic felt. ",
//         price: 200,
//         img: "src/assets/Img/productos/coastercuadrados.jpg"
//     },
//     {
//         idCat: "Coasters",
//         title: "Spiral",
//         stock: 6,
//         size: "17cm diameter",
//         description: "Set your cups and glasses on this colorful, unique coaster with a spiral pattern. This rug is made from 100% acrylic yarn in Monk's fabric, backed with fiber glue and acrylic felt. Designed by the talented Estera Studio. ",
//         price: 250,
//         img: "src/assets/Img/productos/coasterspiral.jpg"
//     },
//     {
//         idCat: "Mushrooms",
//         title: "Funghi (Green)",
//         stock: 4,
//         size: "39 x 27 cm",
//         description: "The hand-tufted, colorful sponge rug from Estera Studio is made with a mix of different yarns (wool, acrylic and cotton). Each product is unique and covered with fiber glue and acrylic felt. Ready to hang and adorn your wall!",
//         price: 450,
//         img: "src/assets/Img/productos/mushroomAzu.png"
//     },
//     {
//         idCat: "Mushrooms",
//         title: "Parasol (Beige)",
//         stock: 5,
//         size: "34 X 31 cm",
//         description: "The hand-tufted, colorful sponge rug from Estera Studio is made with a mix of different yarns (wool, acrylic and cotton). Each product is unique and covered with fiber glue and acrylic felt. Ready to hang and adorn your wall!",
//         price: 450,
//         img: "src/assets/Img/productos/mushroommarron.jpg"
//     },
//     {
//         idCat: "Mushrooms",
//         title: "Oyster (Pink)",
//         stock: 2,
//         size: "31 x 30 cm",
//         description: "The hand-tufted, colorful sponge rug from Estera Studio is made with a mix of different yarns (wool, acrylic and cotton). Each product is unique and covered with fiber glue and acrylic felt. Ready to hang and adorn your wall!",
//         price: 450,
//         img: "src/assets/Img/productos/mushroompink.jpg"
//     },
// ];

// import { collection, doc, writeBatch } from "firebase/firestore"

// const uploadProducts = async () => {
//     const batch = writeBatch(db)
//     const productRef = collection(db, "products")

//     myProducts.forEach((product) => {
//         const newDoc = doc(productRef)
//         batch.set(newDoc, product)
//     })

//     try {
//         await batch.commit();
//         console.log("prod upload successfully")
//     } catch (error) {
//         console.log("error", error)
//     }
// }

// uploadProducts()
