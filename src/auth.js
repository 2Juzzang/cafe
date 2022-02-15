import { firebaseApp, firebaseAuth, googleProvider } from './firebase';

class Auth {
  login(name) {
    const provider = this.getProvider(name);
    console.log('333');
    return firebaseAuth.signInWithPopup(provider);
  }
  logout() {
    firebaseApp.auth().signOut();
    // 로컬스토리지 삭제
    // localStorage.clear();
    // 세션스토리지 삭제
    sessionStorage.clear();
  }
  authDelete() {
    firebaseApp.auth().signOut();
  }
  onAuthChange = (callback) => {
    console.log('555');
    firebaseApp.auth().onAuthStateChanged((uid) => {
      callback(uid);
    });
  };

  getProvider(name) {
    switch (name) {
      case '구글 로그인':
        console.log('444');
        return googleProvider;
      default:
        throw new Error(`${name} is unknown provider.`);
    }
  }
}
export default Auth;
