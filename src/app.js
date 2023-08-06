/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "My cat",
    "The oldman"
  ];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function Ramdonposition(array) {
    return Math.floor(Math.random() * array.length);
  }

  let position1 = Ramdonposition(who);
  let position2 = Ramdonposition(action);
  let position3 = Ramdonposition(what);
  let position4 = Ramdonposition(when);

  console.log("Hello Rigo from the console!");

  let excuse =
    who[position1] +
    " " +
    action[position2] +
    " " +
    what[position3] +
    " " +
    when[position4];
  console.log("excuse: ", excuse);

  document.getElementById("Myexcuse").innerHTML = excuse;
};
