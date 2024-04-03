import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  /**
   * onAuthStateChange ---> eta observe kore thake user login kora ache naki logout hoye geche naki registration korche ei full jinis ta k se 
   observe kore thake.
   * */
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(
        "observing current user inside useEffect of AuthProvider : ",
        currentUser
      );
    });

    // tumi jodi kono karone ar observe korte na caw sekhetre nicher eta use korte paro.
    // eta use kora hoy karon : jokhon component ta ekhan theke unmount hoy orthat tumi jodi  ei page theke cole jaw tokhon ar oi jaygay observe korar dorkar pore na. tokhon ei clean up ei ongso ta kora hoy orthat amar ar observe korar dorkar porbe na.
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
    loading,
    signInWithGoogle
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
/**
 * 1. create context and export it
 * 2.set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it  in the middle of the Provider
 *
 * */
