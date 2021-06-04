console.log("hello world");
document.write("this is document writer")

var num1=90
var num2=10
//console.log(num1+num2);

var marks = {
    ravi : 34,
    dhubhan : 34,
    anfu : 56,
}
//console.log(marks);

function avg(a,b){
    return(a+b)/2;
}

c1 = avg(4,6);
c2 = avg(10,20);
//console.log(c1,c2);

var age=45;
if(age==34){
    //console.log("you are eligible for vaccination");
}
else{
    //console.log("you are not eligible for vaccination");
}

var rollno=45;
if(rollno<34){
    //console.log("ur turn will arrive soon");
}
else if(rollno==45){
    //console.log("you might be next one");
}
else{
    //console.log("you have much time");
}

var arr=[1,2,3,4,5,6,7];
//console.log(arr);

for(var i=0;i<arr.length;i++){
    //console.log(arr[i]);
}

arr.forEach(function(element){
    //console.log(element);
})

let j=0;
while(j<5);{
    //console.log(arr[j]);
        j++;
}

function clicked(){
    console.log("the button was clicked");
}