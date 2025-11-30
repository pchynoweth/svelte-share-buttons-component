# svelte-share-buttons-component

![new-version](https://github.com/pchynoweth/svelte-share-buttons-component/workflows/new-version/badge.svg)
[![version](https://img.shields.io/npm/v/svelte-share-buttons-component.svg?style=flat-square)](http://npm.im/svelte-share-buttons-component)

Simple Svelte based share buttons component with no tracking.  Based on HTML share buttons from https://github.com/mxstbr/sharingbuttons.io.

## Installation

### Using npm

#### Sapper or Other Svelte Bundler

For Sapper you need to install the package as a dev module to so it gets compiled.  If you install it as a runtime dependency you will 500 errors on the server side.  This is explained [here](https://github.com/sveltejs/sapper-template#using-external-components).

```bash
$ npm i -D svelte-share-buttons-component
```

### PureJS

```bash
$ npm i --save svelte-share-buttons-component
```

## Example

https://pchynoweth.github.io/svelte-share-buttons-component/

## Usage

A basic demo app can be found at https://github.com/pchynoweth/svelte-share-buttons-component/tree/master/demo.

Basic usage from svelte looks like this:

```html
<script>
	import { Bluesky, Email, HackerNews, Reddit, LinkedIn, Pinterest, Telegram, Tumblr, Vk, WhatsApp, Xing, Facebook, X, Line } from 'svelte-share-buttons-component';

	const url = 'https://pchynoweth.github.io/svelte-share-buttons-component/';
	const title = 'Svelte Share Buttons Component';
	const desc = 'Svelte based social media share buttons component with no tracking.';
</script>

<Bluesky class="share-button" text="{title}" {url} />
<Email subject="{title}" body="{desc} {url}" />
<HackerNews class="share-button" {title} {url} />
<Reddit class="share-button" {title} {url} />
<LinkedIn class="share-button" {url} />
<Tumblr class="share-button" {title} {url} caption="{title}" />
<Pinterest class="share-button" {url} media="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/200px-Svelte_Logo.svg.png" description={title} />
<Telegram class="share-button" text={title} {url} />
<Vk class="share-button" {title} {url} />
<WhatsApp class="share-button" text="{title} {url}" />
<Xing class="share-button" {title} {url} />
<Facebook class="share-button" quote="{title}" {url} />
<X class="share-button" text="{title}" {url} hashtags="github,svelte" via="username" related="other,users" />
<Line class="share-button" {url} />
```

### Notes

* A media tag with a valid image url is required for pinterest.
