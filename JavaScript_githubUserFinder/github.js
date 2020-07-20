
class github {
    constructor() {
        this.clientId = 'bd952a0d45d3647a0962';
        this.clientSecret = '763d0a1ff14b1d83c67e4383ab58a46a957b0f59';
        this.reposCount = 3;
        this.reposSort = 'created: asc';
    }

    async getUsers(user) {
        const profileres = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const repores = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        
        const profile = await profileres.json();
        const repos = await repores.json();

        return {
            profile,
            repos
        }
    }
}