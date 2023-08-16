var json = '{ "name": "Clark Gable", "birthDate": "1960-09-11T13:11:00.000Z", "city": "New York" }'

var obj = JSON.parse(json, function (key, value) {
    if (key == "birthDate") {
        return new Date(value);
    } else {
        return value;
    }
});

console.log(obj.name);
console.log(obj.birthDate);