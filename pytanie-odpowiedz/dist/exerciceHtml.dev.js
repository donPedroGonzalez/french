"use strict";

var questions, answers, hints;

window.onload = function () {
  document.getElementById("button").disabled = true;
  var exerciceBody = document.getElementById("exercice-wrapper");
  questions = ["Przetłumacz zdania.", "Lubię wspinaczkę.", "Wolę oglądać filmy.", "Nie lubię czytać książek", "Chcę posłuchać muzyki", "Teraz oglądam film", "Napijmy się herbaty."];
  answers = ["Użyj czasowników w nawiasach", "J'aime l'escalade.", "Je préfère regarder les films.", "Je n'aime pas lire les livres.", "Je veux écouter de la musique", "Maintenant, je regarde un film.", "Buvons du thé."];
  hints = ["Verbes", "aimer", "regarder", "lire", "écouter", "regarder", "boire"];
  var myForm = document.createElement("form");
  myForm.setAttribute("id", "myExercice");
  document.getElementById("premiere-consigne").innerText = questions[0];
  document.getElementById("deuxieme-consigne").innerText = answers[0];
  document.getElementById("footer-cat-info").innerText = hints[0];
  var newItemLabel, newItemInput;

  for (var i = 1; i < questions.length; i++) {
    newItemLabel = document.createElement("label");
    newItemLabel.setAttribute("for", "item" + i);
    newItemLabel.innerText = questions[i] + " (" + hints[i] + ")";
    var paragraph = document.createElement("p");
    paragraph.appendChild(newItemLabel);
    myForm.appendChild(paragraph);
    newItemInput = document.createElement("input");
    newItemInput.setAttribute("type", "text");
    newItemInput.setAttribute("name", "item" + i);
    newItemInput.setAttribute("id", "item" + i);
    newItemInput.setAttribute("style", "min-width: 350px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size:16pt;");
    var paragraph = document.createElement("p");
    paragraph.setAttribute("id", "par" + i);
    paragraph.appendChild(newItemInput);
    myForm.appendChild(paragraph);
  }

  exerciceBody.appendChild(myForm);
  var inputs = document.getElementById("myExercice").getElementsByTagName("input");
  var keyb = document.getElementById("keyboard");
  var keybKeys = keyb.getElementsByTagName("input");
  var exTitleWindow = document.getElementById("main-window-title");
  var keybReset = document.getElementById("reset-keyboard");

  for (var k = 0; k < inputs.length; k++) {
    inputs[k].addEventListener("onclick", keyboardActivation());
  }

  function keyboardActivation() {
    inputs[k].onclick = function (e) {
      var self = this;
      /*keyb.style.display = "block";*/

      keyb.setAttribute("class", "");
      keybReset.setAttribute("class", "");
      keyb.style.top = Number(e.clientY + -85) + "px";
      console.log("onclick-pageY: " + e.pageY);
      keyb.style.left = Number(e.clientX + 75) + "px";
      keybReset.style.display = "grid";
      keybReset.addEventListener("onclick", keyboardDeactivation());

      for (var m = 0; m < keybKeys.length; m++) {
        var virtualKeyboard = function virtualKeyboard(m, k) {
          keybKeys[m].onclick = function () {
            self.value += this.value;
          };
        };

        keybKeys[m].addEventListener("onclick", virtualKeyboard(m, k));
      }
    };
  }

  function keyboardDeactivation() {
    keybReset.onclick = function () {
      keyb.setAttribute("class", "hidden");
      keybReset.setAttribute("class", "hidden");
    };
  }
};

var inputToFill;
var filledIn;

window.onkeydown = function () {
  for (var i = 1; i < questions.length; i++) {
    filledIn = true;
    itemName = "item" + i;
    formToCheck = document.getElementById("myExercice");
    itemToCheck = formToCheck.elements[itemName].value;

    if (!itemToCheck) {
      filledIn = false;
      break;
    }
  }

  if (filledIn === true) {
    document.getElementById("button").disabled = false;
  }
};

var answer, itemName, itemToCheck, formToCheck, myparagraph, resultWrapper;
var correctNumber = 0;

document.getElementById("button").onclick = function () {
  for (var i = 1; i < questions.length; i++) {
    answer = answers[i];
    itemName = "item" + i;
    formToCheck = document.getElementById("myExercice");
    itemToCheck = formToCheck.elements[itemName].value;
    console.log("itemToCheck: " + itemToCheck);

    if (itemToCheck !== answers[i]) {
      myparagraph = document.createElement("span");
      myparagraph.setAttribute("id", "answer" + i);
      myparagraph.setAttribute("style", "color:red;");
      myparagraph.innerText = " - La réponse correcte : " + answers[i];
      document.getElementById("par" + i).appendChild(myparagraph);
    } else {
      myparagraph = document.createElement("span");
      myparagraph.setAttribute("id", "answer" + i);
      myparagraph.setAttribute("style", "color:green;");
      myparagraph.innerText = " - C'est correct, félicitations !";
      document.getElementById("par" + i).appendChild(myparagraph);
      correctNumber++;
    }

    resultWrapper = document.getElementById("result-wrapper");
    resultWrapper.innerText = "Ton résultat : " + correctNumber + " / " + questions.length;
    resultWrapper.setAttribute("style", "font-size: larger; color: dark-blue; text-shadow: 0px 0px 3px white;");
  }
};