import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    console.log(user);
  };
  return (
    <div>
      <h1>Sign-In Page</h1>
      <button onClick={logGoogleUser}>Log in with google popup</button>
    </div>
  );
};

export default SignIn;
