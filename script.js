let person = {
    name: "Narek",
    age: 24,
    city: "Erevan"
}

person.isStudent = true;
alert(person);

delete person.city;

alert("age" in person);