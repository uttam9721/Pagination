// let n=5;
// let fact =1;
// for(let i=1;i<=n;i++){
//     fact =fact*i;
// }
// console.log(fact);



// let n=12345;
// while(n>0){
//      n=n%10;
//      let sum=sum+n;
//      console.log(sum);
//      n=n/10;
// }


// let isPrime=true;
// let n=9;
// for(let i=2;i<=Math.floor(n/2);i++){
//     if(n%i===0){
//     isPrime=false;
//     break;
//     }
// }
// console.log(isPrime);



// let isPrime=true;
// // let n=7;
// let n=Number(Prompt('Enter a number'))
// for(let i=2;i<Math.floor(n/2);i++){
//     if(n%i==0){
//         isPrime=false;
//         break;
//     }
// }
// console.log(isPrime);


// let isPrime=true;
// let n=7;
// for(let i=2;i<Math.floor(n/2);i++){
//     if(n%i==0){
//         isPrime=false;
//         break;
//     }
// }
// console.log(isPrime);


// let n= 12345;
// let sum=0;
// while(n>0){
//     let rem=n%10;
//     sum=sum+rem;
//     n=Math.floor(n/10)
// }
// console.log(sum);


// for(let i=0;i<5;i++){
//     for(let j=i+1;j<i;j++){
//         // process.stdout.write("*");
//         console.log("*");
        
//     }
//     console.log();
    
// }



// let arr = [2,5,6,9,7,3,10,20];
// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//     if (arr[i]>max) {
//         max=arr[i];
//     }
// }
// console.log(max);



// let arr = [2,5,6,9,7,3,10,20];
// let min=arr[0];
// for(let i=0;i<arr.length;i++){
//     if (arr[i]<min) {
//         min=arr[i];
//     }
// }
// console.log(min);


// second max 
// let arr = [2,5,6,9,7,3,10,20];
// let max=-Infinity;
// let smax=-Infinity;
// for(let i=0;i<arr.length;i++){
//     if (arr[i]>max) {
//         smax=max;
//         max=arr[i];
        
//     }else if(arr[i]>smax && arr[i]<max)
//         smax=arr[i];
// }
// console.log(smax);


// let arr = [2,5,6,9,7,3,10,20];
// let i=0
// let j=arr.length-1;
// while(i<=j){
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i++
//     j--;
// }
// console.log(arr);


// let arr = [1,0,0,0,1,1,0,1];
// let i=0;
// let j=0;
// while(i<arr.length){
//     if (arr[i]==0) {
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         j++;
        
//     }
//     i++;
// }
// console.log(arr);



// let arr = [1, 2, 4, 5];

// let n = arr.length + 1;   // Because one number is missing
// let expectedSum = (n * (n + 1)) / 2;

// let actualSum = 0;
// for (let i = 0; i < arr.length; i++) {
//     actualSum += arr[i];
// }

// let missing = expectedSum - actualSum;
// console.log(missing); // Output: 3
// let n=arr.length+1;
// let total=(n*(n+1))/2;
// let sum =0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// let totalsum=total-sum;
// console.log(totalsum);


// let arr =[1,2,1,3,5,2];
// let uniq=[];
// for(let i=0;i<arr.length;i++){
//     if (!uniq.includes(arr[i])) {
//         uniq.push(arr[i]);
        
//     }
// }
// console.log(uniq);



// let arr = [1,2,4,5];
// let n=arr.length+1;
// let sum =0;
// let totalSum=(n*(n+1))/2;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// let res=totalSum-sum;
// console.log(res);


// let arr=[1,0,0,1,0,1,0,0];
// let i=0;
// let j=0;
// while(i<arr.length){ 
//     if (arr[i]==0) {
//         let temp= arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//             j++;
        
//     }
//     i++
// }
// console.log(arr);


// let arr=[1,2,3,4,5];
// let i=0;
// let j=arr.length-1;
// while(i<=j){
//    let temp=arr[i];
//    arr[i]=arr[j];
//    arr[j]=temp;
//    i++
//    j--

// }
// console.log(arr);


// console.log(0.1+0.1===0.2);
// console.log([]+[]);


// let arr =[1,2,3,4,5];
// for(let k=1;k<3;k++){
//     let copy=arr[arr.length-1];

//     for(let i=arr.length-1;i>0;i--){
//         arr[i]=arr[i-1];
//     }
//     arr[0]=copy;
// }
// console.log(arr);

// for(let k=1;k<3;k++){
//     let copy=arr[0];
//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i+1];
//     }
//     arr[arr.length-1]=copy
// }
// console.log(arr);



async function add(){
   await console.log('hii');
}
add()