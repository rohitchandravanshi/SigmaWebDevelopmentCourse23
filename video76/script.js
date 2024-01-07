// async function getData(){
//     //Simulation getting data from a server
//     return new Promise((resolve, reject)=>{
//         setTimeout(() =>{
//             resolve(455)
//         }, 3000);
//     })
// }

// return new Promise((resolve, reject)=>{
//     setTimeout(() =>{
//         resolve(455)
//     }, 3000);
// })

async function getData(){
    //Simulation getting data from a server
   
    let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(x)
    return 455

}

async function main(){
    console.log("Loading modules")

    console.log("Do something else")
    
    console.log("Load data")
    
    let data = await getData()
    
    console.log(data)
    
    console.log("process data")
    
    console.log("task 2")
}

main()

// data.then((v)=> {
//     console.log(data)

// console.log("process data")

// console.log("task 2")
// })

