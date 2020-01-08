function printData(data) {

  $(".box").remove();
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
  console.log(me);
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

function deleteConfigurazione(){
  var me = $(this);
  $.ajax({
    url: "getDeleteConfigurazione.php",
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

  $("#aggiungiForm").submit(newConfigurazione);

  $("#modificaForm").submit(updateConfigurazione);

  $("#eliminaForm").submit(deleteConfigurazione);

}

$(document).ready(init);
