import { auth, db } from "$lib/firebase/firebase.js";
import { doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { userPref } from "$lib/stores/userPref.js";
import { chartsStore } from "$lib/stores/chartsStore.js";
import { get } from "svelte/store";

export async function getUserData() {
	const user = auth.currentUser;
	const docRef = doc(db, "users", user.uid);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists() && docSnap.data().charts.length > 0) {
		// Load charts into the UI
		chartsStore.set(docSnap.data().charts);
	} else if (docSnap.exists() && docSnap.data().charts.length == 0) {
		console.log("This user has no charts saved!");
	} else {
		// docSnap.data() will be undefined in this case
		console.log("There doesn't seem to be a charts array.");
	}

	// Load user preferences into the UI
	if (docSnap.exists()) {
		userPref.set(docSnap.data().settings);
	}
}

export async function checkUser() {
	const user = auth.currentUser;
	const docRef = doc(db, "users", user.uid);
	const docSnap = await getDoc(docRef);

	// If no user document, create one
	if (!docSnap.exists()) {
		console.log("Creating new user in database.");
		const defaultSettings = get(userPref);
		// Schema
		let userDataForDb = {
			email: user.email,
			displayName: user.displayName,
			settings: defaultSettings
		};
		await setDoc(docRef, userDataForDb);
	} else {
		console.log("Fetching user data from database.");
		getUserData();
	}
}
