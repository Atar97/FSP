export const fetchMyRoutes = () => (
  $.ajax({
    url: 'api/my_routes',
    method: 'GET'
  })
);

export const fetchAllRoutes = () => (
  $.ajax({
    url: 'api/routes',
    method: 'GET'
  })
);

export const fetchRoute = (id) => (
  $.ajax({
    url: `api/routes/${id}`,
    method: 'GET'
  })
);

export const createRoute = (route) => (
  $.ajax({
    url: 'api/routes',
    method: 'POST',
    data: route
  })
);

export const updateRoute = (route) => (
  $.ajax({
    url: `api/routes/${route.route.id}`,
    method: 'PATCH',
    data: route
  })
);

export const destroyRoute = (id) => (
  $.ajax({
    url: `api/routes/${id}`,
    method: 'DELETE'
  })
);
