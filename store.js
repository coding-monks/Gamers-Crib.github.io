// NUMBER 1 = COMPONENTS 

$(".comps").on("click",function(){
    $(".components").removeClass("hiddenitems");
    $(".pcsetup").addClass("hiddenitems");
    $(".consolesetup").addClass("hiddenitems");
});

// START 
$(".ram").on("click",function(){
    $(".choldergc").addClass("hiddenitems");
    $(".cholderram").removeClass("hiddenitems");
    $(".cholderkeyboard").addClass("hiddenitems");
    $(".choldermouse").addClass("hiddenitems");
    $(".cholderssd").addClass("hiddenitems");
    $(".choldermonitor").addClass("hiddenitems");
    $(".cholderheadphones").addClass("hiddenitems");
    $(".cholderxbox").addClass("hiddenitems");
});


$(".gc").on("click",function(){
    $(".choldergc").removeClass("hiddenitems");
    $(".cholderram").addClass("hiddenitems");
    $(".cholderkeyboard").addClass("hiddenitems");
    $(".choldermouse").addClass("hiddenitems");
    $(".cholderssd").addClass("hiddenitems");
    $(".choldermonitor").addClass("hiddenitems");
    $(".cholderheadphones").addClass("hiddenitems");
    $(".cholderxbox").addClass("hiddenitems");
});

$(".keyboard").on("click",function(){
    $(".choldergc").addClass("hiddenitems");
    $(".cholderram").addClass("hiddenitems");
    $(".cholderkeyboard").removeClass("hiddenitems");
    $(".choldermouse").addClass("hiddenitems");
    $(".cholderssd").addClass("hiddenitems");
    $(".choldermonitor").addClass("hiddenitems");
    $(".cholderheadphones").addClass("hiddenitems");
    $(".cholderxbox").addClass("hiddenitems");
});

$(".mouse").on("click",function(){
    $(".choldergc").addClass("hiddenitems");
    $(".cholderram").addClass("hiddenitems");
    $(".cholderkeyboard").addClass("hiddenitems");
    $(".choldermouse").removeClass("hiddenitems");
    $(".cholderssd").addClass("hiddenitems");
    $(".choldermonitor").addClass("hiddenitems");
    $(".cholderheadphones").addClass("hiddenitems");
    $(".cholderxbox").addClass("hiddenitems");
});

$(".monitor").on("click",function(){
    $(".choldergc").addClass("hiddenitems");
    $(".cholderram").addClass("hiddenitems");
    $(".cholderkeyboard").addClass("hiddenitems");
    $(".choldermouse").addClass("hiddenitems");
    $(".cholderssd").addClass("hiddenitems");
    $(".choldermonitor").removeClass("hiddenitems");
    $(".cholderheadphones").addClass("hiddenitems");
    $(".cholderxbox").addClass("hiddenitems");
});

$(".ssd").on("click",function(){
    $(".choldergc").addClass("hiddenitems");
    $(".cholderram").addClass("hiddenitems");
    $(".cholderkeyboard").addClass("hiddenitems");
    $(".choldermouse").addClass("hiddenitems");
    $(".cholderssd").removeClass("hiddenitems");
    $(".choldermonitor").addClass("hiddenitems");
    $(".cholderheadphones").addClass("hiddenitems");
    $(".cholderxbox").addClass("hiddenitems");
});

$(".headphones").on("click",function(){
    $(".choldergc").addClass("hiddenitems");
    $(".cholderram").addClass("hiddenitems");
    $(".cholderkeyboard").addClass("hiddenitems");
    $(".choldermouse").addClass("hiddenitems");
    $(".cholderssd").addClass("hiddenitems");
    $(".choldermonitor").addClass("hiddenitems");
    $(".cholderheadphones").removeClass("hiddenitems");
    $(".cholderxbox").addClass("hiddenitems");
});


$(".xbox").on("click",function(){
    $(".choldergc").addClass("hiddenitems");
    $(".cholderram").addClass("hiddenitems");
    $(".cholderkeyboard").addClass("hiddenitems");
    $(".choldermouse").addClass("hiddenitems");
    $(".cholderssd").addClass("hiddenitems");
    $(".choldermonitor").addClass("hiddenitems");
    $(".cholderheadphones").addClass("hiddenitems");
    $(".cholderxbox").removeClass("hiddenitems");
});
// END

// NUMBER 2 = PC SETUPS

$(".pcsets").on("click",function(){
    $(".components").addClass("hiddenitems");
    $(".pcsetup").removeClass("hiddenitems");
    $(".consolesetup").addClass("hiddenitems");
});

// START



// END 

// NUMBER 3 = CONSOLE SETUPS 

$(".consets").on("click",function(){
    $(".components").addClass("hiddenitems");
    $(".pcsetup").addClass("hiddenitems");
    $(".consolesetup").removeClass("hiddenitems");
});

//START


// END 