<script lang="ts">
  import ShareButton from './ShareButton.svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLAnchorAttributes, 'class' | 'href' | 'target' | 'rel' | 'aria-label'> {
    text: string;
    ariaLabel?: string;
    class?: string;
  }

  let { text, ariaLabel = 'Share via SMS', class: classes = '', ...restProps }: Props = $props();
  
  let href = $derived(encodeURI(`sms:?body=${text}`));
</script>

<style>
:global(.ssbc-button--sms) {
  background-color: #00D856;
}

:global(.ssbc-button--sms:active),
:global(.ssbc-button--sms:hover) {
  background-color: #00B847;
}
</style>

<ShareButton class="ssbc-button--sms {classes}" {...restProps} {ariaLabel} {href}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
  </svg>
</ShareButton>
