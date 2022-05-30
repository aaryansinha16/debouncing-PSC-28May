// https://swapi.dev/api/people/?search={your_search_term}

let id

async function getData(){

    let query = document.querySelector("#query").value

    let url =  `https://swapi.dev/api/people/?search=${query}`

    let res = await fetch(url)

    let data = await res.json()

    console.log(data)

    return data.results
}

function append(data){
    let results = document.querySelector("#results")
    results.innerHTML = null
    data.forEach(function(elem){
        let p = document.createElement('p')
        p.innerText = elem.name

        results.append(p)
    })
}

async function main(){
    let data = await getData()

    append(data)
}

function debouncing(func, delay){
    if(id){
        clearTimeout(id)
    }

    id = setTimeout(function(){
            func()
        }, delay)
}