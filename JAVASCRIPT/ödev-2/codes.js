
const addClick= document.querySelector("#put");
const theText= document.querySelector("#inputText");
const toast=document.querySelector("#toast");
const ul=document.querySelector(".list-group")
const audioAdd=document.querySelector("#audioAdd");
const audioDelete=document.querySelector("#audioDelete");
const audioInfo=document.querySelector("#audioInfo");
const audioError=document.querySelector("#audioError");
const audioDone=document.querySelector("#audioDone");
const secondRow=document.querySelector("#secondRow");


let store=[];

run();

function run() {

    addClick.addEventListener("click", put);

    document.addEventListener("DOMContentLoaded", reload);

    ul.addEventListener("click",remove);

    ul.addEventListener("click",lineIt);


}

function addToast(message) {

    const newToast = document.createElement("div");

    newToast.classList.add("toast", "show", "top-0", "end-0", "position-absolute");
    newToast.setAttribute("role","alert");
    newToast.setAttribute("data-bs-delay","4000");
    newToast.setAttribute("aria-live","assertive");
    newToast.setAttribute("aria-atomic","true");
    newToast.style.float="right";
    newToast.style.position="static";

    const div=document.createElement("div");
    div.classList.add("d-flex");

    const toastBody=document.createElement("div");
    toastBody.classList.add("toast-body");

    toastBody.textContent=message;

    const button=document.createElement("button");
    button.classList.add("btn-close", "me-2", "m-auto");
    button.type="button";
    button.setAttribute("data-bs-dismiss","toast");
    button.setAttribute("aria-label","Close");

    div.appendChild(toastBody);
    div.appendChild(button);

    newToast.appendChild(div);

    toast.appendChild(newToast);

    setTimeout(()=>{

        newToast.remove();
    }, 2000); //1 geçtikten sonra uygula demek.



}

function put(e) {

    const input= theText.value.trim();

    if (input === "" || input==null){

        addToast("Listeye boş ekleme yapılamaz!");

        theText.value=null;

        audioInfo.currentTime=0;
        audioInfo.play();


    }else {

        //ARAYÜZE EKLE

        addUI(input);


        //DEPOYA EKLE

        addStorage(input);


        addToast("Ekleme işlemi başarılı!");

        theText.value=null;

        audioAdd.currentTime=0;
        audioAdd.play();


    }


    e.preventDefault();



}

function addUI(text) {

    const li=document.createElement("li");

    const div=document.createElement("div");
    div.className="form-check";

    const input=document.createElement("input");
    div.style.display="block"

    input.className="form-check-input";
    input.type="checkbox";
    input.id="checkDefault";
    input.value="";


    const label=document.createElement("label");
    label.className="form-check-label";
    label.setAttribute("for","checkDefault");
    label.textContent="asd";


    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.classList.add("list-group-item", "list-group-item-action", "list-group-item-primary");
    a.textContent = text;
    a.style.backgroundColor="lightblue";



    const button=document.createElement("button");
    button.setAttribute("type","button");
    button.className= "btn-close";
    button.setAttribute("ara-label","Close");
    button.style.float="right";

    const checkbox= `

        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="checkDefault">
            <label class="form-check-label" for="checkDefault">
                
            </label>
    </div>
    
    `





    a.appendChild(button);
    label.appendChild(a);
    input.appendChild(label);
    div.appendChild(input);
    li.appendChild(div);
    ul.appendChild(li);
    //secondRow.appendChild(div);


}

function addStorage(text){

        checkList();

        store.push(text);

        localStorage.setItem("store",JSON.stringify(store));




}

function reload() {

    checkList();

    store.forEach(text=>{

        addUI(text);
    })



}

function remove(event) {

    if (event.target.className==="btn-close"){

        let a=event.target.parentElement;

        let text=a.textContent;

        //EKRANDAN SİLME

        a.remove();

        //DEPODAN SİLME

        checkList();

        store.forEach((item, index) => {

            if (item===text){
                store.splice(index,1);


            }

        });

        localStorage.setItem("store",JSON.stringify(store));

        audioDelete.currentTime=0;
        audioDelete.play();

        addToast("Silme işlemi başarılı!")



    }

    event.preventDefault();



}

function checkList() {

    if (localStorage.getItem("store").length===0) {

        store=[];

    }else {

        store=JSON.parse(localStorage.getItem("store"));
    }


}

function lineIt(e) {

    if (e.target.classList.contains("list-group-item")) {

        let a = e.target;

        if (a.style.textDecoration==="line-through"){

            a.textContent=a.textContent.substring(2,a.textContent.length);
            a.style.textDecoration="none";
            a.style.backgroundColor="lightblue";


        }else {
            a.textContent="✓ "+a.textContent;
            a.style.textDecoration="line-through";
            a.style.backgroundColor="green";

        }



    }



}





