# What needs doing!
## TA questions

- if I am creating something with a belongs to association is it always making 2 db queries because it needs to know if that thing exists?
- do I have to do full crud for workouts


## Route Edit
- ### clear
  - needs access to markers, set all maps to null then dispatch
    receiveMarkers([])

    **20min if it all goes well**
- ### create_map.jsx
  - change save route button to dispatch a call to update rather
    than a call to create
  - if markers were changed at all during the time they were updating we should make sure we update those markers as well (this might be a doozy I think it might be better to just delete all the markers and create new ones but I'll ask Rose)

  **4-5 hrs**

## Workouts
  - can you have a workout without a route?
  - crd no updating your workout until later
  **1 day**

## Friends
  **1 day**

## Things to come back to
  - fix the login user page to not show errors on demo user (sign-up page doesn't do it anymore)**10 min**
  - change the color of the route line when creating and editing **15 min**
  - display routes based on their created by time **30 min**
  - active storage and aws for images of maps **1 day**
  - 1st and last markers become stylized on routes **1 hr**
  - redo button in tools **1 hr**
  - auto scaling maps to include all points for show pages **4hr**
