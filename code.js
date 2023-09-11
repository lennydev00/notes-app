const addButton = document.querySelector(".add__button")
const noteContainer = document.querySelector(".note-container")


function addNote(){
    // Crear
    const note = document.createElement("div")
    note.classList.add("note")

    const noteButton = document.createElement("div")
    noteButton.classList.add("note__button")

    const noteEdit = document.createElement("button")
    noteEdit.classList.add("edit")

    const noteDelete = document.createElement("button")
    noteDelete.classList.add("delete")

    const noteTextarea = document.createElement("textarea")
    noteTextarea.classList.add("textarea","disable")
    noteTextarea.disabled = true
    noteTextarea.placeholder = "Write here"

    const iconEdit = document.createElement("i")
    iconEdit.classList.add("icon","fa-solid","fa-pen-to-square")

    const iconDelete = document.createElement("i")
    iconDelete.classList.add("icon","fa-solid","fa-trash")

    // Renderizar
    noteDelete.appendChild(iconDelete)
    noteEdit.appendChild(iconEdit)
    noteButton.appendChild(noteEdit)
    noteButton.appendChild(noteDelete)
    note.appendChild(noteButton)
    note.appendChild(noteTextarea)
    noteContainer.appendChild(note)

    // Eventos
    function removeNote(){
        note.remove()
    }
    noteDelete.addEventListener("click", removeNote)

    function enableEdit(){
        noteTextarea.classList.toggle("disable")

        console.log(noteTextarea.disabled)

        if(noteTextarea.disabled == true) {
            noteTextarea.disabled = false
            iconEdit.classList.remove("fa-pen-to-square")
            iconEdit.classList.add("fa-floppy-disk")
        } else {
            noteTextarea.disabled = true
            iconEdit.classList.remove("fa-floppy-disk")
            iconEdit.classList.add("fa-pen-to-square")
        }
    }
    iconEdit.addEventListener("click", enableEdit)
}

addButton.addEventListener("click", addNote)


// const test = document.createElement('div')
// test.innerHTML = `
//     <div class="note__button">
//         <button class="edit">
//             <i class="icon fa-sharp fa-solid fa-pen-to-square"></i>
//         </button>
//         <button class="delete">
//             <i class="icon fa-sharp fa-solid fa-trash"></i>
//         </button>
//     </div>
//     <textarea class="textarea"></textarea>
// `
// test.classList.add("note")
// noteContainer.appendChild(test)


// Template strings
