// using jQuery
function getCookie(name){
    var cookiValue = null;
    if (document.cookie && document.cookie !=''){
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++){
            var cookie = jQuery.trim(cookies[i]);
            //Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1)==(name + '=')){
                cookiValue = decodeURIComponent(cookie.substring(name))
                break;
    
                }
            }
        }
    
    return cookieValue;
}
 var csrftoken = getCookie('csrftoken');
    
function sameOrigin(url){
        var host = document.location.host;
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;

        return(url == origin || url.slice(0, origin.length + 1) == origin +)
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin)

            !(/^(\/\/|https:).*/.test(url));
    }
    function csrfSafeMethod(method){

        return(/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        beforeSend: function(xhr,settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("x-CSRFToken", csrftoken);
            }
        }
    })