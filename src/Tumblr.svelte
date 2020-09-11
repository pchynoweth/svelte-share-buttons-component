<script>
  export let title;
  export let caption;
  export let url;
  export let ariaLabel = 'Share on Tumblr';
  let classes = '';

  export { classes as class };

  import ShareButton from './ShareButton.svelte';
  let href;
  
  $: href = encodeURI(`https://www.tumblr.com/widgets/share/tool?posttype=link&title=${title}&caption=${caption}&content=${url}&canonicalUrl=${url}&shareSource=tumblr_share_button`);
</script>

<style>
:global(.ssbc-button--tumblr) {
  background-color: #35465C;
}

:global(.ssbc-button--tumblr:active),
:global(.ssbc-button--tumblr:hover) {
  background-color: #222d3c;
}
</style>

<ShareButton class="ssbc-button--tumblr {classes}" {...$$restProps} {ariaLabel} {href}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M13.5.5v5h5v4h-5V15c0 5 3.5 4.4 6 2.8v4.4c-6.7 3.2-12 0-12-4.2V9.5h-3V6.7c1-.3 2.2-.7 3-1.3.5-.5 1-1.2 1.4-2 .3-.7.6-1.7.7-3h3.8z"/>
  </svg>
</ShareButton>