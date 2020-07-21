const data = [
    {
        name: 'Usman Baig',
        age: 19,
        gender: 'male',
        known: 'Fast Ka Play Boy',
        moto: 'Mazeed Kattana Hai Chahy Jitna Bhi Katty',
        location: 'Rawalpindi',
        image: './u.jpeg'
    },
    {
        name: 'Mehmood Amjad',
        age: 19,
        gender: 'male',
        known: 'Shakt Lauda',
        moto: 'I won 1 Lac through e-sports (Treat ???)',
        location: 'Pindi-Gheb',
        image: './m.jpeg'
    },
    {
        name: 'Sher Ali',
        age: 19,
        gender: 'male',
        known: 'Shareef Bacha',
        moto: 'Ghussa me bhi idhr udhr nahi Seedha Ghar nikal jaty hain',
        location: 'Islamabad',
        image: './sh.jpeg'
    },
    {
        name: 'Faizan Ul Hassan',
        age: 21,
        gender: 'male',
        known: 'Comsats',
        moto: 'Hmara 2nd Hand Samraan agay ap khud samghdar hain',
        location: 'Rawalpindi',
        image: './f.jpeg'
    },
    {
        name: 'Sufiyan Ur Rehman',
        age: 20,
        gender: 'male',
        known: 'Lambay Baal',
        moto: 'Hmara Freestyle Muhajir Bhai from MQM',
        location: 'Karanchi',
        image: './suf.jpeg'
    }
];

let profiles = profileIteration(data);

showProfile();

document.getElementById('next').addEventListener('click', showProfile);

function showProfile() {
    let cur = profiles.next().value;
    
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group text-center">
        <li class="list-group-item font-italic text-primary">Name: ${cur.name}</li>
        <li class="list-group-item font-italic text-primary">Age: ${cur.age}</li>
        <li class="list-group-item font-italic text-primary">Gender: ${cur.gender}</li>
        <li class="list-group-item font-italic text-primary">Known As: ${cur.known}</li>
        <li class="list-group-item font-italic text-primary">About: ${cur.moto}</li>
        <li class="list-group-item font-italic text-primary">Location: ${cur.location}</li>
    </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
        <img class="img-fluid b-con" src="${cur.image}">
    `;
}

function profileIteration(profile) {

    let nextIndex = 0;
    
    return {
        next: function() {
            return nextIndex < profile.length ?
            {value: profile[nextIndex++], done: false} :
            {done: true}
        }
    };
}

