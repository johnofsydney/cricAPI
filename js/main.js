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

const update = function (matchID) {

}


$(document).ready( function(){
  console.log("ready");

  // $('#matchList').on('click', function (e) {
  //   let matchID = e.target.id
  //   update(matchID)
  // });

  $('#matchList').on('click touch touchstart', function (e) {
    let matchID = e.target.id
    $('h4').html(matchID)
    $.get(`http://cricapi.com/api/cricketScore?apikey=${APIKEY}&unique_id=${matchID}`, function(matchdata) {
      // console.log(matchdata.description);
      // console.log($(`#${matchID}`).html());
      $(`#${matchID}`).next().html(`<div>${matchdata.description}</div>`)

    });
  });

})
