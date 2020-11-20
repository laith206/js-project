var showpizaa = document.getElementById('showpizaa');
var background = document.getElementById('background');
var showfromid = document.getElementById('showfromid');
var serchinput = document.getElementById('serchinput');
var serchbtn = document.getElementById('serchbtn');

// get pizza 
let allpizza = [];
async function apipizz() {
    let apia = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=pizza`)
    let apjason = await apia.json()
    allpizza = apjason.recipes;
    console.log(allpizza)
    desplaypzza()
}
apipizz()
    // show pizza 
function desplaypzza() {
    let cartona = ` `;

    for (let i = 0; i < allpizza.length; i++) {
        cartona += `
            <div class="col-lg-4 col-md-6 pb-3 mb-5 " >
            <div class="cont-img " onclick="apipizzid(${allpizza[i].recipe_id})">
            <img src="${allpizza[i].image_url}" class=" card-img img-fluid" alt="">
             <div class="opacity"></div>
            <h3>${allpizza[i].title}</h3>
            <p>${allpizza[i].publisher} </p>
            <a href="${allpizza[i].source_url}">More</a> </div>
            </div>
            `
    }

    showpizaa.innerHTML = cartona;

}
// get pizza by id
async function apipizzid(id) {
    let apiaid = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
    let apjasonid = await apiaid.json()
    var allpizzaid = apjasonid.recipe;
    console.log(allpizzaid)
    background.style.display = "flex"
    background.style.flex = "wrap"
    desplaypzzaid(allpizzaid)
}

// show pizza by id
function desplaypzzaid(allpizzaid) {
    let cartona = ` `;
    cartona = `
            <div class=" col-md-6 col-sm-6">
            <div class="hover-im">
            <img src="${allpizzaid.image_url}" class=" card-img img-fluid" alt="">
            </div>
        </div>
        <div class=" col-md-6 col-sm-6">
            <h3 style="color: #e1e1e1;">${allpizzaid.title}</h3>
            <p>${allpizzaid.ingredients}</p>
            <a href="${allpizzaid.source_url}" class="text-decoration-none">Read More</a>
        </div>
        <i id="close" onclick="clos()" class="far fa-times-circle text-info"></i>
            `

    showfromid.innerHTML = cartona;

}

// hiden pizza by id
function clos() {
    background.style.display = "none"
}

// get search allfode
let allfode = [];
async function apifode(fode) {
    let apia = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${fode}`)
    let apjason = await apia.json()
    allfode = apjason.recipes;
    console.log(allfode)
    desplayfode(allfode)
};
// event btn search allfode
serchbtn.addEventListener("click", function() {

    apifode(serchinput.value)

});

// show search allfode
function desplayfode(allfode) {
    let cartona = ` `;

    for (let i = 0; i < allfode.length; i++) {
        cartona += `
            <div class="col-lg-4 col-md-6 pb-3 mb-5 " >
            <div class="cont-img " onclick="apipizzid(${allfode[i].recipe_id})">
            <img src="${allfode[i].image_url}" class=" card-img img-fluid" alt="">
             <div class="opacity"></div>
            <h3>${allfode[i].title}</h3>
            <p>${allfode[i].publisher} </p>
            <a href="${allfode[i].source_url}">More</a> </div>
            </div>
            `
    }
    showpizaa.innerHTML = cartona;
}

document.addEventListener("keydown", function(e) {

    if (e.keyCode === 27) {

        background.style.display = "none"
    }
});


// https://forkify-api.herokuapp.com/api/get?rId=47334      api id
// https://forkify-api.herokuapp.com/api/search?&q=pizza   apipizz
// "https://forkify-api.herokuapp.com/api/get?rId=47334https: //westhors.github.io/Fast-food/index.html"  web to test
// https://forkify-api.herokuapp.com/api/get?rId=47334      api id
// https://forkify-api.herokuapp.com/api/search?&q=pizza   apipizz
// "https://forkify-api.herokuapp.com/api/get?rId=47334https: //westhors.github.io/Fast-food/index.html"  web to test
