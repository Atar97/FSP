export const sendDownMarkers = markers => (
  $.ajax({
    url: '/api/markers',
    method: 'POST',
    data: markers,
  })
);
