/** @format */

// function addTodo() {
// 	const inpt = document.getElementById("myInput");
// 	const ul = document.getElementById("myList");

// 	if (inpt.value !== "") {
// 		const li = document.createElement("li");
// 		const span = document.createElement("span");
// 		span.textContent = myInput.value;

// 		const removeBtn = document.createElement("button");
// 		removeBtn.textContent = "Remove";
// 		removeBtn.onclick = function () {
// 			li.remove();
// 		};
// 		li.appendChild(span);
// 		li.appendChild(removeBtn);
// 		ul.appendChild(li);
// 		inpt.value = "";
// 	}
// }
function addTodo() {
    const input = document.getElementById("myInput");
    const ul = document.getElementById("myList");

    const todoText = input.value.trim();

    if (todoText === "") {
        return; 
    }

    // Create the list item
    const li = document.createElement("li");

    // Create the checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "mycheckbox";
    checkbox.addEventListener("click", function() {
        checkbox.checked = true; // Automatically checked on click
    });

    // Create the span for the todo text
    const span = document.createElement("span");
    span.textContent = todoText;

    // Create the remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function() {
        li.remove(); // Remove the entire list item on button click
    });

    // Append elements to the list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeBtn);

    // Append the list item to the unordered list
    ul.appendChild(li);

    // Clear the input field
    input.value = "";
}
