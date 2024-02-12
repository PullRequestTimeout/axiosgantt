import { writable, derived } from "svelte/store";

export const chartsStore = writable([
	{
		chartName: "",
		duration: 15,
		monthly: true,
		startingMonth: 0,
		targets: {
			revenue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			target2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			target3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		},
		tasks: [{ name: "", duration: 0, start: 0 }]
	}
]);

// Do the charts need to be sortable?

export const sortedCharts = derived();
