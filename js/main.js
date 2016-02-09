$(document).ready(function() {
    skrollr.init({
        constants: {
            scene1: 0,
            scene2: 3000,
            scene3: 6000,
            scene4: 9000,
            scene5: 12000,
            scene6: 15000,
            scene7: 18000,
            scene8: 21000,
            scene9: 24000
        }
    });

    // Scroll to top 
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    // Lol hax loading
    var count = 0;
    function addDot() {
        var text = $(".loading-message").text()
        $(".loading-message").text(text + ".");

        count++;
        if (count > 3) {
            return;
        }
        
        setTimeout(addDot, 1000);
    }
    
    addDot();

    // TODO: Set time higher
    setTimeout(function() {
        // Scroll to top 
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        $("#loading").fadeOut(1000);
    }, 1)

});
