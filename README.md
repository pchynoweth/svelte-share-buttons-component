# svelte-share-buttons-component

![new-version](https://github.com/pchynoweth/svelte-share-buttons-component/workflows/new-version/badge.svg)
[![version](https://img.shields.io/npm/v/svelte-share-buttons-component.svg?style=flat-square)](http://npm.im/svelte-share-buttons-component)
[![Netlify Status](https://api.netlify.com/api/v1/badges/818ae4f6-3eea-41fc-8d91-db6ab2f360dd/deploy-status)](https://app.netlify.com/sites/svelte-share-buttons-component-demo/deploys)

Simple Svelte based share buttons component with no tracking.  Based on HTML share buttons from https://github.com/mxstbr/sharingbuttons.io.

## Installation

### Using npm

#### Sapper or Other Svelte Bundler

For Sapper you need to install the package as a dev module to so it gets compiled.  If you install it as a runtiome dependency you will 500 errors on the server side.  This is explained [here](https://github.com/sveltejs/sapper-template#using-external-components).

```bash
$ npm i -D svelte-share-buttons-component
```

### PureJS

```bash
$ npm i --save svelte-share-buttons-component
```

## Example

https://svelte-share-buttons-component-demo.netlify.app/

## Usage

A basic demo app can be found at https://github.com/pchynoweth/svelte-share-buttons-component/tree/master/demo.

Basic usage from svelte looks like this:

```html
<script>
	import { Email, HackerNews, Reddit, LinkedIn, Pinterest, Telegram, Tumblr, Vk, WhatsApp, Xing, Facebook, Twitter } from 'svelte-share-buttons-component';

	const url = 'https://pchynoweth.github.io/svelte-share-buttons-component/';
	const title = 'Svelte Share Buttons Component';
	const desc = 'Svelte based social media share buttons component with no tracking.';
</script>

<Email subject="{title}" body="{desc} {url}" />
<HackerNews class="share-button" {title} {url} />
<Reddit class="share-button" {title} {url} />
<LinkedIn class="share-button" {url} />
<Tumblr class="share-button" {title} {url} caption="{title}" />
<Pinterest class="share-button" {url} media="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" description={title} />
<Telegram class="share-button" text={title} {url} />
<Vk class="share-button" {title} {url} />
<WhatsApp class="share-button" text="{title} {url}" />
<Xing class="share-button" {title} {url} />
<Facebook class="share-button" {url} />
<Twitter class="share-button" text="{title}" {url} hashtags="github,svelte" via="username" related="other,users" />
```
