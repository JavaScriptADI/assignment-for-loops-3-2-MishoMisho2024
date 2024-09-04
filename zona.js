var myString = "#";
var start = "#";
var line ="#";
var space=" ";
var zoma="";
var room = "#";
var cariel = "#        #";

var gela = "*Gela Barkalaia*";
var prison="*Prison*"

let o;
let l;
let y;
let r;
let z;
let x;
let h;

r=0;
o=0;
y=1;
t=1;
x=0;

for(let u =0 ; u<9; u++)
   {
myString += "#"; 
}
myString += " "; 




let p = Math.floor((Math.random() * 100) + 1);
console.log(p);

while(p>=10){
   p=p-10;
r++;
}
z=p;
console.log(z);
console.log(r);
if(z===9){
   z=2;
}
if(z===0){
   z=z+1;
}
if(z===1){
   z=z+1;
}
if(r===0){
   r=1;
}
if(r===1){
   r=2;
}
console.log(gela);

console.log(myString);

for(let o =0 ; o<10; o++){
   if(y===r ){
      zoma=zoma+"#";
      for(let x =0 ; x<8; x++){
      if(t===z){
         if(z===1){
         zoma="#&     #";}
         else{
            zoma=zoma+"&"
         }
      }
      else{
         zoma=zoma+" ";
      }
      t++;
   }
   zoma=zoma+"#";

   console.log(zoma);

   }
else{console.log(cariel);
   
}
y++;

}
console.log(myString);
console.log(prison);








