// //for one item
// var price = document.getElementsByClassName('price-item')[0];
// var btnplus = document.querySelectorAll('.btn_plus')[0];
// var input = document.getElementsByClassName("item-price")[0];
// var totalp = document.getElementById('totalp');
// var btnmoins = document.querySelectorAll('.btn_moins')[0];




// //event 

// btnplus.addEventListener('click', plus);
// function plus() {
//     input.value = parseInt(input.value) + 1;
//     // alert(parseFloat(pricetotal) + parseFloat(price.innerHTML));
//     totalp.innerHTML = parseFloat(totalp.innerHTML) + parseFloat(price.innerHTML);
// }

// btnmoins.addEventListener('click', moins);
// function moins() {
//     if ((input.value) > 0) {
//         input.value = parseInt(input.value) - 1;

//         totalp.innerHTML = parseFloat(totalp.innerHTML) - parseFloat(price.innerHTML);
//     }
// }



var btn_plus = document.getElementsByClassName('btn_plus');
var btn_plus_tab = [...document.getElementsByClassName('btn_plus')];
var input = document.getElementsByClassName("item-price");
var price = document.getElementsByClassName('price-item')
var totalp = document.getElementById('totalp');
var btn_moins = document.querySelectorAll('.btn_moins');
var btn_moins_tab = [...document.querySelectorAll('.btn_moins')]




//event add and minuce

for (let i = 0; i < (btn_plus_tab.length); i++) {

    btn_plus[i].addEventListener('click', plus);
    function plus() {
        input[i].value = parseInt(input[i].value) + 1;
        totalp.innerHTML = parseFloat(totalp.innerHTML) + parseFloat(price[i].innerHTML);
    }
}

for (let i = 0; i < (btn_plus_tab.length); i++) {
    btn_moins[i].addEventListener('click', moins);
    function moins() {
        if ((input[i].value) > 0) {
            input[i].value = parseInt(input[i].value) - 1;
            totalp.innerHTML = parseFloat(totalp.innerHTML) - parseFloat(price[i].innerHTML);
        }
    }
}

// style like

var like = document.getElementsByClassName("heart");
var like_tab = [...document.getElementsByClassName("heart")];


(like_tab).forEach(elem => {
    elem.addEventListener("click", function () {
        elem.classList.toggle("class");
    }
    )

})
// for (let j = 0; j < (btn_plus_tab.length); j++) {

//     like_tab[j].addEventListener('click', aime);
//     function aime() {
//         like[j].style.color = 'red';
//     }
// }



// event remove

var remove = document.getElementsByClassName('remove');
var remove_tab = [...document.getElementsByClassName('remove')];
var parent = document.getElementsByClassName('chop');
var parent_tab = [...document.getElementsByClassName('chop')];
var child = document.getElementsByClassName('item');
var child_tab = [...document.getElementsByClassName('item')];


for (let k = 0; k < (btn_plus_tab.length); k++) {
    remove_tab[k].addEventListener('click', supp);
    function supp() {
        var removed = parent_tab[0].removeChild(child_tab[k]);

    }
}
