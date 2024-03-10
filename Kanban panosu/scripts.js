document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
    });

    function dragStart() {
        this.classList.add('dragging');
    }

    function dragEnd() {
        this.classList.remove('dragging');
    }

    const columns = document.querySelectorAll('.column');

    columns.forEach(column => {
        column.addEventListener('dragover', dragOver);
        column.addEventListener('dragenter', dragEnter);
        column.addEventListener('dragleave', dragLeave);
        column.addEventListener('drop', drop);
    });

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.classList.add('dragover');
    }

    function dragLeave() {
        this.classList.remove('dragover');
    }

    function drop() {
        const draggableCard = document.querySelector('.dragging');
        this.appendChild(draggableCard);
        this.classList.remove('dragover');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
    });

    function dragStart() {
        this.classList.add('dragging');
    }

    function dragEnd() {
        this.classList.remove('dragging');
    }

    const columns = document.querySelectorAll('.column');

    columns.forEach(column => {
        column.addEventListener('dragover', dragOver);
        column.addEventListener('dragenter', dragEnter);
        column.addEventListener('dragleave', dragLeave);
        column.addEventListener('drop', drop);
    });

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.classList.add('dragover');
    }

    function dragLeave() {
        this.classList.remove('dragover');
    }

    function drop() {
        const draggableCard = document.querySelector('.dragging');
        this.appendChild(draggableCard);
        this.classList.remove('dragover');
    }
});
function clearTasks() {
    var confirmClear = confirm("Tüm görevleri silmek istediğinizden emin misiniz?");
    if (confirmClear) {
        var todoColumn = document.getElementById("todo-column");
        while (todoColumn.querySelector(".card")) {
            todoColumn.removeChild(todoColumn.querySelector(".card"));
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const columns = document.querySelectorAll('.column');

    columns.forEach(column => {
        column.addEventListener('dragover', dragOver);
        column.addEventListener('dragenter', dragEnter);
        column.addEventListener('dragleave', dragLeave);
        column.addEventListener('drop', drop);

        const buttonContainer = document.createElement("div");
        buttonContainer.style.textAlign = "center";
        buttonContainer.style.marginTop = "10px";
        buttonContainer.style.marginBottom = "10px";

        const addButton = document.createElement("button");
        addButton.textContent = "Görev Ekle";
        addButton.onclick = function() {
            addTask(column);
        };
        buttonContainer.appendChild(addButton);

        const clearButton = document.createElement("button");
        clearButton.textContent = "Görevleri Temizle";
        clearButton.onclick = function() {
            clearTasks(column);
        };
        buttonContainer.appendChild(clearButton);

        column.appendChild(buttonContainer);
    });
});

function addTask(column) {
    var taskName = prompt("Lütfen yeni görevin adını girin:");
    if (taskName) {
        var newTask = document.createElement("div");
        newTask.classList.add("card");
        newTask.draggable = true;
        newTask.textContent = taskName;
        newTask.addEventListener("dragstart", dragStart);
        column.appendChild(newTask);
    }
}

function clearTasks(column) {
    var confirmClear = confirm("Tüm görevleri silmek istediğinizden emin misiniz?");
    if (confirmClear) {
        while (column.querySelector(".card")) {
            column.removeChild(column.querySelector(".card"));
        }
    }
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('dragover');
}

function dragLeave() {
    this.classList.remove('dragover');
}

function drop() {
    const draggableCard = document.querySelector('.dragging');
    this.appendChild(draggableCard);
    this.classList.remove('dragover');
}

function dragStart() {
    this.classList.add('dragging');
}

function dragEnd() {
    this.classList.remove('dragging');
}
