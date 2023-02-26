function cong(){
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    document.getElementById('result').innerHTML= Number(a) + Number(b);
}
function tru(){
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    document.getElementById('result').innerHTML= Number(a) - Number(b);
}
function nhan(){
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    document.getElementById('result').innerHTML= Number(a) * Number(b);
}
function chia() {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    document.getElementById('result').innerHTML = Number(a) / Number(b);
}