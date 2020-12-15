# NodeJS Express Mongo

## This is based on https://bezkoder.com/node-express-mongodb-crud-rest-api/

## Pagination example: https://bezkoder.com/node-js-mongodb-pagination/


Create User:
POST: http://localhost:8080/api/user

Request Body in JSON format
{
    "username": "Maruti",
    "name": "Maruti Muthu",
    "userlevel": "Operator",
    "attempts": 5 ,
    "autologout": 11,
    "expiry": 100
}

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