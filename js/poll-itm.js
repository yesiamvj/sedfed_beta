function focusLeftPane(){
   
    if($('poll-main-pane').css('left')!=='43%'){
        $('.poll-main-pane').stop().animate({'left':'43%'},'fast');
    }
    else{
         c('focusleftpane , mouse pos '+''+$('poll-main-pane').css('left'));
    }
    
}
function blurLeftPane(){
    
    if($('poll-main-pane').css('left')!=='25%'){
        $('.poll-main-pane').stop().animate({'left':'25%'},'fast');
    }
    else{
        c('blueleftpane , mouse pos '+''+$('poll-main-pane').css('left'));
    }
}

function c(txt){
    console.log(txt);
}