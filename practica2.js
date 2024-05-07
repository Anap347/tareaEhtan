let number = 10;
let initial = 1;
let piso = 0;
let asterisco = "";
for (initial; initial <= number; initial++){
    for (piso; piso <= number; piso++){
        console.log(asterisco.padEnd(piso, "*"));
    }
}