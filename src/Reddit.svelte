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
    <path fill="#fff" d="M16.93 11.41c.03-.18.05-.36.05-.55 0-1.6-1.63-2.89-3.65-2.92l.62-2.93 2.09.45a.7.7 0 10.71-.73.7.7 0 00-.61.36l-2.33-.5a.17.17 0 00-.21.12l-.69 3.24c-2.04.04-3.7 1.32-3.73 2.92 0 .19.02.37.05.55-.37.17-.63.55-.63 1 0 .57.47 1.04 1.05 1.04.33 0 .63-.15.83-.39.46.18.97.31 1.52.37a1.68 1.68 0 002.6 0c.55-.06 1.06-.19 1.52-.37.2.24.5.38.83.38.57 0 1.05-.47 1.05-1.04 0-.45-.26-.83-.63-1zm-6.2.7a.57.57 0 11-.01-1.13.57.57 0 01.01 1.13zm4.54 2.44c-.41.41-1.19.45-1.27.45-.08 0-.85-.04-1.27-.45a.18.18 0 01-.02-.24.19.19 0 01.26-.02c.34.33 1.07.41 1.03.41.04 0 .69-.08 1.03-.41a.19.19 0 01.26.02c.07.07.06.19-.02.24zm-.2-2.44a.57.57 0 111.13 0 .57.57 0 01-1.13 0z"/>
  </svg>
</ShareButton>