//Homewrok 2-If/else
//1.if/else-ը փոխարինեք ?

/*let login = prompt(`Greq anuny`);

 let message=login ===('Employee') ? 'Hi' : 
login === ('Директор') ? 'Hello' :
login === ('') ? 'No login': '';

console.log(login);*/

//2.Գրել թիվ և տպել դրա բազմապատկման աղյուսակը օգտագործելով for ցիկլը

/*let number=4;

for(i=1;i<=10;i++){
    console.log(number+"x"+i+"="+(number * i));
}
    */
    
//3.Հաշվել 1-43 ընգած թվերի գումարը

/*let sum=0;
for(i=1;i<=43;i++){
    console.log(sum+=i);
}
    */

//4.Գտնել 1-40 միջակայքում գտնվող զույգ թվերի գումարը (for)

/*let sum=0;
for(i=1;i<=40;i++){
    if(i%2===0){
        sum+=i;
    }
}


console.log(sum);
*/

//5.Գտնել 1-40 միջակայքում գտնվող կենտ թվերի գումարը(while)

/*let sum=0;
let i=1;
while(i<=40){
    if(i%2===1){
        sum+=i;
        i+=1;
    }
}
console.log(sum);
*/

//6.Գտնել 1-60 միջակայքում գտնվող 6ին պատիկ թվերի արտադրյալը(օգտագործել ցիկլ և if)

/*let sum=1;
for(i=1;i<=60;i++){
    if(i%6===0){
        sum*=i;
    }
}

console.log(sum);*/

//7.prompt-ի միջոցով ստանալ թիվ, և գնտել մինչև այդ թիվը եղած բոլոր 4ին պատիկ թվերի գումարը

/*let aNumber=Number(prompt("Enter a number"));
let sum=0;


for(let i=1;i<=aNumber;i++){
    if(i%4===0){
        (sum+=i);
    }
}
console.log(sum);*/

//8.Տպել 1-20 թվերը նվազման կարգով, այսինքն 20,19,... (for/while)

/*First methodlet x=21;
while(x>0){
    x--;
    console.log(x);
}*/
 

/*for(x=20;x>=0;x--){
    console.log(x);
}*/

//Homework 3


//1Գրեք ֆունկցիա որը ստանում է երկու թիվ, և վերադարձնում դրանց արտադրյալը

/*1.let multiply = (a,b) => a*b;
console.log(multiply(3,4));*/

//2.Գրել ֆունկցիա որը ստանում է մեկ թիվ, և վերադարձնում true եթե կենտ է, և false հակառակ դեպքում
/*let stugum=Number(prompt("Greq tiv"));
let evenodd = (a) => a%2===0 ? true: false; 
console.log (evenodd(stugum));*/

/*3.Գրել ֆունկցիա որը ստանում է թիվ, և հաշվում մինչև այդ թիվը եղած բոլոր 4-ին պատիկ թվերի արտադրյալը*/

/*let something4 =(a) =>{
    let multi=1;
    for(i=1;i<=a;i++){
        if(i%4===0){
            multi*=i;
        }
    }
    return multi;
}
console.log(something4(16));*/

//4.Գրել ֆունկցիա որը ստանում է 3 թիվ, և վերադարձնում դրանց գումարը եթե գոնե երկուսը զույգ են, և դրանց արտադրյալը հակառակ դեպքում

/*let threenumbers = (a,b,c) => {
    let count=0;

    if(a%2===0) count++;
    if(b%2===0) count++;
    if(c%2===0) count++;

    if(count>=2){
        return a+b+c;
    }
    else{
        return a*b*c;
    }
}
console.log(threenumbers(4,5,6));
console.log(threenumbers(5,7,9));*/

