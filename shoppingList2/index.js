

let addItemButtonHTML = document.getElementById("addItem")
addItemButtonHTML.addEventListener("click", function(){
    let itemInputImageLinkHTML = document.getElementById("itemImageLink")
    let itemDescriptionHTML = document.getElementById("itemDescription")
    let itemPriceHTML = document.getElementById("itemPrice")

    let itemImageLink = itemInputImageLinkHTML.value
    let itemDescription = itemDescriptionHTML.value
    let itemPrice = itemPriceHTML.value

    let rightContentHTML = document.getElementById("rightContent")
    rightContentHTML.innerHTML += `<div class="item">
                                        <h1>${itemDescription}</h1>
                                        <img src=${itemImageLink}/>
                                        <h1>$${itemPrice}</h1>
                                    </div>`

    itemInputImageLinkHTML.value = "" 
    itemDescriptionHTML.value = "" 
    itemPriceHTML.value = ""    
})