const getData = async () => {
    let username = document.getElementById('username').value;
    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();
    let response2 = await fetch(`https://api.github.com/users/${username}/repos`);
    let repo = await response2.json();
    document.getElementById('id').innerHTML=`            
    <div class="profile d-flex">
    <img id="dp" src="${data.avatar_url}" alt="">
    <h3 class="my-2" id="profileName">${data.name}</h3>
    <div class="stats d-flex">
        <p id="repo" class="mx-2"><b>Repos:</b> ${data.public_repos} </p> 
        <p id="userid" class="mx-2"><b>Username:</b> ${data.login} </p>
    </div>
</div>`
let str='';
repo.map((elem)=>{
    str+=`<div class="card mx-2 my-2" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${elem.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${elem.full_name}</h6>
      <p class="card-text"></p>
      <a href="${elem.html_url}" class="card-link">Check In Github</a>
    </div>
  </div>`;
})
document.getElementById('repos').innerHTML=str;
    
   

}