//Chọn phim
document
  .querySelector(".main__bookMovie__film")
  .addEventListener("click", function () {
    this.querySelector(".bookMovie__film__drop").classList.toggle("active"); // hàm toggle: dùng để add class hoặc remove class active
  });
document.querySelectorAll(".bookMovie__film__drop li").forEach((el) => {
  el.addEventListener("click", function () {
    document.querySelector(".bookMovie__film__change").innerHTML = el.innerHTML;
  });
});
// Chọn rạp
document
  .querySelector(".bookMovie__item")
  .addEventListener("click", function () {
    this.querySelector(".cinema__drop").classList.toggle("active"); // hàm toggle: dùng để add class hoặc remove class active
  });
document.querySelectorAll(".cinema__drop li").forEach((el) => {
  el.addEventListener("click", function () {
    document.querySelector(".bookMovie__item__change").innerHTML = el.innerHTML;
  });
});
// Ngay
document
  .querySelector(".main__bookMovie__date")
  .addEventListener("click", function () {
    this.querySelector(".date__drop").classList.toggle("active"); // hàm toggle: dùng để add class hoặc remove class active
  });
document.querySelectorAll(".date__drop li").forEach((el) => {
  el.addEventListener("click", function () {
    document.querySelector(".bookMovie__date__change").innerHTML = el.innerHTML;
  });
});
// Giờ chiếu
document
  .querySelector(".main__bookMovie__showtime")
  .addEventListener("click", function () {
    this.querySelector(".showtime__drop").classList.toggle("active"); // hàm toggle: dùng để add class hoặc remove class active
  });
document.querySelectorAll(".showtime__drop li").forEach((el) => {
  el.addEventListener("click", function () {
    document.querySelector(".bookMovie__showtime__change").innerHTML =
      el.innerHTML;
  });
});
