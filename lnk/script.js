var button = document.getElementById("button");

button.addEventListener("mouseover", function() {
  button.style.backgroundImage = "url('immages/Property\ 1=Variant2.svg')";
});

button.addEventListener("mouseout", function() {
  button.style.backgroundImage = "url('immages/Property\ 1=Default.svg')";
});

button.addEventListener("mousedown", function() {
  button.style.backgroundImage = "url('immages/Property\ 1=Variant3.svg')";
});

button.addEventListener("mouseup", function() {
  button.style.backgroundImage = "url('immages/Property\ 1=Variant2.svg')";
});

