
let addClick= document.querySelector("#put");
let theText= document.querySelector("#inputText");
let toast=document.querySelector("#toast");
const ul=document.querySelector(".list-group")


let store=[];

run();

function run() {

    addClick.addEventListener("click", put);

    document.addEventListener("DOMContentLoaded", reload);

    ul.addEventListener("click",remove);


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


    }else {

        //ARAYÜZE EKLE

        addUI(input);


        //DEPOYA EKLE

        addStorage(input);


        addToast("Ekleme işlemi başarılı!");

        theText.value=null;


    }


    e.preventDefault();



}

function addUI(text) {

    const a = document.createElement("div");
    a.setAttribute("href", "#");
    a.classList.add("list-group-item", "list-group-item-action", "list-group-item-primary");
    a.textContent = text;

    const button=document.createElement("button");
    button.setAttribute("type","button");
    button.className= "btn-close";
    button.setAttribute("ara-label","Close");
    button.style.float="right";

    a.appendChild(button);

    ul.appendChild(a);


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

        console.log(event);

        let a=event.target.parentElement;

        let text=a.textContent;

        //EKRANDAN SİLME

        a.remove();

        //DEPODAN SİLME

        checkList();

        store.forEach((item, index) => {

            if (item==text){
                store.splice(index,1);


            }

        });

        localStorage.setItem("store",JSON.stringify(store));

        addToast("Silme işlemi başarılı!")



    }

    event.preventDefault();



}

function checkList() {

    if (localStorage.getItem("store")==null) {

        store=[];

    }else {

        store=JSON.parse(localStorage.getItem("store"));
    }


}





