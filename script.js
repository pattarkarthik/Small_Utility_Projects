console.log("This is magic notes");
showNote();
let addBtn = document.getElementById('addBtn');
var noteArr = [];

addBtn.addEventListener("click", function (ele) {

    let addTxt = document.getElementById("addTxt");
    if (addTxt.value != "") {
        noteArr.push(addTxt.value);
        localStorage.setItem('notes', JSON.stringify(noteArr));
        addTxt.value = "";
    }

    showNote();
}
)


function showNote() {
    let html = ""
    let note = document.getElementById('note');
    let notes = JSON.parse(localStorage.getItem('notes'));
    if (notes != null) {
        notes.forEach(function (ele, index) {
            html += `<div class="card mr-auto showcard" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note - ${index + 1}</h5>
            <p class="card-text">${ele}</p>
            <button onclick = "delNote(${index})" class="btn btn-primary delBtn">Delete Note</button>
        </div>
    </div>
        `
        })
    };
    note.innerHTML = html;
}

function delNote(index) {
    let notes = JSON.parse(localStorage.getItem('notes'));
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNote();
}


let text = document.getElementById("searchString");
text.addEventListener("input", function () {
   
    let cards =  document.getElementsByClassName('showcard');
    Array.from(cards).forEach(function(ele){
        let textVal = ele.getElementsByTagName('p')[0].innerText;
        
        if (textVal.includes(text.value)){
            ele.style.display = "block";
        }
        else{
            ele.style.display = "none";
        }

    })
})






