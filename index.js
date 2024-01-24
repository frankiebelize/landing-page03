function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    const span = document.querySelector('.content .textBox h2 span');
    circle.style.background = color;
    span.style.color=color;
}
function click(){
imgSlider(anything);
changeCircleColor(color);
}
click();