# Movie Discovery Web Application

## Overview of the Project

This is a movie discovery web application that allows users to search for movies, view movie details, and save their favorite movies. It consumes data from the TMDB API. The user can also rate the movie they have watched

## Table of Contents

- [User Interface](#user-interface)
- [Movie Details](#movie-details)
- [API Integration](#api-integration)
- [Error Handling](#error-handling)
- [Getting Started](#getting-started)
- [Deployment](#deployment)

## User Interface

- On the homepage, the top 10 movies are listed in a grid layout with their movie posters.
- Each card displays the movie title and release date.

## Movie Details

The `/Details/:id` route displays movie details when the user clicks on a movie card.

- Movie Title: `[data-testid: movie-title]`
- Release Date (in UTC): `[data-testid: movie-release-date]`
- Runtime (in minutes): `[data-testid: movie-runtime]`
- Overview: `[data-testid: movie-overview]`

## API Integration

The application consumes the TMDB API to fetch movie data using the following endpoint:

- Fetch movie details by ID: `https://api.themoviedb.org/3/movie/{movie_id}`

## Error Handling

Error handling is implemented to display meaningful error messages to users in case of API failures or other issues.

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/Donleke/HNG-movie-discovery-app/tree/main
   ```

## Deployment

The applicatipon was deployed with netlify.com.
