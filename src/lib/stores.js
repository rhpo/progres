import { writable } from 'svelte/store';

export const isCardExpanded = writable(false);
export const selectedCard = writable(null);
