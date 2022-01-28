import { firebaseAuth, googleProvider } from './firebase';

class Auth {
  login(name) {
    const provider = this.getProvider(name);
    return firebaseAuth.signInWithPopup(provider);
  }
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
