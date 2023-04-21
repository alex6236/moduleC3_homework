console.log('Купил тройник, можно подключить еще и принтер');

class ElectricalAppliance {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }

  // метод, который определяет прибор как включенный в розетку
  plugIn() {
    console.log(this.name + " подключен!");
    this.isPlugged = true;
  }
  
  // метод, который определяет прибор как выключеный из розетки
  unplug() {
    console.log(this.name + " отключен!");
    this.isPlugged = false;
  }
}

// Прибор 1
class Lamp extends ElectricalAppliance {
  constructor (name, brand, power, bulbType) {
    super(name, power);
    this.brand = brand;
    this.bulbType = bulbType;
    this.isPlugged = true;
  }
}

// Прибор 2
class Computer extends ElectricalAppliance {
  constructor(name, brand, power, type, functionality) {
    super(name, power); 
    this.brand = brand;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
  }
}

// Прибор 3
class Printer extends ElectricalAppliance{
  constructor(name, brand, power, type, functionality) {
    super(name, power); 
    this.brand = brand;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
  }
}

// экземпляр лампы
const tableLamp = new Lamp("Светильник", "Xiaomi", 5, "LED");

// экземпляр компьютера
const homePC = new Computer("Компьютер", "Intel", 120, "стационарный", "для работы");

// экземпляр принтера
const printer = new Printer("Принтер", "НР", 500, "МФУ", "локальный");

// включить, отключить лампу
tableLamp.plugIn();
// tableLamp.unplug();

// включить, отключить homePC
homePC.plugIn();
// homePC.unplug();

// включить, отключить принтер
printer.plugIn();
// printer.unplug();

// Электоросчетчик
function electricMeter(seconds) {
    let sec = seconds;
    let sumPower = 0;
    sumPower = tableLamp.isPlugged ? sumPower + tableLamp.power : sumPower;
    sumPower = homePC.isPlugged ? sumPower + homePC.power : sumPower;
    sumPower = printer.isPlugged ? sumPower + printer.power : sumPower;
    return () => {
      if (sumPower == 0) {
        console.log('Темно, тихо, скучно зато экономно')
      }
      else {sec++
      let result = sumPower / 1000 / 3600 * sec;
      console.log('Счетчик намотал ' + result.toFixed(6) + ':Квт·ч');
      }
    }
}

// результат
// console.log(homePC)
// console.log(tableLamp)
// console.log(printer)

let meterReadings = electricMeter(0);
let idMeterReadings = setInterval(meterReadings, 1000);
setTimeout(() => {
    console.log('Ну ни....себе! Срочно продать тройник!');
    clearInterval(idMeterReadings)
    }, 10000);

