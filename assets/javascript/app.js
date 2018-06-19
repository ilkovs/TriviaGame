$(document).ready() {

    $("#allQuestions").hide();

    $("#start").on("click", function () {
        $("#start").hide();
        $.playSound('assets/images/tiger.mp3');
        $("#allQUestions").show();
    }

    function clearAnswers(){
        $("img").each(function(){
          $(this).remove();
        })
      }
      
      function markIncorrect(el){
        var img = new Image();
        img.src = 'http://www.littletherese.com/x.jpg';
        el.append(img);
      }
      
      function markCorrect(el){
        var img = new Image();
        img.src = 'http://www.littletherese.com/tick.jpg';
        el.append(img);
      }
      
      $("form").on("submit", function(e){
        e.preventDefault();
        clearAnswers();
      
        $questions = $(".question");
        $questions.each(function(){
          var answer = $(this).find("input:checked"),
              key = answer.attr("name"),
              val = answer.attr("value");
      
          if(answer.length === 0){
            markIncorrect($(this).find("p"));
          } else if (answers[key] !== val){
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
        "ten": "    "
      }

});

    
   