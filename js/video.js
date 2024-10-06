const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error))
}

const displayCategories = (datas) => {
    const categoriesContainer = document.getElementById('categories');
    for(const data of datas){
        const button = document.createElement('button')
        button.innerText = data.category
        button.classList.add('btn');
        categoriesContainer.append(button)
    }
}





loadCategories()
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