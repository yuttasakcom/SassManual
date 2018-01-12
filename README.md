# Sass Manual

> scss syntax

## Table of Contents

* [Setup](#setup)
* [7-1 CSS Architecture with Sass](#architecture)
* [Variables](#variables)
* [Nesting](#nesting)
* Operators
* Partials and imports
* [Mixins](#mixins)
* [Functions](#functions)
* [Extends](#extends)
* [Control directives](#control-directives)

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

> 7-1 pattern

```
sass/
|
|– abstracts/
|   |– _functions.scss    # Sass Functions
|   |– _mixins.scss       # Sass Mixins
|   |– _placeholders.scss # Sass Placeholders
|   |– _variables.scss    # Sass Variables
|
|– base/
|   |– _animations.scss   # Animations
|   |– _base.scss         # Base
|   |– _typography.scss   # Typography rules
|   |– _reset.scss        # Reset/normalize
|   |– _utilities.scss    # Utitlites
|   …                     # Etc.
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   …                     # Etc.
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|   …                     # Etc.
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|   …                     # Etc.
|
|– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|   …                     # Etc.
|
|– vendors/
|   |– _bootstrap.scss    # Bootstrap
|   |– _jquery-ui.scss    # jQuery UI
|   …                     # Etc.
|
`– main.scss              # Main Sass file
```

## Variables

```scss
$variable: 'initial value';
```

### !default Flag

```scss
$baseline: 1em !default;
```

### !global Flag

```scss
$baseline: 2em !global;
```

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

### Multiple Variables Or Maps

```scss
/// Z-indexes map, gathering all Z layers of the application
/// @access private
/// @type Map
/// @prop {String} key - Layer’s name
/// @prop {Number} value - Z value mapped to the key
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1
);

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer’s name
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @return map-get($z-indexes, $layer);
}
```

## Nesting

```scss
// <div class="foo"><div class="bar">Text</div></div>
// .foo .bar {}
.foo {
  .bar {
    // &:hover = .bar:hover
    &:hover {
      color: red;

      // &::before = .bar:hover::before
      &::before {
        content: 'pseudo-element';
      }
    }
  }
}
```

## Mixins

```scss
// Ext 1
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
.foo {
  @include clearfix;
}

// Ext 2
@mixin set-color($color: black) {
  color: $color;
}

.bar {
  @include set-color(white);
}

// Ext 3
@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}

.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}

// Ext 4
@mixin colors($text, $background, $border) {
  color: $text;
  background-color: $background;
  border-color: $border;
}

$values: #ff0000, #00ff00, #0000ff;
.primary {
  @include colors($values...);
}

$value-map: (
  text: #00ff00,
  background: #0000ff,
  border: #ff0000
);
.secondary {
  @include colors($value-map...);
}
```

## Functions

```scss
$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar {
  width: grid-width(5);
}
```

## Extends

```scss
%extend-name {
  ...
}

// .foo, .bar {}
.foo {
  @extend %extend-name;
}

.bar {
  @extend %extend-name;
}
```

## Control directives

### if()

```scss
if(true, 1px, 2px) => 1px
if(false, 1px, 2px) => 2px
```

### @if

```scss
// Ext 1
p {
  @if 1 + 1 == 2 {
    border: 1px solid;
  }
  @if 5 < 3 {
    border: 2px dotted;
  }
  @if null {
    border: 3px double;
  }
}

//output
p {
  border: 1px solid;
}

// Ext 2
$type: monster;
p {
  @if $type == ocean {
    color: blue;
  } @else if $type == matador {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}

//output
p {
  color: green;
}
```

### @for

```scss
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 2em * $i;
  }
}

//output
.item-1 {
  width: 2em;
}
.item-2 {
  width: 4em;
}
.item-3 {
  width: 6em;
}
```

### @each

```scss
// Ext 1
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}

//output
.puma-icon {
  background-image: url('/images/puma.png');
}
.sea-slug-icon {
  background-image: url('/images/sea-slug.png');
}
.egret-icon {
  background-image: url('/images/egret.png');
}
.salamander-icon {
  background-image: url('/images/salamander.png');
}

// Ext 2
@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
  #{$header} {
    font-size: $size;
  }
}

//output
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 1.2em;
}
```

### @while

```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} {
    width: 2em * $i;
  }
  $i: $i - 2;
}

//output
.item-6 {
  width: 12em;
}

.item-4 {
  width: 8em;
}

.item-2 {
  width: 4em;
}
```
