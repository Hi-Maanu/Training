function makeRequest(location){
    return new Promise((resolve ,reject) => {
        console.log(`Make request to ${location}`); 
        if(location === 'Google'){
            resolve('google says hi');
        } else {
            reject('we can only talk to google');
        }
    })
}


function processRequest(response){
    return new Promise((resolve , reject) => {
        console.log("Processing response");
        resolve('Extra Information' + response); 
    })
}

makeRequest('Google').then(response => {
    console.log('Response Received')
    return processRequest(responese)
})

