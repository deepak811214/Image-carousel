import "./styles.css";

const carousel = (ele = "container", width, index = 0) => {
  var container = document.getElementById(ele);
  var list = container.children;
  var length = list.length;
  container.style.display = "flex";
  container.style.overflow = "hidden";
  container.style.width = width
    ? width + "px"
    : container.children[0].clientWidth + "px";
  list[index].scrollIntoView();
  window.show = function (increase) {
    index = index + increase;
    index = Math.min(Math.max(index, 0), length - 1);
    list[index].scrollIntoView({ behavior: "smooth" });
  };
  var button = `
  <button class="prev" onclick="show(-1)">&lt;</button>
  <button class="next" onclick="show(+1)">&gt;</button>
  `;
  container.insertAdjacentHTML("afterend", button);
};

carousel("container", 600);
