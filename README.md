# Plot My Plod

Plot My Plod is an app for both avid and amateur plodders. Log in to track your plodding progress and create plods that you find yourself frequently using. PmP makes use of a Rails/PostgreSQL backend with a React.js and Redux frontend.

The project was designed and built within a ten day timeline, though improvements and features will be added over time.

## Features

- Secure frontend to backend user authentication using BCrypt
- Users can create and destroy routes they have plodded
- Users can create, edit, and destroy workouts to make sure they are hitting their plodding goals

## Routes

Routes uses the google maps javascript api to allow plodders to recreate paths they have plodded. Plot My Plod allows plodders to undo or clear mistaken points and dynamically updates the plodded distance as routes are being created.

The route map has a search feature that allows plodders to center the map on any location in the world.

![Alt Text](https://github.com/Atar97/FSP/blob/master/app/assets/readme/search-bar.gif)

Every route saves a thumbnail so when searching through the index pages the site doesn't need to load a fully interactive map.

## Workouts

Plodders can keep track of their progress by logging the routes they have plodded using the workout feature. Each workout can have a route associated with it.

Workouts automatically update distance based on the distance of the route and show pacing information once a time has been entered.
