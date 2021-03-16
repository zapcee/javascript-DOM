# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

It is hidden, because the page returns to it's default state which is with the text being hidden.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Window's `load` event listener is equal to document's `DOMContentLoaded` - it waits for the page to be fully loaded.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

The addEventListener() method attaches an event handler to the specified element. It listens for the specified event to be fired - for example, a click event listener will only fire when someone has clicked on the specified element.
