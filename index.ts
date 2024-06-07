//ARRAYS METHODS
let color:string[] = ["Red", "Yellow", "Blue", "Green"]
color.push("Orange");//add in the list
color.pop();   //remove last element from list
color.shift();   //remove first element
color.unshift("white");//Add in the list in the start 
//ARRAY is a collection of same data type variables
let favfruits:string[]= ["orange", "mango", "pear", "banana", "papaya"];
//console.log(favfruits);
  //console.log(favfruits.length);
  //console.log(favfruits[2]);

  //Multi Dimentional array
  let sets :number[][] = [
    [1,2,3],
    [4,5,3],
    [2,7,8]
  ]
  //console.log(sets);
  //console.log(sets[2]);
  //ARRAY ke ander Objects
  type Person ={
    name:string;
    class:number;
    id  : number;
  }
  let students:Person[]=[
    {name:"Ali", class:2, id:1234},
    {name:"sana",class:5, id: 2347},
  ]
  console.log(students);
  
  

  
