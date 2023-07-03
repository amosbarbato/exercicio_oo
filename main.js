class Pessoa {
    constructor(name) {
        this.name = name;
    }
}

class Funcionario extends Pessoa {
    constructor(name, role, salary) {
        super(name);
        this.role = role;
        this.salary = salary;
    }

    aumento() {
        const newSalary = this.salary * 1.1;
        this.salary = newSalary;
    }
}

class Estagiario extends Funcionario {
    constructor(name) {
        super(name, "Estagiário", 2000);
    }

    aumento() {
        const newSalary = this.salary * 1.07;
        this.salary = newSalary;
    }
}

class Gerente extends Funcionario {
    constructor(name) {
        super(name, "Gerente", 10000);
    }

    aumento() {
        const newSalary = this.salary * 1.1;
        this.salary = newSalary;
    }
}

const worker1 = new Funcionario("Maria", "dev front-end", 5000);
const worker2 = new Estagiario("Pedro");
const worker3 = new Gerente("Paula");

worker1.aumento();
console.log(worker1.salary);

worker2.aumento();
console.log(worker2.salary);

worker3.aumento();
console.log(worker3.salary);