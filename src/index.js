const $ = require('jquery');

$('body').html("<h2>" + "Hello World" + "</h2>")

// import {sayHello} from "./say-hello.js";
const {sayHello} = require ("./say-hello.js")
console.log(sayHello());