/** @format */

function addTodo() {
	const inpt = document.getElementById("myInput");
	const ul = document.getElementById("myList");

	if (inpt.value !== "") {
		const li = document.createElement("li");
		const span = document.createElement("span");
		span.textContent = myInput.value;

		const removeBtn = document.createElement("button");
		removeBtn.textContent = "Remove";
		removeBtn.onclick = function () {
			li.remove();
		};
		li.appendChild(span);
		li.appendChild(removeBtn);
		ul.appendChild(li);
		inpt.value = "";
	}
}
