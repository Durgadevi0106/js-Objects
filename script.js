
// task-1
var book = {
    title: "Macbeth",
    author: "William Shakespheare",
    yearPublished: 1623
}
console.log(book[`author`]); //Access the author property and print it.
book['yearPublished'] = 2022; //Modify the yearPublished property to 2022.
book['genre'] = "Fiction";   //Add a new property genre to the book object with the value “Fiction”.
delete book.title;    //Delete the title property from the book object.
console.log(book);

console.log("-------------------------------------")
// task-2

var employee = {
    name: "Durgadevi",
    age: 20,
    position: "Software Developer",
    salary: 40000,
}
console.log(employee['position']);//Access the position property and print it.
employee['salary'] = 50000;//Modify the salary property to 50000.
employee['Department'] = "HR";//Add a new property department to the employee object with the value “HR”.
delete employee['age'];//Delete the age property from the employee object.
console.log(employee);

console.log('----------------------------------------')

// task-3

var product={
    id:577,
    name:"Epson",
    price: 599,
    category:"Printer"
}
console.log(product['price']);//Access the price property and print it.
product['category']="Electronics";//Modify the category property to “Electronics”.
product['inStock']="true";//Add a new property inStock to the product object with the value true.
delete product['id'];//Delete the id property from the product object.
console.log(product);

console.log('---------------------------------------------------------------');


// task-4

var car={
    make: "Toyota",
    Model:"Fortuner",
    year:2018,
    colour:"White"
}
console.log(car['make']);//Access the make property and print it.
car['colour']="Black";//Modify the color property to “Black”.
car['engineType']="v6";//Add a new property engineType to the car object with the value “V6”.
delete car['year']//Delete the year property from the car object.
console.log(car)

console.log('-------------------------------------------------------------------');

// task-5

var student={
    name:"Vanitha",
    age:21,
    Grade:80,
    school:"Ravindra Bharathi school"
}
console.log(student['school']);//Access the school property and print it.
student['Grade']=95;//Modify the grade property to 95.
student['hobbies']=["reading","sports"],//Add a new property hobbies to the student object with the value ["reading", "sports"].
delete student['age'];//Delete the age property from the student object.
console.log(student);

console.log('------------------------------------------------------------')

// task-6

const user = {
    username: "john_doe",
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      address:{
        street: "456 Elm St",
        city: "Gotham",
        zip: "54321"
      }
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
  };
console.log(user['profile']['address']['city']); // access the city Property from the address object and print it.
user['preferences']['theme']="light"; //Modify the theme property in the preferences object to “light”.
user['profile']['phone']="555-9876", //	Add a new property phone to the profile object with the value “555-9876”.
delete user['profile']['address']['zip']; //Delete the zip property from the address object.
console.log(user);

 console.log('------------------------------------');

 //task-7
 const company = {
  name: "Tech Solutions",
  employees: [
    {
      name: "Alice",
      position: "Developer",
      contact: {
        email: "alice@tech.com",
        phone: "555-2345"
      }
    },
    {
      name: "Bob",
      position: "Manager",
      contact: {
        email: "bob@tech.com",
        phone: "555-6789"
      }
    }
  ],
  location: "New York"
};
console.log(company.employees[1]['contact']['email']); //Access the email of the second employee (Bob) and print it.
company.employees[0]['contact']['phone']="555-111"; //Modify the phone number of Alice to “555-1111”.
company.employees[0]['contact']['Department']="Engineering"; //Add a new property department with the value “Engineering” to the first employee (Alice).
delete company['location']// Delete the location property from the copany object.
console.log(company);
