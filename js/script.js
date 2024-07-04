// JavaScript

function validateForm() {
  let firstName = document.querySelector("#firstname").value;
  let lastName = document.querySelector("#lastname").value;

  console.log(firstName);
  console.log(lastName);

  if (firstName != "" && lastName != "") {
    document.querySelector("#result").innerHTML = firstName + " " + lastName;
  } else {
    alert("inputan ada yang kosong");
  }
}
let indexSlide = 1;
showSlide(1);
function nextSlide(n) {
  showSlide((indexSlide += n));
  console.log(indexSlide + "Ini NextSlide");
}
function showSlide(n) {
  let listImage = document.getElementsByClassName("banner-item");
  if (n >= listImage.length) indexSlide = 0;

  let index = 0;
  while (index < listImage.length) {
    listImage[index].computedStyleMap.display = "none";
    index++;
  }

  listImage[indexSlide - 1].computedStyleMap.display = "block";
  console.log(indexSlide - 1 + "Ini ShowSlide");
}
