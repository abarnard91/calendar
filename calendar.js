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
const dateBoxContainer=document.getElementById("date_boxes") //parent node to add date boxes to
const firstDayDate= new Date(`${(currentDate.getMonth()+1)}-${(currentDate.getDate())-(currentDate.getDate()-1)}-${currentDate.getFullYear()}`) //creates a new date object using previous date object to establish the first day of the month
const firstDay= firstDayDate.getDay(); //assigns first day of month to week day ie 11/1/23== Wednesday
let boxNumber=0 //creates box number variable
if (firstDay== 6){boxNumber=41}//decides if calendar will be a 5x7 grid or 6x7 based on if 1st of month is Saturday or not 
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
    	
    }
    if(i==3||i==5||i==8||i==10){//same idea as above but for months with 30 days
    	makeCalendar(30, boxNumber);
		}
		if(i==1){// same idea as above but for February
      if(currentDate.getFullYear()%4==0){//checking for leap years to add the 29th day
        makeCalendar(29, 34)        	
      }
      else {
        makeCalendar(28, 34)
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
];
let mexicanMeals=[
'Chicken Tacos',
'Beef Tacos',
'Turkey Tacos',
'Chicken Enchiladas',
'Chicken Quesadillas',

]
