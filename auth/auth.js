class User {
    constructor(id, fullName, email, number, username, password, confirmPassword) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.number = number;
        this.username = username;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}

let myUser = new User(0012, 'groovy', 'groovy@gmail', '080345', 'kelah', 123, 123);

const register = () => {
        let id = Math.floor(Math.random()*10);
        let fullName = document.getElementById('fullName').value;
        let email = document.getElementById('email').value;
        let number = document.getElementById('number').value;
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let confirmPassword = document.getElementById('confirm-password').value;

        // console.log(email); console.log(number); console.log(username); console.log(password); console.log(confirmPassword);

        let myUser = new User(id, fullName, email, number, username, password, confirmPassword);
        console.log(myUser);

        let newDataArray = [];
        if(!localStorage.getItem('userData')) {
            JSON.parse(localStorage.getItem('userData') || '[]');
            newDataArray.push(myUser);
            console.log('new data array',newDataArray);
            JSON.stringify(localStorage.setItem('userData', newDataArray));
            console.log('newest array',newDataArray);
            window.location = 'login.html';
            // window.alert('You have successfully signed up. Now Please Login');s
        } else {
            newDataArray.push(myUser);
            console.log('now', newDataArray);
            localStorage.setItem('userData', JSON.stringify([newDataArray]));
            // JSON.stringify(localStorage.setItem('userData', newDataArray));
            console.log(newDataArray);
            window.location = 'login.html';
            window.alert('You have successfully signed up. Now Please Login');
        }
    }  

    const login = () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        let loginDetails = JSON.parse(localStorage.getItem('UserData'));
        console.log('login details', loginDetails)
        console.log('chekin')
        // if(username === '')
        console.log('logged in'); this.id = Math.floor(Math.random()*10);console.log(this.id);
        window.location = '../transaction/transaction.html';
    }

