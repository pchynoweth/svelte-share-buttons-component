import { mount } from 'svelte';
import App from './App.svelte';

mount(App, {
	target: document.querySelector('#svelte-example-square')
});

mount(App, {
	target: document.querySelector('#svelte-example-round')
});

mount(App, {
	target: document.querySelector('#svelte-example-circle')
});