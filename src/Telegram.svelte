<script>
  export let text;
  export let url;
  export let ariaLabel = 'Share on Telegram';
  let classes = '';

  export { classes as class };

  import ShareButton from './ShareButton.svelte';
  let href;
  
  $: href = encodeURI(`https://telegram.me/share/url?text=${text}&url=${url}`);
</script>

<style>
:global(.ssbc-button--telegram) {
  background-color: #54A9EB;
}

:global(.ssbc-button--telegram:active),
:global(.ssbc-button--telegram:hover) {
  background-color: #4B97D1;
}
</style>

<ShareButton class="ssbc-button--telegram {classes}" {...$$restProps} {ariaLabel} {href}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z"/>
  </svg>
</ShareButton>