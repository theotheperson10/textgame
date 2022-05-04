var returnData;
var length=10;
var mapwidth=8;
var mapFound=false;
var winw=400;
var winh=400;
var turns=0;
var mapData=[
1,1,1,1,1,1,1,1,
1,0,0,0,1,1,1,1,
1,0,1,0,1,0,3,1,
1,0,1,0,0,0,0,1,
1,0,1,1,0,1,1,1,
1,0,0,1,0,2,1,1,
1,0,1,1,1,1,1,1,
1,0,1,0,0,0,1,1,
1,0,0,0,1,0,4,1,
1,1,1,1,1,1,1,1];
function setup() {
  createCanvas(400, 400);
  window.alert("Welcome to the maze, type what you want to do and you'll do it, have fun"+str(" :)"))
}

function draw() {
if(returnData!=="end"&&returnData!=="End"){
returnData=window.prompt(generateFlavorText(turns)+"What would you like to do?");controls();
if(mapFound==true){
generateMap(mapData,mapwidth,length)}


  turns++;}
}

function findPlayer(data,n){
n=0;
while(data[n]!==2&&n<=length*mapwidth){
n++;
}
return n;
}
function controls(){  if(returnData=="up"||returnData=="Up"){
mapData=swap(mapData,findPlayer(mapData),findPlayer(mapData)-mapwidth);}
if(returnData=="down"||returnData=="Down"){
mapData=swap(mapData,findPlayer(mapData),findPlayer(mapData)+mapwidth);}
if(returnData=="left"||returnData=="Left"){
mapData=swap(mapData,findPlayer(mapData),findPlayer(mapData)-1);}
if(returnData=="right"||returnData=="Right"){mapData=swap(mapData,findPlayer(mapData),findPlayer(mapData)+1);}
     }
function swap(data,value1,value2,swap,switchr){
if(data[value2]!==1){
if(data[value2]==3){
window.alert("You found a map");
mapFound=true;
data[value2]=0
switchr=1
}
if(data[value2]==4){
window.alert("You won!");
data[value2]=0;
switchr=1;
returnData="end";
}
swap=data[value1]
data[value1]=data[value2]
data[value2]=swap;
}else{
window.alert("You hit your head on a wall");} 
if(switchr!==undefined){generateMap(data,mapwidth,length)
}
return mapData;
}

function generateMap(data,wid,leng,n,string,x,y){
string="";
n=0;
x=0;
y=0;
background(0,0,0);
while(n<=wid*leng){
noStroke();
if(data[n]==0){fill(0,0,0)}else{if(data[n]==1){fill(0,255,0)}else{if(data[n]==2){fill(0,0,255)}else{if(data[n]==3)
{fill(255,0,0);}else{if(data[n]==4)
{fill(0,255,255)}}}}}
if(data[n]==2){fill(0,0,255)}
rect(winw/wid*x,winh/leng*y,winw/wid,winh/leng);
n++;
x++;
if(x>=wid){
x=0;
y++;}
}
}

function generateFlavorText(turn,texts){
texts=""
if(returnData==""){texts+="You should feel the need to move \n \n"}
if(turns>20){texts+="You can start to feel a bit scared, you think something might be following you \n \n"}
if(turns>25){texts+="You start to hear a creaking noise, it sounds very scary \n \n"
}
if(turns>30&&turns<33){texts+="You can hear a monster or something walking towards you think it might be close to you, its maybe "+(35-turns)+" or "+(36-turns)+" steps away \n \n"}
if(turns>34){window.alert("The monster got to you, tearing you apart, your adventure is over, you loose");
returnData="end";}
return texts;
}
