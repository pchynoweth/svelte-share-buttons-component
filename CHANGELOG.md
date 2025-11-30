# Changelog

# 4.0.0

* Ported the project to Svelte 5
* Changed buttons to use typescript so types are exposed
* Added Bluesky share button
* Exposed ShareButton base component to allow users to implement their own share buttons
* Changed demo app to use vite because no parcel transformer is currently available for Svelte 5
* Changed vk link to use https
* Normalised Facebook, Pinterest and Telegram to use www
* Added web fallback for WhatsApp link
* Added web share API button

# 3.0.0

* Added exports to package.json
* Updated dependencies

# 2.0.0

* Updated dependencies
* Converted Twitter to X

# 1.5.5

* Added rel="noreferrer" to button

# 1.5.4

* Build now uses latest node

# 1.5.3

* Added step to build to update npm

# 1.5.2

* Changed node version for build

# 1.5.1

* Added Viper button
* Updated dependencies

# 1.5.0

* Added Line button
* Added "quote" attribute to Facebook button
* Updated dependencies

## 1.4.0

* Fixed demo
* Updated depencencies

## 1.3.2

* Updated depencencies
* Added support for additional twitter parameters
* **BREAKING** Added support for pinterest media param.  This is now a required parameter for pinterest.

## 1.2.1

* Added aria-label attribute to internal anchor
* Updated dependencies

## 1.2.0

* Updated LinkedIn button to remove deprecated parameters.  LinkedIn now gets the other information from meta tags.  Details can be found here: https://www.linkedin.com/help/linkedin/answer/46687/making-your-website-shareable-on-linkedin?lang=en.

## 1.1.2

* Modified installation instructions to include specific instructions for Sapper

## 1.1.1

* Added prepare step to package.json.
* Added `sideEffects` config to package.json

## 1.1.0

* Added more share buttons.
* Changed button css to follow BEM better.
* Removed empty aria attribute.
