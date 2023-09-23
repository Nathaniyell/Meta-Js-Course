//DOM stands for Document Object Model. The javascript DOM allows you make changes to your webpage content on the screen. The DOM allows you to change properties of an object on a webpage.

//The DOM is in a form of a javascript object with nested objects for different parts of the page. These objects have their own nested objects until the entire HTML file is mapped out in what looks like a tree structure.

//The DOM is a model of the HTML file saved as a javascript object in the browser's memory

//The entire DOM object is saved inside the document variable and accessible via the console

//It is important to note that updating the DOM in the browser doesn't update your live page. The DOM is an in-memory representation of the active HTML document. Any changes made are local and do not affect the document stored on the webserver.

const h2 = document.createElement("h2"); //creates a h2 element
h2.innerText = "This is an h2 heading"; // adds textcontents to the h2 element
h2.setAttribute("id", "sub-heading");
//the setAttribute method takes two parameters, the first one being the attribute's name(class, id etc), and the second one is the value of the attribute
h2.setAttribute("class", "secondary"); //sets a class attribute with a value of secondary

document.body.appendChild(h2) // the append method attaches the h2 element that was created earlier to the body of the html file thereby making the contents visible to the user

document.querySelector("p"); //selects a paragraph element and can have values like tagNames, id values("#my-id"), classNames(".myClass"), etc
document.querySelectorAll("a"); //retuns all the element that match a specified value; say all the anchor tags on the webpage or all the headings etc