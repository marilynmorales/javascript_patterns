let controlCheckbox = document.getElementById("mainCheckbox"),
    addBtn = document.getElementById("addNewObserver"),
    container = document.getElementById("observersContainer");

extend(new Subject(), controlCheckbox);


controlCheckbox.addEventListener("click", (e) => {
    controlCheckbox.notify(e.target.checked)    
})
addBtn.addEventListener("click", addNewObserver);

function addNewObserver() {
    let check = document.createElement("input");
    check.type = "checkbox";

    extend(check, new Observer())

    check.update = function(value) {
        this.checked = value;
    }
    controlCheckbox.addObserver(check);

    container.appendChild(check)
}