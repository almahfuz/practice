
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


function LoadDataPost(){
    const url= 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(valueOfDataPost => DataPostFormHere(valueOfDataPost))

}
function DataPostFormHere(valueOfDataPost){ // fetch the data and show data from here
    const UsePostData = document.getElementById('User-Post-lists');
    
    for (const user of valueOfDataPost) {
        // console.log(user.name);
        const PostDiv  = document.createElement('div');
        console.log(user);
        PostDiv.classList.add('grooveColor');
        PostDiv.innerHTML =`
        <h5>All Posted people here</h5>
        <h5>User Name : ${user.name}</h5> 
        <p>User id : ${user.id}</p> 
        <p>Email :${user.email} </p>
        <p>phone Number:${user.phone } </p>
        
        
        `;
        UsePostData.appendChild(PostDiv);
        
        }
    
}


