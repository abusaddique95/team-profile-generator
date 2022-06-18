const Manager = require("./Manager");

describe("Manager", () => {
it("should be an instance of a manager", () => {
    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "12";
    const officeNumber = "4567";
      Manager = new Manager(name, id, email);
  
    const expected = Intern;
    const actual = new Intern(name, id, email);
      expect(actual).toEqual(expected);
    });

it("should return manager name", () => {
    const expected = "Bob Smith";
    
    const intern = new Manager(name, id, email);
    
    const actual = Manager.getName();
    
    expect(actual).toEqual(expected);
    });

it("should return manager email", () => {
    const expected = "Bob@gmail.com";
        
    const intern = new Manager(name, id, email);
        
    const actual = Manager.getEmail()
        
        expect(actual).toEqual(expected);
        });

it("should return manager ID", () => {
    const expected = "12";
            
    const intern = new Manager(name, id, email);
            
    const actual = Manager.getId();
            
    expect(actual).toEqual(expected);
    });

it("should return office number", () => {
    const expected = "4567";
                
    const intern = new Manager(name, id, email);
                
    const actual = Manager.generateOfficeNumber();
                
    expect(actual).toEqual(expected);
    });
       
    

}


  