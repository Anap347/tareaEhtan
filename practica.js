let initial = 1;
let final = 100;
let count = initial;
while (count <= final) {
    if (count % 3 === 0) {
        if (count % 5 === 0){
            console.log("Caera la republica");
        }
        console.log("fizz");
        count++;
    }
    if (count % 5 === 0) {
        console.log("fuzz");
        count++;
    }
    else {
        console.log(count);
        count++;
    }
}
