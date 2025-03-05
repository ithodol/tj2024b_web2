// 1. let과 const를 사용해서 name(이름)과 age(나이)를 저장하고 값을 출력해 보세요.
let name_1 = '전은서'
let age_1 = '100'
console.log('======= 1번 let =======')
console.log(name_1);
console.log(age_1);
const name_1_1 = '유재석'
const age_1_1 = '50'
console.log('======= 1번 const =======')
console.log(name_1_1);
console.log(age_1_1);
 

// 2. 숫자 두 개를 받아서 곱한 값을 반환하는 화살표 함수를 작성하세요.
const fun1 = (age_1, age_1_1) => {
    let value = age_1 * age_1_1
    console.log(value);
}
console.log('======= 2번 =======')
console.log(fun1);



// 3. name과 age를 활용해서 "저는 [이름]이고, [나이]살입니다." 를 출력하세요.
const name_2 = "Alice";
const age_2 = 25;
console.log('======= 3번 =======')
console.log(`저는 ${name_2}이고, ${age_2}살입니다.`)


// 4. user 객체에서 name과 email 값을 추출해 변수를 만들고 출력하세요.
const user = { name: "Alice", email: "alice@example.com", age: 25 };
const name_3 = user.name
const email_3 = user.email
const age_3 = user.age
console.log('======= 4번 =======')
console.log(name_3);
console.log(email_3);
console.log(age_3);

// 5. arr1과 arr2를 합쳐 result 배열을 만드세요.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const result = [...arr1, ...arr2]
console.log('======= 5번 =======')
console.log(result);


// 6. greet 함수가 name 값을 받지 않으면 "Guest" 라고 출력하도록 만드세요.
const greet = (name10) => `Hello, ${name10}!`;
console.log('======= 6번 =======')





// 7. 객체를 만들 때 name, age 변수를 그대로 사용하세요.
const name2 = "Alice";
const age2 = 25;

const obj = {name2 : name2, age2 : age2}
console.log('======= 7번 =======')
console.log(obj);


// 8. 첫 번째 값을 first, 나머지를 rest에 저장하세요.
const numbers = [10, 20, 30, 40];

const first = numbers[0]
const rest = [numbers[1], numbers[2], numbers[3]] 
console.log('======= 8번 =======')
console.log(first);
console.log(rest);


// 9. isLoggedIn이 true면 "Welcome!", false면 "Please log in."을 출력하세요.
const isLoggedIn = true;

console.log('======= 9번 =======')
console.log(isLoggedIn == true ? 'Welcome!' : 'Please log in.')




// 10. 동기 fetch를 사용해서 JSONPlaceholder API에서 https://jsonplaceholder.typicode.com/posts/1 데이터를 가져오세요.
const fun2 = async () => {
    
    await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => { console.log(error);})

    // try{
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     const data = await response.json();
    // }catch(error){}

    
}
console.log('======= 10번 =======')
fun2();


// 11. 배열 ages에서 각 나이를 기준으로 "성인" 또는 "미성년자"를 판단하여 새로운 배열을 만들어 출력하세요.
const ages = [25, 12, 20, 8];

console.log('======= 11번 =======')
for(let index = 0; index <= ages.length-1; index++){
    console.log(ages[index])
    if(ages[index] >= 20 ){
        console.log('성인')
    }else{
        console.log('미성년자')
    }
}


