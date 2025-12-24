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
    <ellipse cx="12" cy="11" rx="5.5" ry="5" fill="#fff"/>
    <circle cx="10" cy="11" r="1" fill="#000"/>
    <circle cx="14" cy="11" r="1" fill="#000"/>
    <path d="M9.5 13c.5 1 1.5 1.5 2.5 1.5s2-.5 2.5-1.5" stroke="#000" stroke-width="0.5" fill="none" stroke-linecap="round"/>
    <circle cx="16.5" cy="6.5" r="1" fill="#fff" stroke="#000" stroke-width="0.5"/>
    <line x1="14" y1="8" x2="16" y2="7" stroke="#000" stroke-width="0.5"/>
  </svg>
</ShareButton>