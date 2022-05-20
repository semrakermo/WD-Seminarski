// Get
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food')
    .then(response => response.json())
    .then(data => processData(data));

const processData = data => {
    
    const section = document.getElementById('sec');
    const mainDiv = document.getElementById('parent');
    const row = document.getElementById('row');

    const dropdown = document.getElementById('dropdown');

    data.forEach(element => {

        const div = document.createElement('div');
        div.classList.add('feature-box', 'col-lg-6');

        const img = document.createElement('img');
        img.classList.add('feature-images');
        img.src = element.imageUrl;

        const h3 = document.createElement('h3');
        h3.classList.add('feature-title');
        h3.innerHTML = element.name;

        const p = document.createElement('p');
        p.innerHTML = element.price + " KM";

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        row.appendChild(div);
        mainDiv.appendChild(row);
        section.appendChild(mainDiv);


        const option = document.createElement('option');
        option.innerHTML = element.id + ". " + element.name;
        option.setAttribute("value", element.id);
        option.classList.add('dropdown-item');

        dropdown.appendChild(option);
    });
}

//Post
let forma = document.getElementById('forma');
forma.addEventListener('submit', function(e){
    e.preventDefault();

    let name = document.getElementById('name');
    let price = document.getElementById('price');
    let imageUrl = document.getElementById('imageUrl');
    
    fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food', {
        method: 'POST',
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            "name": name.value,
            "price": price.value,
            "imageUrl": imageUrl.value,
        })
    })
        .then(data => console.log(data))
})


//Funkcija koja uzima id hrane iz dropdown menija

function getOption() {
    selectElement = document.querySelector('#dropdown');
    id = selectElement.value;
    document.querySelector('.output').textContent = "Option " + id + " has been successfully deleted!";
    deleteFood(id);
}


//Delete
const deleteFood = (id) => {
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food/${id}`, {
        method: "DELETE",
    })
    .then((res) => {
        console.log(res);
    })
}