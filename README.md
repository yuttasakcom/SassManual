# Sass Manual

> scss syntax

## Table of Contents

* [Setup](#setup)
* [7-1 CSS Architecture with Sass](#architecture)
* Variables
* Nesting
* Operators
* Partials and imports
* Mixins
* Functions
* Extends
* Control directives

## Setup

```
# clone project
git clone git@github.com:yuttasakcom/SassManual.git && cd SassManual

# install package
npm install

# start development
npm run dev
```

## Architecture

```
sass
|_abstracts
|  |_ _functions.scss
|  |_ _mixins.scss
|  |_ _variables.scss
|
|_base
|  |_ _animations.scss
|  |_ _base.scss
|  |_ _typography.scss
|  |_ _utilities.scss
|
|_components
|_layout
|_pages
|_main.scss
```
