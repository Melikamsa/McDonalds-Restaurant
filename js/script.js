const $ = document;

const container = $.querySelector(".container");
const boxs = $.querySelector(".box");
const picture = $.querySelector("img");
const Specifications = $.querySelector(".Specifications");
const name = $.querySelector(".name");
const price = $.querySelector(".price");
const add = $.querySelector(".btnplus");
const Number = $.querySelector(".Number");
const remove = $.querySelector(".btnremove");
const prices = $.querySelector(".prices");
const pricesAllOrders = $.querySelector(".pricesAllOrders");
const pricesService = $.querySelector(".pricesService");
const Recorder = $.querySelector(".Record");
const recordService = $.querySelector(".recordService");
const tick = $.querySelector(".tick");
const alert = $.querySelector(".alert");
const fixedPrice = $.querySelector(".fixedPrice");
const free = $.querySelector(".free");
const message = $.querySelector(".message");
const close = $.querySelector(".close");
const input = $.querySelector("input");
const allFilter = $.querySelector(".allFilter");

const boxes = [
  {
    id: 1,
    pic: "./picture/hamburger.png",
    name: "همبرگر مخصوص",
    price: 10000,
    count: 0,
  },
  {
    id: 2,
    pic: "./picture/hamburger.png",
    name: "همبرگر معمولی",
    price: 8000,
    count: 0,
  },
  {
    id: 3,
    pic: "./picture/hamburger.png",
    name: "همبرگر مخصوص با قارچ و پنیر",
    price: 20000,
    count: 0,
  },
  {
    id: 4,
    pic: "./picture/hamburger.png",
    name: " همبرگر معمولی با قارچ و پنیر",
    price: 10000,
    count: 0,
  },
  {
    id: 5,
    pic: "./picture/french_fries.png",
    name: "سیب زمینی سرخ کرده",
    price: 10000,
    count: 0,
  },
  {
    id: 6,
    pic: "./picture/french_fries.png",
    name: "سیب زمینی سرخ کرده ویژه",
    price: 25000,
    count: 0,
  },
  {
    id: 7,
    pic: "./picture/soda.png",
    name: "نوشابه",
    price: 5000,
    count: 0,
  },
  {
    id: 8,
    pic: "./picture/soda.png",
    name: "نوشابه رژیمی",
    price: 6000,
    count: 0,
  },
  {
    id: 9,
    pic: "./picture/ceasar.png",
    name: "سالاد سزار",
    price: 25000,
    count: 0,
  },
  {
    id: 10,
    pic: "./picture/salad fasl.png",
    name: "سالاد فصل",
    price: 8000,
    count: 0,
  },
];
// console.log(boxes);

function renderbox() {
  container.innerHTML = "";

  boxes.forEach((food) => {
    container.innerHTML += `<div class="box">
  <div class="img">
    <img src="${food.pic}" alt="" />
  </div>
  <div class="Specifications">
    <p class="name">${food.name}</p>
    <div class="mony">
      <p class="price">${food.price}</p>
      <span class="toman"> تومان</span>
    </div>
    <div class="addOrRemove">
      <div class="plusOrMines">
        <button class="icn btnplus" onclick="addFood(${food.id})">+</button>
        <span class="icn Number">${food.count}</span>
        <button class="icn btnremove" style="background-Color 
        :${food.count > 0 ? "#B71C1C" : "#CFD8DC"};
        color
        :${food.count > 0 ? "#ffffff" : "#616161"}" 
        onclick="removeFood(${food.id})">-</button>
      </div>
      <div class="prc pricess">
        <p class="prices">${food.count * food.price}</p>
        <span class="toman">تومان</span>
      </div>
    </div>
  </div>
</div>
`;
  });
}
renderbox();

function addFood(id) {
  // console.log(id);
  let indexItem = boxes.findIndex(function (item) {
    return item.id == id;
  });
  // console.log(indexItem);
  // نمایش ایندکس
  let countItem = boxes[indexItem].count++;
  // console.log(countItem)
  countItem.innerHTML = boxes[indexItem].count;
  // console.log(countItem)
  // console.log(boxes[indexItem]);
  // نمایش کونت
  if (boxes[indexItem].count > 0) {
    Recorder.style.backgroundColor = "#B71C1C";
    Recorder.style.cursor = "pointer";
    recordService.style.color = "#ffffff";
  }

  let totalPrice = 0;
  boxes.forEach((item) => {
    totalPrice += item.count * item.price;
  });
  pricesAllOrders.innerHTML = totalPrice;
  // جمع کل سفارشات :

  pricesService.innerHTML = Math.floor(0.09 * totalPrice);
  // حق سرویس و کارمزد :

  fixedPrice.innerHTML = totalPrice + Math.floor(0.09 * totalPrice);
  // مبلغ قابل پرداخت :
  renderbox();
}

function removeFood(id) {
  let indexItem = boxes.findIndex(function (item) {
    return item.id == id;
  });
  // console.log(indexItem);
  // نمایش ایندکس

  let countItem = boxes[indexItem].count--;
  // console.log(countItem)
  countItem.innerHTML = boxes[indexItem].count;
  if (pricesAllOrders.innerHTML < 1) {
    boxes[indexItem].count = 0;
    pricesAllOrders.innerHTML = 0;
    pricesService.innerHTML = 0;
    fixedPrice.innerHTML = 0;
    Recorder.style.backgroundColor = "#CFD8DC";
    recordService.style.color = "#616161";
  }
  // console.log(countItem)
  console.log(boxes[indexItem]);
  // نمایش کونت

  let totalPrice = 0;
  boxes.forEach((item) => {
    totalPrice += item.count * item.price;
  });
  pricesAllOrders.innerHTML = totalPrice;
  // جمع کل سفارشات :

  pricesService.innerHTML = Math.floor(0.09 * totalPrice);
  // حق سرویس و کارمزد :

  fixedPrice.innerHTML = totalPrice + Math.floor(0.09 * totalPrice);
  // مبلغ قابل پرداخت :

  renderbox();
}

function fivePercent() {
  free.innerHTML = pricesAllOrders.innerHTML * 0.05;
  fixedPrice.innerHTML =
    +pricesAllOrders.innerHTML + +pricesService.innerHTML - +free.innerHTML;
  // تخفیف ۵ درصد
}

function twoPercent() {
  free.innerHTML = pricesAllOrders.innerHTML * 0.02;
  fixedPrice.innerHTML =
    +pricesAllOrders.innerHTML + +pricesService.innerHTML - +free.innerHTML;
  // تخفیف ۲ درصد
}

function Discount() {
  if (input.value == "golden") {
    alert.style.display = "none";
    fivePercent();
  } else if (input.value == "silver") {
    alert.style.display = "none";
    twoPercent();
  } else {
    alert.style.display = "block";
  }
}

function AlertRecordService() {
  if (fixedPrice.innerHTML != 0) {
    Recorder.style.backgroundColor = "#CFD8DC";
    recordService.style.color = "#616161";
    allFilter.style.display = "block";
  }
}

function closebox() {
  input.value = "";
  window.location.reload();
}

tick.addEventListener("click", Discount);
Recorder.addEventListener("click", AlertRecordService);
close.addEventListener("click", closebox);
