var people = [];
var template = $("#people-template").html();

// add people
$("#peopleModule").find("button").on("click", function() {
  people.push($("#peopleModule").find("input").val());
  $("#peopleModule").find("input").val('');
  // data for Mustache Template
  var data = {
    people: people
  };
  $("#peopleModule").find("ul").html(Mustache.render(template, data));
});

// remove people
$("#peopleModule").find("ul").delegate("i.del", "click", function(e) {
  var $remove = $(e.target).closest("li");
  var i = $("#peopleModule").find("ul").find("li").index($remove);

  $remove.remove();

  people.splice(i, 1);
});