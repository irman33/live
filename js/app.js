$(document).ready(function(){
    var lsWrapper = $(".ls-wrapper");
    
    $("#ls-vidToggle").click(function(){
        if($("#ls-vid-wrapper").hasClass('col-md-8')){
            $("#ls-video").removeAttr("style");
            $(this).text('Shrink Video');
            $("#ls-vid-wrapper").removeClass('col-md-8');
            $("#ls-vid-wrapper").addClass('col-md-12');    
            $("#ls-video").toggleClass('xl');
            $("#ls-chat").toggleClass('xl');
            
            
            var chat = document.getElementById('ls-chat-wrapper');
            lsWrapper.append(chat);
            chat.parentNode.removeChild(elem);
            
            
        }else {
            $("#ls-video").removeAttr("style");
            $(this).text('Expand Video');
            $("#ls-vid-wrapper").removeClass('col-md-12');
            $("#ls-vid-wrapper").addClass('col-md-8');
            $("#ls-video").toggleClass('xl');
            $("#ls-chat").toggleClass('xl');
            
            var poll = document.getElementById('ls-poll-wrapper');
            lsWrapper.append(poll);
            chat.parentNode.removeChild(poll);
        }
    });
});