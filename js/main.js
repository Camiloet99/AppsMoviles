function turnon(elemento){
    cuadro = document.getElementById('conten');
    cuadro.style.display = "block";
    cuadro.style.textAlign = "center";
    bonif = document.getElementById('bonif');
    switch (elemento){
        case 'b1':
            bonif.src = "bonificaciones/f1.html";
            break;
        case 'b2':
            bonif.src = "bonificaciones/f2.html";
            break;
        case 'b3':
            bonif.src = "bonificaciones/f3.html";
            break;
        case 'b4':
            bonif.src = "bonificaciones/f4.html";
            break;
        case 'b5':
            bonif.src = "bonificaciones/f5.html";
            break;
        case 'b6':
            bonif.src = "bonificaciones/f6.html";
            break;
        case 'b7':
            bonif.src = "bonificaciones/f7.html";
            break;
        case 'b8':
            bonif.src = "bonificaciones/f8.html";
            break;
        case 'b9':
            bonif.src = "bonificaciones/f9.html";
            break;
        case 'b10':
            bonif.src = "bonificaciones/f10.html";
            break;
    }
}

function home(){
    cuadro.style.display = "none";
}