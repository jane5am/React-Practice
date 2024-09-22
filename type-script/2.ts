
// 객체 타입 살펴보기
// 리터럴 타입
let user2: {
    name: string;
    age: number;
    gender: string;
} = {
    name: "John",
    age: 20,
    gender: "male",
};
user.name = "Sucoding";

// 읽기 전용 속성 (readonly)
let user3: {
    readonly name: string;
    age: number;
    gender: string;
} = {
    name: "John",
    age: 20,
    gender: "male",
};
user.name = "Sucoding";

// 옵셔널 속성 (?), 데이터가 있어도되고 없어도되고
let user4: {
    name: string;
    age: number;
    gender?: string;
} = {
    name: "John",
    age: 20,
};
user.name = "Sucoding";

// 인덱스 시그니처 
// { [key:keyType]:valueType }
// 해당 키와 벨류 타입이 일치하면 어떤속성이든 추가할 수 있다
let user5: {
    name: string;
    age: number;
    gender: string;
} = {
    name: "John",
    age: 20,
    gender: "male",
};
let person: { [key:string]: string };
person = {
    name: "John",
    gender: "male",
    address: "Seoul",
};

// 함수 시그니처 > 함수 타입 지정하는 방법

