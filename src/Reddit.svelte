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
  background-color: #e03d00;
}
</style>

<ShareButton class="ssbc-button--reddit {classes}" {...restProps} {ariaLabel} {href}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M23.96,10.81 C23.96,9.36 22.79,8.20 21.35,8.20 C20.65,8.20 20.01,8.48 19.54,8.93 C17.75,7.65 15.29,6.82 12.55,6.71 L13.75,1.11 L17.64,1.94 C17.68,2.93 18.49,3.72 19.50,3.72 C20.52,3.72 21.35,2.89 21.35,1.86 C21.35,0.83 20.52,0.00 19.50,0.00 C18.77,0.00 18.13,0.43 17.83,1.05 L13.49,0.13 C13.36,0.11 13.24,0.13 13.15,0.19 C13.04,0.26 12.98,0.36 12.96,0.49 L11.63,6.73 C8.86,6.82 6.36,7.65 4.54,8.95 C4.07,8.50 3.43,8.23 2.73,8.23 C1.27,8.23 0.12,9.40 0.12,10.83 C0.12,11.90 0.76,12.80 1.66,13.20 C1.61,13.46 1.59,13.72 1.59,13.99 C1.59,18.01 6.27,21.28 12.04,21.28 C17.81,21.28 22.49,18.03 22.49,13.99 C22.49,13.74 22.47,13.46 22.42,13.20 C23.32,12.80 23.96,11.88 23.96,10.81 ZM6.06,12.67 C6.06,11.64 6.89,10.81 7.92,10.81 C8.94,10.81 9.78,11.64 9.78,12.67 C9.78,13.69 8.94,14.53 7.92,14.53 C6.89,14.55 6.06,13.69 6.06,12.67 ZM16.46,17.61 C15.18,18.89 12.75,18.97 12.04,18.97 C11.31,18.97 8.88,18.87 7.62,17.61 C7.43,17.41 7.43,17.11 7.62,16.92 C7.81,16.73 8.11,16.73 8.30,16.92 C9.11,17.73 10.82,18.01 12.04,18.01 C13.26,18.01 14.99,17.73 15.78,16.92 C15.97,16.73 16.27,16.73 16.46,16.92 C16.63,17.11 16.63,17.41 16.46,17.61 ZM16.12,14.55 C15.09,14.55 14.26,13.72 14.26,12.69 C14.26,11.66 15.09,10.83 16.12,10.83 C17.15,10.83 17.98,11.66 17.98,12.69 C17.98,13.69 17.15,14.55 16.12,14.55 Z" fill="#FFFFFF" />
  </svg>
</ShareButton>