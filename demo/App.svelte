<script>
	import { Email, Reddit, LinkedIn, Facebook, Twitter } from 'svelte-share-buttons-component';

	const url = 'example.com';
	const title = 'Demo page title';
</script>

<Email subject="Demo email title" body="Demo email body" />
<Reddit class="share-button" {title} {url} />
<LinkedIn class="share-button" {title} {url} summary="This is a summary" />
<Facebook class="share-button" {url} />
<Twitter class="share-button" text="{title}" {url} />