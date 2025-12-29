---
description: 'Svelte 5 component library development standards and best practices'
applyTo: '**/*.svelte, **/*.ts, **/*.js, **/*.css, **/*.scss, **/*.json'
---

# Svelte 5 Component Library Development Instructions

Instructions for building high-quality Svelte 5 component libraries with modern runes-based reactivity, TypeScript, and performance optimization.

## Project Context
- Svelte 5.x component library (not SvelteKit/full application)
- Runes system for all reactivity ($state, $derived, $effect, $props, $bindable)
- TypeScript with strict mode for type safety
- Component-scoped styling with CSS custom properties
- Rollup for bundling library components
- Playwright for end-to-end component testing

## Development Standards

### Architecture
- Use Svelte 5 runes system for all reactivity instead of legacy stores
- Design components to be reusable and composable
- Keep components focused and single-purpose
- Create base/wrapper components for shared functionality
- Extract reusable logic into composable functions
- Use slots and snippets for flexible component composition
- Export all public components from a central index file

### TypeScript Integration
- Enable strict mode in `tsconfig.json` for maximum type safety
- Define interfaces for component props using `$props()` syntax
- Extend appropriate HTML element types (e.g., `HTMLAnchorAttributes`, `HTMLButtonAttributes`)
- Use `Omit<>` utility type to exclude conflicting attributes
- Type event handlers and callbacks properly
- Use generic types for reusable components
- Generate TypeScript declarations for library consumers
- Implement proper type checking with `svelte-check`

### Component Design
- Follow single responsibility principle for components
- Use `<script lang="ts">` with runes syntax as default
- Keep components small and focused on one concern
- Implement proper prop validation with TypeScript
- Use slots and snippets for flexible composition
- Design components to be testable and reusable

### Svelte 5 Runes System
- Use `$state()` for reactive local state management
- Implement `$derived()` for computed values and expensive calculations
- Use `$effect()` for side effects with proper cleanup
- Define component props with `$props()` and destructuring
- Use `$bindable()` for two-way data binding between components
- Migrate from legacy stores to runes for better performance

### State Management
- Use `$state()` for local component state
- Use `$derived()` for computed values that depend on props or state
- Use `$effect()` for side effects with proper cleanup
- Keep component state minimal and focused
- Implement context API with `setContext`/`getContext` for component hierarchies
- Avoid external state management libraries when possible

### Styling
- Use component-scoped styles with `<style>` blocks
- Implement CSS custom properties for theming and design systems
- Use `class:` directive for conditional styling
- Follow BEM or utility-first CSS conventions
- Implement responsive design with mobile-first approach
- Use `:global()` sparingly for truly global styles

### Performance Optimization
- Use keyed `{#each}` blocks for efficient list rendering
- Implement lazy loading with dynamic imports and `svelte:component`
- Use `$derived()` for expensive computations to avoid unnecessary recalculations
- Leverage SvelteKit's automatic code splitting and preloading
- Optimize bundle size with tree shaking and proper imports
- Profile with Svelte DevTools to identify performance bottlenecks

### Error Handling
- Use try/catch blocks for operations that may fail
- Provide meaningful error messages to component consumers
- Log errors appropriately for debugging
- Handle edge cases and invalid prop values gracefully
- Consider error boundaries for complex component trees

### Testing
- Write tests for component rendering and behavior
- Use Playwright for end-to-end component testing
- Test component behavior, not implementation details
- Verify proper accessibility attributes and structure
- Test that components accept and handle all props correctly
- Use data-testid attributes for reliable test selectors
- Test custom class and style prop overrides
- Verify SVG icons and visual elements render correctly

### Security
- Sanitize user inputs to prevent XSS attacks
- Use `@html` directive carefully and validate HTML content
- Properly encode URLs and query parameters (use `encodeURI()`, `encodeURIComponent()`)
- Validate prop values and handle invalid input gracefully
- Be cautious with dynamic href and src attributes
- Ensure external links use `target="_blank"` with `rel="noopener noreferrer"`

### Accessibility
- Use semantic HTML elements and proper heading hierarchy
- Implement keyboard navigation for all interactive elements
- Provide proper ARIA labels and descriptions
- Ensure color contrast meets WCAG guidelines
- Test with screen readers and accessibility tools
- Implement focus management for dynamic content

## Implementation Process for Component Libraries
1. Set up project structure with proper folder organization
2. Configure build tooling (Rollup/Vite) for library bundling
3. Define TypeScript interfaces for component props
4. Create base/wrapper components for shared functionality
5. Implement specific components with Svelte 5 runes
6. Add component-scoped styling with proper class naming
7. Export all public components from index file
8. Write comprehensive tests with Playwright
9. Generate TypeScript declarations for consumers
10. Optimize bundle size and performance
11. Ensure accessibility compliance
12. Document component APIs and usage examples

## Additional Guidelines for Component Libraries
- Follow Svelte's naming conventions (PascalCase for components, camelCase for functions)
- Use ESLint with eslint-plugin-svelte and Prettier for code consistency
- Minimize external dependencies to keep bundle size small
- Keep dependencies up to date and audit for security vulnerabilities
- Document components and complex logic with JSDoc comments
- Provide clear TypeScript types for better DX
- Use Svelte DevTools for debugging and performance analysis
- Consider backward compatibility when making API changes
- Version library following semantic versioning (semver)
- Provide comprehensive usage examples in documentation

## Common Component Library Patterns
- Base/wrapper components with slots for flexible composition
- Snippet-based composition for reusable template logic
- Component variants through props and CSS classes
- Extending HTML element types with TypeScript
- Spreading `...restProps` to allow pass-through attributes
- Context providers for component hierarchy state
- Proper prop defaults and optional parameters
- Consistent naming conventions for CSS classes (e.g., BEM)
- Reusable computed values with `$derived()`
- Side effects with proper cleanup in `$effect()`
