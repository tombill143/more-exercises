function capitalise() {
  const name = "peter";
  const newName = name
    .split("")
    .map((char, i) => (i % 2 === 1 ? char.toLowerCase() : char.toUpperCase()))
    .join("");

  console.log(newName);
}

capitalise();

function capitalise2() {
  const name2 = "peter";
  const newName2 = name2
    .split("")
    .map((char, i) => (i % 2 === 2 ? char.toLowerCase() : char.toUpperCase()))
    .join("");

  console.log(newName2);
}

capitalise2();

function capitalise3() {
  const name3 = "peter";
  const newName3 = name3
    .split("")
    .map((char, i) => (i % 1 === 0 ? char.toLowerCase() : char.toUpperCase()))
    .join("");

  console.log(newName3);
}

capitalise3();

function capitalise4() {
  const name4 = "peter";
  const newName4 = name4
    .split("")
    .map((char, i) => (i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
    .join("");

  console.log(newName4);
}

capitalise4();

function capitalise5() {
  const name5 = "peter";
  const newName5 = name5
    .split("")
    .map((char, i) => (i % 3 === 0 ? char.toLowerCase() : char.toUpperCase()))
    .join("");

  console.log(newName5);
}

capitalise5();
