function Convert() {
    let money = document.getElementById('tien').value;
    // let money2 = parseInt(money);
    let from = document.getElementById('a').value;
    let to = document.getElementById('b').value;
    let trans;
    if (from == 'USD' && to == 'VND') {
        trans = money * 23000 + ' VND'
    }
    else if (from == 'USD' && to == 'USD') {
            trans = money + ' VND'
        }
        else if (from == 'VND' && to == 'USD') {
                trans = money/23000 + ' USD'
            } else
                 trans = money + ' VND'
    document.getElementById('result').innerHTML='result: '+trans;
    // document.write('1111')
}