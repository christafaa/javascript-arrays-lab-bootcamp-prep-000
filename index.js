const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destrutivelyPrependKitten(name) {
  var result = kittens.unshift(name);
  return result;
}