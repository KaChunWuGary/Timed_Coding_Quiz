var startButton = $("#start_button");
var s_prompt = $("#start_prompt");
var btn1 = $("#btn_1");
var btn2 = $("#btn_2");
var btn3 = $("#btn_3");
var btn4 = $("#btn_4");
var question = $("#questions");


startButton.on('click',function(){
    startButton.addClass('loading_screen');
    s_prompt.addClass('loading_screen');
    // couldn't figure out a way to do it with jquery, may visit later?
    document.getElementById("answer_layout").style.display = "initial";
    document.getElementById("questions").style.display = "initial";
    load_Two();
});

function question_two(){
    question.text("testing"),
    btn1.text("testing"),
    btn2.text("testing"),
    btn3.text("testing"),
    btn4.text("testing")
};

function load_Two(){    
    btn1.addClass("wrong_answers");
    btn3.addClass("wrong_answers");
    btn4.addClass("wrong_answers");
    function remove_class (){
        btn1.removeClass("wrong_answers");
        btn3.removeClass("wrong_answers");
        btn4.removeClass("wrong_answers");
    }
    btn2.on("click", function(){
        question_two();
        remove_class();
        load_three();
        btn2.off('click');
    })
    function wrong_click(event){
        event.preventDefault();
        question_two();
        $(".wrong_answers").off("click",wrong_click);
        console.log("wrong");
        remove_class();
        load_three();
  
    }
    $(".wrong_answers").on("click",wrong_click);
}   

function question_three(){
    question.text("texting testing"),
    btn1.text("texting testing"),
    btn2.text("texting testing"),
    btn3.text("texting testing"),
    btn4.text("texting testing")
}

function load_three(){
    btn2.addClass("wrong_answers");
    btn3.addClass("wrong_answers");
    btn4.addClass("wrong_answers");
    function remove_class (){
        btn2.removeClass("wrong_answers");
        btn3.removeClass("wrong_answers");
        btn4.removeClass("wrong_answers");
    }
    btn1.on("click", function(){
        question_three();
        remove_class();
        endgame();
        btn1.off('click');

    })
    function wrong_click(event){
        event.preventDefault();
        question_three();
        $(".wrong_answers").off("click",wrong_click);
        console.log("wrong");
        remove_class();
        endgame();
    }
    $(".wrong_answers").on("click",wrong_click);
}

function endgame(){
    btn1.addClass("wrong_answers");
    btn2.addClass("wrong_answers");
    btn3.addClass("wrong_answers");
    btn4.on("click", function(event){
        document.getElementById("answer_layout").style.display = "none";
        question.text("The quiz has ended.")
    })
    function wrong_click(event){
        event.preventDefault();
        document.getElementById("answer_layout").style.display = "none";
        question.text("The quiz has ended.")
    }
    $(".wrong_answers").on("click",wrong_click);

}