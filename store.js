import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable({data: 0});
	
	return {
		subscribe,
		increment: () => update((n) => ({data: n.data + 1})),
		decrement: () => update((n) =>  ({data:  n.data - 1})),
		reset: () => set({data: 0})
	};
}

export const count = createCount();
