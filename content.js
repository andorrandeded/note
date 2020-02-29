 var firebaseConfig = {
    apiKey: "AIzaSyCywpnEYimtpM82G5PtgkI4vvBxyIVKAXw",
    authDomain: "myfarst-8163c.firebaseapp.com",
    databaseURL: "https://myfarst-8163c.firebaseio.com",
    projectId: "myfarst-8163c",
    storageBucket: "myfarst-8163c.appspot.com",
    messagingSenderId: "398712145622",
    appId: "1:398712145622:web:7eadea70d4e28009172b77",
    measurementId: "G-HQMESHXVLP"
  };
firebase.initializeApp(firebaseConfig);





//faltar@deocaaocaelvallenosetoca.cf//




function saveit() {
not=document.getElementById("text").value;
reaseat=document.getElementById("pass").value;
if(not== ""||reaseat ==""){
document.getElementById("text").placeholder="can not be empty"
document.getElementById("pass").placeholder="can not be empty"
}else{


Ref = firebase.database().ref("people's notes").child(reaseat);
Ref.set(not);




}
}
function reseatit(){
reaseat=document.getElementById("pass").value;

if(reaseat==""){
console.log("nothing in here");
document.getElementById("pass").placeholder="password  farst"
}else{
document.querySelector("body > img").style="display: initial";
setTimeout (function(){
document.querySelector("body > img").style="display: none";

},700);
Ref = firebase.database().ref("people's notes").child(reaseat);
Ref.once("value").then(function(snapshot) {
 
var  data = snapshot.val(); 
if(data==null){
console.log("code4545");
}else{

var  data = snapshot.val(); 
document.getElementById("text").value=data;
}

});
}
}
