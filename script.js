const url = "./first.json";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();

    let tab = "";
    for (let i = 0; i < data.users.length; i++) {
        tab += `<tr>
            <td>${data.users[i].name}</td>
            <td>${data.users[i].age}</td>
            <td>${data.users[i].gender}</td>
            <td>${data.users[i].email}</td>
            <td>${data.users[i].hobbies[0]}</td>
            <td>${data.users[i].hobbies[1]}</td>
        </tr>`
    }
    
    document.getElementById("data").innerHTML = tab;
}

getData();