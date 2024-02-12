import { writable } from "svelte/store";

export const authStore = writable({
	uid: "",
	email: "",
	displayName: ""
});
