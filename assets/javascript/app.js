$(document).ready(function() {

   
    // $("#allQuestions").hide();

    $("#start").on("click", function () {
        $("#start").hide();
        $.playSound('assets/images/tiger.mp3');
        $("#allQuestions").show();

        var totalTime = 60;
        var timeStop = setInterval(timer, 1000);
        function timer() {
    
            if (totalTime == -1) {
    
                $("#time").append("<h2>Time's Up!</h2>");
                clearInterval(timeStop);
                
            }
            else {
                $("#time").html("<h2>Time Remaining: " + totalTime + " Seconds</h2>");
                totalTime--;
            }
        };
    
    })
    function clearAnswers() {
            $("img").each(function () {
                $(this).remove();
            });
        }
      
      function markIncorrect(el) {
            var img = new Image();
            img.src = 'http://www.littletherese.com/x.jpg';
            el.append(img);
        }
      
      function markCorrect(el) {
            var img = new Image();
            img.src = 'http://www.littletherese.com/tick.jpg';
            el.append(img);
        }
      
      $("form").on("submit", function (e) {
            e.preventDefault();
            clearAnswers();

            $questions = $(".question");
            $questions.each(function () {
                var answer = $(this).find("input:checked");
                var key = answer.attr("name");
                var val = answer.attr("value");
                console.log(key);
                console.log(val);

                if (answer.length === 0) {
                    markIncorrect($(this).find("p"));
                } else if (answers[key] !== val) {
                    markIncorrect($(this).find("p"));
                } else {
                    markCorrect(answer.parent());
                }


                var answers = {
                    "one": "d",
                    "two": "d",
                    "three": "c",
                    "four": "a",
                    "five": "c",
                    "six": "c",
                    "seven": "a",
                    "eight": "c",
                    "nine": "a",
                    "ten": "b"
                };

            });
        });
    });


