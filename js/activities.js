$(document).ready(function(){
    $(".activities-table tbody td").click(function(){
        $(this).toggleClass("highlight");
    });
});