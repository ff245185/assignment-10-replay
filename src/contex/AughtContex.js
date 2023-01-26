import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import {onAuthStateChanged,getAuth,signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut} from 
    "firebase/auth"


export const AuthContext = createContext();
const auth = getAuth(app)


 const AughtContex = ({children}) => {
      
    const {userLogin, setUserLogin} = useState(null);
    const {loding, setLoding} = useState (true);


    const ProviderLogin = provider => {
        return signInWithPopup(auth, provider);
    }
    const createUser = (email,password) => {
       
        return createUserWithEmailAndPassword(auth,email, password);
        
    }

    const singInUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logOut = () => {
		signOut(auth);
	};

    useEffect(()=>{
        const stateChange =onAuthStateChanged(auth,currentUser =>{
            setLoding(false);
            setUserLogin(currentUser);
        });

        return  () =>{
         stateChange();
        }
    },[])

    

    const info = {
        ProviderLogin,
        createUser,
        logOut ,
        singInUser,
        userLogin,
        loding,
   

    }


    return (
        <div>
           <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AughtContex;