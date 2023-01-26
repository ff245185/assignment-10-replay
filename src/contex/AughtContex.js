import React, { createContext, useState } from 'react';
import app from '../firebase/Firebase.config';
import {getAuth,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "Firebase/auth"





export const AuthContext = createContext();
const auth = getAuth(app)


 const AughtContex = ({}) => {
      
    const {userLogin, setUserLogin} = useState(null);
    const {loding, setLoding} = useState (true);


    const ProviderLogin = provider => {
        return signInWithPopup(auth, provider);
    }
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singInUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logOut = () => {
		signOut(auth);
	};


    return (
        <div>
            
        </div>
    );
};

export default AughtContex;