// base on datebirth userName
// print out age of the user and how many years left till they get retired

// prompt('Enter your birthyear')

function calcRetireYears(birthYear, firstName) {


    const ageUser = 2021 - birthYear;
    const retireYearLeft = 65 - ageUser;
    const userName = firstName;
    return `${userName} is ${ageUser} years old now in 2021, and you have ${retireYearLeft} years left till you get retired`

}

const calRetire = (birthYear, firstName) => {

    const ageUser = 2021 - birthYear;
    const retireYearLeft = 65 - ageUser;
    const userName = firstName;
    return `${userName} has ${retireYearLeft} years left till he/she retires`
}

const johnInfo = calcRetireYears(1996, 'John');
console.log(johnInfo);

const MarkInfo = calcRetireYears(1998, 'Mark');
console.log(MarkInfo);

// const johnInfo = calRetire(1996, 'John');
// console.log(johnInfo);
// const MarkInfo = calRetire(1998, 'Mark');
// console.log(MarkInfo);

const userBirthYear = prompt('Enter your birthyear')
const userName = prompt('Enter your Frist Name');

const userOutput = calcRetireYears(userBirthYear, userName);
console.log(userOutput);

document.querySelector('h1').textContent = userOutput;

//unfinish:
// const userFirstName = document.querySelector('.huserInput').value

// const userOutput2 = calcRetireYears(userBirthYear, userFirstName);
// document.querySelector('h1').textContent = userOutput2;

// const calRetire = (birthYear, firstName) => {

//     const ageUser = 2021 - birthYear;
//     const retireYearLeft = 65 - ageUser;

//     // if (retireYearLeft>0) {
//     //     return retireYearLeft

//     // }
//     // eles {

//     // }

//     const userName = firstName;
//     return `${userName} has ${retireYearLeft} years left till he/she retires`
// }


//Array
const NetsScore = [100, 102, 110, 'John', 2021 - 1996, true];

const KinksScore = new Array(102, 101, 88, 'Team2', false, 'Team2', 'Team0', 'Team3', 'Team4', 'Team24', 'Team04', 'Team34', 'Team44');



console.log(NetsScore.indexOf('John'));

console.log(NetsScore.length);

console.log(NetsScore.indexOf(true));

console.log(NetsScore[0]);

NetsScore.push('Mark');

console.log(NetsScore);

//  pop  unshift shift

// const number1='John'

console.log(KinksScore);

console.log(KinksScore[KinksScore.length - 2]);


KinksScore.pop();
console.log(KinksScore);

KinksScore.unshift('firstValue');
console.log(KinksScore);

KinksScore.shift();
console.log(KinksScore);

KinksScore.includes('firstValue');


// Practice:

// Lucas is still building his tip calculator, using the same rules as before: Tip 15 % of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20 %.

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above

// Test the function using a bill value of 100.

// 2. Create an array 'bills' containing the test data below.

// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.

// 4. Create an array'totalBill' containing the total bill

// 130 302 32

const bill = [130, 302, 32];

const calcTip = bill => { return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 };


console.log(calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2]));


// const tips =[]
// tips.push('')

// total?



//Object 

const MarkObject = {

    firstName: 'Mark',
    lastName: "William",
    birthYear: 1996,
    job: 'sutudent',
    friends: ['John', 'Jack', 'Jay']

}


console.log(MarkObject);

console.log(MarkObject.birthYear);
//same as:
console.log(MarkObject['birthYear']);


