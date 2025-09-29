/*let person = {
    name: "Narek",
    age: 24,
    city: "Erevan"
}

person.isStudent = true;
alert(person);

delete person.city;

alert("age" in person);*/

function removeUndefinedProps(obj) {
    for (const key in obj) {
      if (obj[key] === undefined) delete obj[key];
    }
  }
  
  const obj = {
    key1: 'hello',
    key2: undefined,
    key3: 123,
    key4: undefined
  };
  
  removeUndefinedProps(obj);
  console.log(obj);
  // Արդյունք: { key1: 'hello', key3: 123 }
  
