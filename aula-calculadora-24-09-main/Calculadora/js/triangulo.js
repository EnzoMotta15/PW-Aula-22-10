var a = parseFloat(prompt("Digite o valor de a:"));
var b = parseFloat(prompt("Digite o valor de b"));
var c = parseFloat(prompt("Digite o valor de c"));

if ((a==b)&&(a==c)&&(c==a)){
    console.log("equilátero");
}

else if ((a==b)||(a==c)||(b!=c)){
     console.log("isósceles");
}

else if ((a!=b)&&(a!=c)&&(b!=c)){
    console.log("escaleno");
}