function zoomIn(element) {
  element.style.transform = "scale(1.3)"; /* Increase the size on click */
}

// You can add more functionalities or adjust the animation as per your requirements.

// JavaScript for chatbot functionality
// Define your chatbot logic here
function sendMessage() {
// Get user input message
let userInput = document.getElementById("user-input").value;

// Display user message in chat window
document.getElementById("chat-window").innerHTML += `<div class="user-message">${userInput}</div>`;

// Your chatbot's automated response logic can go here
// For FAQ-style responses, you can create predefined responses based on user input

let botResponse = "SpringPet : This is an automated response. FAQ answer based on user input.";

// Display chatbot response in chat window
document.getElementById("chat-window").innerHTML += `<div class="bot-message">${botResponse}</div>`;

// Clear user input field after sending message
document.getElementById("user-input").value = "";
}

// to get current year


function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();

// nav menu 
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width")
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
}

function mySearch() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  function displayDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function showData(dataType) {
    alert("ID for " + dataType + ": <Your ID here>"); // Replace <Your ID here> with actual IDs
    // You can perform any desired action here with the selected data type (Products, Pricing, or Location)
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  
  function showDropdownData() {
    // Retrieve user input values
    var propertiesInput = document.getElementById("properties").value;
    var priceInput = document.getElementById("price").value;

    // Simulate the generation of IDs based on user input
    var productsID = "Your Products ID based on: " + propertiesInput;
    var pricingID = "Your Pricing ID based on: " + priceInput;
    var locationID = "Your Location ID based on: " + propertiesInput + " and " + priceInput;

    // Create a dropdown with IDs
    var dropdownContent = "<button class='dropbtn'>Search Results</button><div class='dropdown-content'>";
    dropdownContent += "<a href='#' onclick='alert(\"" + productsID + "\")'>Show Products ID</a>";
    dropdownContent += "<a href='#' onclick='alert(\"" + pricingID + "\")'>Show Pricing ID</a>";
    dropdownContent += "<a href='#' onclick='alert(\"" + locationID + "\")'>Show Location ID</a>";
    dropdownContent += "</div>";

    // Update the dropdown content
    document.getElementById("myDropdown").innerHTML = dropdownContent;
  }
