async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        return users;
    } catch (error) {
        console.error("Error occur:", error);
        return [];
    }
}

// randomly generator
function displayRandomUser(users) {
    const randomIndex = Math.floor(Math.random() * users.length); // Random userselection fun
    const user = users[randomIndex];

    const userInfo = document.getElementById('user-info');
    userInfo.innerHTML = `
        <h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
    `;
}

document.getElementById('fetch-user-btn').addEventListener('click', async () => {
    const users = await fetchUsers(); 
    if (users.length) {
        displayRandomUser(users);
    } else {
        alert('No users found!');
    }
});

// //click button funtion 
// document.getElementById('fetchi-id').addEventListener('click', asyc ()=>{
//     const users = await fetchUsers(); 
//     if (users.length) {
//         displayRandomUser(users);
//     } else {
//         alert('No users found!');
//     }
// })
