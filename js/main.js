console.log("connected");

let APIKEY = "TXJrSO0rz7ST0LSBMfpANGP5EzR2"

$.get(`https://cricapi.com/api/matches?apikey=${APIKEY}`, function(matchdata) {
  const matches = matchdata.matches;
  const intMatches = matches.filter(m => ((m.type === "Test") || (m.type === "ODI")) && (m.matchStarted === true))

  $.each(intMatches, function (index, value) {
    matchHeadline = `<div class="matchInfo ${value['type']}" id="${value['unique_id']}">${value['team-1']} vs ${value['team-2']}</div>`
    $('#matchList').append(matchHeadline)
  })
});



$(document).ready( function(){
  console.log("ready");

  $('#matchList').on('click', function (e) {
    // console.log(e.target);
    // console.log(e.target.tagName);
    // console.log(e.target.id);
    let matchID = e.target.id
    // $(`#${matchID}`).append('<div>isiascij</div>')

    $.get(`http://cricapi.com/api/cricketScore?apikey=${APIKEY}&unique_id=${matchID}`, function(matchdata) {
      console.log(matchdata.description);
      $(`#${matchID}`).append(`<div>${matchdata.description}</div>`)

    });






  })
})
