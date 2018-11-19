$( document ).ready( readyNow );

function readyNow(){
    console.log( 'JQ' );
    $('#addSongButton').on('click', addSong);
    getSongs();
} // end readynow

function addSong() {
  console.log('add song');
  const objectToSend = {
    track: $("#trackIn").val(),
    artist: $("#artistIn").val(),
    published: $("#publishedIn").val(),
    rank: $("#rankIn").val()
  } // end objectToSend
  console.log('sending:', objectToSend);
  $.ajax({
    method: 'POST',
    url: '/songs',
    data: objectToSend
  }).then( function (response) {
    console.log('back from POST with:', response);
  }).catch( function (err) {
    console.log('error with POST:', err);
  }); //end AJAX
  getSongs();
} // end addSong


function getSongs() {
  $.ajax({
    method: 'GET',
    url: '/songs',
  }).then( function (response) {
    console.log('back from GET with:', response);
  }).catch( function (err) {
    console.log('error with GET:', err);
  });
} // end getSongs
