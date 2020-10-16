$(document).ready(function(){
    
    /* Seleccionamos los elementos a dentro de menu. a cada (each) uno de ellos les vas a aplicar la siguiente funcion */
    /* El paramatro index, funciona como los arreglos, al principio vale 0, despues al siguiente elemento vale 1, y asi susesivamente */
    /* Index es necesario para dar el efecto en cascada, ya que de otro modo los elementos van a aparecer todos al mismo tiempo. */

    /* Efecto Menu */
    $('.menu a').each(function(index,elemento){
        $(this).css({
            'top':'-200px'
        });

        $(this).animate({
            'top':'0px'
        },1500 + (index * 500));
    });

    /* Efecto header */
    if( $(window).width() > 800 ){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0     
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-50px'     
        },1500);
    }

    /* Scroll elementos menu */
    /* Guardamos la posicion de los elementos del menu, como el acerca de, la galeria, etc */
    /* Se usa el metodo offset, para acceder a su propiedad top, la cual calcula cuantos pixeles hay desde el donde empieza la seccion hacia arriba. */
    var acercaDe    =   $('#acerca-de').offset().top;
    var menu        =   $('#platillos').offset().top;
    var galeria     =   $('#galeria').offset().top;
    var ubicacion   =   $('#ubicacion').offset().top;


    $('#btn-acerca-de').on('click',function(){
        event.preventDefault(); /* Lo utilizamos para evitar que se agreguen mas caracteres a la dirección en el navegador */
        $('html, body').animate({
            /* Le decimos que se desplace hacia la posicion de acerca de */
            scrollTop: acercaDe
        },200);
    });

    $('#btn-menu').on('click',function(){
        event.preventDefault(); /* Lo utilizamos para evitar que se agreguen mas caracteres a la dirección en el navegador */
        $('html, body').animate({
            /* Le decimos que se desplace hacia la posicion del menu */
            scrollTop: menu
        },200);
    });

    $('#btn-galeria').on('click',function(){
        event.preventDefault(); /* Lo utilizamos para evitar que se agreguen mas caracteres a la dirección en el navegador */
        $('html, body').animate({
            /* Le decimos que se desplace hacia la posicion de la galeria*/
            scrollTop: galeria
        },200);
    });

    $('#btn-ubicacion').on('click',function(){
        event.preventDefault(); /* Lo utilizamos para evitar que se agreguen mas caracteres a la dirección en el navegador */
        $('html, body').animate({
            /* Le decimos que se desplace hacia la posicion de la ubicacion */
            scrollTop: ubicacion
        },200);
    });

});

