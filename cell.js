
//my first string
  var cost1 =     '“It was 67MB. Is that everything? I’m busy, you know.”'.match(/\d+/g);
  console.log(cost1);


//second string
 var cost2 =  '“Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.”'.match(/\d+/g);
 console.log(cost2);

//third array
   var cost3 =  '“I think 283MB. That’s what the guy at the store said. I think it means MegaBites.”'.match(/\d+/g);
   console.log(cost3);


//fourth array
 var cost4 =  '“Around 150MB. I have the receipts if you need more precise figures.”'.match(/\d+/g);
 console.log(cost4);

//empty array to push all my costs
var num = [];
//pushing them
num.push(cost1, cost2, cost3, cost4);
console.log(num);
