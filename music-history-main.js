$(document).ready(function() {

var songString = "";

	$.ajax({
		url: "list.JSON"
	}).done(function(data) {
	  //console.log(JSON.stringify(data.songs)); 

    for (var i= 0; i < data.songs.length; i++){
      songString += "<h2 class='song-name'>" + data.songs[i].name + "</h2>";
      songString += "<ul><li>" + data.songs[i].artist + "</li>";
      songString += "<li>|</li>";
      songString += "<li>" + data.songs[i].album + "</li>";
      songString += "<li>" + "|" + "</li>";
      songString += "<li>" + data.songs[i].year + "</li>";
      songString += "<li>" + "|" + "</li>";
      songString += "<li>" + data.songs[i].label + "</li></ul>";

      
      $("#theSongList").html(songString);
           
    } 
	})   
});


