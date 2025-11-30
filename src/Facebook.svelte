<script lang="ts">
  import ShareButton from './ShareButton.svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLAnchorAttributes, 'class' | 'href' | 'target' | 'rel' | 'aria-label'> {
    quote: string;
    url: string;
    ariaLabel?: string;
    class?: string;
  }

  let { quote, url, ariaLabel = 'Share on Facebook', class: classes = '', ...restProps }: Props = $props();
  
  let href = $derived(encodeURI(`https://facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`));
</script>

<style>
:global(.ssbc-button--facebook) {
  background-color: #3b5998;
}

:global(.ssbc-button--facebook:active),
:global(.ssbc-button--facebook:hover) {
  background-color: #2d4373;
}
</style>

<ShareButton class="ssbc-button--facebook {classes}" {...restProps} {ariaLabel} {href}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
  </svg>
</ShareButton>