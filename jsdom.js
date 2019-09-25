// Sample Code for #part0
let zero = document.querySelector("#part00");
let hello = document.createTextNode("Hello world!");
 zero.appendChild(hello);
/*--- begin answer part00 ---*/
const myname = "Jesse David"
/*--- end answer part00 ---*/
if (typeof myname !== "undefined") {
  let textBefore = document.createTextNode("My name is ");
  zero.appendChild(textBefore);
  let boldNode = document.createElement("b");
  let name = document.createTextNode(myname);
  zero.appendChild(boldNode);
  boldNode.appendChild(name);
  let textAfter = document.createTextNode(". This work is solely mine! ");
  zero.appendChild(textAfter);

  zero.appendChild(
    document.createTextNode(
      "I understand that " +
        "copying someone else's code and claiming to be my own work " +
        "or sharing my code with someone else is a "
    )
  );
  let honesty = document.createElement("b");
  honesty.appendChild(document.createTextNode("violation"));
  zero.appendChild(honesty);
  zero.appendChild(document.createTextNode(" of academic honesty."));
}

// Code for part 1
let atoms = [
  "Aluminum",
  "Barium",
  "Carbon",
  "Dubnium",
  "Erbium",
  "Fluor",
  "Gallium",
  "Hydrogen",
  "Helium",
  "Iron",
  "Krypton",
  "Lithium",
  "Magnesium",
  "Nitrogen",
  "Oxygen",
  "Palladium",
  "Radon",
  "Silicon",
  "Titanium",
  "Uranium",
  "Vanadium",
  "Xenon",
  "Zinc"
];

let N = atoms.length;
for (let k = 0; k < 50; k++) {
  const pos1 = Math.floor(Math.random() * N);
  const pos2 = Math.floor(Math.random() * N);
  let tmp = atoms[pos1];
  atoms[pos1] = atoms[pos2];
  atoms[pos2] = tmp;
}

/*--- begin answer part01 ---*/
let one = document.querySelector("#part01");
let orderList = document.createElement("ol");
one.appendChild(orderList);
for(let i = 0; i < N; i++){
    let listItem = document.createElement("li");
    orderList.appendChild(listItem);
    listItem.appendChild(document.createTextNode(atoms[i]));
}
/*--- end answer part01 ---*/

// Code for part 2
// Don't rename the following two variables!
/*--- begin answer part02 ---*/

const myDomesticTravel = {destination: "Denver, Colorado", dateOfVisit: "March 2018", isAbroad: false};
const myInternationalTravel = {destination: "Vienna, Austria", dateOfVisit: "June 2019", isAbroad: true};

let two = document.querySelector("#part02");

const paragraphs = function(trip){ 
    let section = "Going to " + trip.destination + " was an incredible experience, I went there in " + trip.dateOfVisit + ".";
    let par = document.createElement("p");
    let node = document.createTextNode(section);
    par.appendChild(node);
    return par;
};

let dom = paragraphs(myDomesticTravel);
let inter = paragraphs(myInternationalTravel);

dom.classList.add("domestic");
inter.classList.add("international");

two.appendChild(dom);
two.appendChild(inter);

/*--- end answer part02 ---*/

// Code for part 3
let atomObjects = [
  { name: "Aluminum", weight: 26.982 },
  { name: "Barium", weight: 137.33 },
  { name: "Carbon", weight: 12.011 },
  { name: "Dubnium", weight: 268 },
  { name: "Erbium", weight: 167.26 },
  { name: "Fluor", weight: 18.988 },
  { name: "Gallium", weight: 69.723 },
  { name: "Hydrogen", weight: 1.008 },
  { name: "Helium", weight: 4.0026 },
  { name: "Iron", weight: 55.845 },
  { name: "Krypton", weight: 83.798 },
  { name: "Lithium", weight: 6.94 },
  { name: "Magnesium", weight: 24.305 },
  { name: "Nitrogen", weight: 14.007 },
  { name: "Oxygen", weight: 15.999 },
  { name: "Palladium", weight: 106.42 },
  { name: "Radon", weight: 222 },
  { name: "Silicon", weight: 28.085 },
  { name: "Titanium", weight: 47.867 },
  { name: "Uranium", weight: 238.03 },
  { name: "Vanadium", weight: 50.942 },
  { name: "Xenon", weight: 131.29 },
  { name: "Zinc", weight: 65.38 }
];
N = atomObjects.length;
for (let k = 0; k < 50; k++) {
  const pos1 = Math.floor(Math.random() * N);
  const pos2 = Math.floor(Math.random() * N);
  let tmp = atomObjects[pos1];
  atomObjects[pos1] = atomObjects[pos2];
  atomObjects[pos2] = tmp;
}

/*--- begin answer part03 ---*/
let three = document.querySelector("#part03");
let list = document.createElement("ol");

atomObjects.forEach(function(item){
    let listItem = document.createElement("li");
    let element = document.createTextNode(item.name + "(weight: " + item.weight.toFixed(1) + ")");
    
    listItem.classList.add(item.weight > 150 ? "heavy" : "light");
    listItem.appendChild(element);
    list.append(listItem);    
});
three.append(list);

/*--- end answer part03 ---*/

// Code for part 4
/*--- begin answer part04 ---*/
let four = document.querySelector("#part04");
let table = document.createElement("table");
let tableBody = document.createElement("tbody");
function createTable(){

  for(let i = 0; i < atomObjects.length + 1; i++ ){
      let tableRow = document.createElement('tr');
    for(let j = 0; j < 2; j++){
      if(i == (atomObjects.length + 1) && j == 1){
        break;
      }
      else{
        if(i == 0 && j == 0){
          let tableHeader = document.createElement('th');
          tableHeader.appendChild(document.createTextNode("Atom"));
          tableRow.appendChild(tableHeader);
        }
        else if(i == 0 && j == 1){
          let tableHeader = document.createElement('th');
          tableHeader.appendChild(document.createTextNode("Weight"));
          tableRow.appendChild(tableHeader);
        }
        else{
          let tableData = document.createElement('td');
          if(j == 0){
            tableData.appendChild(document.createTextNode(atomObjects[i-1].name))
          }
          else{
            tableData.appendChild(document.createTextNode(atomObjects[i-1].weight))
          }
          tableRow.classList.add(atomObjects[i-1].weight > 150 ? "heavy" : "light");
          tableRow.appendChild(tableData);
        }
      }
    }
    tableBody.appendChild(tableRow);
  }
  table.appendChild(tableBody);
};

createTable();
four.appendChild(table);




/*--- end answer part04 ---*/


// Code for part 5 (Extra credit)
/*--- begin answer part05 ---*/
/*--- end answer part05 ---*/
