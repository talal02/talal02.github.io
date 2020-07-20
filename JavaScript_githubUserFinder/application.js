const git = new github;
const ui = new UI;
let search = document.getElementById('user');

search.addEventListener('keyup', (e) => {

    let text = e.target.value;

    if(text != ''){

        git.getUsers(text)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                ui.clearProfile();        
                ui.alertProfile('User Not Found', 'alert alert-danger font-weight-bold font-italic');
            
            } else {

                ui.displayProfile(data.profile);
                ui.displayRepos(data.repos);
            }
        })
    } else {

        ui.clearProfile();

    }
})