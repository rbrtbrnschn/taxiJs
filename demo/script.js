import data from "./assets/data/data.js";
import dataset1 from "./assets/data/dataset1.js";
import dataset2 from "./assets/data/dataset2.js";
import Plugin from "./src/main/js/plugin/EventPlugin.js";

const samplePlugin = new Plugin("40", (taxiJs, e) =>
  console.log(
    "What you are witnessing my friend. That's called a plugin. Yes! We have those."
  )
);

// Home
(async function () {
  // taxi-auto
  const taxis = document.querySelectorAll("input.taxi");
  const taxi = document.querySelector("taxi");
  const temp = taxis[0];

  const options = {
    toHtml: (entry) => `
      <div class="taxi-card" value="${entry.make + " " + entry.model}">
            <strong value="${entry.make + " " + entry.model}">Brand:</strong> ${
      entry.make
    } <br>
            <strong value="${entry.make + " " + entry.model}">Model:</strong> ${
      entry.model
    } <br>
      </div>`,
    data: data,
    minChar: 1,
    query: (entry, value) => {
      const both = `${entry.make} ${entry.model}`;
      if (entry.model.toLowerCase().includes(value.toLowerCase())) {
        return true;
      } else if (entry.make.toLowerCase().includes(value.toLowerCase())) {
        return true;
      } else if (both.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }
      return false;
    },
    devOps: {
      closeOnClickAway: true,
    },
    plugins: [samplePlugin],
  };
  const _taxi = new Taxi(taxis[0], taxi, options);
})();

// Example 1
(function () {
  // fuzzy search
  const $input = document.querySelector("input.taxi#taxi1");
  const $taxi = document.querySelector("taxi#🚖1");
  const options = {
    minChar: 1,
    query: Taxi.Query.fuzzy,
    data: dataset1,
    devOps: {
      closeOnClickAway: true,
    },
  };

  const _taxi = new Taxi($input, $taxi, options);
})();

// Example 2
(function () {
  // custom html
  const $input = document.querySelector("input.taxi#taxi2");
  const $taxi = document.querySelector("taxi#🚖2");
  const options = {
    minChar: 3,
    query: Taxi.Query.fuzzy,
    data: dataset2,
    toHtml: (entry) => `
    <div class="card" value="${entry}" onclick="console.log(\`${entry}\`)">
  <div class="card-content" value="${entry}">
    <p class="title" value="${entry}">
      ${entry}
    </p>
    <p class="subtitle" value="${entry}">
      Some person
    </p>
  </div>
  
</div>`,
    devOps: {
      closeOnClickAway: true,
    },
  };

  const _taxi = new Taxi($input, $taxi, options);
})();

// Example 3
(function () {
  // custom html
  const $input = document.querySelector("input.taxi#taxi3");
  const $taxi = document.querySelector("taxi#🚖3");
  const options = {
    minChar: 1,
    data: dataset1,
    toHtml: Taxi.ToHtml.classic,
    query: (entry, val) => !entry.toLowerCase().includes(val.toLowerCase()),
    devOps: {
      closeOnClickAway: true,
    },
  };

  const _taxi = new Taxi($input, $taxi, options);
})();
