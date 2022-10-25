// №1 Реализуйте класс Worker (работник), который будет иметь следующие свойства: name (имя), surname(фамилия), rate(ставка за день работы),
// days(количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
// Зарплата-это произведение (умножение) ставки rate на количество отработанных дней days.


class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {return this.rate * this.days;}
}
const worker = new Worker('Zulfua', 'Vaninova', 100, 7);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());




// №2 Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения
// сделайте методы-геттеры (подсказка используйте методы Get and Set)

class WorkerTwo {
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    getName() {
        return this.#name;
    }
    getSurname() {
        return this.#surname;
    }
    getRate() {
        return this.#rate;
    }
    getDays() {
        return this.#days;
    }
    getSalary(rate, days) {
        let salary = this.#rate * this.#days;
        return salary;
    }
}

workerTwo = new WorkerTwo('Anne', 'Braun', '125', '28');
console.log(workerTwo.getName());
console.log(workerTwo.getSurname());
console.log(workerTwo.getRate());
console.log(workerTwo.getDays());
console.log(workerTwo.getSalary());

