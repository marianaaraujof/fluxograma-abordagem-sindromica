$(document).ready(function(){
  $("#p1").hide();
  $("#p-contato").hide();
  $("#acs-b").hide();
  $("#sim").hide();
  $("#cont-sim").hide();
  $("#nao").hide();
  $("#cont-nao").hide();
  $("#tec-enf-b").hide();
  $("#enf-b").hide();
  $("#med-b").hide();
  $("#leve").hide();
  $("#grave").hide();
  $("#p13").hide();
  $("#p14").hide();
  $("#p15").hide();
  $("#p16").hide();
  $("#perg-sint").hide();
  $("#seta-sim").hide();
  $("#seta-nao").hide();

  $("#pinicial").click(function(){
    $("#p1").fadeIn(300, function(){
      $("#p-contato").fadeIn(200);
    });
  });

  $("#p-contato").click(function(){
    $("#acs-b").fadeIn(300, function(){
      $("#perg-sint").fadeIn(200);
      $("#sim").fadeIn(200);
      $("#nao").fadeIn(200);
    });
  });

  $("#sim").click(function(){
    $("#seta-nao").hide();
    $("#seta-sim").show();
    $("#cont-sim").fadeIn(300, function(){
      $("#cont-nao").fadeOut(200);
      $("#tec-enf-b").fadeIn(400);
    });
  });

  $("#nao").click(function(){
    $("#seta-sim").hide();
    $("#seta-nao").show();
    $("#cont-nao").fadeIn(200, function(){
      $("#tec-enf-b").fadeOut(400);
      $("#cont-sim").fadeOut(400);
      $("#enf-b").fadeOut(400);
      $("#med-b").fadeOut(400);
      $("#leve").fadeOut(400);
      $("#grave").fadeOut(400);
      $("#p13").fadeOut(400);
      $("#p14").fadeOut(400);
      $("#p15").fadeOut(400);
      $("#p16").fadeOut(400);
    });
    

  });

  $("#tec-enf-b").click(function(){
    $("#enf-b").fadeIn(200);
  });

  $("#enf-b").click(function(){
    $("#med-b").fadeIn(200);
  });

  $("#med-b").click(function(){
    $("#leve").fadeIn(200);
    $("#grave").fadeIn(200);
  });

  $("#leve").click(function(){
    $("#p13").fadeIn(300, function(){
      $("#p14").fadeIn(200);
    });
  });

  $("#grave").click(function(){
    $("#p15").fadeIn(300, function(){
      $("#p16").fadeIn(200);

    });
  });

  $("#show-all").click(function(){
    $("#p1").show();
    $("#p-contato").show();
    $("#acs-b").show();
    $("#perg-sint").show();
    $("#sim").show();
    $("#cont-sim").show();
    $("#nao").show();
    $("#cont-nao").show();
    $("#seta-sim").show();
    $("#seta-nao").show();
    $("#tec-enf-b").show();
    $("#enf-b").show();
    $("#med-b").show();
    $("#leve").show();
    $("#grave").show();
    $("#p13").show();
    $("#p14").show();
    $("#p15").show();
    $("#p16").show();
  })

});