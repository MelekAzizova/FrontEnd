'use strict'
// prompt("Adinizi daxil edin");
// confirm("He yox de bilim");


//Primitive

//Number
//BigInt
//string
//boolean
//null
//undefined

//Non-primitive
//Object 

// console.log(typeof 500)
// console.log(typeof 500n)
// console.log(42635742764576543427652376523472n - 2635742764576543427652376523472)

// console.log(BigInt(235));

// console.log(typeof true);
// console.log(typeof undefined);

// a = 7;
// a = "Salam";
// console.log(a);
// function Salam(){
//     alert("Salam")
// }
// function Salam(){
//     alert("Aleykum")
// }
// Salam();
// var a;
// Number a = 6;

// let, const, var;
// let a = 10;
// let a = "Salam";
// console.log(a);
// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (var i = 15; i < 17; i++) {
//         console.log(i);
//     }
// }
// var obj = {
//     name : "Royal",
//     surname: "Askerov"
// }
// obj.age = 77;
// console.log(obj);

// function Person(name, surname)
// {
//     this.name = name;
//     this.surname = surname
// }
// var newObj = new Person("Vugar")
// newObj.age = 220;
// console.log(newObj);


// function getDatas() {
//     return fetch('https://hp-api.onrender.com/api/characters')
//     .then(response =>  response.json())
// }
// async function asyncCall() {
//     const result = await getDatas();
//     const list = document.getElementById('list');
//     let htmlResult = '';
//     result.forEach(el => {
//         htmlResult += `<li class="list-group-item">${el.name}</li>`
//     });
//     list.innerHTML = htmlResult;
// }
    
// asyncCall();

// fetch('https://hp-api.onrender.com/api/characters')
//     .then(response =>  response.json())
//     .then(data => {
//         data.forEach(el => {
//             console.log(el.name);
//         })
//         return data;
// })

function getCharacters(link)
{
    return fetch(link)
        .then(res=>res.json())
}

async function toHtml(page = 1, size = 16)
{
    let link = `https://api.disneyapi.dev/character?page=${page}&pageSize=${size}`;
    let response = await getCharacters(link); 
    fillHTML(response.data)
}
function fillHTML(datas){
    let result = '';
    const charList = document.getElementById('charlist');
    datas.forEach(el=>{
        result += 
        `<div class="col-md-3 my-3">
            <div class="card">
                <img src="${el.imageUrl}" style="height:250px;" class="w-100">
                <div class="card-body">
                    <p class="card-title">${el.name}</p>
                    <p class="card-text">${el.createdAt}</p>
                </div>
                <div class="card-footer">
                    <a href="${el.url}">Get The Page</a>
                </div>
            </div>
        </div>`
    })
    charList.innerHTML = result;
}
// function pagination(active, total, prev, next){

// }
toHtml(1,16);
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

nextBtn.onclick = async function(ev){
    ev.preventDefault();
    let link = nextBtn.href;
    let response = await getCharacters(link); 
    fillHTML(response.data);
    changePagination(response.info.previousPage,response.info.nextPage);
}

prevBtn.onclick = async function(ev){
    ev.preventDefault();
    let link = prevBtn.href;
    let response = await getCharacters(link); 
    fillHTML(response.data);
    changePagination(response.info.previousPage,response.info.nextPage);
}

function changePagination(prev, next){
    if (prev == null) {
        prevBtn.parentElement.classList.add("disabled");
    }
    else{
        prevBtn.parentElement.classList.remove("disabled");
    }
    prevBtn.href = prev ?? '#';
    if (next == null) {
        nextBtn.parentElement.classList.add("disabled");
    }
    else{
        nextBtn.parentElement.classList.remove("disabled");
    }
    nextBtn.href = next ?? '#';
}
