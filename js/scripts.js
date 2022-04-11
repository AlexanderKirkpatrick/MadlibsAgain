$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const userInput = []
    userInput.push($("input#person1").val());
    userInput.push($("input#person2").val());
    userInput.push($("input#animal").val());
    userInput.push($("input#exclamation").val());
    userInput.push($("input#verb").val());
    userInput.push($("input#noun").val());
    console.log(userInput);

    let counter = 1

    userInput.forEach(function(input) {
      $(".input" + counter).text(input);
      counter ++
    });


    $("#story").show();
  });
});