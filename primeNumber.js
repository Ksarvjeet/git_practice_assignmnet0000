let n=27;
let count=0;
for(let i=2;i<n;i++)
{
   if(n%i==0)
   {count++;}
}
(count>0)? console.log("No") : console.log("Yes");