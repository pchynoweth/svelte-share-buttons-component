<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLAnchorAttributes, 'class' | 'href' | 'target' | 'rel' | 'aria-label'> {
    href: string;
    label?: string;
    fill?: boolean;
    ariaLabel?: string;
    class?: string;
    children: Snippet;
  }

  let { href, label = '', fill = true, ariaLabel = '', class: classes = '', children, ...restProps }: Props = $props();
</script>

<style>
.ssbc-button__link,
.ssbc-button__icon {
  display: inline-block;
}

.ssbc-button__link {
  text-decoration: none;
  color: #fff;
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
</style>

<a class="ssbc-button__link" {href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} {...restProps}>
  <div class="ssbc-button {classes}">
    <div aria-hidden="true" class="ssbc-button__icon" class:ssbc-button__icon--fill={fill} class:ssbc-button__icon--outline={!fill}>
      {@render children()}
    </div>
    {label}
  </div>
</a>