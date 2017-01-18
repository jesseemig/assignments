

var employees = [];


function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function() {
        console.log("Name: " + this.name + ", " + "Job Title: " + this.jobTitle + ", " + "Salary: " + this.salary + "/hour, " + "Status: " + this.status);
    }
}

var jill = new Employee("Jill Smith", "CEO", 400);
var jack = new Employee("Jack Jones", "Accountant", 200);
var alice = new Employee("Alice Murphy", "Account Manager", 50);
var toby = new Employee("Toby Flenderson", "HR", 50);

toby.status = "Part Time";

jill.printEmployeeForm();
jack.printEmployeeForm();
alice.printEmployeeForm();
toby.printEmployeeForm();





//  var employees = [jill, jack, alice, toby];
//  
//  var jill = new Employee("Jill Smith", "CEO", 400, "Full Time");
//  var jack = new Employee("Jack Jones", "Accountant", 200, "Full Time");
//  var alice = new Employee("Alice Murphy", "Account Manager", 50, "Full Time");
//  var toby = new Employee("Toby Flenderson", "HR", 50, "Part Time");
//  
//  function Employee(n, jt, s, sts) {
//      this.name = n;
//      this.jobTitle = jt;
//      this.salary = s;
//      this.status = sts;
//      this.speak = function() {
//          for(var i = 0; i < employees.length; i++) {
//              if(this.status || "Full Time"  ){
//          console.log("Name: " + this.name + ", " + "Job Title: " + this.jobTitle + ", " + "Salary: " + this.salary + "/hour, " + "Status: " + this.status);
//      } else {
//          console.log("Name: " + this.name + ", " + "Job Title: " + this.jobTitle + ", " + "Salary: " + this.salary + "/hour, " + "Status: Part Time");
//      }
//  }
//  }
//  }
//  
//  jill.speak();
//  jack.speak();
//  alice.speak();
//  toby.speak();








