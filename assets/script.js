var startButton = $("#start_button");
var s_prompt = $("#start_prompt");


startButton.on('click',function(){
    startButton.addClass('loading_screen');
    s_prompt.addClass('loading_screen');
    // couldn't figure out a way to do it with jquery, may visit later?
    document.getElementById("answer_layout").style.display = "initial";
    document.getElementById("questions").style.display = "initial";
    load_Two();
});

var btn1 = $("#btn_1");
var btn2 = $("#btn_2");
var btn3 = $("#btn_3");
var btn4 = $("#btn_4");
var question = $("#questions");

function load_Two(){    
    btn2.on('click', function(event){
        event.stopPropagation();
        question.text("testing");
        btn1.text("testing");
        btn2.text("testing");
        btn3.text("testing");
        btn4.text("testing");
        load_three();
    })
    
}



function load_three(){
    btn1.on("click", function(event){
        event.stopPropagation();
        question.text("texting testing");
    })
    
}