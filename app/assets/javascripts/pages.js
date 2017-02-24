// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$.get('https://data.sfgov.org/resource/jjew-r69b.json', function(response) {

    var responseDiv = document.getElementById('responseDiv');

    var htmlString = "";

    for (var i = 0; i < response.length; i++){
      htmlString += '<div class="foodtruck" onclick="changeFoodTruckColor(this)">';
      htmlString += '<h3>' + response[i].applicant + '</h3>';
      htmlString += '<p>' + response[i].dayofweekstr + '</p>';
      htmlString += '<p>' + response[i].optionaltext + '</p>';
      htmlString += '</div>';
    }

    responseDiv.innerHTML = htmlString;

    console.log(response);
});

function changeFoodTruckColor(foodTruckDiv){
  if(foodTruckDiv.style.color == "blue") {
    foodTruckDiv.style.color = "black";
  } else {
    foodTruckDiv.style.color = "blue";
  }
}

function showAllTrucks() {
  //don't do if statement, loop through foodtrucks and set display = ""
  var foodtrucks = document.querySelectorAll('.foodtruck');
  for(var i = 0; i < foodtrucks.length; i++) {
    var foodtruck = foodtrucks[i];
    foodtruck.style.display = "";
  }
}

function showFridayTrucks() {
  var foodtrucks = document.querySelectorAll('.foodtruck');
  for(var i = 0; i < foodtrucks.length; i++) {
    var foodtruck = foodtrucks[i];
    //fancy way to say if "Friday" is in this string
    if(foodtruck.innerHTML.indexOf("Friday") !== -1) {
      foodtruck.style.display = "";
    } else {
      foodtruck.style.display = "none";
    }
  }
}

function changeColors() {

  setTimeout(function() {
    document.getElementById("first").style.color = "red";

    setTimeout(function() {
      document.getElementById("second").style.color = "blue";

      setTimeout(function() {
        document.getElementById("third").style.color = "purple";

        setTimeout(function() {
          document.getElementById("fourth").style.color = "yellow";

        }, 1000);

      }, 1000);

    }, 1000);

  }, 1000);
}




