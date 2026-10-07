function camelCase(str) {
    const a = str.split('-');
    for (let i = 1; i < a.length; i++) {
        const w = a[i]
        a[i] = w.at(0).toUpperCase() + w.slice(1)
    }
    return a.join('')
}

console.log(camelCase('background-color'));



const arr1 = [9,8,7,6,5,4,3,2,1];
const arr2 = arr1.slice();
const arr3 = [...arr1];

arr2.reverse();
let s = 0;
let e = arr3.length - 1;
while(s<e){
    [arr3[s],arr3[e]] = [arr3[e],arr3[s]];
    s++;
    e--;
}

console.log(arr1, arr2, arr3);



const d = {
    my:'мой',
    friend: 'друг',
    eat: 'ест',
    apples: 'яблоки'
}

function translate(str) {
    const a = str.toLowerCase().split(' ');
    const s = [];
    for (const w of a) 
        s.push(d[w] ?? w);
    return s.join(' ')
}

console.log(translate('my friend eat apples'));



const week = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
    getDay(day) {
        if (day === undefined){
            const today = new Date();
            let cur = today.getDay()
            if (cur === 0) cur = 7 ;
            return this[cur];
        }
        return this[day] ?? '';
    }
}

console.log(week.getDay());
console.log(week.getDay(3));
console.log(week.getDay(100));



const personal1 = {
    Boss: 'Никита',
    Admin: 'Вова'
}

const personal2 = {...personal1};
personal2.Boss = 'Герман';
personal2.Admin = 'Даня';

const str1 = JSON.stringify(personal1, null, 2);
const str2 = JSON.stringify(personal2, null, 2);

console.log("Объект 1:\n" + str1);
console.log("\nОбъект 2:\n" + str2);



const subjects = {
    subjects: 'Математика, Информатика',

    addSubject(str) {
        const a = this.subjects.split(',').map(s => s.trim());
        if (!a.map(s => s.toLowerCase()).includes(str.toLowerCase())) {
            a.push(str);
            this.subjects = a.join(', ');
        }

    },

    removeSubject(str) {
        const a = this.subjects.split(',').map(s => s.trim());
        const ind = a.findIndex(s => s.toLowerCase() === str.toLowerCase());
        if (ind !== -1) {
            a.splice(ind, 1);
            this.subjects = a.join(', ');
        }
    }
}

console.log(subjects.subjects);
subjects.addSubject('Физика');
console.log(subjects.subjects);
subjects.removeSubject('Математика')
console.log(subjects.subjects);