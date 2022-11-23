const link = document.querySelectorAll('link');

const body = document.querySelector('body');
const light = document.getElementById("light");
const main = document.querySelector("main");
const add_note = document.querySelector(".add_note");
const note = document.querySelectorAll(".note");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const date = document.getElementById("date");
const share = document.querySelectorAll("#share");
const save = document.getElementById('save');
const saved_note = document.getElementById('saved_note');
const note_icon = document.getElementById('note_icon');

date.innerHTML = new Date().toGMTString().slice(0, 17);





//LIGHT THEME
light.addEventListener('click', () => {

    link[5].setAttribute('href', './lightMode.css')
})




//DARK THEME
const dark = document.getElementById("dark");


dark.addEventListener('click', () => {

    link[5].setAttribute('href', './darkMode.css')


});





//NOTES APP

let noteArr = [];



const save_note = () => {
    if (input.value != '' && textarea.value != '') {
        noteArr = [...noteArr, {
            title: input.value,
            text: textarea.value,
            date: new Date().toLocaleString()
        }]
        printAllNotes();
    }



}
save.addEventListener('click', save_note);


function printAllNotes() {
    saved_note.innerHTML = noteArr.map((note) => {
        return ` 
        <article class="note">
        <p><span class="date">${note.date}</span>
       <span class=bookmark> <ion-icon  name="bookmark"></ion-icon></span></p>
    <h5>${(note.title).toUpperCase()}</h5>
    <p id="text">${note.text}</p>
    <button id=done>Done</button>
    </article>`
    }).join('');

    removeNote();
}
function removeNote() {
    let done = document.querySelectorAll('#done')
    done.forEach((e, i) => {
        e.addEventListener('click', () => {
            noteArr.splice(i, 1);
            printAllNotes();
        })
    })
}