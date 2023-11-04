<script>
  export let text;
  export let url;
  export let ariaLabel = 'Share on X';
  export let hashtags = '';
  export let via = '';
  export let related = '';
  let classes = '';

  export { classes as class };

  import ShareButton from './ShareButton.svelte';
  let href;

  $: href = encodeURI(`https://x.com/intent/tweet/?text=${text}&hashtags=${hashtags}&via=${via}&related=${related}&url=${url}`);
</script>

<style>
:global(.ssbc-button--x) {
  background-color: #14171a;
}

:global(.ssbc-button--x:active),
:global(.ssbc-button--x:hover) {
  background-color: #000000;
}
</style>

<ShareButton class="ssbc-button--x {classes}" {...$$restProps} {ariaLabel} {href}>
  <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M19.38 0.622803H23.06L14.98 9.79481L24.42 22.2368H17.012L11.212 14.6759L4.57199 22.2368H0.891987L9.45199 12.4268L0.411987 0.622803H8.00399L13.244 7.52972L19.38 0.622803ZM18.092 20.0834H20.132L6.93199 2.69647H4.73999L18.092 20.0834Z"
			fill="white"
		/>
	</svg>
</ShareButton>