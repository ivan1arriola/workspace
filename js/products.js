let currentCarArray = [];

function setCarID(id) {
    localStorage.setItem("carID", id);
    window.location = "products.html"
}

function showCarList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentCarArray.length; i++){
        let car = currentCarArray[i];

            htmlContentToAppend += `
            <div onclick="setCarID(${car.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${car.imgSrc}" alt="${car.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${car.name}</h4>
                            <small class="text-muted">${car.productCount} artículos</small>
                        </div>
                        <p class="mb-1">${car.description}</p>
                    </div>
                </div>
            </div>
            `
        document.getElementById("car-list-container").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData("https://japceibal.github.io/emercado-api/cats_products/101.json").then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCarArray = resultObj.data
            showCarList()
        }
    });
});