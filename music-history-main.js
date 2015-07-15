var songs = [];
var songList = document.getElementById("song-list");

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


for (var i = 0; i < songs.length; i++){
	var songsAdd = songs[i];
	var songToFront = prompt("Add to the front of the list or exit to quit.");
	var songToEnd = prompt("Add song to the end of the list or exit to quit.");

	if (songToFront.toLowerCase() === "exit") {
		break;
	} else {
		songs.unshift(songToFront);
	}
	if (songToEnd.toLowerCase() === "exit") {
		break;
	} else {
		songs.push(songToEnd);
	}
	}

for (var j = 0; j < songs.length; j++) {
	songs[j] = songs[j].replace(/[!@*(]/g, "");
	songs[j] = songs[j].replace(">", "-");
	songList.innerHTML += "<span class= 'song-list'>" + songs[j] + "</span>" + "<br>";
}