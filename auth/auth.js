class Auth {
    constructor(id, fullName, email, number, username, password) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.number = number;
        this.username = username;
        this.password = password;
        console.log('the id is',id)
    }
    register() {
        this.id = Math.floor(Math.random()*10);console.log(this.id);
        this.email = document.getElementById('email').value;
        this.number = document.getElementById('number').value;
        this.username = document.getElementById('username').value;
        this.password = document.getElementById('password').value;
        this.password = document.getElementById('confirm-password').value;

        this.newDataArray = []
        if(localStorage.getItem('userData')) {
            this.newDataArray.push('userData')
        } else {
            console.log('no data in local storage')
        }
    }  
    login() {
        console.log('logged in'); this.id = Math.floor(Math.random()*10);console.log(this.id);
        window.location = '../transaction/transaction.html';
    }
}
const myAuth = new Auth({id:001, fullName:'kele', email:'kel@gmail', number:080223, username:'kelah', password:123})



















// console.log('checking id',myAuth.login())

// REDUCE STARTS
// const sum = (num) => {
//     console.log(num)
// const value = num.reduce((accumulator, currentItem) => {
//         return accumulator + currentItem;
//     },0);
// return value;

// }
// console.log(sum([1,2,3]))

// const average = (numList) => {
//     const result = numList.reduce((accumu, curItem) => {
//         return accumu + curItem;
//     })
//     return result/numList.length
// }

// console.log(average([1,2,3]))

// REDUCE ENDS 




// // REVERSE A STRING WITH METHODS 
// console.log(reverseString("hello"));

// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); 
//     var splitString = "hello".split("");
//     ["h", "e", "l", "l", "o"]
//     console.log('splitSpitting',splitString)
 
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); 
//     var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     ["o", "l", "l", "e", "h"]
//     console.log('reverser array',reverseArray)
 
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join("");
//      var joinArray = ["o", "l", "l", "e", "h"].join("");
//     console.log('join array ', joinArray)
//     "olleh"
    
//     // Step 4. Return the reversed string
//     return joinArray;
// }
 
// console.log(reverseString("hello"));

