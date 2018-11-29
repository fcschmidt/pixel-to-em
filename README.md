# Font Converter Offline Web Application [PWA Experiment]

**Pixel to EM** is an [Offline Web Application](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa?hl=pt-br), which is used to calculate (convert) values from one source to another. For example: convert a pixel value to in points, or percent to in pixel.
This app is an exeperiment study on [Progressive Web App (PWA)](https://developers.google.com/web/progressive-web-apps/).


## Install App

See how to install the app in [pixel install](https://pixel.fcschmidt.me/install-app.html).

## Calculation Method (convert values)
Conversions based on **16px** browser default size value.

### Pixel to:
Pixel to|Formula|Example
:--|--|--
**EM**|input value / pixel base|`16px / 16px = 1em`
**Percent**|(input value / pixel base) * 100| `(16px/16px ) * 100 = 100%`
**Points**|input value * (dots per inch / pixel per inch)|`16px * (72px/96px) = 12pt`


### EM to:
EM to|Formula|Example
:--|--|--
**Pixel**|input value * pixel base|`1em * 16px = 16px`
**Percent**|input value * 100|`1em * 100% = 100%`
**Points**|(dots per inch / pixel per inch) / input value * pixel base|`(72px/96px) / 1em * 16px = 12pt`


### Percent to:
Percent to|Formula|Example
:--|--|--
**Pixel**|(input value * pixel base) / 100|`(100% * 16px) / 100 = 16px`
**EM**|input value / 100|`100% / 100 = 1em`
**Points**|((dots per inch / pixel per inch) * input value) * pixel base / 100|`((72px/96px) * 100%) * 16px / 100 = 12pt`


### Points to:
Points to|Formula|Example
:--|--|--
**Pixel**|(pixel per inch / dots per inch) * input value|`(96px/72px) * 12pt = 16px`
**EM**|((pixel per inch / dots per inch) * input value) / pixel base|`((96px/72px) * 12pt) / 16px = 1em`
**Percent**| ((pixel per inch / dots per inch) * input value) / pixel base * 100|`((96px/72px) * 12pt) / 16px * 100 = 100%`


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
