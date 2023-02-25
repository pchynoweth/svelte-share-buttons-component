<script>
	// You need to import the src directory here because importing pre-compiled svelte components into svelte apps is not supported.
	// See: https://github.com/sveltejs/svelte/issues/6584#issuecomment-907429921
	// If you use rollup or webpack, you can get the bundler to do this for you.  We are using the src directory explicitly here
	// because we are using parceljs and we want to use the pre-compiled commonjs code for the pure js example.
	import { Email, HackerNews, Reddit, LinkedIn, Pinterest, Telegram, Tumblr, Vk, WhatsApp, Xing, Facebook, Twitter, Line } from 'svelte-share-buttons-component/src';

	const url = 'https://pchynoweth.github.io/svelte-share-buttons-component/';
	const title = 'Svelte Share Buttons Component';
	const desc = 'Svelte based social media share buttons component with no tracking.';
</script>

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
<Facebook class="share-button" {url} quote="{title}" />
<Twitter class="share-button" text="{title}" {url} />
<Line class="share-button" {url} />
<Viber class="share-button" href="{url}" />
