



function getCharacters(link)
{
    return fetch(link)
        .then(res=>res.json())
}

async function toHtml()
{
    let link = `https://restcountries.com/v3.1/all`;
    let response = await getCharacters(link); 
    fillHTML(response)
}



function fillHTML(datas){
    let result = '';
    const charList = document.getElementById('charlist');
    datas.forEach(el=>{
        result += 
        `<div class="col-md-3 my-3">
            <div class="card">
                <img src="${el.flags.png}" style="height:250px;" class="w-100">
                <div class="card-body">
                    <p class="card-title"></p>
                    <p class="card-text">${el.name.common} </p>
                </div>
                <div class="card-body">
                    <p class="card-title"></p>
                    <p class="card-text">common </p>
                </div>
                <div class="card-footer">
                    <a href=""></a>
                </div>
            </div>
        </div>`
    }) 
    charList.innerHTML = result;

}                                        
toHtml();