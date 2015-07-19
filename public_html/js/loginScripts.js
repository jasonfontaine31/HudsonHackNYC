/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//function rehash(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

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
$("div.twitterFeed").html()
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
    
    
var uri =window.location.href;
if(uri.indexOf("q"))
{
    window.scrollTo(0,document.body.scrollHeight);
    
}
   
   
    $('.noLoad li a.link').click(function(e) {
        e.preventDefault();
        var text = $(this).text();
        var html="";
        $.getScript("js/twitterScript.js",function() {
        $.getJSON("js/twitterFeed.json",function(data){
            
            switch (text) {
                case "@BillNye":
                    html = data.BillNye;
                    break;
                case "@neiltyson":
                    html = data.neiltyson;
                    break;
                case "#science":
                    html = data.science;
                    break;
                default:
                    html= data.scicomm;
                            
            }
          var uri = window.location.href;
          url+=html;
          if(uri.indexOf("q") > 0)
          {
              alert(getUrlParameter("q"));
              //location.href= uri;
          }
          
          
           //rehash;
        });
    });
        //alert(html);
        
        // depending if the code is showing a twitter feed or showing people
    });
    $('.showMore').click(function(){
        $('.people,.tags').toggle(" on");
    });
});

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&'); 
    for (var i = 0; i < sURLVariables.length; i++)
    { 
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        { return sParameterName[1]; } 
    } 
}