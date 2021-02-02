const retrive = function(event) {
  event.preventDefault(); // Don't leave this page.


  const title = $('#details').val();
  const url = `https://api.coingecko.com/api/v3/exchanges/${ title }`;

  // Modern jQuery: Deferreds (=> Promises)
  $.ajax(url).done(function(result) {

    $('#trust_score').attr('src', result.image);
    $('#name').html(`Name: ${result.name}`);
    $('#country').html(`Country: ${result.country}`);
    $('#year_established').html(`Established on: ${result.year_established}`);
    $('#trust_score_rank').html(`Trust score: ${result.trust_score_rank}`);
    $('#trust_score').attr('src', result.image);
  }).fail(function(response) {
    alert(response.responseJSON.error);
  });
};

$(document).ready(function() {
  $('#search-form').on('submit', retrive);
});
