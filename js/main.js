console.log("connected");

let APIKEY = "TXJrSO0rz7ST0LSBMfpANGP5EzR2"

$.get(`https://cricapi.com/api/matches?apikey=${APIKEY}`, function(matchdata) {
  const matches = matchdata.matches;
  const intMatches = matches.filter(m => ((m.type === "Test") || (m.type === "ODI")) && (m.matchStarted === true))

  $.each(intMatches, function (index, value) {
    matchHeadline = `<div class="matchInfo ${value['type']}" id="${value['unique_id']}">${value['team-1']} vs ${value['team-2']}</div><div class="scores"></div>`
    $('#matchList').append(matchHeadline)
  })
});



$(document).ready( function(){
  console.log("ready");

  $('#matchList').on('click touch', function (e) {
    let matchID = e.target.id
    $.get(`https://cricapi.com/api/cricketScore?apikey=${APIKEY}&unique_id=${matchID}`, function(matchdata) {
      $('h4').html(`${matchdata.description}`)
    });
  });

})
