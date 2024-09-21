import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import useAxios, { AxiosSource } from "../component/Axios/useAxios";

export const AuthContext = createContext(null);
const auth = getAuth(app);




const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)
    const axiosLink = useAxios(AxiosSource)
    

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
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosLink.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
                setLoading(false);
            }
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