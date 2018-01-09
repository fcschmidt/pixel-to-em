# Font Converter Offline Web Application [PWA Experiment]

**Pixel to EM** is an [Offline Web Application](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa?hl=pt-br), which is used to calculate (convert) values from one source to another. For example: convert a pixel value to in points, or percent to in pixel.
This app is an exeperiment study on [Progressive Web App (PWA)](https://developers.google.com/web/progressive-web-apps/).


## Install App

See how to install the app in [pixel install](https://pixel.fcschmidt.me/install-app.html).

## Calculation Method (convert values)
Conversions based on **16px** browser default size value.

### Pixel to:

##### EM:

- **Formula:** input value / pixel base.
- **Example:** `16px / 16px = 1em`

##### Percent %:

- **Formula:** (input value / pixel base) * 100
- **Example:** `(16px/16px ) * 100 = 100%`

##### Points:

- **Formula:** input value * (dots per inch / pixel per inch)
- **Example:** `16px * (72px/96px) = 12pt`


### EM to:

##### Pixel:

- **Formula:** input value * pixel base
- **Example:** `1em * 16px = 16px`

##### Percent:

- **Formula:** input value * 100
- **Example:** `1em * 100% = 100%`

##### Points:

- **Formula:** (dots per inch / pixel per inch) / input value * pixel base
- **Example:** `(72px/96px) / 1em * 16px = 12pt`


### Percent to:

##### Pixel:

- **Formula:** (input value * pixel base) / 100
- **Example:** `(100% * 16px) / 100 = 16px`

##### EM:

- **Formula:** input value / 100
- **Example:** `100% / 100 = 1em`

##### Points:

- **Formula:** ((dots per inch / pixel per inch) * input value) * pixel base / 100
- **Example:** `((72px/96px) * 100%) * 16px / 100 = 12pt`


### Points to:

##### Pixel:

- **Formula:** (pixel per inch / dots per inch) * input value
- **Example:** `(96px/72px) * 12pt = 16px`

##### EM:

- **Formula:** ((pixel per inch / dots per inch) * input value) / pixel base
- **Example:** `((96px/72px) * 12pt) / 16px = 1em`

##### Percent:

- **Formula:** ((pixel per inch / dots per inch) ***** input value) / pixel base * 100
- **Example:** `((96px/72px) * 12pt) / 16px * 100 = 100%`
****


## Development
Site is built with Jekyll (requires Ruby and more). Install Jekyll and run a local server to view your changes:

**Install Jekyll:**
Instalation guide [jekyll](https://jekyllrb.com/docs/installation/).

**Start locallhost server:**
`$ jekyll serve --watch`

## See also
Accessing app [https://pixel.fcschmidt.me](https://pixel.fcschmidt.me).


## License
[MIT License](https://opensource.org/licenses/MIT) © Fábio Schmidt &middot; by [@fcschimidt](https://twitter.com/fcschimidt)