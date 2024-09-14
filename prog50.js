// w. a. p to check 2 is present or not using 
// serching algo. using binary search

//algorithm

//1) sort the given array 
//2) find the mid = low + high / 2
//3) compare the mid value with search item
    //1) mid value == searchItem 
       // - present 
    //2) mid value less than search item
      //low = mid+1
    //3) mid value greater than search item
       // up = mid -1
    //4) repeat step 3 until low index meets the up index


    low =0
    up=a.length-1 
    searchItem=2
    isPresent=false

    a.sort((a,b)=>a-b)
    while(low<=up){
    mid= Math.floor((low+up)/2);

      if(a[mid]==searchItem){
        isPresent=true
        break
      }

      else if (a[mid]<searchItem){
        low= mid+1;
      }

      else{
        up=mid-1
      }
    }

    //w.a.p to print common numbers between two arrays
    p=[10,11,12,20,30]
    q=[11,20,25,30,33]

    a=0
    b=0
    isPresent = false
    while(a<p.length && b<q.length){
        if(p[a]==q[b]){
            console.log(p[a])
            isPresent=true
            a++
            b++
        }else if(p[a]<q[b]){
            a++
        }
        else{
            b++
        }
    }

    isPresent && console.log('no common number');


