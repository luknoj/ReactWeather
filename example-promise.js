/*
function getTempCallback (location, callback) {
    callback(undefined, 20);
    callback('City not found');
}

getTempCallback('Warsaw', function(err, temp){
    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp)
    }
})

function getTempPromise(location){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            resolve(79);
            reject('City not found');
        }, 1000);
    });
}

getTempPromise('Warsaw').then(function(temp){
    console.log('promise success', temp);
}, function(err){
    console.log('promise error', err);
})
*/
function addPromise (a, b) {
    return new Promise(function (resolve, reject){
        if (typeof a && typeof b === 'number') {
            resolve(a+b);    
        }
        else {
            reject('Not a number');
        };
        
    });
}

addPromise(7,445).then(function(sum){
    console.log('success', sum);
}, function(err){
    console.log('error', err);
})
