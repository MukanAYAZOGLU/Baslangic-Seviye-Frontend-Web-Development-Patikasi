

let theNumber=1;


let theClick= document.querySelector("#click");
let theText= document.querySelector("#text");
let theToast= document.querySelector("#toast");
let listGroup=document.querySelector("#list");
let theCloseBtn=document.querySelector(`close${theNumber}`);




function toast(message){

    return `
<div class="toast show top-0 end-0 position-absolute" data-bs-delay="4000" role="alert" aria-live="assertive" aria-atomic="true" style="float: right; position: static">
  <div class="d-flex">
    <div class="toast-body">
      ${message}
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
    </div>

    `

}


function addLi(className, text, theNumber) {

        let createdLi=document.createElement("li");
        createdLi.classList.add(className);

        createdLi.innerHTML=
        `
        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
        <label class="form-check-label" for="firstCheckbox">
        ${text}
         </label>
         <button type="button" id="close${theNumber}" class="btn-close" data-bs-dismiss="li${theNumber}" aria-label="Close" style="float: right"></button>

    `;

        localStorage.setItem(theNumber.toString(),text);


    listGroup.appendChild(createdLi);

    theNumber++;


}


function removeLi() {
    theNumber--;

    let theLi=document.querySelector(`#li${theCloseBtn.id.valueOf().slice(5,theCloseBtn.id.length)}`);
    theLi.remove();

}



theClick.addEventListener("click", function(){

    if (theText.value === "" || theText.value==null){

        theToast.innerHTML=toast("Listeye boş ekleme yapılamaz!");

    }else {


        addLi("list-group-item", theText.value);

        theToast.innerHTML=toast("Ekleme işlemi başarılı!");



    }



});

theCloseBtn.addEventListener("click", removeLi());
