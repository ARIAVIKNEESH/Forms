document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.getElementById('gender').value;
    var foodChoices = document.querySelectorAll('input[name="food"]:checked');
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
  
    var newRow = document.createElement('tr');
  
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = firstName;
    newRow.appendChild(firstNameCell);
  
    var lastNameCell = document.createElement('td');
    lastNameCell.textContent = lastName;
    newRow.appendChild(lastNameCell);
  
    var addressCell = document.createElement('td');
    addressCell.textContent = address;
    newRow.appendChild(addressCell);
  
    var pincodeCell = document.createElement('td');
    pincodeCell.textContent = pincode;
    newRow.appendChild(pincodeCell);
  
    var genderCell = document.createElement('td');
    genderCell.textContent = gender;
    newRow.appendChild(genderCell);
  
    var foodChoicesCell = document.createElement('td');
    var foodList = [];
    foodChoices.forEach(function(choice) {
      foodList.push(choice.value);
    });
    foodChoicesCell.textContent = foodList.join(', ');
    newRow.appendChild(foodChoicesCell);
  
    var stateCell = document.createElement('td');
    stateCell.textContent = state;
    newRow.appendChild(stateCell);
  
    var countryCell = document.createElement('td');
    countryCell.textContent = country;
    newRow.appendChild(countryCell);
  
    document.querySelector('#myTable tbody').appendChild(newRow);
  
    document.getElementById('myForm').reset();
  });
  