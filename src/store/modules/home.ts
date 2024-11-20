import { defineStore } from "pinia";

export const useHomeStore = defineStore({
	id: "home",
	state: () => ({
		count: 10,
	}),
	actions: {
		increment() {
			this.count++;
		},
	},
	getters: {
		doubleCount(state) {
			return state.count * 2;
		},
	},
});