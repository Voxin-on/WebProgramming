// 1.5. Найти все делители натурального числа N.
function findDivisions(n) {
    const s = new Set();
    for(let i = 1; i <= n**0.5 ;i++){
        if (n % i === 0) {
            s.add(i);
            s.add(n / i);
        }
    }
    return s;
}

console.log(findDivisions(10));



// 1.10. Вычислить (N)!!, где

// (2N)!!      = 2*4*...*(2N)

// (2N+1)!!  = 1*3*...*(2N+1).
function seconfFactorial(n) {
    if (n <= 0)
        return 1;
    let res = 1;
    for (let i = n; i > 1 ; i-=2)
        res *= i;
    return res;
}

console.log(seconfFactorial(5))
console.log(seconfFactorial(4))



// 1.11. Найти все различные пифагоровы тройки из интервала от N до М.
function findPifagorThree(n, m){
    const arr = [];
    for (let a = n; a <= m; a++)
        for (let b = a; b <= m; b++) 
            for (let c = b + 1; c <= m; c++)
                if (a**2 + b**2 === c**2)
                    arr.push([a, b, c]);
    return arr;
}

console.log(findPifagorThree(1,10));



// 1.14. Найти все целые числа из интервала от N до M, которые делятся на каждую из своих цифр.
function findNumberDivNumb(n,m) {
    const arr = [];
    for (let i=n;i<=m;i++) {
        if (i === 0) continue;
        let ch = Math.abs(i);
        let check = true;
        while (ch > 0){
            if (ch % (ch % 10) != 0){
                check = false;
                break;
            }
            ch = Math.floor(ch / 10);
        }   
        if (check)
            arr.push(i);
    }
    return arr;
}

console.log(findNumberDivNumb(0, 100));



// 1.15. Найти все целые числа из интервала от N до M, которые делятся на сумму всех своих цифр.
function findNumberSumNumb(n,m) {
    const arr = [];
    for (let i=n;i<=m;i++) {
        if (i === 0) continue;
        let ch = Math.abs(i);
        let s = 0;
        while (ch > 0){
            s += ch % 10;
            ch = Math.floor(ch / 10);
        }   
        if (i % s === 0)
            arr.push(i);
    }
    return arr;
}

console.log(findNumberSumNumb(0, 100));