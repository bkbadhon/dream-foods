import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);




const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)
    

    const createUser = (email, password, name, photo)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        .then(res=>{
            console.log(res)
            updateProfile(auth.currentUser, {
                displayName : name, photoURL: photo
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = ()=>{
        setLoading(true)
            return signOut(auth)
        }    
        useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }
    },[])
    const authInfo ={
        user,
        loading,
        createUser,
        logIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;