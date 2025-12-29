<script lang="ts">
  import ShareButton from './ShareButton.svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLAnchorAttributes, 'class' | 'href' | 'target' | 'rel' | 'aria-label'> {
    title: string;
    url: string;
    ariaLabel?: string;
    class?: string;
  }

  let { title, url, ariaLabel = 'Share on Pocket', class: classes = '', ...restProps }: Props = $props();
  
  let href = $derived(encodeURI(`https://getpocket.com/save?url=${url}&title=${title}`));
</script>

<style>
:global(.ssbc-button--pocket) {
  background-color: #EF3F56;
}

:global(.ssbc-button--pocket:active),
:global(.ssbc-button--pocket:hover) {
  background-color: #d32f45;
}
</style>

<ShareButton class="ssbc-button--pocket {classes}" {...restProps} {ariaLabel} {href}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M18.813 10c0 .627-.165 1.213-.448 1.733l.006.005L13.504 17.6c-.315.359-.668.605-1.048.733-.377.13-.773.189-1.16.136s-.74-.202-1.041-.44c-.303-.236-.555-.545-.76-.887L4.636 11.74l.006-.006C4.36 11.214 4.195 10.628 4.195 10c0-1.448.99-2.662 2.332-3.01.164-.042.33-.064.495-.064h9.956c.165 0 .33.022.496.064 1.34.348 2.33 1.562 2.33 3.01z"/>
  </svg>
</ShareButton>
