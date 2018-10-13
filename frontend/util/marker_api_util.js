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

export const fetchMarkersforRoute = (routeId) => {
  return $.ajax({
    url: `/api/routes/${routeId}/markers`,
    method: 'GET'
  });
};
