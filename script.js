function changeColor(){
    var colorVal = document.getElementById('colorVal').value;
    var body = document.getElementById('body');
    body.setAttribute('style',`background : #${colorVal};`);
    console.log(colorVal);
}