'use strict';

////////////////////////////
let employeeArray = [];
checkLocalAndPush();
///////////////////////////

function Employee(empId, fullName, department, level, img) {
    this.employeeID = empId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary1 = 0;
    this.imgPat = img;

}

let sectionInfo = document.getElementById('sectionInfo');

//////////////////////////////////////////////////////////////////
let sectionAdd11 = document.getElementById('mainId'); /////////////1//////////////// get section
let sectionAdd1 = document.createElement('section');
sectionAdd11.appendChild(sectionAdd1);
sectionAdd1.style.gridColumn = "1 / 2";
sectionAdd1.style.gridRow = "3 / 4";
sectionAdd1.style.display = "auto";
sectionAdd1.style.alignItems = "center";
// I tried to give width for section !!!
sectionAdd1.style.flexDirection = "row";
sectionAdd1.style.maxWidth = "auto";
sectionAdd1.style.position = "relative";



let sectionAdd22 = document.getElementById('mainId'); //////////////2/////////////// get section
let sectionAdd2 = document.createElement('section');
sectionAdd22.appendChild(sectionAdd2);
sectionAdd2.style.gridColumn = "2 / 3";
sectionAdd2.style.gridRow = "3 / 4";
sectionAdd2.style.display = "auto";
sectionAdd2.style.alignItems = "center";


let sectionAdd33 = document.getElementById('mainId'); ///////////////3////////////// get section
let sectionAdd3 = document.createElement('section');
sectionAdd33.appendChild(sectionAdd3);
sectionAdd3.style.gridColumn = "3 / 4";
sectionAdd3.style.gridRow = "3 / 4";
sectionAdd3.style.display = "auto";
sectionAdd3.style.alignItems = "center";

let sectionAdd44 = document.getElementById('mainId'); //////////////4/////////////// get section
let sectionAdd4 = document.createElement('section');
sectionAdd44.appendChild(sectionAdd4);
sectionAdd4.style.gridColumn = "4 / 5";
sectionAdd4.style.gridRow = "3 / 4";
sectionAdd4.style.display = "auto";
sectionAdd4.style.alignItems = "center";

//////////////////////////////////////////////////////////////////


function getRandom(min, max) {
    return (Math.random() * (max - min + 1)) + min;
}
Employee.prototype.salary = function () {

    let netSalary;
    let randSalary;
    if (this.level == "Senior") {
        randSalary = getRandom(1500, 2000);
    } else if (this.level == "Mid-Senior") {
        randSalary = getRandom(1000, 1500);

    } else if (this.level == "Junior") {
        randSalary = getRandom(500, 1000);
    }
    netSalary = randSalary - (randSalary * 0.075);
    this.salary1 = Math.floor(netSalary);

}

function render(arr) {
    sectionAdd1.innerHTML='';
    sectionAdd2.innerHTML='';
    sectionAdd3.innerHTML='';
    sectionAdd4.innerHTML='';

    for (let i = 0; i < arr.length ; i++) {

        if (arr[i].department == "administration") {


            let div = document.createElement('div');

            div.style.backgroundColor = "#FFCBCB";
            div.style.border = "thick solid #1572A1";
            div.style.borderRadius = "12px";
            div.style.padding = "8px";
            div.style.width = "500px";
            div.style.height = "600px";
            div.style.textAlign = "center";
            div.style.margin = "0 auto" // to page center 

            // div.style.display = "flex";
            //div.style.justifyContent = "center";

            sectionAdd1.appendChild(div);//////////////////////////1//////////////////////////
            //Img >> div
            let img = document.createElement('img');
            img.setAttribute('src', `${arr[i].imgPat}`);
            img.setAttribute('alt', `${arr[i].name}`);
            img.style.width = "300px";
            img.style.height = "300px";
            //img.style.display = "inline-block";
            div.appendChild(img);

            //div2 >> div
            let div2 = document.createElement('div');
            div.appendChild(div2);
            div2.style.fontFamily = "'Dongle', sans-serif";
            div2.style.fontSize = "30px";
            div2.style.fontWeight = "bold";
            //div2.style.display = "inline-block";

            //p name Id >> div2
            let p = document.createElement('p');
            p.style.color = "#1572A1";
            p.textContent = `Name: ${arr[i].fullName} - ID: ${arr[i].employeeID} `;
            div2.appendChild(p);

            // p2 Department level >> div2
            let p2 = document.createElement('p');
            p2.textContent = `Department: ${arr[i].department} - Level: ${arr[i].level} `;
            p2.style.color = "#1572A1";
            div2.appendChild(p2);

            // p3 Salary >> div2
            let p3 = document.createElement('p');
            p3.textContent = `${arr[i].salary1}`;
            p3.style.color = "#1572A1";
            div2.appendChild(p3);

        } else if (arr[i].department == "marketing") {


            let div = document.createElement('div');

            div.style.backgroundColor = "#E7FBBE";
            div.style.border = "thick solid #1572A1";
            div.style.borderRadius = "12px";
            div.style.padding = "8px";
            div.style.width = "500px";
            div.style.height = "600px";
            div.style.textAlign = "center";
            div.style.margin = "0 auto" // to page center 

            // div.style.display = "flex";
            //div.style.justifyContent = "center";

            sectionAdd2.appendChild(div);        ////////////////////////////2////////////////////////
            //Img >> div
            let img = document.createElement('img');
            img.setAttribute('src', `${arr[i].imgPat}`);
            img.setAttribute('alt', `${arr[i].name}`);
            img.style.width = "300px";
            img.style.height = "300px";
            //img.style.display = "inline-block";
            div.appendChild(img);

            //div2 >> div
            let div2 = document.createElement('div');
            div.appendChild(div2);
            div2.style.fontFamily = "'Dongle', sans-serif";
            div2.style.fontSize = "30px";
            div2.style.fontWeight = "bold";
            //div2.style.display = "inline-block";

            //p name Id >> div2
            let p = document.createElement('p');
            p.style.color = "#1572A1";
            p.textContent = `Name: ${arr[i].fullName} - ID: ${arr[i].employeeID} `;
            div2.appendChild(p);

            // p2 Department level >> div2
            let p2 = document.createElement('p');
            p2.textContent = `Department: ${arr[i].department} - Level: ${arr[i].level} `;
            p2.style.color = "#1572A1";
            div2.appendChild(p2);

            // p3 Salary >> div2
            let p3 = document.createElement('p');
            p3.textContent = `${arr[i].salary1}`;
            p3.style.color = "#1572A1";
            div2.appendChild(p3);


        } else if (arr[i].department == "development") {


            let div = document.createElement('div');

            div.style.backgroundColor = "#FFFDDE";
            div.style.border = "thick solid #1572A1";
            div.style.borderRadius = "12px";
            div.style.padding = "8px";
            div.style.width = "500px";
            div.style.height = "600px";
            div.style.textAlign = "center";
            div.style.margin = "0 auto" // to page center 

            // div.style.display = "flex";
            //div.style.justifyContent = "center";

            sectionAdd3.appendChild(div);/////////////////////3///////////////////////////////
            //Img >> div
            let img = document.createElement('img');
            img.setAttribute('src', `${arr[i].imgPat}`);
            img.setAttribute('alt', `${arr[i].name}`);
            img.style.width = "300px";
            img.style.height = "300px";
            //img.style.display = "inline-block";
            div.appendChild(img);

            //div2 >> div
            let div2 = document.createElement('div');
            div.appendChild(div2);
            div2.style.fontFamily = "'Dongle', sans-serif";
            div2.style.fontSize = "30px";
            div2.style.fontWeight = "bold";
            //div2.style.display = "inline-block";

            //p name Id >> div2
            let p = document.createElement('p');
            p.style.color = "#1572A1";
            p.textContent = `Name: ${arr[i].fullName} - ID: ${arr[i].employeeID} `;
            div2.appendChild(p);

            // p2 Department level >> div2
            let p2 = document.createElement('p');
            p2.textContent = `Department: ${arr[i].department} - Level: ${arr[i].level} `;
            p2.style.color = "#1572A1";
            div2.appendChild(p2);

            // p3 Salary >> div2
            let p3 = document.createElement('p');
            p3.textContent = `${arr[i].salary1}`;
            p3.style.color = "#1572A1";
            div2.appendChild(p3);


        } else if (arr[i].department == "finance") {

            let div = document.createElement('div');

            div.style.backgroundColor = "#CDDEFF";
            div.style.border = "thick solid #1572A1";
            div.style.borderRadius = "12px";
            div.style.padding = "8px";
            div.style.width = "500px";
            div.style.height = "600px";
            div.style.textAlign = "center";
            div.style.margin = "0 auto" // to page center 
            // div.style.display = "flex";
            //div.style.justifyContent = "center";
            sectionAdd4.appendChild(div);  //////////////////////////4//////////////////////////
            //Img >> div
            let img = document.createElement('img');
            img.setAttribute('src', `${arr[i].imgPat}`);
            img.setAttribute('alt', `${arr[i].name}`);
            img.style.width = "300px";
            img.style.height = "300px";
            //img.style.display = "inline-block";
            div.appendChild(img);

            //div2 >> div
            let div2 = document.createElement('div');
            div.appendChild(div2);
            div2.style.fontFamily = "'Dongle', sans-serif";
            div2.style.fontSize = "30px";
            div2.style.fontWeight = "bold";
            //div2.style.display = "inline-block";

            //p name Id >> div2
            let p = document.createElement('p');
            p.style.color = "#1572A1";
            p.textContent = `Name: ${arr[i].fullName} - ID: ${arr[i].employeeID} `;
            div2.appendChild(p);

            // p2 Department level >> div2
            let p2 = document.createElement('p');
            p2.textContent = `Department: ${arr[i].department} - Level: ${arr[i].level} `;
            p2.style.color = "#1572A1";
            div2.appendChild(p2);

            // p3 Salary >> div2
            let p3 = document.createElement('p');
            p3.textContent = `${arr[i].salary1}`;
            p3.style.color = "#1572A1";
            div2.appendChild(p3);


        }
    }

    }


    function getId() {
        let val = Math.floor(1000 + Math.random() * 9000);
        //console.log(val);
        return val;
    }
    function handelSubmit(event) {
        event.preventDefault();
        let empId = getId();
        let fullName = event.target.name.value;
        let department = event.target.department.value;
        let level = event.target.level.value;
        let img = event.target.imgurl.value;
        let newEmployee = new Employee(empId, fullName, department, level, img);
        newEmployee.salary();

        // Add For Local Storage //
        employeeArray.push(newEmployee); // ADD the user input to the origin array
        let jsonConvert = toJson(); // function to convert the origin array to JSON Format
        saveToLocalS(jsonConvert);

        render(readFromLocalS());
        ////////////////////////////////////
    }



    sectionInfo.addEventListener('submit', handelSubmit);

    ////////////////////////////// Task 9 ////////////////////////
    function checkLocalAndPush() {
        if (employeeArray.length == 0) {
            let arr = readFromLocalS();
            if (arr.length != 0) {
                employeeArray = arr;
            }
        }
    }

    function readFromLocalS() {
        let josnArray = localStorage.getItem("employee");
        let arr = JSON.parse(josnArray); // convert JSON Format to normal
        if (arr !== null) {
            return arr;
        } else {
            return [];
        }
    }

    function toJson() {
        let josnArray = JSON.stringify(employeeArray); // convert to JSON Format
        return josnArray;
    }

    function saveToLocalS(jsonConvert) {
        localStorage.setItem('employee', jsonConvert);
    }

    render(readFromLocalS());
