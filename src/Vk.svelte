<script>
  export let title;
  export let url;
  export let ariaLabel = 'Share on VK';
  let classes = '';

  export { classes as class };

  import ShareButton from './ShareButton.svelte';
  let href;
  
  $: href = encodeURI(`http://vk.com/share.php?title=${title}&url=${url}`);
</script>

<style>
:global(.ssbc-button--vk) {
  background-color: #507299;
}

:global(.ssbc-button--vk:active),
:global(.ssbc-button--vk:hover) {
  background-color: #43648c;
}
</style>

<ShareButton class="ssbc-button--vk {classes}" {...$$restProps} {ariaLabel} {href}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813s1.255-.204 1.255 1.49c0 .42.022 1.626.04 2.64a.73.73 0 0 1-1.272.503 21.54 21.54 0 0 1-2.498-4.543.693.693 0 0 0-.63-.403h-2.99a.508.508 0 0 0-.48.685C3.005 10.175 6.918 18 11.38 18h1.878a.742.742 0 0 0 .742-.742v-1.135a.73.73 0 0 1 1.23-.53l2.247 2.112a1.09 1.09 0 0 0 .746.295h2.953c1.424 0 1.424-.988.647-1.753-.546-.538-2.518-2.617-2.518-2.617a1.02 1.02 0 0 1-.078-1.323c.637-.84 1.68-2.212 2.122-2.8.603-.804 1.697-2.507.197-2.507z"/>
  </svg>
</ShareButton>