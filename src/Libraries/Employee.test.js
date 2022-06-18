const Employee = require("./Employee");
const { name, id, email, role } = require("./Employee")



describe("Employee", () => {
    it("should create and instance of Employee", () => {
        const name = "Bob Smith";
        const email = "bobsmith@bob.com"
        const id = "1"

        const expected = employee;
        const actual = new Employee(name, id, email);
        expect(actual).toEqual(expected);
    });
    

    it("should expect a name of employee", () => {
        const expected = "Bob Smith"

        const name = "Bob Smith";
        const email = "bobsmith@bob.com"
        const id = "1"
        const employee = new Employee(name, email id)
        
        const actual = employee.getName();
        expect(actual).toEqual(expected);
    });

    it("should expect a valid id", () => {
        const expected = "123"

        const name = "Bob Smith";
        const email = "bobsmith@bob.com"
        const id = "123"
        const employee = new Employee(name, email id)
        
        const actual = employee.getId();
        expect(actual).toEqual(expected);
    });

    it("should expect a valid email", () => {
        const expected = "123"

        const name = "Bob Smith";
        const email = "bobsmith@bob.com"
        const id = "123"
        const employee = new Employee(name, email id)
        
        const actual = employee.getEmail();
        expect(actual).toEqual(expected);
    });

    it("should expect a valid role", () => {
        const expected = "Employee"

        const name = "Bob Smith";
        const email = "bobsmith@bob.com"
        const id = "123"
        const employee = new Employee(name, email id)
        
        const actual = employee.getRole();
        expect(actual).toEqual(expected);
    });
}