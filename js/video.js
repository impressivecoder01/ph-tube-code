const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

const displayCategories = (datas) => {
  const categoriesContainer = document.getElementById("categories");
  for (const data of datas) {
    const button = document.createElement("button");
    button.innerText = data.category;
    button.classList.add("btn");
    categoriesContainer.appendChild(button);
  }
};

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

const displayVideos = (datas) => {
  const videoContainer = document.getElementById("videos");
  for (const data of datas) {
    console.log(data)
    const card = document.createElement("div");
    card.classList = "card card-compact"
    card.innerHTML = `
        <figure class= "h-[200px] relative">
    <img
      src=${data.thumbnail}
      class= "h-full w-full object-cover"
      alt="Shoes" />
      ${data.others['posted_date']?. length == 0? "" : `<span class = "absolute right-2 bottom-2 bg-black rounded p-1 text-white">${data.others['posted_date']}</span>`}
      
  </figure>
  <div class="px-0 py-2">
    <div>
        <img class= "w-10 h-10 rounded-full object-cover" src= ${data.authors[0]['profile_picture']} />
    </div>
    <div>
        <h2 class= "font-bold">${data.title}</h2>
        <div class= "flex items-center gap-2">
            <p class= "text-gray-400"> ${data.authors[0]['profile_name']}</p>
            ${data.authors[0].verified === true ? `<img class= "w-5 object-cover" src= "https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png">` : ''}
            
        </div>    
        <p></p>
    </div>

    `;
    videoContainer.appendChild(card)
  }
};

loadCategories();

loadVideos();

// function clickHere(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => more(data))
// }

// function more(datas){
//     const newSection = document.getElementById('new-section');
//     for(const data of datas){
//         const div = document.createElement('div');
//         div.innerHTML = `
//         <h4>User: ${data.userId}</h4>
//         <h5>it: ${data.id}</h5>
//         <h6>title: ${data.title}</h6>
//         `
//         newSection.appendChild(div)
//         div.classList.add('color')
//         div.classList.add('mr')
//     }
// }
