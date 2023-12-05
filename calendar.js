const dayButton = document.getElementById("oneDayMeal");
const weekButton = document.getElementById("oneWeekMeals");
const monthButton = document.getElementById("oneMonthMeals");
const confirmButton = document.getElementById("confirmButton");
const clearButton = document.getElementById("clearButton");
const currentMealDayDiv = document.getElementById("currentMealDay");

//arrays for days and months
const days=[
	"Sunday",
  "Monday", 	
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"
  ];
  
const months=[
	"January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
  ];
  
const currentDate= new Date();//calling new date object 
//const currentDate= new Date('11/3/2025') //for debugging months
const dateBoxContainer=document.getElementById("date_boxes") //parent node to add date boxes to
const firstDayDate= new Date(`${(currentDate.getMonth()+1)}-${(currentDate.getDate())-(currentDate.getDate()-1)}-${currentDate.getFullYear()}`) //creates a new date object using previous date object to establish the first day of the month
const firstDay= firstDayDate.getDay(); //assigns first day of month to week day ie 11/1/23== Wednesday
let boxNumber=0 //creates box number variable
if (firstDay == 6 || firstDay == 5){boxNumber=41}//decides if calendar will be a 5x7 grid or 6x7 based on if 1st of month is Saturday or not 
else{boxNumber=34}//if not saturday number of date boxes will be 35 or a 5x7 grid
for (let i=0; i<=months.length; i++){//for loop to match i to current month 
	//console.log("in the i for loop"+i) //for debugging
  //console.log(currentDate.getMonth()) //for debugging
  //if(6==i){  //For Debugging testing
	if(currentDate.getMonth()==i){
  	document.getElementById("Month_year").textContent=`${months[i]} ${currentDate.getFullYear()}`;//adds current month and year to the top of the calendar
  	console.log(months[i])
  	if(i==0||i==2||i==4||i==6||i==7||i==9||i==11){//checks if current month is a 31 day month
    	makeCalendar(31, boxNumber);
      buttonClicks((32-currentDate.getDate()));
    }
    if(i==3||i==5||i==8||i==10){//same idea as above but for months with 30 days
    	makeCalendar(30, boxNumber);
      buttonClicks((31-currentDate.getDate()));
		}
		if(i==1){// same idea as above but for February
      if(currentDate.getFullYear()%4==0){//checking for leap years to add the 29th day
        makeCalendar(29, 34);
        buttonClicks((30-currentDate.getDate()));
      }
      else {
        makeCalendar(28, 34);
        buttonClicks((29-currentDate.getDate()));
      } 
    }
  } 
}
function makeCalendar(numberOfDays, numberOfBoxes){
	for (let j=0; j<=numberOfBoxes; j++){//for loop to start creating date boxes 
    let dateBox =document.createElement("div");
    dateBox.className="Day";
    dateBoxContainer.appendChild(dateBox)
    if(j<(numberOfDays+firstDay) && j>=firstDay){//checks if value of j + the numerical value of the day of the week ie 0=Sun 3=Wed etc and starts adding the value of j to the box 
      dateBox.textContent=(j-firstDay)+1;//increments j while subtracting the previously added value of the first day so the first number to be added to a box is always 1
      dateBox.id=`${(j-firstDay)+1}` //assigns id == to textContent to node
    }
    if (dateBox.id == currentDate.getDate()){//checks if current date number == to the assigned ID and adds 'current' class to it so it has extra css to stand out
      dateBox.className="current"; 
    }
    dateBox.onclick=()=>{
    if(dateBox.childNodes.length>1){}//if there is a textarea element in the datebox the click does nothing
    else{
      let mealBox= document.createElement("TEXTAREA");//creates a div to put the random meal into the calendar box
      mealBox.rows="4";
      mealBox.cols="25";
      mealBox.id=`meal${j}`;
      dateBox.appendChild(mealBox);
      mealBox.focus();//puts the curser in the text box
      }
    }
  }
}

//meals
let crockPotMeals=[
	'BBQ ribs',
  'Pulled Pork',
  'Pulled Chicken',
  'Salsa Chicken',
  'Meatball Subs',
  'Tortellini Soup',
  'Chicken Dumpling Soup',
  'Chili Mac',
  'Cheese Ale soup',
  
];
let mexicanMeals=[
'Chicken Tacos',
'Beef Tacos',
'Turkey Tacos',
'Chicken Enchiladas',
'Chicken Quesadillas',

];

let italianMeals=[
"Tortellini",
"Baked Mastaccioli",
"Raviolis",
"Chicken Parmesean",

];
let chineseMeals=[
"Japanese Fried Rice",
"Orange Chicken",
"Potstickers and fried rice",

];

let grillMeals=[
"Burgers",
"Brats",
"Porkchops",
"BBQ Chicken",
"Steak",

];
let eatOutMeals=[ 
'Order Out'
];

var dateValue= currentDate.getDate();

currentMealDayDiv.textContent=`The Date to confirm a meal is ${dateValue}`;


function randomMeal(mealsOne,mealsTwo,MealsThree, MealsFour,MealsFive, MealsSix,numOfDays) {
 let combinedMeals=mealsOne.concat(mealsTwo, MealsThree, MealsFour, MealsFive, MealsSix); //combines the meal arrays into 1
  for (let k=0; k<numOfDays; k++){ //uses a for loop to add a meal to each day after the current day based on what's entered in num of days value
  	
  	let randomNum=Math.floor(Math.random()*combinedMeals.length);//creates a random number in the length of the combined meal array
  	let meal= combinedMeals[randomNum];//meal is picked from the array by the random number
    combinedMeals.splice(randomNum, 1)
    
  	var currentDay = document.getElementById(`${dateValue+k}`);//current date id node is attached to current day
    if (currentDay.childNodes.length>1){
        currentDay.childNodes[1].remove();
    	}
    
    let mealBox= document.createElement("div");//creates a div to put the random meal into the calendar box
    mealBox.className="meal";// class added for css stylings
    mealBox.textContent= meal;//adds meal to the div
    currentDay.appendChild(mealBox);// adds div into the box
  }
  
}

function clearMeals(numOfDays){for (let k=0;k<(numOfDays);k++){// does the first part of the function above removing the mealbox div from the current day and every day after based on numOfDays value
  	let currentDay = document.getElementById(`${currentDate.getDate()+k}`);
    //console.log(`k is ${k} currentDay value is ${currentDay} and child node length is ${currentDay.childNodes.length}`) //for debugging
    if (currentDay.childNodes.length>1){
        currentDay.childNodes[1].remove();
      }
  	}
    dateValue=currentDate.getDate();
    currentMealDayDiv.textContent=`The Date to confirm a meal is ${dateValue}`;
    return dateValue;
   }
   
function confirmMeals(){
	if (document.getElementById(`${dateValue}`).childNodes.length>1){
  	if(confirm("Sounds good?")){
    	alert("Okie Dokie Moving on")
      dateValue++;
			currentMealDayDiv.textContent=`The Date to confirm a meal is ${dateValue}`;      
      console.log(dateValue)
      return dateValue	
      }
    else{randomMeal(crockPotMeals, mexicanMeals,italianMeals, chineseMeals, grillMeals, eatOutMeals, 1);
    
    }
  }
  else {alert("You've got nothing to confirm ya Kanigit!")
  }//used to remove a meal if already added to the calendar	 
}

function buttonClicks(leftInMonth){//function to contain button functions for predetermined numbers, or left in month which is the days in the month - the current date value which equates to numOfDays in the clearMeals and randomMeals functions
  dayButton.onclick= ()=>{randomMeal(crockPotMeals, mexicanMeals,italianMeals, chineseMeals, grillMeals, eatOutMeals, 1); }
  weekButton.onclick = () => {randomMeal(crockPotMeals, mexicanMeals,italianMeals, chineseMeals, grillMeals, eatOutMeals, 7); }
  monthButton.onclick = ()=>{randomMeal(crockPotMeals, mexicanMeals,italianMeals, chineseMeals, grillMeals, eatOutMeals, leftInMonth);}
  clearButton.onclick = ()=>{clearMeals(leftInMonth)}
  confirmButton.onclick = ()=>{confirmMeals()}
 }
 
//   var clickBox=document.getElementsByClassName("Day");
//   for (let x=0; 0<=clickBox.length;x++){
//   clickBox[4].onclick =()=>{
//     alert("POOOOOOP")
//  		let mealBox= document.createElement("TEXTAREA");//creates a div to put the random meal into the calendar box
//     mealBox.rows="4";
//     mealBox.cols="10";
//     mealBox.className="meal";// class added for css stylings
//     //mealBox.textContent= meal;//adds meal to the div
//     clickBox[4].appendChild(mealBox);// adds div into the box 
//     }

//  }
