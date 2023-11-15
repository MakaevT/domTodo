const list = document.getElementById("list");
const text = document.getElementById("text");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.textContent = input.value;
  list.append(li);

  const checkBox = document.createElement("input");
  checkBox.type = "checkBox";
  li.prepend(checkBox);

  const removeButton = document.createElement("button");
  removeButton.textContent = "x";

  checkBox.addEventListener("click", (e) => {
    e.target.parentElement.style.opacity = "0.3";
    delButton.remove();
  });

  removeButton.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
  li.append(removeButton);
  input.value = "";
  list.append(li);
});
