const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

// createBtn.addEventListener("click",()=>{
//     let inputBox=document.createElement("p");
//     let img=document.createElement("img");
//     inputBox.className="input-box"
//     inputBox.setAttribute("contenteditable","true")
//     img.src="delete.png"
//     notesContainer.appendChild(inputBox)
//     notesContainer.appendChild(img)
// })
// createBtn.addEventListener("click", () => {
//     let noteWrapper = document.createElement("div"); // Wrapper for note + delete icon
//     noteWrapper.className = "note-wrapper";

//     let inputBox = document.createElement("p");
//     inputBox.className = "input-box";
//     inputBox.setAttribute("contenteditable", "true");

//     let delBtn = document.createElement("img");
//     delBtn.src = "delete.png";
//     delBtn.className = "delete-icon";

//     // Append elements
//     noteWrapper.appendChild(inputBox);
//     noteWrapper.appendChild(delBtn);
//     notesContainer.appendChild(noteWrapper);

//     updateStorage();
// });
createBtn.addEventListener("click", () => {
    let note = document.createElement("div");
    note.className = "note";
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    let delBtn = document.createElement("div");
    delBtn.className = "del-btn";

    let img = document.createElement("img");
    img.src = "images/delete.png";

    delBtn.appendChild(img);
    
    // Append input box and delete button separately
    note.appendChild(inputBox);
    note.appendChild(delBtn);
    notesContainer.appendChild(note);

});


notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.previousElementSibling?.remove();
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault();
    }

})
let darkmode =localStorage.getItem('dark-mode')
const themeSwitch=document.querySelector(".theme-toggle")

const enableDarkmode=()=>{
    document.body.classList.add('dark-mode')
    localStorage.setItem('dark-mode','active')
}
const disableDarkmode=()=>{
    document.body.classList.remove('dark-mode')
    localStorage.setItem('dark-mode',null)
}
if(darkmode==="active") enableDarkmode()
themeSwitch.addEventListener("click",()=>{
    darkmode=localStorage.getItem('dark-mode')
    darkmode!=="active"?enableDarkmode():disableDarkmode()
})