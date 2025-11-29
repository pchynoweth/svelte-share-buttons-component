import { mount } from 'svelte';
import TestApp from './TestApp.svelte';

const app = mount(TestApp, {
  target: document.getElementById('app'),
});

export default app;
