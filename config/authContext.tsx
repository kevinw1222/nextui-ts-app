// "use client";
// import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
// import { app } from "@/config/firebaseConfig";
// import {
// 	getAuth,
// 	GoogleAuthProvider,
// 	GithubAuthProvider,
// 	signInWithPopup,
// 	signOut,
// 	onAuthStateChanged,
// 	User as FirebaseUser,
// } from "firebase/auth";

// interface AuthContextProps {
// 	user?: FirebaseUser | null;
// 	googleSignIn?: () => void;
// 	githubSignIn?: () => void;
// 	userSignOut?: () => void;
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
// 	const auth = getAuth(app);
// 	const googleProvider = new GoogleAuthProvider();
// 	const githubProvider = new GithubAuthProvider();
// 	const [user, setUser] = useState<FirebaseUser | null>(null);

// 	useEffect(() => {
// 		const unsubscribe = onAuthStateChanged(auth, (user) => {
// 			if (user) {
// 				setUser(user);
// 			} else {
// 				setUser(null);
// 			}
// 		});
// 		return () => unsubscribe();
// 	}, [auth]);

// 	const googleSignIn = () => {
// 		signInWithPopup(auth, googleProvider)
// 			.then((response) => {
// 				console.log(response.user);
// 			})
// 			.catch((error) => {
// 				console.error("Google sign-in error:", error);
// 			});
// 	};

// 	const githubSignIn = () => {
// 		signInWithPopup(auth, githubProvider)
// 			.then((response) => {
// 				console.log(response.user);
// 			})
// 			.catch((error) => {
// 				console.error("Github sign-in error:", error);
// 			});
// 	};

// 	const userSignOut = () => {
// 		signOut(auth)
// 			.then(() => {
// 				console.log("Sign out successful.");
// 			})
// 			.catch((error) => {
// 				console.error("Sign-out error:", error);
// 			});
// 	};

// 	return (
// 		<AuthContext.Provider
// 			value={{
// 				user,
// 				googleSignIn,
// 				githubSignIn,
// 				userSignOut,
// 			}}>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// };

// export const useAuth = () => {
// 	const context = useContext(AuthContext);
// 	if (!context) {
// 		throw new Error("useAuth must be used within an AuthProvider");
// 	}
// 	return context;
// };

// "use client";
// import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
// import { app } from "@/config/firebaseConfig";
// import {
// 	getAuth,
// 	GoogleAuthProvider,
// 	GithubAuthProvider,
// 	signInWithPopup,
// 	signOut,
// 	onAuthStateChanged,
// 	User as FirebaseUser,
// } from "firebase/auth";

// interface AuthContextProps {
// 	user?: FirebaseUser | null;
// 	loading: boolean;
// 	googleSignIn?: () => void;
// 	githubSignIn?: () => void;
// 	userSignOut?: () => void;
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
// 	const auth = getAuth(app);
// 	const googleProvider = new GoogleAuthProvider();
// 	const githubProvider = new GithubAuthProvider();
// 	const [user, setUser] = useState<FirebaseUser | null>(null);
// 	const [loading, setLoading] = useState(true);

// 	useEffect(() => {
// 		const unsubscribe = onAuthStateChanged(auth, (user) => {
// 			setUser(user);
// 			setLoading(false);
// 		});
// 		return () => unsubscribe();
// 	}, [auth]);

// 	const googleSignIn = () => {
// 		signInWithPopup(auth, googleProvider)
// 			.then((response) => {
// 				console.log(response.user);
// 			})
// 			.catch((error) => {
// 				console.error("Google sign-in error:", error);
// 			});
// 	};

// 	const githubSignIn = () => {
// 		signInWithPopup(auth, githubProvider)
// 			.then((response) => {
// 				console.log(response.user);
// 			})
// 			.catch((error) => {
// 				console.error("Github sign-in error:", error);
// 			});
// 	};

// 	const userSignOut = () => {
// 		signOut(auth)
// 			.then(() => {
// 				console.log("Sign out successful.");
// 			})
// 			.catch((error) => {
// 				console.error("Sign-out error:", error);
// 			});
// 	};

// 	return (
// 		<AuthContext.Provider
// 			value={{
// 				user,
// 				loading,
// 				googleSignIn,
// 				githubSignIn,
// 				userSignOut,
// 			}}>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// };

// export const useAuth = () => {
// 	const context = useContext(AuthContext);
// 	if (!context) {
// 		throw new Error("useAuth must be used within an AuthProvider");
// 	}
// 	return context;
// };

"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { app } from "@/config/firebaseConfig";
import {
	getAuth,
	GoogleAuthProvider,
	GithubAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	User as FirebaseUser,
} from "firebase/auth";

interface AuthContextProps {
	user: FirebaseUser | null;
	loading: boolean;
	googleSignIn: () => void;
	githubSignIn: () => void;
	userSignOut: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
	const [user, setUser] = useState<FirebaseUser | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});
		return () => unsubscribe();
	}, [auth]);

	const googleSignIn = () => {
		signInWithPopup(auth, googleProvider)
			.then((response) => {
				setUser(response.user);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Google sign-in error:", error);
			});
	};

	const githubSignIn = () => {
		signInWithPopup(auth, githubProvider)
			.then((response) => {
				setUser(response.user);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Github sign-in error:", error);
			});
	};

	const userSignOut = () => {
		signOut(auth)
			.then(() => {
				setUser(null);
				setLoading(false);
				console.log("Sign out successful.");
			})
			.catch((error) => {
				console.error("Sign-out error:", error);
			});
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				googleSignIn,
				githubSignIn,
				userSignOut,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
