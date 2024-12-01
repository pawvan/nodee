// async function fetchData(){
//     try{
// const data = await fetch("https://jsonplaceholder.typicode.com/comments");
// const json = data.json();
// return json
// ;    }
//     catch(err){
//         console.log(err.message)
//     }
// }
// fetch()
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

const http =  require('http')
const server = http.createServer((res,res)=>{
    res.writeHead({'Content-Type':'text/plain'});
    res.end("lol")
})
server.listen(3000,()=>{
    console.log("running")
})