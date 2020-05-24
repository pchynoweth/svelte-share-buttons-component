# svelte-share-buttons-component

![npm-publish](https://github.com/pchynoweth/svelte-share-buttons-component/workflows/npm-publish/badge.svg)
[![version](https://img.shields.io/npm/v/svelte-share-buttons-component.svg?style=flat-square)](http://npm.im/svelte-share-buttons-component)

Simple Svelte based share buttons component with no tracking.  Based on HTML shared buttons from https://github.com/mxstbr/sharingbuttons.io.

## Installation

Using npm:
```bash
$ npm i --save svelte-share-buttons-component
```

## Usage

A basic demo app can be found at https://github.com/pchynoweth/svelte-share-buttons-component/tree/master/demo.

Basic usage from svelte looks like this:

```html
<script>
	import { Email, Reddit, LinkedIn, Facebook, Twitter } from 'svelte-share-buttons-component';

	const url = 'example.com';
	const title = 'Demo page title';
</script>

<Email subject="Demo email title" body="Demo email body" />
<Reddit {title} {url} />
<LinkedIn {title} {url} summary="This is a summary" />
<Facebook {url} />
<Twitter text="{title}" {url} />
```