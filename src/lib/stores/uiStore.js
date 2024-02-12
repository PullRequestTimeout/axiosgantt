import { writable } from "svelte/store";

// Alert message and setter function ----------------------
export const alertMessage = writable("");
export const alertIcon = writable("");

// Briefly display an alert for 3 seconds if seconds param is not provided
export function setAlertMessage(message, seconds, icon) {
	alertMessage.set(message);
	alertIcon.set(icon);
	setTimeout(() => {
		alertMessage.set("");
		alertIcon.set("");
	}, ifSeconds());

	function ifSeconds() {
		if (seconds) {
			return seconds * 1000;
		} else {
			return 3000;
		}
	}
}

// Loading state ------------------------------------------
export const loading = writable(false);
