function Lesson1(){
    let match =prompt('math gracde');
    let point1 =parseInt(match);
    document.write('Điểm môn toán:' +point1);
    document.write('</br>');
    let physical =prompt('Physics grade');
    let point2 =parseInt(physical);
    document.write('Điểm môn lý:' +point2);
    document.write('</br>');
    let chemistry =prompt('chemistry grade');
    let point3 =parseInt(chemistry);
    document.write('Điểm môn hóa:' +point3)
    document.write('</br>');
    let average= (point1+point2+point3)/3;
    document.write('Điểm trung bình là:' +average);
}
function Lesson2(){
    let Celsius =prompt('celsius?');
    let T=parseInt(Celsius);
    document.write('Nhiệt độ ngoài trời là: ' +T);document.write(' Độ C');document.write('</br>');
    let Fahrenheit = 32 + 9*T/45;
    document.write('Đổi sang độ F là: ' +Fahrenheit);document.write(' Độ F')
}
function Lesson3(){
    let Radius =prompt('Radius');
    let R=parseInt(Radius);
    document.write('Bán kính đường tròn là: ' +R);
    document.write('</br>');
    let Perimeter= 3.14*2*R;
    document.write('Đường tròn có chu vi là: ' +Perimeter);
    document.write('</br>');
    let Area =3.14*R*R;
    document.write('Đường tròn có diện tích là: ' +Area);
}
