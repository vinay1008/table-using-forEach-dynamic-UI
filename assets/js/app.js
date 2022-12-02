
var cl = console.log;


// var ages = [12, 13, 14, 15, 2, 6, 36, 58, 59, 23, 45, 75, 8, 6];


// ages.forEach(function(age){
//     cl(age);
// })





var skills = ["HTML5", "CSS3", "javaScript", "TypeScript", "Angular"];

var skillInfo = document.getElementById(skillinfo);

var result = `<ul class="list-group">`;

skills.forEach(function (skill) {
  cl(skill);
  result += `<li class='list-group-item'> I love ${skill} </li>`;
})

result += `</ul>`;

skillinfo.innerHTML = result;



var cheminfo = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

var chemdiv = document.getElementById('cheminfo');

var result1 = ``;

cheminfo.forEach(function (chem) {
  result1 += `<tr><td>${chem.position}</td>`;
  result1 += `<td>${chem.name}</td>`;
  result1 += `<td>${chem.weight}</td>`;
  result1 += `<td>${chem.symbol}</td></tr>`;

})

cl(result1);
chemdiv.innerHTML = result1;


var aInfo =[
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];


var authordiv = document.getElementById('authorinfo');
var result2 = ``;
aInfo.forEach(function(authors){
  result2 += `<tr> <td>${authors.author} </td>`;
  result2 += `<td>${authors.title} </td>`;
  result2 += `<td>${authors.libraryID} </td> </tr>`;
})

cl(result2);
authordiv.innerHTML = result2;