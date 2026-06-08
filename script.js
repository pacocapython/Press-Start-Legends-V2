// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ... restante do código do config, do db e do addDoc que te mandei ...
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVQbtbC7MuGH0IYDAsW9Td0WBHW_0WAyI",
  authDomain: "press-start-legends.firebaseapp.com",
  projectId: "press-start-legends",
  storageBucket: "press-start-legends.firebasestorage.app",
  messagingSenderId: "668507346522",
  appId: "1:668507346522:web:ab19bd652f25d651ebea63",
  measurementId: "G-CF7VMF72V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Garante que esta linha existe!
// ==========================================
// FUNÇÃO A: ENVIAR COMENTÁRIO PARA O FIRESTORE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formComentario');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); 

            const nome = document.getElementById('nomeUsuario').value;
            const texto = document.getElementById('textoComentario').value;

            try {
                // Criamos ou acedemos à coleção 'comentarios' e adicionamos o documento lá dentro
                await addDoc(collection(db, "comentarios"), {
                    usuario: nome,
                    comentario: texto,
                    dataEnvio: new Date().toLocaleDateString("pt-BR")
                });

                alert("🎮 Comentário gravado no Cloud Firestore!");
                form.reset(); // Limpa o formulário

            } catch (error) {
                console.error("Erro ao enviar para o Firestore:", error);
            }
        });
    }
});
