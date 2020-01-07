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


function init() {

  getConfigurazioni();
  
}

$(document).ready(init);
