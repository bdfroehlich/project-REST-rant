# Project REST-Rant

REST-Rant is an app where users can review restaurants.

As a lover of food, I needed a place to easily store all of my restaurant visits so I can store my person reviews of them easily and efficiently.

## Views & Routes

![alt text](./assets/routes/routes.PNG)

## Methods

| Method |  Path |    Purpose |
|     :---:      |      :---:      |        :---:      |
| GET      |  /     |    Home Page     |
| GET       |  /places       |    Places Index Page       |
| POST      |  /places       |    Create New Place       |
| GET       |  /places/new       |    Form Page for Creating a New Place       |
| GET       |  /places/:id       |    Details About a Particular Place       |
| PUT       |  /places/:id       |    Update a Particular Place       |
| GET       |  /places/:id/edit       |    Form Page for Editing an Existing Place       |
| DELETE       |  /places/:id       |    Delete a Particular Place       |
| POST       |  /places/:id/rant       |    Create a Ran (Comment) About a Particular Place       |
| DELETE       |  /places/:id/rant/:rantid       |    Delete a Rant (Comment) About a Particular Place       |
| GET       |  *       |    404 Page (Matches Any Route Not Defined Above)       |