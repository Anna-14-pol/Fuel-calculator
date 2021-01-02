const fuelCost = document.getElementById("cena-paliwa");
const combKmCity = document.getElementById("spalinowy-km-miasto");
const combKMRoute = document.getElementById("spalinowy-km-trasa");
const hybrKMCity = document.getElementById("hybrydowy-km-miasto");
const hybrKmRoute = document.getElementById("hybrydowy-km-trasa");
let costComb;
let costHybr;

function calculateComb() {
  if (fuelCost.value >= 0 && fuelCost.value < 100) {
    let costCombCity = (fuelCost.value * combKmCity.value * 8) / 100;
    let costCombRoute = (fuelCost.value * combKMRoute.value * 5) / 100;
    costComb = Math.round((costCombCity + costCombRoute) * 100) / 100;
    document.getElementById(
      "myHeadingSpalinowy"
    ).innerHTML = `the cost of the journey is ${costComb} `;
  }
}

function calculateHybr() {
  if (fuelCost.value >= 0 && fuelCost.value < 100) {
    let costHybrCity = (fuelCost.value * hybrKMCity.value * 4) / 100;
    let costHybrRoute = (fuelCost.value * hybrKmRoute.value * 7) / 100;
    costHybr = Math.round((costHybrCity + costHybrRoute) * 100) / 100;
    document.getElementById(
      "myHeadingHybrydowy"
    ).innerHTML = `the cost of the journey is ${costHybr} `;
  }
}

function correctPrice(object) {
  if (object.value.length > object.maxLength)
    object.value = object.value.slice(0, object.maxLength);

  if (fuelCost.value >= 0 && fuelCost.value < 100) {
    function changeCombCity() {
      document.getElementById("x-s-m").innerHTML = combKmCity.value;
      calculateComb();
    }
    function changeCombRoute() {
      document.getElementById("y-s-t").innerHTML = combKMRoute.value;
      calculateComb();
    }
    function changeHybrCity() {
      document.getElementById("z-h-m").innerHTML = hybrKMCity.value;
      calculateHybr();
    }
    function changeHybrRoute() {
      document.getElementById("a-h-t").innerHTML = hybrKmRoute.value;
      calculateHybr();
    }
    
  } else {
    Alert.render();

  }
  changeCombCity();
  changeCombRoute();
  changeHybrCity();
  changeHybrRoute();
}

function $(id) {
  return document.getElementById(id);
}

onload = function() {
  $("spalinowy-km-miasto").oninput = function() {
    $("s-miasto").innerHTML = this.value;
    calculateComb();
  };
  $("spalinowy-km-miasto").oninput();
  $("spalinowy-km-trasa").oninput = function() {
    $("s-trasa").innerHTML = this.value;
    calculateComb();
  };
  $("spalinowy-km-trasa").oninput();
  $("hybrydowy-km-miasto").oninput = function() {
    $("h-miasto").innerHTML = this.value;
    calculateHybr();
  };
  $("hybrydowy-km-miasto").oninput();
  $("hybrydowy-km-trasa").oninput = function() {
    $("h-trasa").innerHTML = this.value;
    calculateHybr();
  };
  $("hybrydowy-km-trasa").oninput();
  correctPrice();
};

class customAlert {
  constructor() {
    this.render = function() {
      let winW = window.innerWidth;
      let winH = window.innerHeight;
      let dialogoverlay = document.getElementById("dialogoverlay");
      let dialogbox = document.getElementById("dialogbox");
      dialogoverlay.style.display = "block";
      dialogoverlay.style.height = winH + "px";
      dialogbox.style.left = winW / 2 - 550 * 0.5 + "px";
      dialogbox.style.top = "100px";
      dialogbox.style.display = "block";
      document.getElementById("dialogboxhead").innerHTML =
        "Acknowledge This Message";
      document.getElementById("dialogboxbody").innerHTML =
        "Correct price value is between: 0-100";
      document.getElementById("dialogboxfoot").innerHTML =
        '<button id="button" onclick="Alert.ok()">ok</button>';
    };
    this.ok = function() {
      document.getElementById("dialogbox").style.display = "none";
      document.getElementById("dialogoverlay").style.display = "none";
    };
  }
}
let Alert = new customAlert();


  