# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

I used the function `getElementsByClassName`, which returned me a HTMLCollection, which again I converted to an array in order to use `forEach` hide the elements.

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

I used the `forEach` loop in order to hide each element with the class name `hide_me`. The loop did the actions that I provided for each element with the class `hide_me`.