//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]
]
//1. district having Highest +ve case 

disHigh = covid_data.reduce((dis1,dis2)=>dis2[2]>dis1[2]?dis1:dis2)
console.log(disHigh)

//2. district having Highest 1st dose vaccine
firstDose = covid_data.reduce((dis1,dis2)=>dis2[6]>dis1[6]?dis1:dis2)
console.log(firstDose)

//3. district having lowest death rate
lowDeath = covid_data.reduce((dis1,dis2)=>dis2[3]>dis1[3]?dis1:dis2)
console.log(lowDeath)

//4. arrange data with +ve case in descending order

posDec = covid_data.sort((po1,po2)=>po2[2]-po1[2])
console.log(posDec)

//5. is district with +ve cases > 15000

b= covid_data.some((cocase)=>cocase[2]<=15000)
console.log(b?'yes':'no')

//6. arrange data with 1st dose vaccine ascending order

vacAsc = covid_data.sort((do1,do2)=>do1[5]-do2[5])
console.log(vacAsc)

//7. Print Thrissur details

thrissur = covid_data.find((dis)=>dis[1]=='Thrissur')
console.log(thrissur)

//8. Print total number of positive cases

pcases = covid_data.map((item)=>item[2].reduce((pc1,pc2)=>pc1+pc2))
console.log(pcases)

//9. Print total number of curred cases

curCases = covid_data.map((item)=>item[4].reduce((cc1, cc2)=>cc1+cc2))
console.log(curCases)

//10. Print curred cases in Idukki

idduki = covid_data.find((item)=>item[1]=='Idukki')
console.log(idduki[4])