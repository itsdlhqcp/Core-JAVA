var car = {
    name:"Baleno",
    model:"Hatch Back",
    manufacturer:"Maruti",
    price:"10 lakhs"
}

//w.a.p to display the car name and  manufacturer name 
console.log(`car name is ${car.name} and manufacturer name is ${car.manufacturer}`);
console.log('--------------------------------------')
// w.a.p to check model key is available in car , if yes display the value 
car["varient"]=["manuel"]
console.log(car);
console.log('--------------------------------------')
// add "variant" key to the car object with the value manual 
car["varient"].push("automatic")
console.log(car);
console.log('--------------------------------------')
// insert another value as "automatic" to variant key 
car["varient"].push("automatic")
console.log(car)
console.log('--------------------------------------')
//add "color" key to the object with value as 'red","white","blue"
car["color"]=["red","white","blue"]
console.log(car);
console.log('--------------------------------------')

//w.a.p to display the word count of given text 
// o/p = {hai:1 , hello:2 , all:1 , world:1}

text = "hai hello how are you doing"

words = text.split(' ')
console.log(words)

obj = {}

for(word of words){
    if(word in obj){
       obj[word]+=1
    }else{
        obj[word] = 1
    }
}
console.log(obj);

//hw
// 1) create student object and implemeent object operation
// 2) numArray = {10,20,30,40,50,60,70,80,90} - w.a.p to print the number count from the given array 
// 3) pattern ="ABBAABAB" W.A.P to print recursive letter o/p:- 0 , 1, 2 ,3 

weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
wc={}

for(data of weatherData){
    dis = data.district
    currtemp = data.weather
    if(dis in wc){
        oldtemp = wc[dis]
        if(oldtemp>currtemp){
            wc[dis]=oldtemp
        }else{
            wc[dis]=currtemp
        }
    }
    else{
        wc[dis]=currtemp
    }
}
console.log(wc)
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}