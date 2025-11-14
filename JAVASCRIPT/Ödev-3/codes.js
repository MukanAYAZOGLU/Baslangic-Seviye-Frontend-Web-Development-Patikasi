let btnAll = document.querySelector("#btnAll");
let btnKorea = document.querySelector("#btnKorea");
let btnJapan = document.querySelector("#btnKJapan");
let btnChina = document.querySelector("#btnChina");
let theContainer= document.querySelector("#listContainer");


let objKorea = [{
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    title: "Tteokbokki",
    price: 10.99,
    recipe: "Spicy rice cakes, serving with fish cake"
},
    {
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        title: "Bibimbap",
        price: 8.99,
        recipe: "Boiling vegetables, serving with special hot sauce "
    },
    {
        img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        title: "Jajangmyeon",
        price: 15.99,
        recipe: "Black bean sauce noodle, serving with green onion"
    }]

let objJapan = [{
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    title: "Chicken Ramen",
    price: 7.99,
    recipe: "Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg"
},
    {
        img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        title: "Onigiri",
        price: 9.99,
        recipe: "Rice Sandwich, serving with soy sauce"
    },
    {
        img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        title: "Doroyaki",
        price: 9.99,
        recipe: "Red bean paste dessert, serving with honey"
    }]

let objChina = [{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNPSBM0B3GNx5RqHMnLSYE28La7hAZwhDig&s",
    title: "Dan Dan Mian",
    price: 5.99,
    recipe: "Dan dan noodle, serving with green onion"
},
    {
        img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        title: "Yangzhou Fried Rice",
        price: 12.99,
        recipe: "Yangzhou style fried rice, serving with bean and pickles "
    },
    {
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        title: "Ma Yi Shang Shu",
        price: 12.99,
        recipe: "Hot pepper sauce noodle, serving with soy bean and onion"
    }]

let objAll = [...objJapan, ...objChina, ...objKorea];


btnKorea.addEventListener('click', () => {

    theContainer.innerHtml = "";

})

btnAll.addEventListener('click', () => {

    theContainer.innerHtml = allFoods;
})

btnJapan.addEventListener('click', () => {

    theContainer.innerHTML = "";
})


btnChina.addEventListener('click', () => {

    theContainer.innerHTML = "";
})

let allFoods= `


<!-------------------------------------------------- 1. YEMEK SATIRI BAŞLADI----------------------->

    <div class="row mt-5">
        <div class="col-sm-12 col-md-6">

            <div class="card mb-3" style="max-width: 540px; border: none; background-color: #f1f5f8">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg" class=" img-items" alt="...">
                    </div>
                    <div class="col-md-8" style="margin-left: -20px;">
                        <div class="card-body" style="margin-top: -15px; ">
                            <div style="display: block; color: #e00a00">
                                <h5 class="card-title" style="display: inline-block; float: left">Tteokbokki</h5>
                                <h5 class="card-title" style="display: inline-block; float: right;">10.99</h5>

                                <hr style="width: 100%; border-color: black">


                            </div>

                        </div>


                        <div class="card-body text-recipe" >
                            <p class="card-text ">Spicy rice cakes, serving with fish cake</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

        <div class="col-sm-12 col-md-6">

            <div class="card mb-3" style="max-width: 540px; border: none; background-color: #f1f5f8">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg" class=" img-items" alt="...">
                    </div>
                    <div class="col-md-8" style="margin-left: -20px;">
                        <div class="card-body" style="margin-top: -15px; ">
                            <div style="display: block; color: #e00a00">
                                <h5 class="card-title" style="display: inline-block; float: left">Chicken Ramen</h5>
                                <h5 class="card-title" style="display: inline-block; float: right;">7.99</h5>

                                <hr style="width: 100%; border-color: black">


                            </div>

                        </div>


                        <div class="card-body text-recipe" >
                            <p class="card-text">Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    </div>


        <!----------------- --------------------------- 1. YEMEK SATIRI BİTTİ---------------------    -->

<!--        ------------------------------------------------ 2. YEMEK SATIRI BAŞLADI---------------------    -->



    <div class="row mt-5">
        <div class="col-sm-12 col-md-6">

            <div class="card mb-3" style="max-width: 540px; border: none; background-color: #f1f5f8">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img  src="https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg" class=" img-items" alt="...">
                    </div>
                    <div class="col-md-8" style="margin-left: -20px;">
                        <div class="card-body" style="margin-top: -15px; ">
                            <div style="display: block; color: #e00a00">
                                <h5 class="card-title" style="display: inline-block; float: left">Bibimbap</h5>
                                <h5 class="card-title" style="display: inline-block; float: right;">8.99</h5>

                                <hr style="width: 100%; border-color: black">


                            </div>

                        </div>


                        <div class="card-body text-recipe" >
                            <p class="card-text ">Boiling vegetables, serving with special hot sauce </p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

        <div class="col-sm-12 col-md-6">

            <div class="card mb-3" style="max-width: 540px; border: none; background-color: #f1f5f8">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNPSBM0B3GNx5RqHMnLSYE28La7hAZwhDig&s" class=" img-items" alt="...">
                    </div>
                    <div class="col-md-8" style="margin-left: -20px;">
                        <div class="card-body" style="margin-top: -15px; ">
                            <div style="display: block; color: #e00a00">
                                <h5 class="card-title" style="display: inline-block; float: left">Dan Dan Mian</h5>
                                <h5 class="card-title" style="display: inline-block; float: right;">5.99</h5>

                                <hr style="width: 100%; border-color: black">


                            </div>

                        </div>


                        <div class="card-body text-recipe" >
                            <p class="card-text">Dan dan noodle, serving with green onion </p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    </div>

    <!-------------------------------------------------- 2. YEMEK SATIRI BİTTİ----------------------->




    <!-------------------------------------------------- 3. YEMEK SATIRI BAŞLADI----------------------->

    <div class="row mt-5">
        <div class="col-sm-12 col-md-6">

            <div class="card mb-3" style="max-width: 540px; border: none; background-color: #f1f5f8">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img  src="https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg" class=" img-items" alt="...">
                    </div>
                    <div class="col-md-8" style="margin-left: -20px;">
                        <div class="card-body" style="margin-top: -15px; ">
                            <div style="display: block; color: #e00a00">
                                <h5 class="card-title" style="display: inline-block; float: left">Yangzhou Fried Rice
                                </h5>
                                <h5 class="card-title" style="display: inline-block; float: right;">12.99</h5>

                                <hr style="width: 100%; border-color: black">


                            </div>

                        </div>


                        <div class="card-body text-recipe" >
                            <p class="card-text ">Yangzhou style fried rice, serving with bean and pickles </p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

        <div class="col-sm-12 col-md-6">

            <div class="card mb-3" style="max-width: 540px; border: none; background-color: #f1f5f8">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img  src="https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg" class=" img-items" alt="...">
                    </div>
                    <div class="col-md-8" style="margin-left: -20px;">
                        <div class="card-body" style="margin-top: -15px; ">
                            <div style="display: block; color: #e00a00">
                                <h5 class="card-title" style="display: inline-block; float: left">Onigiri</h5>
                                <h5 class="card-title" style="display: inline-block; float: right;">9.99</h5>

                                <hr style="width: 100%; border-color: black">


                            </div>

                        </div>


                        <div class="card-body text-recipe" >
                            <p class="card-text">Rice Sandwich, serving with soy sauce </p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    </div>

    <!-------------------------------------------------- 3. YEMEK SATIRI BİTTİ----------------------->




    <!-------------------------------------------------- 4. YEMEK SATIRI BAŞLADI----------------------->

    <div class="row mt-5">
        <div class="col-sm-12 col-md-6">

            <div class="card mb-3" style="max-width: 540px; border: none; background-color: #f1f5f8">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img  src="https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg" class=" img-items" alt="...">
                    </div>
                    <div class="col-md-8" style="margin-left: -20px;">
                        <div class="card-body" style="margin-top: -15px; ">
                            <div style="display: block; color: #e00a00">
                                <h5 class="card-title" style="display: inline-block; float: left">Jajangmyeon</h5>
                                <h5 class="card-title" style="display: inline-block; float: right;">15.99</h5>

                                <hr style="width: 100%; border-color: black">


                            </div>

                        </div>


                        <div class="card-body text-recipe" >
                            <p class="card-text ">Black bean sauce noodle, serving with green onion </p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

        <div class="col-sm-12 col-md-6">

            <div class="card mb-3" style="max-width: 540px; border: none; background-color: #f1f5f8">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img  src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg" class=" img-items" alt="...">
                    </div>
                    <div class="col-md-8" style="margin-left: -20px;">
                        <div class="card-body" style="margin-top: -15px; ">
                            <div style="display: block; color: #e00a00">
                                <h5 class="card-title" style="display: inline-block; float: left">Ma Yi Shang Shu</h5>
                                <h5 class="card-title" style="display: inline-block; float: right;">12.99</h5>

                                <hr style="width: 100%; border-color: black">


                            </div>

                        </div>


                        <div class="card-body text-recipe" >
                            <p class="card-text">Hot pepper sauce noodle, serving with soy bean and onion  </p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    </div>

    <!-------------------------------------------------- 4. YEMEK SATIRI BİTTİ----------------------->





    <!-------------------------------------------------- 5. YEMEK SATIRI BAŞLADI----------------------->

    <div class="row mt-5">
        <div class="col-sm-12 col-md-6">

            <div class="card mb-3" style="max-width: 540px; border: none; background-color: #f1f5f8">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg" class=" img-items" alt="...">
                    </div>
                    <div class="col-md-8" style="margin-left: -20px;">
                        <div class="card-body" style="margin-top: -15px; ">
                            <div style="display: block; color: #e00a00">
                                <h5 class="card-title" style="display: inline-block; float: left">Doroyaki</h5>
                                <h5 class="card-title" style="display: inline-block; float: right;">3.99</h5>

                                <hr style="width: 100%; border-color: black">


                            </div>

                        </div>


                        <div class="card-body text-recipe" >
                            <p class="card-text ">Red bean paste dessert, serving with honey</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>



    </div>

    <!-------------------------------------------------- 5. YEMEK SATIRI BİTTİ----------------------->


`

function oneFood(img, title, price, recipe) {


    return `

    <div class="row mt-5">
        <div class="col-sm-12 col-md-6">

  <div class="card mb-3" style="max-width: 540px; border: none; background-color: #f1f5f8">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src= ${img} class=" img-items" alt="...">
                    </div>
                    <div class="col-md-8" style="margin-left: -20px;">
                        <div class="card-body" style="margin-top: -15px; ">
                            <div style="display: block; color: #e00a00">
                                <h5 class="card-title" style="display: inline-block; float: left">${title}</h5>
                                <h5 class="card-title" style="display: inline-block; float: right;">${price}</h5>

                                <hr style="width: 100%; border-color: black">

                            </div>

                        </div>

                        <div class="card-body text-recipe" >
                            <p class="card-text ">${recipe}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        </div>


`
}

function twoFood(img, title, price, recipe) {


    return `

    <div class="row mt-5">
        <div class="col-sm-12 col-md-6">

  <div class="card mb-3" style="max-width: 540px; border: none; background-color: #f1f5f8">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src= ${img} class=" img-items" alt="...">
                    </div>
                    <div class="col-md-8" style="margin-left: -20px;">
                        <div class="card-body" style="margin-top: -15px; ">
                            <div style="display: block; color: #e00a00">
                                <h5 class="card-title" style="display: inline-block; float: left">${title}</h5>
                                <h5 class="card-title" style="display: inline-block; float: right;">${price}</h5>

                                <hr style="width: 100%; border-color: black">

                            </div>

                        </div>

                        <div class="card-body text-recipe" >
                            <p class="card-text ">${recipe}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
 
            
            


        </div>

        </div>


`
}



function addCard(img, title, price, recipe) {

    return `

            <div class="card mb-3" style="max-width: 540px; border: none; background-color: #f1f5f8">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src= ${img} class=" img-items" alt="...">
                    </div>
                    <div class="col-md-8" style="margin-left: -20px;">
                        <div class="card-body" style="margin-top: -15px; ">
                            <div style="display: block; color: #e00a00">
                                <h5 class="card-title" style="display: inline-block; float: left">${title}</h5>
                                <h5 class="card-title" style="display: inline-block; float: right;">${price}</h5>

                                <hr style="width: 100%; border-color: black">

                            </div>

                        </div>

                        <div class="card-body text-recipe" >
                            <p class="card-text ">${recipe}</p>
                        </div>
                    </div>
                </div>
            </div>


    `



}

function addFood (arrayOfFood) {

    let rowDiv= document.createElement("div");
    rowDiv.classList.add("row",'mt-5');

    let colDiv= document.createElement("div");
    colDiv.classList.add("col-sm-12", "col-md-6");


    colDiv.innerHTML = addCard(arrayOfFood);





}

