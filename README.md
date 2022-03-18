# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Tech

**CSS Framework:** Bootstrap

**Stack:** MongoDB, Express, NodeJS

**Server-Side Rendering:** JSX

**Node Modules:** method-override, dotenv, express-react-views

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
| POST       |  /places/:id/comment       |    Create a Rant (Comment) About a Particular Place       |
| DELETE       |  /places/:id/comment/:commentid       |    Delete a Rant (Comment) About a Particular Place       |
| GET       |  *       |    404 Page (Matches Any Route Not Defined Above)       |

## Data Base

**places / restaurants**

| Field Name |  Data Type |
|     :---:      |      :---:      |
| _id      |  Object ID     |
| name      |  string     |
| city      |  string       |
| state      |  string       |
| cuisines       |  string       |
| pic       |  string       |
| comments       |  ref(comments) Object ID      |

**rants / comments**

| Field Name |  Data Type |
|     :---:      |      :---:      |
| _id      |  Object ID     |
| place_id      |  ref(places) Object ID *Need to Implement to Avoid Orphaned Data   |
| rant      |  boolean       |
| rating      |  number       |
| comment       |  string       |
| reviewer       |  string       |


## Planning

**Wireframes**

![wireframe of routes](./assets/routes/routes.PNG)

**User Stories**

WIP

## Notes

WIP