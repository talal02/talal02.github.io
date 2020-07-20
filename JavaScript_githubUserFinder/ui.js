class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    alertProfile(message, givecls) {
        this.removeAlert();
        const div = document.createElement('div');
        div.className = givecls;
        div.appendChild(document.createTextNode(message));

        const conatiner = document.querySelector('.searchContainer');
    
        const search = document.querySelector('.search');

        conatiner.insertBefore(div, search);

        setTimeout(() => {
            this.removeAlert();
        }, 2000);
    }

    removeAlert() {
        const remdiv = document.querySelector('.alert');

        if(remdiv) {
            remdiv.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    displayProfile(user) {
        let link = `https://` + `${user.blog}`;
        this.profile.innerHTML = `
        <div class="card card-body my-3">
          <div class="row">
            <div class="col-md-3 col-12">
                <img src="${user.avatar_url}" class="img-fluid" alt="avater">
                <a href="${user.html_url}" target="_blank" class="btn b-btn btn-block mb-3 btn-warning text-white"><i class="fa fa-user"></i>&nbsp;Profile</a>
            </div>  
            <div class="col-12 col-md-9">
              <span class="badge badge-success"><i class="fa fa-book"></i>&nbsp;Pulic Repositories : ${user.public_repos}</span>
              <span class="badge badge-secondary"><i class="fa fa-globe"></i>&nbsp;Pulic Gists : ${user.public_gists}</span>
              <span class="badge badge-danger"><i class="fa fa-location-arrow"></i>&nbsp;Location : ${user.location}</span>
              <br><br>
              <ul class="list-group text-white font-weight-bold">
                  <li class="list-group-item bg-secondary"><i class="fa fa-bullseye"></i>&nbsp;Company : ${user.company}</li>
                  <li class="list-group-item bg-primary"><i class="fa fa-link"></i>&nbsp;Blog : <a href="${link}" class="text-white">${user.blog}</a></li>
                  <li class="list-group-item bg-warning"><i class="fa fa-calendar-check-o"></i>&nbsp;Member Since : ${user.created_at}</li>
                  <li class="list-group-item bg-danger"><i class="fa fa-angle-double-right"></i>&nbsp;Bio : ${user.bio}</li>
              </ul>
            </div>
          </div>
        </div>
        <h1 class="mb-3 text-white font-italic font-weight-light"><i class="fa fa-book"></i>&nbsp;Latest Repositories</h1>
        <div class="bg-light" id="repos"></div>
        `;
    }

    displayRepos(repos) {

        let output = '';
        repos.forEach(function(repo){
            output += `
            <div class="card card-body my-2">
              <div class="row bg-light">
                <div class="col-md-6 col-12">
                    <a href="${repo.html_url}" class="btn btn-block btn-light font-weight-bold font-italic" target="_blank"><i class="fa fa-link"></i>&nbsp;${repo.name}</a>
                </div>
                <div class="col-md-6 col-12">
                  <span class="badge badge-success"><i class="fa fa-star"></i>&nbsp;Stars : ${repo.stargazers_count}</span>
                  <span class="badge badge-secondary"><i class="fa fa-archive"></i>&nbsp;Size : ${repo.size}</span>
                  <span class="badge badge-danger"><i class="fa fa-code-fork"></i>&nbsp;Forks : ${repo.forks_count}</span>
                </div>
              </div>
            </div>
            `;
        });

        document.getElementById('repos').innerHTML = output;
    }
}