//firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA-ZV9WtUniBU13DHKGxB8u3dEBWQ0cqqI',
  authDomain: 'cafe-59232.firebaseapp.com',
  databaseURL:
    'https://cafe-59232-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'cafe-59232',
  storageBucket: 'cafe-59232.appspot.com',
  messagingSenderId: '803979331343',
  appId: '1:803979331343:web:ec5bafe1979eb48e7fe07a',
  measurementId: 'G-6LQ38C486H',
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
