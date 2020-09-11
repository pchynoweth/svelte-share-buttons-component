<script>
  export let url;
  export let ariaLabel = 'Share on LinkedIn';
  let classes = '';

  export { classes as class };

  import ShareButton from './ShareButton.svelte';
  let href;

  $: href = encodeURI(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
</script>

<style>
:global(.ssbc-button--linkedin) {
  background-color: #0077b5;
}

:global(.ssbc-button--linkedin:active),
:global(.ssbc-button--linkedin:hover) {
  background-color: #046293;
}
</style>

<ShareButton class="ssbc-button--linkedin {classes}" {...$$restProps} {ariaLabel} {href}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"/>
  </svg>
</ShareButton>