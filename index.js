const fs = require('fs');
const path = require('path');

// // Specify the path to the file
// const folderPath = path.join(__dirname);
// console.log(folderPath);
// const filepath = path.join(__filename,'file.txt');
// console.log(filepath);
// console.log('-----------------------');


// // Read the file
// // fs.readFile(filePath, 'utf8', (err, data) => {
// //     if (err) {
// //         console.error('Error reading the file:', err);
// //         return;
// //     }
// //     console.log(data);
// // });

// const data = fs.readFileSync('file.txt');
// console.log(""+data);

// // fs.writeFile('file.txt',"India won the world cup",'utf-8',(err)=>{
// //     console.log('filechanged');
// // });

// const tex="class is goin on";
// // fs.appendFile('file.txt',tex,'utf-8',(err)=>{
// //     console.log('fileappended');
// // })

// // const data2 = fs.readFilesync('file.txt');
// // console.log(""+data2);

// // fs.mkdir('dirls',(err)=>{
// //     if(err){
// //         console.log('error occured');
// //     }
// //     console.log('dir formed');
// // })

// // fs.rename('dirl','direcl',(err)=>{
// //     if(err){
// //         console.error(`Error occured: ${err}`);
// //     }else{
// //     console.log('dir formed');
// //     }
// // })

// const dirname=path.dirname(filepath);
// const extension=path.extname(filepath);

// console.log(dirname);
// console.log(extension);


// const fs = require('fs');
// const path = require('path');

// // Specify the path to the file
// const folderPath = path.join(__dirname,'direcl');
// console.log(folderPath);
// const filepath = path.join(__dirname,'file.txt');
// console.log(filepath);
// console.log('-----------------------');

// fs.copyFile(filepath,path.join(folderPath,'file.txt'),(err)=>{
//     if(err){
//         console.error('error occred' , err);
//     } else{
//     console.log('file copied');
//     }
// });

const filepath=path.join(__dirname,'index.html');
const http = require('http');


const server=http.createServer((req,res) =>{
    const data = fs.readFileSync('index.html','utf-8',(err)=>{
        if(err){
            console.error('error occured')
        }
    })
    res.setHeader('Content-Type','text/html');

    res.write(data);


    // if(req.url==='/login') {
    //     res.write('<html><head><title>node js class </title></head><body>');
    //     res.write('<h1>hello Login!</h1>');
    //     res.write('</body></html>');
        
    // }else{
    //     res.write('<html><head><title>node js class </title></head><body>');
    //     res.write('<h1>hello world!</h1>');
    //     res.write('</body></html>');
        
        
    // }
    res.end();
})

const port = 3000;
const host = 'localhost';

server.listen(port,host,() => {
    console.log(`server is listening on http://${host}:${port}`);
});


