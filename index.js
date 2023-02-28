const cardObjectDefinitions = [
    {id:1, imagePath:'/images/card-KingHearts.png'},
    {id:2, imagePath:'/images/card-JackClubs.png'},
    {id:3, imagePath:'/images/card-QueenDiamonds.png'},
    {id:4, imagePath:'/images/card-AceSpades.png'},
]

const cardBackImgPath = '/images/card-back-blue.png'

const cardContainerElem = document.querySelector ('.card-container')

{/*
<div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="images/card-JackClubs.png" alt="jack of clubs" class="card-front">
                    </div>
                    <div class="card-back">
                        <img src="images/card-back-Blue.png" alt="card back Blue" class="card-img">
                    </div>
                </div>
            </div>
*/}

function createCard(cardItem){ 

    //create div elements that make up a card
    const cardElem = document.createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    // create front and back image elements for a card 
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    //add class and id to card element 
    addClassToElement(cardElem, 'card')
    addIdToElement(cardElem, 'card')

    //add class to inner card element 
    addClassToElement(cardInnerElem, 'card-inner')

    //add class to front card element
    addClassToElement(cardFrontElem, 'card-front')

    //add class to back card element 
    addClassToElemet(cardBackElem, 'card-back')

    //add src attribute and appropriate value to img element - back of card (25:05 mins in)
    addSrcToImageElem(cardBackElem, cardBackImgPath)

    //add src attribute and appropriate value to img element - front of card
    addSrcToImageElem(cardFrontElem, cardItem.imagePath)

    //assign class image to back element of back of card 
    addClassToElement(cardBackElem, 'card-image')

    //assign class image to front element of front of card 
    addClassToElement(cardFrontElem, 'card-image')

    //add front image element as child element to front card element
    addChildElement(cardFrontElem, cardFrontImg)

    //add back image element as child element to back card element
    addChildElement(cardBackElem, cardBackImg)

    //add front card element as child element to inner card element
    addChildElement(cardInnerElem, cardFrontElem)

    //add back card element as child element to inner card element
    addChildElement(cardInnerElem, cardBackElem)

    // add inner card element as child element to card element
    addChildElement(cardElem, cardInnerElem)

    // add card element as child element to appropriate grid cell *29:55








}
function createElement(elemType){
    return document.createElement(elemType)
}
function addClassToElement(elem, className){
    elem.classList.add(className)
}
function addIdToElement(elem, id){
    elem.id = id
}
function addSrcToImageElem(imageElem, src){
    imageElem.src = src
}
function addChildElement(parentElem, childElem){
    parentElem.appendChild(childElem)
}
function addCardToGridCell(card) 
{

}
function mapCardIdToGridCell(){
    if(card.id == 1)
    {
        return '.card-pos-a'
    }

}
