"use client";
import { createContext, useEffect, useState, ReactNode } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  UserCredential
} from "firebase/auth";

type User = {
  uid: string;
  email: string;
  // ... other user properties
};


 interface UserInfo {
  user: any;
  userLoading: boolean;
  register: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  googleLogin: () => Promise<UserCredential>;
  newUpdateProfile: (name: string, img: string) => Promise<void> | undefined;
}



import auth from "./firebase.config";
import { globalInstance } from "@/Hooks/Instance/globalInstance";
export const AuthContext = createContext<UserInfo | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [userLoading, setUserLoading] = useState<boolean>(true);

  // create user
  const register = (email: string, password: string) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const login = (email: string, password: string) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setUserLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // logOut
  const logOut = () => {
    setUserLoading(true);
    return signOut(auth);
  };
  // update profile
  const newUpdateProfile = (name: string, img: string) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      return updateProfile(currentUser, {
        displayName: name,
        photoURL: img || "",
      });
    }
  };

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = user?.email || currentUser?.email;
      setUser(currentUser);
      // implement jwt
      if (currentUser) {
        globalInstance
          .post(
            "/jwt",
            { email: userEmail },
            {
              withCredentials: true,
            }
          )

          .catch((err: string) => console.log(err));
      }

      setUserLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const info:UserInfo | null= {
    user,
    userLoading,
    register,
    login,
    logOut,
    googleLogin,
    newUpdateProfile,
  };
  return <AuthContext.Provider value={info}>{children }</AuthContext.Provider>;
};

export default AuthProvider;
