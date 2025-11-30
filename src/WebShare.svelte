<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLButtonAttributes, 'class' | 'type' | 'aria-label' | 'disabled'> {
    title?: string;
    text?: string;
    url?: string;
    label?: string;
    fill?: boolean;
    ariaLabel?: string;
    class?: string;
  }

  let { title = '', text = '', url = '', label = '', fill = true, ariaLabel = 'Share', class: classes = '', ...restProps }: Props = $props();

  let isSupported = $state(false);

  $effect(() => {
    isSupported = typeof navigator !== 'undefined' && typeof navigator.share === 'function';
  });

  function handleClick() {
    if (isSupported) {
      const shareData: ShareData = {};
      if (title) shareData.title = title;
      if (text) shareData.text = text;
      if (url) shareData.url = url;
      
      navigator.share(shareData).catch(() => {
        // User cancelled or share failed - silently handle
      });
    }
  }
</script>

<style>
.ssbc-button__button,
.ssbc-button__icon {
  display: inline-block;
}

.ssbc-button__button {
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
}

.ssbc-button {
  transition: 25ms ease-out;
  padding: 0.75em;
}

.ssbc-button__icon :global(svg) {
  width: 1em;
  height: 1em;
  margin: 0;
  vertical-align: middle;
}

.ssbc-button__icon--fill {
  fill: #fff;
  stroke: none;
}

.ssbc-button__icon--outline {
  fill: none;
  stroke: #fff;
}

:global(.ssbc-button--webshare) {
  background-color: #6b7280;
}

:global(.ssbc-button--webshare:active),
:global(.ssbc-button--webshare:hover) {
  background-color: #4b5563;
}

.ssbc-button__button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>

<button type="button" class="ssbc-button__button" aria-label={ariaLabel} disabled={!isSupported} onclick={handleClick} {...restProps}>
  <div class="ssbc-button {classes} ssbc-button--webshare">
    <div aria-hidden="true" class="ssbc-button__icon" class:ssbc-button__icon--fill={fill} class:ssbc-button__icon--outline={!fill}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
      </svg>
    </div>
    {label}
  </div>
</button>
