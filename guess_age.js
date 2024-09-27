/*let url="https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let word=document.querySelector("input").value;
console.log(word);
let meaning=await searchWord(word);
show(meaning);
})

function show(meaning)
{
    let p=document.querySelector("p");
    p.innerText=meaning;
}

async function searchWord(word){
    try{
        let res=await axios.get(url+word);
        return res;
    }
    catch(e){
console.log("error=",e);
    }
}*/

let url="https://api.agify.io?name=";

let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let input=document.querySelector("#in").value;
    console.log(input);

    let finalAge=await getAge(input);
    let p=document.querySelector("#output");
    p.innerText="BRAVO!! your age is "+finalAge;
})

async function getAge(input){
try{
    let result=await axios.get(url+input);
    console.log("age is:",result.data.age);
    return result.data.age;
}
catch(err){
    console.log("ERROR =",err);
}
}