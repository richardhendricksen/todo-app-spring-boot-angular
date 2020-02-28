# Todo app
Simple Todo app with an Angular frontend and Spring Boot backend using an embedded mongo for storage.
It is used as demo app for my multiple boilerplate test framework repositories.

## Frontend
Start the frontend using `ng serve` from the `angular-frontend` folder. It wil start on port `4200`.  


## Backend
Start the backend using `mvn spring-boot:run` from the `spring-boot` folder. It wil start on port `8080`.  
It will automatically also start a embedded mongodb on port `27017` where it will store data.
For testing purposes you can start the backend without the embedded mongodb using `mvn spring-boot:run -Dspring-boot.run.profiles=tst`

