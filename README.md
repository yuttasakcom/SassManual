# Sass Manual

> scss syntax

## Table of Contents

* [Setup](#setup)
* [7-1 CSS Architecture with Sass](#architecture)
* [Variables](#variables)
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
|_themes
|_vendors
|_main.scss
```

## Variables

### Scoping

```scss
// Initialize a global variable at root level.
$variable: 'initial value';

// Create a mixin that overrides that global variable.
@mixin global-variable-overriding {
  $variable: 'mixin value' !global;
}

.local-scope::before {
  // Create a local variable that shadows the global one.
  $variable: 'local value';

  // Include the mixin: it overrides the global variable.
  @include global-variable-overriding;

  // Print the variable’s value.
  // It is the **local** one, since it shadows the global one.
  content: $variable;
}

// Print the variable in another selector that does no shadowing.
// It is the **global** one, as expected.
.other-local-scope::before {
  content: $variable;
}
```
