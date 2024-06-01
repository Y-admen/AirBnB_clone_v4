$(document).ready(function () {
	let amenities = {};
      
	$('INPUT[type="checkbox"]').change(function () {
	  let amenityId = $(this).attr('data-id');
	  let amenityName = $(this).attr('data-name');
      
	  if ($(this).is(':checked')) {
	    amenities[amenityId] = amenityName;
	  } else {
	    delete amenities[amenityId];
	  }
      
	  let amenityNames = Object.values(amenities).join(', ');
	  $('.amenities H4').text(amenityNames);
	});
      });
      