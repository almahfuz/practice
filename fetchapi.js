
// fetch the data from users 
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
// show the data from users 
function LoadDataShow(){ // this onclick function
    const url= 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(valueOfData => displayFromHere(valueOfData))
}
function displayFromHere(valueOfData){ // fetch the data and show data from here
    const  ul = document.getElementById('user-lists');
    for (let user of valueOfData) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li); 
        
        }
    
}

// post method using method 