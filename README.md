# fontawesome-svg-mdi

[![CircleCI](https://circleci.com/gh/tjdavey/fontawesome-svg-mdi/tree/main.svg?style=svg)](https://circleci.com/gh/tjdavey/fontawesome-svg-mdi/tree/main)
[![Coverage Status](https://coveralls.io/repos/github/tjdavey/fontawesome-svg-mdi/badge.svg)](https://coveralls.io/github/tjdavey/fontawesome-svg-mdi)
![Known Vulnerabilities](https://snyk.io/test/github/tjdavey/fontawesome-svg-mdi/badge.svg)
[![npm version](https://badge.fury.io/js/fontawesome-svg-mdi.svg)](https://badge.fury.io/js/fontawesome-svg-mdi)

This library provides a converter to create FontAwesome icon definitions (for use with FontAwesome javascript libraries) from
Material Design Icon's javascript icons ([@mdi/js](https://www.npmjs.com/package/@mdi/js)). This allows Material Design Icons to be used with Fontawesome tooling
and mixed with the FontAwesome icon sets.

## Install

npm: `npm install fontawesome-svg-mdi`

yarn: `yarn add fontawesome-svg-mdi`

## Basic Usage

Create a converter instance of `MDItoFAIcon` to allow you to convert icons.

Run the convert method for each icon you need to convert, providing the icon from `@mdi/js` and a name for usage with 
FontAwesome. See [API Documentation](#API_Documentation) below for additional options and advanced usage.

```js
import MDItoFAIcon from 'fontawesome-svg-mdi';
import { mdiAccount } from '@mdi/js';

const mdiConverter = new MDItoFAIcon();

const faAccount = mdiConverter.convert(mdiAccount, 'account') 
```

`faAccount` can then be passed into any FontAwesome javascript method. When using icons Material Design Icons these can be used
as part of the `mdi` set and css class.

```js
<i class="mdi fa-account" aria-hidden="true"></i> 
```

### Webpack

In your Webpack pack definition convert any required icons and pass these into FontAwesome's `library.add`. 

```js
import { library } from '@fortawesome/fontawesome-svg-core';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import { mdiAccount } from '@mdi/js';

const mdiConverter = new MDItoFAIcon();
const faAccount = mdiConverter.convert(mdiAccount, 'account')

library.add(faEnvelope, faAccount);
```

You can then use these as you would other FontAwesome icons using the `mdi` class.  

```js
<i class="mdi fa-account" aria-hidden="true"></i> 
```

### React 

Convert any required icons and pass these into FontAwesome's FontAwesomeIcon React component.

```js
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mdiAccount } from '@mdi/js';

const mdiConverter = new MDItoFAIcon();
const faAccount = mdiConverter.convert(mdiAccount, 'account');

const element = <FontAwesomeIcon icon={faAccount} />;

ReactDOM.render(element, document.body);
```

## API Documentation

Whilst the default options are suitable for most use-cases the API provides options for setting any possible 
configurations. 

### `MDItoFAIcon` Class

#### `.constructor(options)`
- `options`
  - `mdiPrefix` - Icon set and prefix string. Default: `mdi`
  - `mdiWidth` - Default icon width for all converted icons. Default: `24`
  - `mdiHeight` - Default icon height for all converted icons. Default: `24`

#### `.convert(mdiIcon, iconName, options)`
- `mdiIcon` - An icon from the `@mdi/js` library. 
- `iconName` - The name that will be prefixed with `fa-` and can be used as a class name to reference an icon when using 
`<i>` substitution. This should be unique.    
- `options`
  - `width` - Default icon width for all converted icons. Default: `24`
  - `height` - Default icon height for all converted icons. Default: `24`
  - `ligatures` - Array of ligature definitions for FontAwesome's rendering. Default: `[]`
  - `unicode` - String hexadecimal representation of the unicode codepoint FontAwesome will substitute for this icon. It 
is recommended to only use codepoints in the [private use area](http://www.unicode.org/faq/private_use.html) and avoid 
reusing codepoints used by other FontAwesome icons which are in use. 