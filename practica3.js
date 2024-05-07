let frase = "qwertyuioplkjhgfdsazxcvbn";
if(frase.search(/[^a-zA-Z]/) && frase.length >= 26){console.log("esto es un pangrama");} else{console.log("esto no es un pangrama");}