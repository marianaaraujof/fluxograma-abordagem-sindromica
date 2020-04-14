$(document).ready(function(){
  $("#p1").hide();
  $("#p2").hide();
  $("#p3").hide();
  $("#p4").hide();
  $("#p5").hide();
  $("#p6").hide();
  $("#p7").hide();
  $("#p8").hide();
  $("#p9").hide();
  $("#p10").hide();
  $("#p11").hide();
  $("#p12").hide();
  $("#p13").hide();
  $("#p14").hide();
  $("#p15").hide();
  $("#p16").hide();

  $("#pinicial").click(function(){
    $("#p1").fadeIn(300, function(){
      $("#p2").fadeIn(200);
    });
  });

  $("#p2").click(function(){
    $("#p3").fadeIn(300, function(){
      $("#p4").fadeIn(200);
      $("#p6").fadeIn(200);
    });
  });

  $("#p4").click(function(){
    $("#p5").fadeIn(300, function(){
      $("#p8").fadeIn(400);
    });
  });

  $("#p6").click(function(){
    $("#p7").fadeIn(200);
  });

  $("#p8").click(function(){
    $("#p9").fadeIn(200);
  });

  $("#p9").click(function(){
    $("#p10").fadeIn(200);
  });

  $("#p10").click(function(){
    $("#p11").fadeIn(200);
    $("#p12").fadeIn(200);
  });

  $("#p11").click(function(){
    $("#p13").fadeIn(300, function(){
      $("#p14").fadeIn(200);
    });
  });

  $("#p12").click(function(){
    $("#p15").fadeIn(300, function(){
      $("#p16").fadeIn(200);
    });
  });

});