
const dbConnect = require('./mongo');
// dbConnect().then((resp) => {
// console.log(resp.find().toArray().then((data) =>{
// console.log(data);
// }));
// })

const main = async () => {
    let data = await dbConnect();

    data = await data.find({name:'Pencil'}).toArray();

    console.log(data);
}

main();
