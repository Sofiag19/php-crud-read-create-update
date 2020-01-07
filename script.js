function printData(data) {

  var target = $("#container");

  var template = $("#box-template").html();
  var compiled = Handlebars.compile(template);

  for (var i=0;i<data.length;i++) {

    var configurazione = data[i];
    var configurazioneHTML = compiled(configurazione);
    target.append(configurazioneHTML);

  }
}

function getConfigurazioni() {

  $(".box").remove();
  $.ajax({

    url: 'getConfigurazioni.php',
    method: 'GET',
    success: function(data) {

      printData(data);
      console.log(data);
    },
    error: function(error) {

      console.log("error", error);
    }
  });
}

function newConfigurazione(){
  var me = $(this);
  $.ajax({
    url: "getNewConfigurazione.php",
    method : "POST",
    data : me.serialize(),
    success : function(data){
      console.log(data);
      if (data) {
        getConfigurazioni();
      }
    },
    error : function(error){
      console.log("error", error);
    }
  })
  return false;
}

function updateConfigurazione(){
  var me = $(this);
  $.ajax({
    url: "getUpdateConfigurazione.php",
    method : "POST",
    data : me.serialize(),
    success : function(data){
      console.log(data);
      if (data) {
        getConfigurazioni();
      }
    },
    error : function(error){
      console.log("error", error);
    }
  })
  return false;
}

function init() {

  getConfigurazioni();
  $("#myForm").submit(newConfigurazione);
  $("#myForm2").submit(updateConfigurazione);

}

$(document).ready(init);
