import { writable } from "svelte/store";

// User preferences ----------------------------------------
export const userPref = writable({
	theme: "light"
});
