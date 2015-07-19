/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.fbAsyncInit = function() {
FB.init({
    appId      : '1153103148049536',
    xfbml      : true,
    version    : 'v2.3'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
 
 
 $(document).ready(function() {
    $(".textFields").click(function()
    {
//        alert($('.textFields').value);
        $(this).select(); 
    } );
    $('#password').keydown(function(e) {
        if($(this).attr("type") == "text")
        {
            //alert(e.keyCode);
            
            $(this).attr("type","password");
            $(this).val("");
        }
    });
});