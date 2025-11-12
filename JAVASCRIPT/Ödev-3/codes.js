let all = document.querySelector("#btnAll");
let korea = document.querySelector("#btnKorea");
let japan = document.querySelector("#btnKJapan");
let china = document.querySelector("#btnChina");
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




function show(btnCountry) {

    if (btnCountry === "Japan"){

        let nmbOfList= objJapan.length;

        if (nmbOfList >= 1) {

            theContainer.innerHTML=`
            
            <div className="row mt-5">
    <div className="col-sm-12 col-md-6">

        <div className="card mb-3" style="max-width: 540px; border: none; background-color: #f1f5f8">
            <div className="row g-0">
                <div className="col-md-4">
                    <img id= "img" src="https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg"
                         className=" img-items" alt="..."/>
                </div>
                <div className="col-md-8" style="margin-left: -20px;">
                    <div className="card-body" style="margin-top: -15px; ">
                        <div style="display: block; color: #e00a00">
                            <h5 id= "title" className="card-title" style="display: inline-block; float: left">Doroyaki</h5>
                            <h5 id= "price" className="card-title" style="display: inline-block; float: right;">3.99</h5>

                            <hr style="width: 100%; border-color: black"/>


                        </div>

                    </div>


                    <div className="card-body" style="margin-top: -20px; font-size: 14px ">
                        <p id= "recipe" className="card-text ">Red bean paste dessert, serving with honey</p>
                    </div>
                </div>
            </div>
        </div>


    </div>


</div>
            
            
            
            `





        }


    }


}

<div className="row mt-5">
    <div className="col-sm-12 col-md-6">

        <div className="card mb-3" style="max-width: 540px; border: none; background-color: #f1f5f8">
            <div className="row g-0">
                <div className="col-md-4">
                    <img id= "img" src="https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg"
                         className=" img-items" alt="..."/>
                </div>
                <div className="col-md-8" style="margin-left: -20px;">
                    <div className="card-body" style="margin-top: -15px; ">
                        <div style="display: block; color: #e00a00">
                            <h5 id= "title" className="card-title" style="display: inline-block; float: left">Doroyaki</h5>
                            <h5 id= "price" className="card-title" style="display: inline-block; float: right;">3.99</h5>

                            <hr style="width: 100%; border-color: black"/>


                        </div>

                    </div>


                    <div className="card-body" style="margin-top: -20px; font-size: 14px ">
                        <p id= "recipe" className="card-text ">Red bean paste dessert, serving with honey</p>
                    </div>
                </div>
            </div>
        </div>


    </div>


</div>