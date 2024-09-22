// 함수
// 함수 타입을 지정한다는 건 매개변수와 반환 값에 타입을 지정하는 것
function sum(n1: number ,n2:number ):number {
    return n1 +n2 ;
}
sum(10,20);

// 함수표현식
const sum2 = function sum(n1: number, n2:number):number {
    return n1 + n2;
}

const sum22 = (n1: number, n2:number):number => n1 + n2;

// 매개변수에 타입을 적어주던지 변수에 적어주던지 하나만 하면됨(물론 둘다 해도되는데 굳이)
const sum3: (n1:number, n2:number) => number= function sum(n1, n2) {
    return n1 + n2;
}
const sum33: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;


// 객체
// 함수 시그니처
// 함수 객체 > 일급 객체(자바스크립트 함수 일급객체)
const sum4: { (n1:number, n2:number):number } = (n1,n2) => n1+n2;
