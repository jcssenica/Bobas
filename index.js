import express from 'express'

//import a package/library
const app = express()

//specify a port using
const port = process.env.PORT || 3001

//app = express [line 4]
app.use(express.json())

let cars = {
    //[1]=ID
    1: {
     name: "Car 1", 
     color: "Red", 
     brand: "Nissan", 
     year: "2000"
    },
    2: {
     name: "Car 2", 
     color: "Blue", 
     brand: "Audi", 
     year: "1995"
    },
    3: {
     name: "Car 3", 
     color: "Green",
     brand: "Toyota", 
     year: "2005"
    },
    4: {
     name: "Car 4",
     color: "Green", 
     brand: "Hyundai",
     year: "2010"
    }
 }

 //query structures use?
 // car-api.com?color=Green [client send in request in this format]
 //('/',route, function
 //[content passed in] =>
 app.get('/',(req,res) => {
    let matchingCars =[];

    //funtion for each object
    //object--key = ID number--value of each key
    Object.keys(cars).forEach((key,value) => {
        //give me the value entered, give me the value of 
        //ID number object, compare and check if match the 
        //value entered
        if(req.query.color == cars[key].color){
            //Only give/push ID back to the user
            matchingCars.push(key)
        }
    })
    //after doing through the array, send it back to the user
    res.send(matchingCars)
 })

//url parameter use / 
//car-api.com/car/:1

app.get('/car/:car',(req, res) => {
    //for user spending back the car
    let car;
    //:1 only the value after:
    Object.keys(cars).forEach((key,value) => {
        //user input in url
        if(req.params.car.substring(1) == key){
            car = cars[key]
        }
    })
    //sending back the variable
    res.send(car)

})


 app.listen(port,() => {
    console.log(`App listening on ${port}`)
 })