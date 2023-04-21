function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

// Прибор 1
function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
};

Lamp.prototype = new ElectricalAppliance();

// Прибор 2
function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalAppliance();

// экземпляр лампы
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");

// экземпляр компьютера
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

// включить отключить лампу от электосети
tableLamp.plugIn();
// tableLamp.unplug();

// включить отключить компьютер от электосети
homePC.unplug();
// homePC.plugIn();

// Электоросчетчик
function electricMeter(seconds) {
    let sec = seconds;
    if (homePC.isPlugged) {
        return function(){
            sec++
            let result = homePC.power / 1000 / 3600 * sec;
            console.log('Счетчик намотал ' + result.toFixed(6) + ':Квт·ч')
        }
    }
    else if (tableLamp.isPlugged) {
        return function(){
            sec++
            let result = tableLamp.power / 1000 / 3600 * sec;
            console.log('Счетчик намотал ' + result.toFixed(6) + ':Квт·ч')
        }
    }
    else {
        return function() {
            console.log('Все выключили и эконоooмим...')
        }
    }
}

let meterReadings = electricMeter(0);
let idMeterReadings = setInterval(meterReadings, 1000);
setTimeout(function() {
    console.log('Не забыть купить тройник!');
    clearInterval(idMeterReadings)
    }, 10000);

// результат
// console.log(homePC)
// console.log(tableLamp)

