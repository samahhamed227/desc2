
  'use strict';
let user1 = prompt(' Is my age 25?');
let score =0;
    if (user1==="yes") {
        alert ("True "+user1);
score++;
        console.log("yes my age is "+user1);
        } 

      else {
            alert (user1+"Wrong my age is 25");
console.log(user1+"Wrong my age is 25");
        }
     


  
let user2 = prompt('Did I study software engineering??');
switch(user2.toLowerCase()){
    
    case "yes" :
     alert (user2+" I  studied software eng" );
        console.log("I  studied software eng"+user2);
        score++;

    break;

    
    
    default:

alert (user2+"I  studied software eng ");
console.log(user2+"I  studied software eng");
break;

}
  
let user3 = prompt('Is my name Samah?');
switch(user3.toLowerCase()){
    
    case "yes" :
    alert ("my name is samah  "+user3 );
    console.log(user3+""+" my name is  Samah");
    score++;
    break;

default:

alert (user3+"Wrong my name is Samah ");
console.log(user3+"Wrong my name is Samah");
break;

}




 let user4 = prompt('Did I study in al balqaa university? ');
 
 switch(user4.toLowerCase()){
    
    case "yes" :
    alert (user4 +""+" I studied in Bau ");
    console.log(user4 +""+" I studied in Bau university ");
    score++;


    break;
default:

alert (user4+"I studied in Bau");
console.log(user4+""+"I studied in Bau");
break;

}


let user5 = prompt('do you know Me now? ');
 
 switch(user5.toLowerCase()){
    
    case "yes" :
    alert (user5 +""+" ohh great I'm so happy ");
    console.log(user5+""+" you are welcome ");
    score++;


    break;
default:

alert (user5+"why??? ");
console.log(user5+""+"why???");
break;

}

let user6 = prompt('what\'s you\'r name? ');
alert("welcome"+" "+user6);

document.write("welcome"+""+user6);


        for(let i=0 ;i<4;i++)
        {
            let user7 = prompt('guess  number and enter it');

         if(user7>5)
            {
    
             
        alert (user7 +""+" it\'s too high ");
                console.log(user7);
            
            }

               else if(user7<5)
               {
            alert (user7+"it\'s too low ");
            console.log(user7);
               }
          


             else if(user7==5)  
            {

                
                alert (user7 +""+"oh !! You know the number pravoooo");
                console.log(user7);

          i=4;
          score++;

            }        
if(i==3){
    alert ("the number is = 5");
    console.log(user7);

}

            }
        

         

console.log("the total number of correct answers."+score);
    
let user8 = prompt('guess whats my Favorite food?');
let favFood = ['mansaf', 'pasta', 'fish', 'mjadara'];

for(let i=0;i<5;i++){
    
if(user8.toLocaleLowerCase()===favFood[0]||user8.toLocaleLowerCase()===favFood[1]||user8.toLocaleLowerCase()===favFood[2]||user8.toLocaleLowerCase()===favFood[3]){
    alert("Yes that's right");
    
    score;
    break;
}
else {
    user8= prompt('guess whats my Favorite food?');

}
}

alert(" that's my favorite food "+""+favFood);


document.write("your correct answer ="+""+score);
/// const

 ///const ID = '1236789';
 ///console.log(ID);