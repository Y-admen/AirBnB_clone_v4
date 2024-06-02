$(document).ready(function () {
	const amenities = {};
      
	$('input[type=checkbox]').change(function () {
	  const amenityId = $(this).data('id');
	  const amenityName = $(this).data('name');
      
	  if ($(this).is(':checked')) {
	    amenities[amenityId] = amenityName;
	  } else {
	    delete amenities[amenityId];
	  }
      
	  const amenityNames = Object.values(amenities).join(', ');
	  $('div.amenities > h4').text(amenityNames);
	});
        $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
            if (textStatus === 'success' && data.status === 'OK') {
              $('#api_status').addClass('available');
            } else {
              $('#api_status').removeClass('available');
            }
          });
    $('button').click(function () {
        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search',
            data: JSON.stringify(amenities), 
            contentType: 'application/json', 
            dataType: 'json', 
            success: function(data) {
                alert(data.length) // for tracing
                $("section.places").append(data.map(place => {
                    return `<article>
                            <div class="title">
                                <H2>${place.name}</H2>
                                <DIV class="price_by_night">
                                ${place.price_by_night}
                                </DIV>
                            </DIV>
                            <DIV class="information">
                                <DIV class="max_guest">
                                <I class="fa fa-users fa-3x" aria-hidden="true"></I>
                                </BR>
                                ${place.max_guest} Guests
                                </DIV>
                                <DIV class="number_rooms">
                                <I class="fa fa-bed fa-3x" aria-hidden="true"></I>
                                </BR>
                                ${place.number_rooms} Bedrooms
                                </DIV>
                                <DIV class="number_bathrooms">
                                <I class="fa fa-bath fa-3x" aria-hidden="true"></I>
                                </BR>
                                ${place.number_bathrooms} Bathrooms
                                </DIV>
                            </DIV>
                            <DIV class="description">
                                ${place.description}
                            </DIV>
                            </article>`;
                }));
            }
          });
});
});
