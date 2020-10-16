/* Efecto parallafax */

$(document).ready(function(){

    /* Debemos detectar el evento del scroll y calcular el ancho de la ventana como la posicion del scroll*/

    /* Scroll, para detectar cuando se hace un scroll en la pagina */
    $(window).scroll(function(){
        var windowWidth = $(window).width();

        /* Si el ancho de la venta es mayo a 800 */
        if(windowWidth > 800){
            /* Guardamos la posicion del scroll */
            var scroll = $(window).scrollTop();
            console.log(scroll) 

            $('header .textos').css({
                'transform':'translate(0,'+ scroll/2.5 +'%)'
            });

            $('.acerca-de article').css({
                'transform':'translate(0, -'+ scroll/5 +'%)'
            });
        }

    });

    /* Por cuestiones de seguridad */
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 800){
            $('.acerca-de article').css({
                'transform':'translate(0px, 0px)'
            });
            $('header .textos').css({
                'transform':'translate(0px,0px)'
            });
        }

    });


});