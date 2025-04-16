const mainTodoList = document.getElementById("todoListContainer");
    const inputTodoList = document.getElementById("inputValue");

    const addTodoList = (e) => {
      e.preventDefault();

      // Check if input is empty
      if (inputTodoList.value.trim() === "") {
        alert("Please enter a todo!");
        return;
      }

      // Create div for todo
      const divElement = document.createElement("div");
      divElement.classList.add("main_todo_div");

      // Set inner HTML
      divElement.innerHTML = `
        <li>${inputTodoList.value}</li>
        <button class="deleteBtn">Delete</button>
      `;

      // Add delete functionality
      const deleteBtn = divElement.querySelector(".deleteBtn");
      deleteBtn.addEventListener("click", () => {
        divElement.remove();
      });

      // Add to main list
      mainTodoList.appendChild(divElement);

      // Clear input field
      inputTodoList.value = "";
    };

    document.querySelector(".btn").addEventListener("click", addTodoList);