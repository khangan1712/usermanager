// cú pháp camelCase
var users = [
    {
        id: 1,
        fullName: "Hùng",
        userName: "hungdx",
        password: "123",
        avatar: "https://file.hstatic.net/200000122283/article/shin-cau-be-but-chi_4017a723e5df4b7d91524dc0bf656c27_1024x1024.jpg"
    },
    {
        id: 2,
        fullName: "Toàn",
        userName: "toandx",
        password: "123",
        avatar: "https://media.vov.vn/sites/default/files/styles/large/public/2023-01/shin-chan-1.jpg"
    },
    {
        id: 3,
        fullName: "Hải",
        userName: "haidx",
        password: "123",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSu2SMlQH3AcvzRDx8R7K0pb7Eqb5lsp303A&usqp=CAU"
    }
]

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users))
}


function loadData() {
    let tBodyData = ``;
    let userList = JSON.parse(localStorage.getItem("users"));
    for (let i in userList) {
        tBodyData += `
            <tr>
                <td>${Number(i) + 1}</td>
                <td>${userList[i].fullName}</td>
                <td>${userList[i].userName}</td>
                <td><img width="100px" src="${userList[i].avatar}"
                    alt="avt"></td>
                <td><button type="button" class="btn btn-warning " onclick="editElenment()">Edit</button></td>
                <td><button onclick="deleteUser(${userList[i].id})" type="button" class="btn btn-danger">Delete</button></td>
            </tr>
        `
    }

    let tableElement = `
        <table class="table table-bordered border-primary">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Avatar</th>
                    <th colspan="2">Action</th>
                </tr>
            </thead>
            <tbody>
                ${tBodyData}
            </tbody>
        </table>
    `

    const tableUser = document.getElementById("tableUser");
    console.log("tableUser", tableUser)
    tableUser.innerHTML = tableElement;
}

function addNewUser() {
    let userList = JSON.parse(localStorage.getItem("users"));
    userList.push(
        {
            id: Math.random() * 1000 + 1000,
            fullName: "Test",
            userName: "testabc",
            password: "555",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8GUp7iBoaij9PV_mNrTq2Zx0eeYHFkkOGg&usqp=CAU"
        }
    )
    localStorage.setItem("users", JSON.stringify(userList));
    loadData();
}

// delete 
function deleteUser(userId) {
    let userList = JSON.parse(localStorage.getItem("users"));
    userList = userList.filter(user => user.id != userId);
    localStorage.setItem("users", JSON.stringify(userList));
    loadData();
}

loadData();