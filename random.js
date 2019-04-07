$('.modal').modaal();

var numList= new Array();
var num = 0;

for(i=0;i<26;i++){
numList[i]=i+1;
}

for(i=0;i<26;i++) {
var r=Math.floor(Math.random()*26);
var tmp=numList[i];
numList[i]=numList[r];
numList[r]=tmp;
}

function random() {
target = document.getElementById("output");
target.innerHTML = "" + num +" count " + " => " + numList[num];
num++;
}
