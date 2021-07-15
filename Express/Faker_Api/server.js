const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;
class User {
    constructor(){
        this._id = faker.datatype.number(),
        this.firstName = faker.name.firstName(),
        this.lastName = faker.name.lastName(),
        this.phoneNumber = faker.phone.phoneNumber(),
        this.email = faker.internet.email(),
        this.password = faker.internet.password()
    }
}

class Company  {
    constructor(){
        this._id = faker.datatype.number(),
        this.name = faker.company.companyName(),
        this.street = faker.address.streetName(),
        this.city = faker.address.city(),
        this.state = faker.address.state(),
        this.zipCode = faker.address.zipCodeByState()
    }
}
app.get("/api/user/new", (req, res) => {
    
    res.json(new User() );
});

app.get("/api/company/new", (req, res) => {
    
    res.json(new Company() );
});


app.get("/api/user/company", (req, res) => {

    res.json({user :new User(),company:new Company()});
    
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );