let str = ''
let repo;
document.getElementById('repos').innerHTML = str;
let getData = async () => {
    let username = document.getElementById('username').value;
    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();
    let response2 = await fetch(`https://api.github.com/users/${username}/repos`);
    repo = await response2.json();
    document.getElementById('id').innerHTML = `            
    <div class="profile d-flex">
    <img id="dp" src="${data.avatar_url}" alt="">
    <h3 class="my-2" id="profileName">${data.name}</h3>
    <div class="stats d-flex">
        <p id="repo" class="mx-2"><b>Repos:</b> ${data.public_repos} </p> 
        <p id="userid" class="mx-2"><b>Username:</b> ${data.login} </p>
    </div>
</div>`
    str = '';
    repo.map((elem) => {
        str += `<div class="card mx-2 my-2" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${elem.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${elem.full_name}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">Forks ${elem.forks_count}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">Stars ${elem.stargazers_count}</h6>
      <p class="card-text"></p>
      <a href="${elem.html_url}" class="card-link">Check In Github</a>
    </div>
  </div>`;
    })
    document.getElementById('options').innerHTML = `<div class="dropdown">
<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Sort By
</button>
<ul class="dropdown-menu">
  <li><p class="dropdown-item" onclick="fork()">Fork</p></li>
  <hr>
  <li><p class="dropdown-item" onclick="star()">Star</p></li>
  </li>
</ul>
</div>`
    document.getElementById('repos').innerHTML = str;
}


let fork = () => {
    str = '';
    repo.sort((a, b) => {
        return b.forks_count - a.forks_count
    }).map((elem) => {
        str += `<div class="card mx-2 my-2" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${elem.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${elem.full_name}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">Forks ${elem.forks_count}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">Stars ${elem.stargazers_count}</h6>
      <p class="card-text"></p>
      <a href="${elem.html_url}" class="card-link">Check In Github</a>
    </div>
  </div>`;
    })
    document.getElementById('options').innerHTML = `<div class="dropdown">
<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Sort By
</button>
<ul class="dropdown-menu">
  <li><p class="dropdown-item" onclick="fork()">Fork</p></li>
  <hr>
  <li><p class="dropdown-item" onclick="star()">Star</p></li>
  </li>
</ul>
</div>`
    document.getElementById('repos').innerHTML = str;
}

let star = () => {
    str = '';
    repo.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count
    }).map((elem) => {
        str += `<div class="card mx-2 my-2" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${elem.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${elem.full_name}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">Forks ${elem.forks_count}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">Stars ${elem.stargazers_count}</h6>
      <p class="card-text"></p>
      <a href="${elem.html_url}" class="card-link">Check In Github</a>
    </div>
  </div>`;
    })
    document.getElementById('options').innerHTML = `<div class="dropdown">
<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Sort By
</button>
<ul class="dropdown-menu">
  <li><p class="dropdown-item" onclick="fork()">Fork</p></li>
  <hr>
  <li><p class="dropdown-item" onclick="star()">Star</p></li>
  </li>
</ul>
</div>`
    document.getElementById('repos').innerHTML = str;
}