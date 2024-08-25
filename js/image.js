// const var let
var a = 10;
var a = 20;
a +=5;
console.log(a)


let b = 30;
// let b = 40;
b +=5;
console.log(b)


let c = 50;
// let c = 60
c += 10;
console.log(c)

// number,array,boolean,object,string

age = 22;
console.log(`age is $(age)` )


salary = 12000000.500
console.log(`salary is $(salary)`)

_course = "flask" 
_course += " "
_course += "CRT"
_course += "_"
console.log(_course)

nums = [1,2,3,4,"python"]
nums.push(5)
nums.pop(2)
nums.splice(2,1,100)
nums.push(100)
console.log(`numbers are $(nums)`)

data = {"course":"python", "age":23}
console.log(data)

// loops
for(i=0; i<11; i++){
    console.log(i)
}
console.log(`accesed outside the block $(i)`);

// even numbers
for(i=2; i<11; i+=2){
    console.log(i)
}

console.log(`accesed outside the block $(i)`);



// odd numbers
for(i=1; i<11; i+=2){
    console.log(i)
}
console.log(`accesed outside the block $(i)`);


j = 1
while (j<11){
    console.log(j)
    j++
}


k = 2
do{
    console.log(k);
    k++
}while(k < 10)

// from 10 to 5
for(j=10;j>=5;j--){
    console.log(j)
}


k=15
while(k>=10){
    console.log(k)
    k--
}

console.log("19 to 7")
k=19
while(k>=7){
    console.log(k)
    k-=2
}

//function
function add(a,b){
    console.log(a+b);
}
add(10 , 20)
add(30 , 40)

function is_even(num){
    if(num % 2 == 0){
        console.log(num)
    }
}

for (i=1;i<=100;i++){
    is_even(i);
}

j=1
while(j<=10){
    console.log(j)
    j++;
}
for(i=2;i<=10;i++){
    console.log(`for loop ${i}`)
}

k=3
do{
    console.log(`do while loop ${k}`)
    k++
}while(k<=10)



arr=[]
for(even=6;even<=10;even+=2){
    even*10
}
console.log(arr)


arr = []
for(even=6;even<=20;even+=2){
   if( (even*7)%2==0){
    arr.push(even)
   }
}
console.log(arr)



function hover(){
    document.getElementById("temp-btn").style.backgroundColor="palevioletred";
}

function leave(){
    document.getElementById("temp-btn").style.backgroundColor="red";
}































