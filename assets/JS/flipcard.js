var options = {
    alwaysOneDirection: 'false', //values: 'true' or 'false', indicates if flipping card always in one direction
    direction: 'lr', //values: 'lr' (left to right), 'tb'(top to bottom), 'rl' and 'bt'
    speed: '500ms', //specify animation duration
    timingfunction: 'ease', //built-in timing function list (see it below) or customized cubic-beizer
    onflipping: function(dir, transDir) //this event will be triggered before animation
    {
        //dir is direction e.g. 'lr', 'tb'
        //transDir means transforming from front to back (value: 'fb') or back to front (value: 'bf')
        console.log("onflipping event"); 
    },
    onflipped: function(dir, transDir) //this event will be triggered after animation
    {
        //dir is direction e.g. 'lr', 'tb'
        //transDir means transforming from front to back (value: 'fb') or back to front (value: 'bf')
        console.log("onflipped event"); 
    }
}
$(".card-container").flip(options);
//that's it. Very simple and straightforward.
//You can have two ways to customize the flip effect including direction, speed, timingfunction, autoflip and so on
//The first way is to specify an options when calling flip(options) function, see details below
//The second way is to specify "data-" html attributes in html markup
$(".card-container").flip();