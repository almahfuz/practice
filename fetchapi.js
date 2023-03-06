

function LoadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
function LoadData2(){
    const url= 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
}
function LoadDataShow(){
    const url= 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(valueOfData => displayFromHere(valueOfData))
}
function displayFromHere(valueOfData){
    const  ul = document.getElementById('user-lists');
    for (let user of valueOfData) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li); 
        
        }
    
}