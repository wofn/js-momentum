const boxImage = document.querySelector(".last-box .box-img");
const button = document.querySelector(".last-box button");
const image = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
];

const chosenImage = image[Math.floor(Math.random() * image.length)];

boxImage.src = `img/${chosenImage}`;

/*버튼 클릭시 이미지 변경 */

function imgChangeBtn() {
  const chosenImage = image[Math.floor(Math.random() * image.length)];
  boxImage.src = `img/${chosenImage}`;
}

button.addEventListener("click", imgChangeBtn);
