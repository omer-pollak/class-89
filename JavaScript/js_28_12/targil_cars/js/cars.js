var cars = [];

var singleCar = {
  carNumber: 0,
  carType: "",
  carFuel: "",
  carYear: 0,
  carLic: false,
};

const sayHi = () => {
  alert("hi Hila :o)");
};

const handleData = () => {
  //pointers
  const carNumber = document.getElementById("carNumber").value;
  const carType = document.getElementById("carType").value;
  const carFuels = document.getElementsByName("carFuel");
  const carYear = +document.getElementById("year").value;
  const carLic = document.getElementById("license").checked;

  var fuel = "";
  carFuels.forEach((item) => {
    if (item.checked) {
      fuel = item.value;
    }
  });

  //console.log(carNumber, carType, fuel, carYear, carLic);

  singleCar.carNumber = carNumber;
  singleCar.carType = carType;
  singleCar.carFuel = fuel;
  singleCar.carYear = carYear;
  singleCar.carLic = carLic;

  console.log(singleCar);

  cars.push(singleCar);
};

const handleData_old = () => {
  //   alert("אתה ממש קרציה");
  const carFuels = document.getElementsByName("carFuel");
  var carFuel = "";
  for (var index = 0; index < carFuels.length; index++) {
    if (carFuels[index].checked) {
      //console.log(carFuels[index].value);
      carFuel = carFuels[index].value;
      break;
    }
    //console.log(index);
  }
  console.log(carFuel);
};