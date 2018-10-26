window.onload = init;

function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
            element.innerText = task;
            let boton = document.createElement("button");
            boton.innerText = "eliminar";
            let tachar = document.createElement("button");
            tachar.innerText = "tachar";
            /*element.addEventListener("click", () => {
               let parent = element.parentNode;
               if(parent){
                   parent.removeChild(element);
               }
            });*/
            /*
            element.addEventListener("click", function(){
               console.log(this);
               let parent = this.parentNode;
               if(parent){
                   parent.removeChild(this);
               }
            });*/

            boton.addEventListener("click", function () {
                console.log(element);
                let parent = element.parentNode;
                if (parent) {
                    parent.removeChild(element);
                    parent.removeChild(boton);
                    parent.removeChild(tachar);
                }
            });

            tachar.addEventListener("click", function () {
                console.log(element);
                element.style.textDecoration = "line-through";

            })

            // Añadir un boton para marcar de finalizado
            // Elmine de la lista

            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
                this.listHTML.appendChild(boton);
                this.listHTML.appendChild(tachar);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}