console.log('-------------------------------------------')

function sortByKey(array, key){
     return array.sort((a,b) =>{
        if (a[key] < b[key]) {
            return -1;
        }
        if (a[key] > b[key]) {
            return 1;
        }
        return 0;
     })
}


const data = [
    {name: 'kiran' , age: 28 , mark: 63}, 
    {name: 'max'  , age: 30 , mark: 300},
    {name: 'anna' , age: 18 , mark: 500}
]

const sorIt = sortByKey(data, 'mark');
console.log(sorIt)