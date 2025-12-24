<script lang="ts">
  import ShareButton from './ShareButton.svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLAnchorAttributes, 'class' | 'href' | 'target' | 'rel' | 'aria-label'> {
    title: string;
    url: string;
    ariaLabel?: string;
    class?: string;
  }

  let { title, url, ariaLabel = 'Share on Reddit', class: classes = '', ...restProps }: Props = $props();
  
  let href = $derived(encodeURI(`https://reddit.com/submit/?url=${url}&resubmit=true&title=${title}`));
</script>

<style>
:global(.ssbc-button--reddit) {
  background-color: #FF4500;
}

:global(.ssbc-button--reddit:active),
:global(.ssbc-button--reddit:hover) {
  background-color: #CC3700;
}
</style>

<ShareButton class="ssbc-button--reddit {classes}" {...restProps} {ariaLabel} {href}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10.5" fill="#FFF"/>
    <circle cx="9.5" cy="11.5" r="1.25" fill="#000"/>
    <circle cx="14.5" cy="11.5" r="1.25" fill="#000"/>
    <path d="M15.5 14.5c-.5.5-1.5 1-3.5 1s-3-.5-3.5-1" stroke="#000" stroke-width="1" fill="none" stroke-linecap="round"/>
    <circle cx="19" cy="7" r="1.5" fill="#FFF" stroke="#000" stroke-width="1"/>
    <path d="M17.5 8l-1.5 1.5" stroke="#000" stroke-width="1" fill="none" stroke-linecap="round"/>
  </svg>
</ShareButton>