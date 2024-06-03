import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)

      const createUser = async (email, password) => {
            setLoading(true)
            return await createUserWithEmailAndPassword(auth, email, password)
      }

      const logInUser = async (email, password) => {
            setLoading(true)
            return await signInWithEmailAndPassword(auth, email, password)
      }

      const logOut = async () => {
            setLoading(true)
            return signOut(auth)
      }

      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
                  setLoading(false)
            })
            return () => {
                  unsubscribe()
            }
      }, [])
      const authValue = { user, createUser, logInUser, logOut, loading }
      return (
            <AuthContext.Provider value={authValue}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;