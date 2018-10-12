export const sendDownMarkers = (markers, routeId) => {
  return $.ajax({
    url: '/api/markers',
    method: 'POST',
    data: {
      markers,
      routeId,
    },
  });
};
