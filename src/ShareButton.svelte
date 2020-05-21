<script>
  export let href;
  export let label = '';
  export let fill = true;
  let classes = '';

  export { classes as class };
</script>

<style>
.link,
.icon {
  display: inline-block;
}

.link {
  text-decoration: none;
  color: #fff;
}

.button {
  transition: 25ms ease-out;
  padding: 0.5em 0.75em;
}

:global(.icon svg) {
  width: 1em;
  height: 1em;
  margin-right: 0.4em;
  vertical-align: top
}

:global(.button svg) {
  margin: 0;
  vertical-align: middle
}

.fill {
  fill: #fff;
  stroke: none;
}

.outline {
  fill: none;
  stroke: #fff;
}
</style>

<a class="link" {href} target="_blank" rel="noopener" aria-label="">
  <div class="button {classes}">
    <div aria-hidden="true" class="icon" class:fill class:outline={!fill}>
      <slot></slot>
    </div>
    {label}
  </div>
</a>