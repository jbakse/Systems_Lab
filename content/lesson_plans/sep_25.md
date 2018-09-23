http://learnlayout.com/

### Learning takes Practice

You can be introduced to the most-important css layout properties in an hour or so, but that isn't nearly enough time to develop the skill of using css to layout documents. Gaining that skill takes experience and practice.


### HTML + CSS are Evolving Standards

https://caniuse.com/

### HTML + CSS are Designed for Documents

- they want to flow vs fixed
- explicit horizontal, implicit vertical
- responsive layout
- block content stacks top to bottom
- inline content wraps left to right, top to bottom



### Higher-order Design

- Designing the layout vs. designing the system that determines the layout

### Boxes

>> the browser's rendering engine represents each element as a rectangular box
MDN Web Docs{attrib}


### Display

https://developer.mozilla.org/en-US/docs/Web/CSS/display


overloaded with inner display type and outer display type

CSS 3 solves this with support for two keywords (1 inner, 1 outer) but support is lacking.

```
display: block | inline | none | flex;
```


### Position
```
position: static | relative | absolute | fixed;
```

static | position this box out in the flow
relative | position this box in the flow, with offset
absolute | pull this item out of the flow, position relative to "positioned" parent
fixed | pull this item out of the flow, position relative to the window



### Box Model

[Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

content box
padding box
border box
margin box


[Box Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

```
box-sizing: border-box | content-box;
```

### Box Size Properties
width, height
max-width, max-height
min-width, min-height

#### Box Size Units
px, em, %


### Margin

Space around blocks.
Margin collapsing
Margin auto




### Float + Clear

### Inline Block

### Flexbox

The Good:
- flexible layout system
- useful for many effects
- less quirks and side effects
- allows combining multiple properties together to achieve different effects

The Bad:
- naming is confusing
- requires combining multiple properties together to achieve different effects


[CSS Tricks: Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
[Flexbox in 5](https://cvan.io/flexboxin5/)
[MDN: Basic concepts of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)


### Media Queries


