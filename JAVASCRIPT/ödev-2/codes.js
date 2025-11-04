

let theClick= document.querySelector("#click");
let theText= document.querySelector("#text");
let theToast= document.querySelector("#toast");
let listGroup=document.querySelector("#list");


function addLi(className, text) {

        let createdLi=document.createElement("li");
        createdLi.classList.add(className);
        createdLi.innerHTML=
        `
        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
        <label class="form-check-label" for="firstCheckbox">
        ${text}
         </label>
         <button type="button" class="btn-close" data-bs-dismiss=${className} aria-label="Close" style="float: right"></button>

         
         
    `;

    listGroup.appendChild(createdLi);


}

function toast(message){

    return `
<div class="toast show top-0 end-0 position-absolute" role="alert" aria-live="assertive" aria-atomic="true" style="float: right; position: static">
  <div class="d-flex">
    <div class="toast-body">
      ${message}
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
    </div>

    `

}



theClick.addEventListener("click", function(){

    if (theText.value === "" || theText.value==null){

        theToast.innerHTML=toast("Listeye boş ekleme yapılamaz!");

    }else {


        addLi("list-group-item", theText.value);

        theToast.innerHTML=toast("Ekleme işlemi başarılı!");



    }



})