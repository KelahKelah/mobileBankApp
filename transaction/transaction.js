// import {dailyTransactions} from '../utiils/data';

const dailyTransactions = [
    {id:1, channel: 'mobile banking', remark: 'grocery', amount: 400, transactionType: 'debit', date: 'sept 2020,1:30'},    
    {id:2, channel: 'ussd', remark: 'dstv', amount: 500, transactionType: 'debit', date: 'sept 2020 3:40'},
    {id:3, channel: 'atm', remark: 'schools fees', amount: 25000, transactionType: 'credit', date: 'oct 2020,2:30'},
    // {id:4,transactionType : 'transaction between customers', channel: 'mobile banking', branch: ' e-channel', remark: 'gym', amount: 5000, transfer: 'debit'},
    // {id:5,transactionType : 'commision', channel: 'mobile banking', branch: ' atm', remark: 'grocceries', amount: 4000, transfer: 'credit'},
    // {id:6,transactionType : 'transaction between customers', channel: 'mobile banking', branch: ' e-channel', remark: 'schools fees', amount: 1200, transfer: 'debit', date: 'sept 2020,1:30'},
    // {id:7,transactionType : 'commision', channel: 'ussd', branch: ' e-channel', remark: 'recovery charge', amount: 200, transfer: 'debit'},
];


const getAllDialyTransaction = () => {
    var transactionElement = document.getElementById('balance-container');
    transactionElement.innerHTML = '';
    console.log(transactionElement);
    dailyTransactions.map((item, ind) => {
        return(
            transactionElement.innerHTML += `<tr class="balance-item" id='custom-tr'>
                                        <td><i class="mx-2 channel">${item.channel}</i></td>
                                        <td><p class="mx-2">${item.remark}</p></td>
                                        <td><p>${item.amount}</p></td>
                                        <td><p>${item.date}</p></td>
                                    </tr>`
        )
    })

}

const getTotalBalance = () => {
    var totalBalanceVal = document.getElementById('total-balance');
    totalBalanceVal.innerHTML = "";
    const totalValue = dailyTransactions.reduce((accum, curInd) => {
        console.log('amt is:',curInd.amount);
        return accum + curInd.amount;
    }, 0);
    return (
        totalBalanceVal.innerHTML += `<p class="total-amount" id="total-balance">N${totalValue}</p>`
    )
}

console.log(getTotalBalance());

getAllDialyTransaction();

const myUsername = () => {
    const checkingLocal = JSON.parse(localStorage.getItem('userData'));
    console.log('value',checkingLocal);
    for(i=0; i < checkingLocal.length; i++) {
        console.log(i.id)
        return i.id
    }
    
}

myUsername();