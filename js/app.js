window.addEventListener('load',function(e){
    var amarillo = document.getElementById('yellow');
    var divBig = document.querySelector('div');
    amarillo.addEventListener('click',function(e){
        amarillo.classList.add('yellow');
        amarillo.classList.add('radius');
    });
    divBig.addEventListener('click',function(e){
        divBig.classList.add('red');
        divBig.classList.add('radius');
    })
});