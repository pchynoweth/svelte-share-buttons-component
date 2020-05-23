import { Email, Reddit, LinkedIn, Facebook, Twitter } from 'svelte-share-buttons-component';

const url = 'example.com';
const title = 'Demo page title';

new Email ({
    target: document.querySelector('#pure-email'),
    props: {
        id: 'email',
        subject: 'Test email',
        body: 'This is the email body'
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
        title, url, summary: "This is a summary"
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