const num1: number = 10;
console.log(num1);

// 타입스크립트
// 타입스크립트는 자바스크립트의 확장 언어
// 타입스크립트는 자바스크립트 베이스 > 자바스크립트에서 다루는 값에 타입을 부여하는 것

// 자바스크립트에서 다룰 수 있는 자료형
// 1. 기본자료형
let str = "A"; // 문자형
let num = 10;// 숫자형
let bol = true; // 논리형
let und = undefined;
let nul = null;
let sym = Symbol(); // 심볼형


// 2. 참조자료형
let arr = [];// 배열
let obj = {};// 객체
let fn = function() {}; // 함수

// 타입스크립트
// 1. 기본자료형
let str1: string = "A"; // 문자형
let str2: String = "A"; // String 인스턴스 타입 , 타입스크립트에서 기본은 소문자로 쓴다

let num2: number = 10;// 숫자형
let num3: Number = 10;// 숫자형

let bol1: boolean = true; // 논리형
let bol2: Boolean = true; // 논리형

let und1: undefined = undefined;
let nul1: null = null;
let sym1: symbol = Symbol(); // 심볼형

// 2. 참조자료형
// 2-1. 배열
// 배열안에 어떤 요소인지에 따라 타입을 설정하는게 달라진다
let arr1: [] = [];// 배열
//let arr2: [] = [10,20]; // 에러
let arr2: number[] = [10,20]; // 숫자타입의 배열
let arr3: Array<number> = [10,20]; // 위에꺼랑 같은건데 old한 방법
let arr4: string[] = ["A","B"]; // 문자타입 배열
// 튜플(타입 섞여있을 때)
let arr5: [number, string] = [10,"A"]; // 이건 old방법으로는 불가


// 2-2 객체
let obj1: {} = {};
let obj2 : {name: string; age: number; gender:string } = {name: "John", age: 20, gender:"male"};

// 2-3 함수
let fn1: () => void = function() {}; // 함수

// -----------------------------------------------------------------------

// 문제
let name1: string;        // 문자열 타입
let age: number;         // 숫자 타입
let isStudent: boolean;   // 불리언 타입
let hobbies: string[];     // 문자열 배열 타입
let user:{name: string; age: number};        // 객체 타입 (name과 age를 포함)

// 문제
const arr6: number[] = [1, 2, 3];
const arr7: [number, number[], number] = [1, [2, 3], 4];
const arr8: [ [number[],number[],string[]], [number[],number[],string[]] ] = [
  [
    [1, 2],
    [3, 4],
    ["a", "b"],
  ],
  [
    [5, 6],
    [7, 8],
    ["c", "d"],
  ],
];

const arr9: [ [number[],number[],string[]][] ] = [
    [
      [1, 2],
      [3, 4],
      ["a", "b"],
    ],
    [
      [5, 6],
      [7, 8],
      ["c", "d"],
    ],
  ];