var cspinach = 0;
var cgpaper = 0;
var cjalepeno = 0;
var conion = 0;
var colive = 0;
var cmashroom = 0;
var counter = 0;


$(document).ready(function(){
    $("input").prop("disabled",true);
});

function select_size(){
    var size = $("#psize").val();
    if(size == "default"){
        $(".main").css("display","none") ;
        $("input").prop("disabled",true);
        $(".piza_display img").css("display","none");
        $("input").prop("checked",false);
        
        cspinach = 0;
        cgpaper = 0;
        cjalepeno = 0;
        conion = 0;
        colive = 0;
        cmashroom = 0;
        counter = 0;
    }
    else if(size == "small"){
        $(".main").css("display","block") ;
        counter++;
        $("input").prop("disabled",false);
    }
    else{
        $(".main").css("display","block") ;
        counter++;
        $("input").prop("disabled",false);
    }
}
function spinach(){
    cspinach++;
    if(cspinach % 2 !== 0){
        $(".spinach").css("display","block");
    }
    else{
        $(".spinach").css("display","none");
    }
}

function gpaper(){
    cgpaper++;
    if(cgpaper % 2 !== 0){
        $(".green_paper").css("display","block");
    }
    else{
        $(".green_paper").css("display","none");
    }
}
function jalepeno(){
    cjalepeno++;
    if(cjalepeno % 2 !== 0){
        $(".jalepeno").css("display","block");
    }
    else{
        $(".jalepeno").css("display","none");
    }
}
function onion(){
    conion++;
    if(conion % 2 !== 0){
        $(".onion").css("display","block");
    }
    else{
        $(".onion").css("display","none");
    }
}
function olive(){
    colive++;
    if(colive % 2 !== 0){
        $(".olive").css("display","block");
    }
    else{
        $(".olive").css("display","none");
    }
}
function mashroom(){
    cmashroom++;
    if(cmashroom % 2 !== 0){
        $(".mashroom").css("display","block");
    }
    else{
        $(".mashroom").css("display","none");
    }
}
