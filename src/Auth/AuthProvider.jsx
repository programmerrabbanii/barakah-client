import React, { createContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    signOut,
    onAuthStateChanged 
} from 'firebase/auth'; 
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // নতুন ইউজার তৈরি করা
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // লগইন করা
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // গুগল দিয়ে লগইন
    const loginGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // ইউজারের প্রোফাইল আপডেট করা
    const updateUserProfile = (updateData) => {
        if (auth.currentUser) {
            return updateProfile(auth.currentUser, updateData).then(() => {
                setUser({ ...auth.currentUser });
            });
        }
        return Promise.reject("No user found");
    };

    // ইউজার লগআউট করা
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Firebase থেকে ইউজার ডাটা লোড করা
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        loginGoogle,
        updateUserProfile,
        logOutUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
