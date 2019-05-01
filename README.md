# The React-port of my personal portfolio website

![react-logo](https://media.giphy.com/media/nlOqrlN3S5zMY/giphy.gif)

## How do I see a live version?

- Clone this branch
- navigate to the 'client' directory in terminal
- `npm run server`
- load up localhost:3000 in a browser and check it out

## Why?

- Make it less of a pain in the ass to rearrange/add projects to the portfolio page on my site
- Get some exercise in React without worrying about Redux

## How?

- Created the repository with create-react-app
- Made template components to stand-in for pages on the original site
- Handled links using Link and BrowserRouter from react-router-dom
- Made static-y pages like "CV" and the landing page using functional components
- Class based component used for portfolio page - it takes an array of objects containing project information, and then maps them to bootstrap cards. This makes it much easier to rearrange

## What next?

The biggest to-do before building and overwriting the vanilla version of the site is just entering my projects. The page is 90% working as is
