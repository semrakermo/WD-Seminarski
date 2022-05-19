// Get
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food')
    .then(response => response.json())
    .then(data => processData(data));

const processData = data => {
    
    const section = document.getElementById('sec');
    const mainDiv = document.getElementById('parent');
    const row = document.getElementById('row');

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
    });
}