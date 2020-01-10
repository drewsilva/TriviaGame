$("#start").on("click", function() {
   game.start(); 
});

var questions = [{
    question: "Which NFL team's helmet is purple?",
    answers: ["Cowboys", "49ers", "Packers", "Vikings"],
    correctAnswer: "Vikings"
}, {
    question: "In which year was Alaska sold to the U.S.?",
    answers: ["1912", "1887", "1867", "2000"],
    correctAnswer: "1867"
}, {
    question: "Which is the largest freshwater lake in the world?",
    answers: ["Ontario", "Eerie", "Superior", "Tomahawk"],
    correctAnswer: "Superior"
}, {
    question: "What is the colored part of the human eye?",
    answers: ["Mandible", "Cornea", "Iris", "Lens"],
    correctAnswer: "Iris"
}, {
    question: "Where did the Olympic Games originate?",
    answers: ["China", "Africa", "France", "Greece"],
    correctAnswer: "Greece"
}, {
    question: "What percent of an egg's weight is the shell?",
    answers: ["10", "30", "40", "12"],
    correctAnswer: "12"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 10,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend('<h2> Time Remaining: <span id = "counter">120</span> Seconds</h2>');
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append('<h2>' + questions[i].question+'</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type = 'radio' name = 'question-" +i+ " ' value= '"+questions[i].answers[j] + "'>" +questions[i].answers[j]);
            }
        }
    },
    done: function() {
        $.each($("input[name='question-0']:checked"), function() {
           if ($(this).val()==questions[0].correctAnswer) {
               game.correct++;
           } else {
               game.incorrect++;
           }
        });
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val()==questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val()==questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val()==questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val()==questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function() {
            if ($(this).val()==questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
    });

    this.result ();

    },

    result: function() {
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All done! </h2>");
        $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " +(questions.length-(this.incorrect+this.correct)) + "</h3>");
    }
};