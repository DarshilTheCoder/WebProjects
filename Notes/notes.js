console.log('hello my notes');
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    showNotes();
})

// function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">Notes ${index + 1}</h5>
                      <p class="card-text">${element}</p>
                      <button id = '${index}' onclick = "deleteNote(this.id)"class="btn btn-primary">Delete Note</button>
                    </div>
                 </div>`// html+= it means html = html + things inside backticks
        // this.id ka matlab hai kii isi ki id deleteNote function ke paas chali jaayegi
    });

    let Notes = document.getElementById('notes');
    if (notesObj.length != 0) {
        Notes.innerHTML = html;
    }
    else {
        Notes.innerHTML = `Nothing to show use add a Note section above to add the notes`
    }
}


// function to delete the node
function deleteNote(index) {
    // console.log('I am deleting', index);
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);// ye kaam kya karta delete karne ka kaha se index se leker kitne element tak 1 
    // but still note will not going to be delete as still we have not updated our localStorage . still we just read the localStorage . now i have to add the notesObj to localStorage
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('input event fired', inputVal);
    let notesCards = document.getElementsByClassName('noteCard');
    Array.from(notesCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    })
})