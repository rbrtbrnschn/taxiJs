import data from "./assets/data/data.js";
// Custom
(async function () {
  // taxi-auto
  const taxis = document.querySelectorAll("input.taxi");
  const taxi = document.querySelector("taxi");
  const temp = taxis[0];

  const options = {
    toHtml: (entry) => `
      <div class="taxi-card" value="${entry.make + " " + entry.model}">
            <strong>Brand:</strong> ${entry.make} <br>
            <strong>Model:</strong> ${entry.model} <br>
      </div>`,
    data: data,
    minChar: 1,
    query: (entry, value) =>
    {
      const both = `${entry.make} ${entry.model}`;
      if(entry.model.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }
      else if(entry.make.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }
      else if(both.toLowerCase().includes(value.toLowerCase())){
        return true;
      }
      return false;
    }  
  };
  const _taxi = new Taxi(taxis[0], taxi, options);
})();
