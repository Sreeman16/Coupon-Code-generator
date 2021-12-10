const coupon = document.querySelector(".coupon");
const btn = document.querySelector(".button");
const text = document.querySelector(".text");

const couponcode = () => {
  const code = Math.floor(Math.random() * 1000).toString();
  if (code.length > 2) {
    couponNum = `COUPONABC-${code}`;
    coupon.value = couponNum;
  }
};

btn.addEventListener("click", () => {
  coupon.select();
  document.execCommand("copy");
  btn.textContent = "Copied";
  btn.disabled = true;
  text.textContent = `Your Next New Coupon will generate in 5 sec `;
  setTimeout(() => {
    btn.textContent = "Copy";
    couponcode();
    text.textContent = "Click the button to generate New Code";
    btn.disabled = false;
  }, 5000);
});

couponcode();