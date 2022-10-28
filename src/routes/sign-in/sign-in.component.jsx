import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";
import SignUp from "../../components/sign-up/sign-up.component.jsx";

const SignIn = () => {
  const logGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign-In Page</h1>
      <button onClick={logGoogleUserPopup}>Log in with google popup</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
