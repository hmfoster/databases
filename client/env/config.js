//YOU DO NOT NEED TO EDIT this code.
if (!/(&|\?)username=/.test(window.location.search)) {
  var newSearch = window.location.search;
  if (newSearch !== '' & newSearch !== '?') {
    newSearch += '&';
  }
  var username = (prompt('What is your name?') || 'anonymous');
  newSearch += 'username=' + username;
  window.location.search = newSearch;

}

$.ajax({
  url: "http://127.0.0.1:3000/classes/users",
  type: 'POST',
  data: JSON.stringify({username:username}),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Username sent');
    // Trigger a fetch to update the messages, pass true to animate
  },
  error: function (data) {
    console.error('chatterbox: Failed to send username');
  }
});
















// Put your parse application keys here!
// $.ajaxPrefilter(function (settings, _, jqXHR) {
//   jqXHR.setRequestHeader("X-Parse-Application-Id", "PARSE_APP_ID");
//   jqXHR.setRequestHeader("X-Parse-REST-API-Key", "PARSE_API_KEY");
// });
