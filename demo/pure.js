import { mount } from 'svelte';
import { Email, Reddit, LinkedIn, Facebook, X, Line } from '../src/index.js';

const url = 'https://pchynoweth.github.io/svelte-share-buttons-component/';
const title = 'Svelte Share Buttons Component';
const desc = 'Svelte based social media share buttons component with no tracking.';

mount(Email, {
    target: document.querySelector('#pure-email'),
    props: {
        subject: title,
        body: `${desc} ${url}`
    },
});

mount(Reddit, {
    target: document.querySelector('#pure-reddit'),
    props: {
        title, url
    },
});

mount(LinkedIn, {
    target: document.querySelector('#pure-linkedin'),
    props: {
        url
    },
});

mount(Facebook, {
    target: document.querySelector('#pure-facebook'),
    props: {
        url
    },
});

mount(X, {
    target: document.querySelector('#pure-x'),
    props: {
        text: title, url
    },
});

mount(Line, {
    target: document.querySelector('#pure-line'),
    props: {
        url
    },
});

mount(Facebook, {
    target: document.querySelector('#pure-facebook-with-label'),
    props: {
        url, label: 'Facebook'
    },
});