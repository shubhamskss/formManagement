# formManagement
/form api is for defining form 
curl example 
curl --location 'localhost:3000/form' \
--header 'Content-Type: application/json' \
--data-raw '{"title":"admission","name":"shubham","email":"sks@gmail.com","isGraduate":false}'
response example  datatype=object
{
    "uniqueID": "d1bd7890-e8e0-4e08-8f77-555e59a9a566",
    "title": "admission",
    "name": "shubham",
    "email": "sks@gmail.com",
    "isGraduate": false,
    "updatedAt": "2024-05-24T11:19:39.926Z",
    "createdAt": "2024-05-24T11:19:39.926Z"
}

/fill-data post to fill form 
curl example 
curl --location 'localhost:3000/fill-data?formTitle=admission' \
--header 'Content-Type: application/json' \
--data-raw '{"name":"shivam","email":"sks@gmail.com","isGraduate":false}'

response Example
datatype=Object
{
    "uniqueID": "beeb2a77-86f6-40e3-b581-7f1d00c4a081",
    "title": "admission",
    "name": "shivam",
    "email": "sks@gmail.com",
    "isGraduate": false,
    "updatedAt": "2024-05-24T11:55:46.686Z",
    "createdAt": "2024-05-24T11:55:46.686Z"
}



/fill-data get  to fetch data of passed form title
curl
curl --location 'localhost:3000/fill-data?formTitle=admission'

response Example
datatype=array of objects

[
    {
        "uniqueID": "b29fa02b-f578-424e-bbbd-1efdfe146526",
        "title": "admission",
        "name": "shivam",
        "email": "sks@gmail.com",
        "isGraduate": 0,
        "createdAt": "2024-05-24T11:55:20.000Z",
        "updatedAt": "2024-05-24T11:55:20.000Z"
    },
    {
        "uniqueID": "beeb2a77-86f6-40e3-b581-7f1d00c4a081",
        "title": "admission",
        "name": "shivam",
        "email": "sks@gmail.com",
        "isGraduate": 0,
        "createdAt": "2024-05-24T11:55:46.000Z",
        "updatedAt": "2024-05-24T11:55:46.000Z"
    }
]