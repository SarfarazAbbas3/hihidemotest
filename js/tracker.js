// =============================================
// Hihi Digitizing - User Tracker Script
// Yeh script Firebase mein har page visit, click, aur time store karta hai
// Is script ko SARI website pages mein add karen (index.html, about.html, service.html etc)
// =============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// =============================================
// APNA FIREBASE CONFIG YAHAN PASTE KAREN
// =============================================
const firebaseConfig = {
    apiKey: "AIzaSyDaML2erecJbTinMYNsiIL9kcPvJQoPGw0",
    authDomain: "hihidigitizingservice.firebaseapp.com",
    projectId: "hihidigitizingservice",
    storageBucket: "hihidigitizingservice.firebasestorage.app",
    messagingSenderId: "198282083511",
    appId: "1:198282083511:web:dfa26f76731670c1a7e132"
};
// =============================================

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Session ID (agar login nahi to bhi track hoga)
let sessionId = sessionStorage.getItem('hd_session');
if (!sessionId) {
    sessionId = 'guest_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('hd_session', sessionId);
}

// Page info
const pageName = document.title || window.location.pathname;
const pageUrl = window.location.href;
const startTime = Date.now();
let clickCount = 0;
let userId = null;

// Get device type
function getDevice() {
    const ua = navigator.userAgent;
    if (/mobile/i.test(ua)) return 'Mobile';
    if (/tablet/i.test(ua)) return 'Tablet';
    return 'Desktop';
}

// Track clicks
document.addEventListener('click', (e) => {
    clickCount++;
});

// Get logged-in user
onAuthStateChanged(auth, (user) => {
    if (user) userId = user.uid;
});

// Save to Firebase when user leaves
async function saveVisit() {
    const timeSpent = Date.now() - startTime;
    try {
        await addDoc(collection(db, 'analytics'), {
            sessionId,
            userId: userId || null,
            page: pageName,
            pageUrl,
            clicks: clickCount,
            timeSpent,
            device: getDevice(),
            referrer: document.referrer || 'Direct',
            date: new Date().toDateString(),
            timestamp: serverTimestamp()
        });
    } catch (e) { /* silent */ }
}

// Save on page leave
window.addEventListener('beforeunload', () => { saveVisit(); });
// Also save after 30 seconds (in case user stays)
setTimeout(() => { saveVisit(); }, 30000);
