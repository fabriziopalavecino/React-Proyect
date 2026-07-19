import { getFirestore, 
    collection, 
    getDocs, 
    query, 
    where, 
    doc, 
    getDoc,
    addDoc 
} from "firebase/firestore";
import { app } from "./config";
import toast from "react-hot-toast";

const db = getFirestore(app)

export async function getCollection (collectionName) {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = []

        querySnapshot.forEach((doc) => {
            
            data.push({...doc.data(), id: doc.id})
        })  
        
            return data
        }   catch (error) {
        console.error("Error al obtener la colección:", error);
        }
}

export async function getCategories() {
    const querySnapshot = await getDocs(collection(db, "categories"));

    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}

export const getProductsByCategory = async (category) => {

    const q = query(
        collection(db, "products"),
        where("category", "==", category)
    );

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}


export const getProductDetail = async (id, set) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    set({...docSnap.data(), id: docSnap.id})
    } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    }
}

export const createOrder = async (order) => {
    const docRef = await addDoc(collection(db, "orders"), order);
    toast.success(`¡Muchas gracias por su compra! Tu nro. de compra es: ${docRef.id}`);
}