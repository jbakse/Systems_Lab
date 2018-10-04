---
title: October 8
layout: layouts/compform_plain.pug
debug: false
---


## Intro to HTML DOM API

| HTML 			| CSS 					| Javascript    |
| --- 			| ---					| ---           |
| Content		| Style					| Behavior      |
| What it says	| What it looks like 	| What it does  |

## Background

| What to Do (Algorithm) | What to Know (Data)      |
| ---------------------- | ------------------------ |
| operators              | literals                 |
| expressions            | variables                |
| statements             | indexed arrays (lists)   |
| control flow           | associative array (maps) |
| functions              | -                        |

| What to Do  + What to Know |
| --- |
| Objects |

### Data Model

### Model-View-Controller

> Model View Controller is an architectural pattern for developing user interfaces.{bigger}

Wikipedia{attrib}

Model
: Represents the application data. This includes the specific values:

```
David, Anne, and Carrol exist. David's age is 3.
```

and the intended structure:

```
The application contains *people*. All *people* have an *age*. *Ages* can not be less than 0.
```

View
: The view displays the data to the user and accepts user input.

Controller
: The controller respons to user actions, updates the model, and coordinates the model and view.

[MVC Relationship Charts](https://www.google.com/search?q=model+view+controller&safe=off&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiUyd-6_uzdAhVjplkKHaL6C08Q_AUIDigB&biw=1094&bih=1070&dpr=2.5)


### MVC + The Browser

Model -> DOM{bigger}

View -> Rendered Webpage{bigger}

Controller -> Javascript{bigger}

## Manipulating the DOM

You can use Javascript to manipulate the DOM. Your changes will be reflected on the rendered webpage. Note, that javascript isn't chaning the HTML source. The browser builds the DOM from the source, and then javascript changes the DOM. The source is untouched, and reloading the page will reset the DOM.

## Interaction + Javascript

You can use Javascript to respond to user interactions. When the user clicks a button, chooses an item from a dropdown, or hovers over an image the webpage will emit *events*. These events can be *listened* for by your code. Your code can then respond any way it wishes, including by manipulating the DOM.
