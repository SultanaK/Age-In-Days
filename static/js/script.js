//Your age in day
function ageInDays() {
    
var birthYear =prompt("Enter your birth year.");
var ageDays= (2020-birthYear) * 365;
var h1 =document.createElement('h1');
var answer=document.createTextNode('You are'+ ageDays +' days');
h1.setAttribute('id','ageDays');
h1.appendChild(answer);
document.getElementById('flex-box-result').appendChild(h1);
//document.getElementById('flex-box-result').innerHTML = ageDays;

};

function reset() {
    document.getElementById('ageInDays').remove();
    
}