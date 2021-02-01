# Taxi.js

Auto-complete library for js.

Extensible and modular, for ease of use.

Further modification stated in <a href="./TODO">TodoList</a>.

## Setup

### HTML
Simply add the script to your html header.
The stylesheet can be added, though is optional.
```html
<head>
<script src="./path/to/taxi.js" defer></script>
<link rel="stylesheet" href="./path/to/taxi.css">
</head>
<body>
  <!-- CODE --->
  <div style="width: 80vw;">
    <input type="text" class="taxi" name="honda" id="input">
    <taxi plates="honda" id="taxi"></taxi>
  </div>
  </body>
```

### JS
Define your options and instantiate your Taxi.

```js
// Define Options
const options = {
  data: ["Mercedes","Smart","Jaguar", "Honda", "Porsche"], // your data
  minChar: 3 // when the autocomplete is supposed to active
  toHtml: (entry) => `<div class="your_class_here" value="${entry}">
    <strong>${entry}</strong>
  </div>`, // your html rendering of choice or built in
  query: Taxi.Query.fuzzy // your query filter of choice or built in
}

// Instantiation
const input = document.getElementById("input");
const taxi = document.getElementById("taxi");
const _taxi = new Taxi(input, taxi, options);

```
