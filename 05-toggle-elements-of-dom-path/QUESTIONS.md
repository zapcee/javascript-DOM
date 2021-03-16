# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

I used the function `querySelectorAll` - it returns all element descendants of node that match selectors, which in my case were: elements `li` in the class `.second_five`.