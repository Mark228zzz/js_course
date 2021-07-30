FirstName = prompt('Your firstname?')
LastName = prompt('Your lastname?')
age = prompt('Your age?')
address = prompt('Your address?')

if(FirstName == '') {
    FirstName = 'not specified'
}

if(LastName == '') {
    LastName = "why didn't you write lastname?"
    alert('ok ' + LastName + "  you: i don't know")
}

if(age == '') {
    age = 'not specified'
}

if(address == '') {
    address = 'not specified'
}

console.log('well done you passed the test')