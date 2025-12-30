# svelte-share-buttons-component

## Project Overview

This is a Svelte 5 component library that provides simple, privacy-friendly social media share buttons with no tracking. The library exports individual share button components for various social media platforms including Facebook, X (Twitter), LinkedIn, Reddit, and many others.

**Key Characteristics:**
- Component library (not a full application)
- Svelte 5 with modern runes syntax ($props, $derived, $effect)
- TypeScript for type safety
- Rollup for bundling
- Playwright for end-to-end testing
- Social share buttons use native browser APIs and URL schemes (no tracking SDKs)

## Architecture

### Component Structure

All share button components follow a consistent pattern:

1. **Base Component**: `ShareButton.svelte` - A reusable wrapper component that handles the common link structure, styling, and accessibility
2. **Platform Components**: Each platform-specific component (e.g., `Facebook.svelte`, `X.svelte`) that:
   - Accepts platform-specific props
   - Uses `$derived()` to compute the share URL
   - Renders the ShareButton with platform-specific SVG icon and styling
   - Provides default aria-label for accessibility

**Special Cases:**
- `WebShare.svelte` uses a `<button>` instead of `<a>` and leverages the Web Share API
- `Discord.svelte` can accept an optional `inviteUrl` prop to link to a server
- `Mastodon.svelte` requires an `instance` prop for the user's Mastodon instance

### File Organization

```
src/
├── ShareButton.svelte      # Base reusable component
├── Facebook.svelte         # Platform-specific components
├── X.svelte
├── ...
└── index.ts               # Exports all components
```

## Development Standards

### Component Props Pattern

All components follow this TypeScript interface pattern:

```typescript
interface Props extends Omit<HTMLAnchorAttributes, 'class' | 'href' | 'target' | 'rel' | 'aria-label'> {
  // Platform-specific required props (e.g., url, quote, text, etc.)
  url: string;
  title?: string;
  // Platform-specific optional props
  ariaLabel?: string;
  class?: string;
}

let { url, title = '', ariaLabel = 'Share on [Platform]', class: classes = '', ...restProps }: Props = $props();
```

**Important Conventions:**
- Always extend `HTMLAnchorAttributes` (or `HTMLButtonAttributes` for WebShare)
- Always omit conflicting attributes: `class`, `href`, `target`, `rel`, `aria-label`
- Use destructuring with defaults in `$props()`
- Rename `class` to `classes` to avoid reserved word
- Spread `...restProps` to allow additional HTML attributes

### Styling Conventions

1. **Component-scoped styles**: Each platform component defines its own `:global()` styles for the button variants
2. **CSS class naming**: Follow BEM-like naming with `ssbc-button` prefix
   - `.ssbc-button__link` - The anchor element wrapper
   - `.ssbc-button` - The button container div
   - `.ssbc-button__icon` - The icon container
   - `.ssbc-button--[platform]` - Platform-specific modifier (e.g., `.ssbc-button--facebook`)
3. **Color scheme**: Each platform has its brand colors for normal state and hover/active state
4. **Fill vs Outline**: Icons support both fill and outline modes via the `fill` prop

### Computed Share URLs

Always use `$derived()` for computing share URLs:

```typescript
let href = $derived(encodeURI(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`));
```

**Important:**
- Use `encodeURI()` on the entire URL string (not individual parameters)
- Include all relevant parameters for the platform's share API
- Template literals inside encodeURI() work correctly for interpolation
- For optional parameters, include them even if empty (platforms handle this)

### Accessibility

- Always provide a meaningful default `ariaLabel` (e.g., "Share on Facebook")
- Allow consumers to override the aria-label via props
- Use `aria-hidden="true"` on icon containers
- Ensure keyboard navigation works (handled by native `<a>` and `<button>` elements)
- Use `target="_blank"` and `rel="noopener noreferrer"` for external links

### Testing

Tests are written using Playwright and follow these patterns:

1. **Test file location**: `tests/share-buttons.spec.js`
2. **Test structure**: Use data-testid attributes for targeting components
3. **Assertions**: Test that components:
   - Render correctly
   - Have correct href/URL structure
   - Have proper accessibility attributes
   - Contain SVG icons
   - Maintain proper DOM structure
   - Accept custom classes and aria-labels

**Example test pattern:**
```javascript
test('Facebook button renders with correct href', async ({ page }) => {
  const container = page.locator('[data-testid="facebook"]');
  const link = container.locator('a.ssbc-button__link');
  
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute('href', /facebook\.com\/sharer/);
  await expect(link).toHaveAttribute('aria-label', 'Share on Facebook');
});
```

## Build and Development Commands

- `npm run build` - Build the library with Rollup (outputs to `dist/`)
- `npm run dev` - Start Vite dev server for the demo
- `npm run preview` - Preview the production build
- `npm run test` - Run Playwright tests
- `npm run test:ui` - Run Playwright tests with UI
- `npm run check` - Run svelte-check for type checking

**Build Output:**
- `dist/index.js` - UMD format (for browser)
- `dist/index.mjs` - ES module format
- `dist/index.d.ts` - TypeScript declarations

## Adding a New Share Button

When adding a new social media share button:

1. **Create component file**: `src/[Platform].svelte`
2. **Follow the pattern**:
   ```svelte
   <script lang="ts">
     import ShareButton from './ShareButton.svelte';
     import type { HTMLAnchorAttributes } from 'svelte/elements';
     
     interface Props extends Omit<HTMLAnchorAttributes, 'class' | 'href' | 'target' | 'rel' | 'aria-label'> {
       url: string;
       title?: string; // Add platform-specific props as needed
       ariaLabel?: string;
       class?: string;
     }
     
     let { url, title = '', ariaLabel = 'Share on Platform', class: classes = '', ...restProps }: Props = $props();
     let href = $derived(encodeURI(`https://platform.com/share?url=${url}&title=${title}`));
   </script>
   
   <style>
   :global(.ssbc-button--platform) {
     background-color: #brandcolor;
   }
   
   :global(.ssbc-button--platform:active),
   :global(.ssbc-button--platform:hover) {
     background-color: #darkercolor;
   }
   </style>
   
   <ShareButton class="ssbc-button--platform {classes}" {...restProps} {ariaLabel} {href}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
       <path d="..."/>
     </svg>
   </ShareButton>
   ```
3. **Export in index.ts**: Add `export { default as Platform } from './Platform.svelte';`
4. **Add tests**: Create test cases in `tests/share-buttons.spec.js`
5. **Update demo**: Add the component to `demo/App.svelte`
6. **Document**: Update README.md with usage example

## Important Notes

- **No tracking**: This library intentionally uses direct share URLs without JavaScript tracking
- **Native browser APIs**: Social share buttons use native browser APIs and URL schemes rather than external SDKs
- **Browser compatibility**: Test share URLs work across different browsers
- **SVG optimization**: Keep SVG icons minimal and optimized
- **Type safety**: Always use TypeScript and maintain strict type checking
- **Backward compatibility**: When making changes, ensure existing component APIs remain compatible

## Code Style

- Use TypeScript for all components and type definitions
- Follow Svelte 5 runes syntax (no legacy stores)
- Use `<script lang="ts">` for all component scripts
- Destructure props with defaults in one statement
- Use arrow functions for event handlers
- Keep components focused and single-purpose
- Use meaningful variable names
- Add JSDoc comments for complex logic only

## Testing Philosophy

- Test component rendering and structure
- Test computed URLs contain correct parameters
- Test accessibility attributes
- Test custom prop overrides
- Use data-testid for reliable selectors
- Focus on user-facing behavior, not implementation details
