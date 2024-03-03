var startButton = $("#start_button");
var s_prompt = $("#start_prompt");


startButton.on('click',function(){
    startButton.addClass('loading_screen');
    s_prompt.addClass('loading_screen');
    // couldn't figure out a way to do it with jquery, may visit later?
    document.getElementById("answer_layout").style.display = "initial";
    document.getElementById("questions").style.display = "initial";
    loadVariables();
    loadNext();
});

function loadVariables(){
    var btn1 = $("#btn_1");
    var btn2 = $("#btn_2");
    var btn3 = $("#btn_3");
    var btn4 = $("#btn_4");
    var question = $("#questions");
}

function loadNext(){
    loadVariables();    
    btn2.on('click', function(){
        btn1.text("testing");
            console.log(btn2);
    })

}



function Question_one(){
    
    
}