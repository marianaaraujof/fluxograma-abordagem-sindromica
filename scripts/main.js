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
  //$("#p17").hide();

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
      $("#p7").fadeOut(200);
      $("#p8").fadeIn(400);
    });
  });

  $("#p6").click(function(){
    $("#p7").fadeIn(200, function(){
      $("#p8").fadeOut(400);
      $("#p5").fadeOut(400);
      $("#p9").fadeOut(400);
      $("#p10").fadeOut(400);
      $("#p11").fadeOut(400);
      $("#p12").fadeOut(400);
      $("#p13").fadeOut(400);
      $("#p14").fadeOut(400);
      $("#p15").fadeOut(400);
      $("#p16").fadeOut(400);
    });
    

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
     // $("#p17").fadeIn(200);
    });
  });

  $("#p17").click(function(){
    $("#p1").show();
    $("#p2").show();
    $("#p3").show();
    $("#p4").show();
    $("#p5").show();
    $("#p6").show();
    $("#p7").show();
    $("#p8").show();
    $("#p9").show();
    $("#p10").show();
    $("#p11").show();
    $("#p12").show();
    $("#p13").show();
    $("#p14").show();
    $("#p15").show();
    $("#p16").show();
  })

});