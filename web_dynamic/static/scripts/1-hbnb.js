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
      });
      