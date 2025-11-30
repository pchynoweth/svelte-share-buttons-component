<script>
	// Using the local src directory for the demo
	import { Bluesky, Email, HackerNews, Mastodon, Reddit, LinkedIn, Pinterest, Telegram, Tumblr, Vk, WebShare, WhatsApp, Xing, Facebook, X, Line, Viber } from '../src/index.ts';

	const url = 'https://pchynoweth.github.io/svelte-share-buttons-component/';
	const title = 'Svelte Share Buttons Component';
	const desc = 'Svelte based social media share buttons component with no tracking.';
</script>

<Bluesky class="share-button" text="{title}" {url} />
<Email subject="{title}" body="{desc} {url}" />
<HackerNews class="share-button" {title} {url} />
<Mastodon class="share-button" text="{title}" {url} instance="mastodon.social" />
<Reddit class="share-button" {title} {url} />
<LinkedIn class="share-button" {url} />
<Tumblr class="share-button" {title} {url} caption="{title}" />
<Pinterest class="share-button" {url} media="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/200px-Svelte_Logo.svg.png" description={title} />
<Telegram class="share-button" text={title} {url} />
<Vk class="share-button" {title} {url} />
<WebShare class="share-button" {title} text={desc} {url} />
<WhatsApp class="share-button" text="{title} {url}" />
<Xing class="share-button" {title} {url} />
<Facebook class="share-button" {url} quote="{title}" />
<X class="share-button" text="{title}" {url} />
<Line class="share-button" {url} />
<Viber class="share-button" text="{title}" {url} />
