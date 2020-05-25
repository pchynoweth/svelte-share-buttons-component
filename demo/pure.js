import { Email, Reddit, LinkedIn, Facebook, Twitter } from 'svelte-share-buttons-component';

const url = 'https://pchynoweth.github.io/svelte-share-buttons-component/';
const title = 'Svelte Share Buttons Component';
const desc = 'Svelte based social media share buttons component with no tracking.';

new Email ({
    target: document.querySelector('#pure-email'),
    props: {
        subject: title,
        body: `${desc} ${url}`
    },
});

new Reddit ({
    target: document.querySelector('#pure-reddit'),
    props: {
        title, url
    },
});

new LinkedIn ({
    target: document.querySelector('#pure-linkedin'),
    props: {
        title, url, summary: desc, source: url
    },
});

new Facebook ({
    target: document.querySelector('#pure-facebook'),
    props: {
        url
    },
});

new Twitter ({
    target: document.querySelector('#pure-twitter'),
    props: {
        text: title, url
    },
});

new Facebook ({
    target: document.querySelector('#pure-facebook-with-label'),
    props: {
        url, label: 'Facebook'
    },
});