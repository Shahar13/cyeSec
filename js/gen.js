function buildPage() {
    createCardsSection1();
    createSlideSection3();
}

// add link to logo
document.querySelector('.logo').addEventListener('click', () =>{
    document.location.href = 'index.html';
})

// create cards at section_1
// data
const cardsData = {
    title: "Summer Tower", sub: "Jl. Lorem Ipsum no.62, Wakanda Universe", price: "Rp 150.000", span: "/ hari"
}
// structure
let cardsAll = '';
function createCardsSection1(){
    for (let i = 1; i < 7; i++) {
        cardsAll += `<div>
            <div>
                <img src="images/cards_img_${i}.png" alt="${cardsData.title}" title="${cardsData.title}">
            </div>
            <div class="section_1_cards_title">
                ${cardsData.title}
            </div>
            <div class="section_1_cards_subtitle">
            ${cardsData.sub}
            </div>
            <div class="section_1_cards_price">
                ${cardsData.price} <span>${cardsData.span}</span>
            </div>
        </div>\n
        `;
    }
    // inject
    document.getElementById('section1CardsWrap').innerHTML = cardsAll;
}



// create slide at section_3

// structure
let slideAll = '';
function createSlideSection3(){
    for (let i = 1; i < 12; i++) {
        slideAll += `
        <!-- single elm -->
        <div class="s_3_s_elm">
            <img class="s_3_s_img" src="images/slide_img_${i}.png" alt="slide ${i}" title="slide ${i}">
        </div>
        \n
        `;
    }
    // inject
    document.getElementById('section3Slide').innerHTML = slideAll;
}


// NAV BAR responsive
var nav = document.getElementById('navList');

function toggleNavBar () {       
    if (nav.style.display === "")
    nav.style.display = "block";

    else
    nav.style.display = "";
}

function windowResizeHandler () {
    if ( screen.width > 740 )
    nav.style.display = "";
}

window.addEventListener("resize", windowResizeHandler);


