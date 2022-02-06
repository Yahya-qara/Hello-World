$('document').ready(function(){
    console.log("hello world");
    $('.bar-container .fa-bars').click(function(){
        $('.navBar-cover').toggle();
        $(this).toggleClass('fa-times');
        $(this).toggleClass('fa-bars');
    })
})