const clearClasses = function (iterator) {
  iterator.forEach(function (element) {
    element.classList.remove("active");
  });
};

document.addEventListener("DOMContentLoaded", (e) => {
  const tabs = document.querySelectorAll(".tab-name");
  const tabContentContainers = document.querySelectorAll(".tab-content");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      clearClasses(tabs);
      clearClasses(tabContentContainers);

      const contentElement = document.querySelector(
        `[data-content="${this.dataset.tab}"]`
      );

      contentElement.classList.add("active");

      this.classList.add("active");
    });
  });

  {
    const buttonx = document.getElementById("buttonx");
    const buttony = document.getElementById("buttony");
    const buttona = document.getElementById("buttona");
    const buttonb = document.getElementById("buttonb");
    const nintendo = document.querySelector("#nintendo");

    buttonx.addEventListener("click", function changeColor() {
      nintendo.style.backgroundColor = "#C6FFC7";
    });

    buttony.addEventListener("click", function changeColor() {
      nintendo.style.backgroundColor = "#FFA695";
    });

    buttona.addEventListener("click", function changeColor() {
      nintendo.style.backgroundColor = "#FD6DB7";
    });

    buttonb.addEventListener("click", function changeColor() {
      nintendo.style.backgroundColor = "#50B6FF";
    });
  }
});
