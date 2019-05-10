'use strict';

let money,time;

function start() {
     money = +prompt("Ваш бюджет на месяц?" , "");
     time = prompt("Введите дату в формате YYYY-MM-DD" , "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?" , "");
    }
}
start();

let appData = {
    budget : money,
    timeData : time,
    saving : true,
    expenses : {
        
    },
    optionalExpenses : {
        
    },
    income : [

    ]
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let b = prompt("Во сколько обойдется?", "");
    
        if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }
        
    }
}
chooseExpenses();



function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");
        appData.mouthIncome = save/100/12*percent;
        alert("Доход за месяц с вашего депозита " + appData.mouthIncome);
    }
}
checkSavings();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет" + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    
if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");

} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");

} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");

} else {
    console.log("Произошла ошибка");
}

}
detectLevel();


function chooseOptExpenses() {
    for (let i = 0; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?", "");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseExpenses();



// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);









