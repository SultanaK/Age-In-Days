//Your age in day
function ageInDays() {
    
var birthYear =prompt("Enter your birth year.");
var totalDays= (2020-birthYear) * 365;
var h1 =document.createElement('h1');
var answer=document.createTextNode('You are'+ totalDays +' days');
h1.setAttribute('id','totalDays');
h1.appendChild(answer);
document.getElementById('flex-box-result').appendChild(h1);
//document.getElementById('flex-box-result').innerHTML = ageDays;
//document.getElementsByClassName('flex-box-result').innerHTML = totalDays;

};

function reset() {
    document.getElementById('flex-box-result').remove();
    
}