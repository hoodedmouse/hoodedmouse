function navHover() {
    $("#resume").hover(function() { 
        $("#icon--resume").toggleClass("icon--hover");
        $("#nav__title--resume").toggleClass("nav__title--hover");
    });

    $("#portfolio").hover(function() { 
        $("#icon--portfolio").toggleClass("icon--hover");
        $("#nav__title--portfolio").toggleClass("nav__title--hover");
    });

    $("#contact").hover(function() {
        $("#icon--contact").toggleClass("icon--hover");
        $("#nav__title--contact").toggleClass("nav__title--hover");
    }); 
}

function navClick() {
        $("#profile").click(function() {
            $("#container__intro").removeClass("hidden");
            $("#container__portfolio").addClass("hidden");
            $("#container__resume").addClass("hidden");
            $("#container__contact").addClass("hidden");
            $("#icon--portfolio").removeClass("icon--active");
            $("#nav__title--portfolio").removeClass("nav__title--active");
            $("#icon--resume").removeClass("icon--active");
            $("#nav__title--resume").removeClass("nav__title--active");
            $("#icon--contact").removeClass("icon--active");
            $("#nav__title--contact").removeClass("nav__title--active");
        });
    
        $("#portfolio").click(function() {
            $("#icon--portfolio").addClass("icon--active");
            $("#nav__title--portfolio").addClass("nav__title--active");
            $("#icon--contact").removeClass("icon--active");
            $("#nav__title--contact").removeClass("nav__title--active");
            $("#icon--resume").removeClass("icon--active");
            $("#nav__title--resume").removeClass("nav__title--active");
            $("#container__intro").addClass("hidden");
            $("#container__profile").removeClass("hidden");
            $("#container__portfolio").removeClass("hidden");
            $("#container__resume").addClass("hidden");
            $("#container__contact").addClass("hidden");
        });
    
        $("#resume").click(function() {
                $("#icon--resume").addClass("icon--active");
                $("#nav__title--resume").addClass("nav__title--active");
                $("#icon--portfolio").removeClass("icon--active");
                $("#nav__title--portfolio").removeClass("nav__title--active");
                $("#icon--contact").removeClass("icon--active");
                $("#nav__title--contact").removeClass("nav__title--active");
                $("#container__intro").addClass("hidden");
                $("#container__profile").removeClass("hidden");
                $("#container__resume").removeClass("hidden");
                $("#container__portfolio").addClass("hidden");
                $("#container__contact").addClass("hidden");
        });
    
        $("#contact").click(function() {
                $("#icon--contact").addClass("icon--active");
                $("#nav__title--contact").addClass("nav__title--active");
                $("#icon--portfolio").removeClass("icon--active");
                $("#nav__title--portfolio").removeClass("nav__title--active");
                $("#icon--resume").removeClass("icon--active");
                $("#nav__title--resume").removeClass("nav__title--active");
                $("#container__intro").addClass("hidden");
                $("#container__profile").removeClass("hidden");
                $("#container__contact").removeClass("hidden");
                $("#container__portfolio").addClass("hidden");
                $("#container__resume").addClass("hidden");
        });  

        $("#hmlogo--robinEgg").click(function() {
            $("#container__intro").removeClass("hidden");
            $("#container__portfolio").addClass("hidden");
            $("#icon--portfolio").removeClass("icon--active");
            $("#nav__title--portfolio").removeClass("nav__title--active");
            $("#container__resume").addClass("hidden");
            $("#icon--resume").removeClass("icon--active");
            $("#nav__title--resume").removeClass("nav__title--active");
            $("#container__contact").addClass("hidden");
            $("#icon--contact").removeClass("icon--active");
            $("#nav__title--contact").removeClass("nav__title--active");
        });
}

function portfolioClick() {
    $("#btn__portfolioProject--1").click(function() {
        $("#container__project--1").removeClass("hidden");
        $("#container__project--2").addClass("hidden");
        $("#container__project--3").addClass("hidden");
        $("#decoration--1").removeClass("hidden");
        $("#decoration--2").addClass("hidden");
        $("#decoration--3").addClass("hidden");
    });

    $("#btn__portfolioProject--2").click(function() {
        $("#container__project--1").addClass("hidden");
        $("#container__project--2").removeClass("hidden");
        $("#container__project--3").addClass("hidden");
        $("#decoration--1").addClass("hidden");
        $("#decoration--2").removeClass("hidden");
        $("#decoration--3").addClass("hidden");
    });

    $("#btn__portfolioProject--3").click(function() {
        $("#container__project--1").addClass("hidden");
        $("#container__project--2").addClass("hidden");
        $("#container__project--3").removeClass("hidden");
        $("#decoration--1").addClass("hidden");
        $("#decoration--2").addClass("hidden");
        $("#decoration--3").removeClass("hidden");
    });
}



    /*
    $("#portfolio").hover(function () {
        $("#portfolio-title").toggleClass("icon-title");
        $("#portfolio-title").toggleClass("icon-title-hover");
    });
    $("#contact-icon").hover(function () {
        $("#contact-title").toggleClass("icon-title");
        $("#contact-title").toggleClass("icon-title-hover");
    });

    $(document).ready(function(){
    $("#resume").click(function() {
      alert("Works?");
        });
    });




    function navClickContact {
    $("#contact").click(function() {
        $("#icon--contact").removeClass("icon--hover");
        $("#nav__title--contact").removeClass("nav__title--hover");
        $("#icon--contact").addClass("icon--active");
        $("#nav__title--contact").addClass("nav__title--active");
        $("#icon--resume").removeClass("icon--active");
        $("#nav__title--resume").removeClass("nav__title--active");
        $("#icon--portfolio").removeClass("icon--active");
        $("#nav__title--portfolio").removeClass("nav__title--active");
    });
}
    */