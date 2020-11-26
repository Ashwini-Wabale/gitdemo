(function($){
    var color="#0000FF";
    $.fn.myfunction=function(){
        console.log("in my function plugin");
        this.css({"background-color":color});
        return this;
    }
}) (jQuery)