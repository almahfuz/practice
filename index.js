
// arrow function 
const addName = (first, second,third) => first +' '+ second + third;

//const result = addName(10, 20, 30);
const result = addName('Jafar','Mahfuz','Al');
console.log(result);

// using arrow function
const ThreeLine = (firstLine, secondLine,thirdLine) => firstLine +' '+ secondLine +' '+ thirdLine;
const LinePrint = ThreeLine ('I am a web developer.','I love to code.', 'I love to eat biryani.');
console.log(LinePrint);

// using arrow with default value 

const TakeTwoPara = (Para1, Para2=0)=>{
    // Para2= Para2||0;
    totalVal= Para1 * Para2;
    return totalVal;

} 
const totalPara = TakeTwoPara(20,3);
console.log(totalPara);


