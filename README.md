# NodeJS Express Mongo

## This is based on https://bezkoder.com/node-express-mongodb-crud-rest-api/

## Pagination example: https://bezkoder.com/node-js-mongodb-pagination/

## Structure 

1. Routes
2. Models: Schema of collection
3. Controller: CRUD DB entry

## USER:

View all users:
GET: http://localhost:8080/api/user

Find user by username:
GET: http://localhost:8080/api/user?username=marutimuthu

Create User:
POST: http://localhost:8080/api/user
Request Body in JSON format
{
    "username": "Maruti",
    "name": "Maruti Muthu",
    "userlevel": "Operator",
    "password": "test",
    "attempts": 5 ,
    "autologout": 11,
    "expiry": 100
}

Update user details:
PUT: http://localhost:8080/api/user/:id
Request Body in JSON format
{
    "expiry": 200
}

Delete user: 
DELETE: http://localhost:8080/api/user/:id

## RECIPE:

View all recipes:
GET: http://localhost:8080/api/recipe

Find recipe by recipe name:
GET: http://localhost:8080/api/recipe?recipe_name=Testingza

Create Recipe: 
POST: http://localhost:8080/api/recipe
Request Body in JSON format
{
    "recipe_name": "Test",
    "product_name": "Test",
    "tooling_drg_no": 10,
    "size": 10,
    "thickness_range": "Test",
    "weight_range": "Test",
    "hardness": 10,
    "humidity": 10,
    "room_temp": 10,
    "dt_range": "Test",
    "angle_of_repose": 10
}

Update Recipe details:
PUT: http://localhost:8080/api/recipe/:id
Request Body in JSON format
{
    "recipe_name": "Test New"
}

Delete Recipe: 
DELETE: http://localhost:8080/api/recipe/:id