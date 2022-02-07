import { firebaseApp, firebaseAuth, googleProvider } from './firebase';

class Auth {
  login(name) {
    const provider = this.getProvider(name);
    return firebaseAuth.signInWithPopup(provider);
  }
  logout() {
    firebaseApp.auth().signOut();
  }
  onAuthChange = (callback) => {
    firebaseApp.auth().onAuthStateChanged((uid) => {
      callback(uid);
    });
  };

  getProvider(name) {
    switch (name) {
      case '구글 로그인':
        return googleProvider;
      default:
        throw new Error(`${name} is unknown provider.`);
    }
  }
}
export default Auth;
