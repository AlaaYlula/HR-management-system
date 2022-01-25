"use strict"

function Employee(empId,fullName,department,level){
    this.employeeID = empId ; 
    this.fullName = fullName;
    this.department=department;
    this.level=level;
    this.salary1=0;
    this.imgPat=`./Images/${this.employeeID.png}`;
    
}

Employee.prototype.salary = function(){
    let netSalary;
    let randSalary;
    if(this.level== "Senior"){
        randSalary =(Math.random() * (2000 - 1500 + 1)) + 1500 ;
    }else if(this.level== "Mid-Senior"){
        randSalary= (Math.random() * (1500 - 1000 + 1)) + 1000;

    }else if(this.level== "Junior"){
        randSalary = (Math.random() * (1000 - 500 + 1)) + 500;
    }
    netSalary = randSalary - (randSalary*0.075) ; 
    this.salary1 = netSalary ; 
}

Employee.prototype.render = function(){

    // 2 create paragraph
   let p = document.createElement(`p`);
   // 3 create content
   p.textContent = `${this.fullName} ${this.salary1}`;
   //4 we append the p to section
   sec.appendChild(p);

  //  document.write(`<p> ${this.fullName}      ${this.salary1}</p>`);
  //document.getElementById("pId").innerHTML = `${this.fullName} ${this.salary1} `;
  // create my text
  //   let sHeader = document.createTextNode(`${this.fullName} ${this.salary1}`);

  //create an element for the text and append it
    // let spanHeader = document.createElement('p');
    // spanHeader.appendChild(sHeader);

  // grab a reference to the div header/var divHeader = document.getElementById('pId');
     // var divHeader = document.getElementById('pId');

  // append the new element to the main
  //  divHeader.appendChild(spanHeader);

   
}

let emp1 = new Employee(1000,"Ghazi Samer","Administration","Senior");
emp1.salary();
let emp2 = new Employee(1001,"Lana Ali","Finance","Senior");
emp2.salary();
let emp3 = new Employee(1002,"Tamara Ayoub","Marketing","Senior");
emp3.salary();
let emp4 = new Employee(1003,"Safi Walider","Administration","Mid-Senior");
emp4.salary();
let emp5 = new Employee(1004,"Omar Zaid","Development","Senior");
emp5.salary();
let emp6 = new Employee(1005,"Rana Saleh","Development","Junior");
emp6.salary();
let emp7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");
emp7.salary();


//document.write(`<p> Full Name      Net_Salary</p>`);
    // where 1
    let sec = document.getElementById('section_java');
    // 2 creat paragraph tag
    let p = document.createElement(`p`);
    // 3 create content
    p.textContent = `Full Name      Net_Salary`;
    // 4 we append th p to section
    sec.appendChild(p);

emp1.render();
emp2.render();
emp3.render();
emp4.render();
emp5.render();
emp6.render();
emp7.render();



