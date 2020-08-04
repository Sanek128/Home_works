// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

//console.log(Math.floor(Math.random() * 5000) + 1000);
//console.log((Math.floor(Math.random() * 5) + 1) * 1000);

function time() {
    return (Math.floor(Math.random() * 5) + 1) * 1000;
}

function badDay() {
    alert('НЕ ТВІЙ ДЕНЬ. Спробуй завтра все зробити гарно')
}

function morning(clock, cb) {
    setTimeout(() => {
        if (clock) {
            console.log('Доброго ранку');
            cb(null, 'Доброго ранку');
        } else {
            cb('Ти проспав', null);
            console.log('Ти проспав');
        }
    }, time());
}

function breakfest(food, cb) {
    setTimeout(() => {
        if (food) {
            console.log('Будемо снідати. Запарюй овсяночку, наливай чаю');
            cb(null, 'Будемо снідати. Запарюй овсяночку, наливай чаю');
        } else {
            cb('Забув купити кашки', null);
            console.log('Забув купити кашки');
        }
    }, time());
}

function goWork(road, cb) {
    setTimeout(() => {
        if (road) {
            console.log('Їдь працювати');
            cb(null, 'Їдь працювати');
        } else {
            cb('Негода, ураган. Вертайся додому', null);
            console.log('Негода, ураган. Вертайся додому');
        }
    }, time());
}

function lunch(food, cb) {
    setTimeout(() => {
        if (food) {
            console.log('Сьогодні дієтичне меню. Суп, кашка та рибка на пару');
            cb(null, 'Сьогодні дієтичне меню. Суп, кашка та рибка на пару');
        } else {
            cb('Ти забув обрати собі меню на неділю. Шукай де поїсти', null);
            console.log('Ти забув обрати собі меню на неділю. Шукай де поїсти');
        }
    }, time());
}

function endWork(work, cb) {
    setTimeout(() => {
        if (work) {
            console.log('Все зробив, молодець. Збирайся додому');
            cb(null, 'Все зробив, молодець. Збирайся додому');
        } else {
            cb('Ти не встигаєш, залишайся працюй', null);
            console.log('Ти не встигаєш, залишайся працюй');
        }
    }, time());
}

function theGym(gym, cb) {
    setTimeout(() => {
        if (gym) {
            console.log('Йди в спортзал');
            cb(null, 'Йди в спортзал');
        } else {
            cb('Забув сумку з ормою вдома. Наступного разу сходиш', null);
            console.log('Забув сумку з ормою вдома. Наступного разу сходиш');
        }
    }, time());
}

function goHome(home, cb) {
    setTimeout(() => {
        if (home) {
            console.log('Чудовий вечір. Пішли додому');
            cb(null, 'Чудовий вечір. Пішли додому');
        } else {
            cb('Напад зомбі, шукай схованку', null);
            console.log('Напад зомбі, шукай схованку');
        }
    }, time());
}

function dinner(food, cb) {
    setTimeout(() => {
        if (food) {
            console.log('Легка вечеря на ніч');
            cb(null, 'Легка вечеря на ніч');
        } else {
            cb('Ти забув купити продукти. Лягай голодний', null);
            console.log('Ти забув купити продукти. Лягай голодний');
        }
    }, time());
}

function night(sleep, cb) {
    setTimeout(() => {
        if (sleep) {
            console.log('Стелися й лягай');
            cb(null, 'Стелися й лягай');
        } else {
            cb('Випив забагато кави, заснути не вийде', null);
            console.log('Випив забагато кави, заснути не вийде');
        }
    }, time());
}
/*
morning(true, (er, data) => {
    if (er) {
        badDay();
    } else{
        console.log('Пішли в душ');
        console.log('-----------------');
        breakfest(true, (er) => {
            if (er) {
                badDay();
            } else {
                console.log('Приємного апетиту');
                console.log('-----------------');
                goWork(true, (er) => {
                    if (er) {
                        badDay();
                    } else {
                        console.log('Гарного робочого дня');
                        console.log('-----------------');     
                        lunch(true, (er) => {
                            if (er) {
                                badDay();
                            } else {
                                console.log('Приємного апетиту');
                                console.log('-----------------');
                                endWork(true, (er) => {
                                    if (er) {
                                        badDay();
                                    } else {
                                        console.log('Ти гарно попрацював');
                                        console.log('-----------------');
                                        theGym(true, (er) => {
                                            if (er) {
                                                badDay();
                                            } else {
                                                console.log('Гарного тренування');
                                                console.log('-----------------');
                                                goHome(true, (er) => {
                                                    if (er) {
                                                        badDay();
                                                    } else {
                                                        console.log('Приємної прогулянки');
                                                        console.log('-----------------');
                                                        dinner(true, (er) => {
                                                            if (er) {
                                                                badDay();
                                                            } else {
                                                                console.log('Приємного апетиту');
                                                                console.log('-----------------');
                                                                night(true, (er) => {
                                                                    if (er) {
                                                                        badDay();
                                                                    } else {
                                                                        console.log('Чудовий день, дорої ночі');
                                                                        console.log('-----------------');
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }    
                                })
                            }
                        })                   
                    }
                })
            }
        })
    }
})
*/
function morningP(clock) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (clock) {
                console.log('Доброго ранку');
                resolve('Доброго ранку');
            } else {
                reject('Ти проспав');
                console.log('Ти проспав');
            }
        }, time());
    })
}

function breakfestP(food) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (food) {
                console.log('Будемо снідати. Запарюй овсяночку, наливай чаю');
                resolve('Будемо снідати. Запарюй овсяночку, наливай чаю');
            } else {
                reject('Забув купити кашки');
                console.log('Забув купити кашки');
            }
        }, time());
    })
}

function goWorkP(road) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (road) {
                console.log('Їдь працювати');
                resolve('Їдь працювати');
            } else {
                reject('Негода, ураган. Вертайся додому');
                console.log('Негода, ураган. Вертайся додому');
            }
        }, time());
    })
}

function lunchP(food) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (food) {
                console.log('Сьогодні дієтичне меню. Суп, кашка та рибка на пару');
                resolve('Сьогодні дієтичне меню. Суп, кашка та рибка на пару');
            } else {
                reject('Ти забув обрати собі меню на неділю. Шукай де поїсти');
                console.log('Ти забув обрати собі меню на неділю. Шукай де поїсти');
            }
        }, time());
    })
}

function endWorkP(work) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (work) {
                console.log('Все зробив, молодець. Збирайся додому');
                resolve('Все зробив, молодець. Збирайся додому');
            } else {
                reject('Ти не встигаєш, залишайся працюй');
                console.log('Ти не встигаєш, залишайся працюй');
            }
        }, time());
    })
}

function theGymP(gym) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (gym) {
                console.log('Йди в спортзал');
                resolve('Йди в спортзал');
            } else {
                reject('Забув сумку з ормою вдома. Наступного разу сходиш');
                console.log('Забув сумку з ормою вдома. Наступного разу сходиш');
            }
        }, time());
    })
}

function goHomeP(home) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (home) {
                console.log('Чудовий вечір. Пішли додому');
                resolve('Чудовий вечір. Пішли додому');
            } else {
                reject('Напад зомбі, шукай схованку');
                console.log('Напад зомбі, шукай схованку');
            }
        }, time());
    })
}

function dinnerP(food) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (food) {
                console.log('Легка вечеря на ніч');
                resolve('Легка вечеря на ніч');
            } else {
                reject('Ти забув купити продукти. Лягай голодний');
                console.log('Ти забув купити продукти. Лягай голодний');
            }
        }, time());
    })
}

function nightP(sleep) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (sleep) {
                console.log('Стелися й лягай');
                resolve('Стелися й лягай');
            } else {
                reject('Випив забагато кави, заснути не вийде');
                console.log('Випив забагато кави, заснути не вийде');
            }
        }, time());
    })
}
/*
morningP(true)
    .then (res => {
        console.log('Пішли в душ');
        console.log('-----------------');
        //console.log(res);
        return breakfestP(true);
    })
    .then (res => {
        console.log('Приємного апетиту');
        console.log('-----------------');
        return goWorkP(true);
    })
    .then (res => {
        console.log('Гарного робочого дня');
        console.log('-----------------');
        return lunchP(true);
    })
    .then (res => {
        console.log('Приємного апетиту');
        console.log('-----------------');
        return endWorkP(true);
    })
    .then (res => {
        console.log('Ти гарно попрацював');
        console.log('-----------------');
        return theGymP(true);
    })
    .then (res => {
        console.log('Гарного тренування');
        console.log('-----------------');
        return goHomeP(true);
    })
    .then (res => {
        console.log('Приємної прогулянки');
        console.log('-----------------');
        return dinnerP(true);
    })
    .then (res => {
        console.log('Приємного апетиту');
        console.log('-----------------');
        return nightP(true);
    })
    .then ((res) => {
        console.log('************************');
        console.log('Чудовий день, дорої ночі');
        console.log('************************');
    })
    .catch(er => {
        badDay();
    })
*/

async function day () {
    try {
        await morningP(true);
        console.log('Пішли в душ');
        console.log('-----------------');
        await breakfestP(true);
        console.log('Приємного апетиту');
        console.log('-----------------');
        await goWorkP(true);
        console.log('Гарного робочого дня');
        console.log('-----------------');
        await lunchP(true);
        console.log('Приємного апетиту');
        console.log('-----------------');
        await endWorkP(true);
        console.log('Ти гарно попрацював');
        console.log('-----------------');
        await theGymP(true);
        console.log('Гарного тренування');
        console.log('-----------------');
        await goHomeP(true);
        console.log('Приємної прогулянки');
        console.log('-----------------');
        await dinnerP(true);
        console.log('Приємного апетиту');
        console.log('-----------------');
        await nightP(true);
        console.log('************************');
        console.log('Чудовий день, дорої ночі');
        console.log('************************');
    }
    catch (er) {
        badDay();
    }
}

day();