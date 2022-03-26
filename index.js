const typeDocument = "AVI";

// Generate ID for the date
let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;
console.log(today);

// Generate ID for the month

function sumNumberToString(number) {
  let output = [];
  const numberToString = number.toString();
  for (let i = 0; i < numberToString.length; i++) {
    output.push(+numberToString.charAt(i));
  }
  return output
    .reduce((a, b) => {
      return a + b;
    })
    .toString();
}

const idMonth = sumNumberToString(mm);
const idYear = sumNumberToString(yyyy);

console.log(idYear, idMonth);
// Generate country ID
document.getElementById("avi-infos").addEventListener("submit", (e) => {
  e.preventDefault();
  let paysId = "";
  const pays = document.getElementById("country").value;
  console.log(pays);
  switch (pays) {
    case "Sénégal":
      paysId = "208";
      break;
    case "Bénin":
      paysId = "207";
      break;
    case "Mali":
      paysId = "210";
      break;
    case "Congo-Brazzaville":
      paysId = "300";
      break;
    case "Cameroun":
      paysId = "310";
      break;
    case "CIV":
      paysId = "307";
      break;
    case "Togo":
      paysId = "309";
      break;
    default:
      console.log(`Sorry, wrong country.`);
  }
  console.log(paysId);

  //Generate firstName ID
  const firstLetterFirstName = document
    .getElementById("premiere-lettre")
    .value.toUpperCase();
  console.log(firstLetterFirstName);
  const secondLetterFirstName = document
    .getElementById("deuxieme-lettre")
    .value.toUpperCase();
  const thirdLetterFirstName = document
    .getElementById("troisieme-lettre")
    .value.toUpperCase();
  //Generate name ID
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  if (
    firstLetterFirstName.length > 1 ||
    firstLetterFirstName.length == 0 ||
    secondLetterFirstName.length > 1 ||
    secondLetterFirstName.length == 0 ||
    thirdLetterFirstName.length > 1 ||
    thirdLetterFirstName.length == 0
  ) {
    alert("Rentrez une lettre");
  } else {
    let firstNameId = alphabet.indexOf(firstLetterFirstName).toString();

    if (firstNameId.length == 1) {
      firstNameId += Math.floor(Math.random() * 10).toString();
    }

    //Generate SecondName ID
    let secondNameId = alphabet.indexOf(secondLetterFirstName).toString();
    if (secondNameId.length == 1) {
      secondNameId += Math.floor(Math.random() * 10).toString();
    }
    //Generate ThirdName ID
    let thirdNameId = alphabet.indexOf(thirdLetterFirstName);
    if (thirdNameId != "0") {
      thirdNameId = sumNumberToString(thirdNameId);
    } else {
      thirdNameId = alphabet.indexOf(thirdLetterFirstName).toString();
    }

    console.log(firstNameId, secondNameId, thirdNameId);
    const idComplet =
      paysId + idMonth + firstNameId + idYear + secondNameId + thirdNameId;

    console.log(idComplet);
    document.getElementById(
      "avi-container"
    ).innerHTML = `<h2 id="avi-number">${idComplet}</h2>`;
  }
});
document
  .getElementById("avi-container")
  .addEventListener("dblclick", (event) => {
    navigator.clipboard
      .writeText(event.target.innerText)
      .then(() => {
        alert("Copié dans le presse-papier");
      })
      .catch(() => {
        alert("something went wrong");
      });
  });
