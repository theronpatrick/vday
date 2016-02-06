$(document).ready(function() {
    skrollr.init({
        constants: {
            scene1: 0,
            scene2: 6000,
            scene3: 9000
        }
    });

    // Scroll to top 
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    // Lol hax loading
    var count = 0;
    function addDot() {
        var text = $(".loading-message").text()
        $(".loading-message").text(text + ".");

        console.log("uh")

        count++;
        if (count > 3) {
            return;
        }
        
        setTimeout(addDot, 1000);
    }
    
    addDot();


    setTimeout(function() {
        // Scroll to top 
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        $("#loading").fadeOut(1000);
    }, 4000)

});
