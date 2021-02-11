

$(document).ready(function () {

    console.log("we got here");
    
    $("#scrollRight").on('click', function () {
        console.log("scrollRight");
        
        $("#scrollingProjects").animate({
            scrollLeft: "-=750"
        }, 800);
    }
    );

    $("#scrollLeft").on('click', function () {
        console.log("ScrollLeft");
        $("#scrollingProjects").animate({
            scrollLeft: "+=750"
        }, 800);
    }
    );    
});