console.log("connected");


$.get("https://cricapi.com/api/matches?apikey=TXJrSO0rz7ST0LSBMfpANGP5EzR2", function(matchdata) {
  const matches = matchdata.matches;
  const intMatches = matches.filter(m => ((m.type === "Test") || (m.type === "ODI")) && (m.matchStarted === true))


  $.each(intMatches, function (index, value) {
    // console.log( index, value);
    // console.log(value['team-1']);
    // console.log(value['team-2']);
    // console.log(value['unique_id']);

    matchInfo = `<div class="${value['type']}" id="${value['unique_id']}"<h2>${value['team-1']} vs ${value['team-2']}</h2></div>`

    $('#matchList').append(matchInfo)
  })
});
