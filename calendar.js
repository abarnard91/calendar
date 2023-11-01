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
	console.log("in the i for loop"+i)
  console.log(currentDate.getMonth())
  //if(6==i){  //For Debugging testing
	if(currentDate.getMonth()==i){
  	document.getElementById("Month_year").textContent=`${months[i]} ${currentDate.getFullYear()}`;//adds current month and year to the top of the calendar
  	console.log(months[i])
  	if(i==0||i==2||i==4||i==6||i==7||i==9||i==11){//checks if current month is a 31 day month
    	for (let j=0; j<=boxNumber; j++){//for loop to start creating date boxes 
      	console.log("in the j for loop")
    		let dateBox =document.createElement("div");
   	 		dateBox.className="Day";
        dateBoxContainer.appendChild(dateBox)
        if((j<31+firstDay) && j>=firstDay){//checks if value of j + the numerical value of the day of the week ie 0=Sun 3=Wed etc and starts adding the value of j to the box 
        	dateBox.textContent=(j-firstDay)+1;//increments j while subtracting the previously added value of the first day so the first number to be added to a box is always 1
        }
    
    	}
    }
    if(i==3||i==5||i==8||i==10){//same idea as above but for months with 30 days
    	for (let j=0; j<=boxNumber; j++){
      	console.log("in the j for loop")
    		let dateBox =document.createElement("div");
   	 		dateBox.className="Day";
        dateBoxContainer.appendChild(dateBox)
        if(j<(30+firstDay) && j>=firstDay){
        	dateBox.textContent=(j-firstDay)+1;
        }
  }
}
		if(i==1){// same idea as above but for February 
    	for (let j=0; j<=34; j++){
      	console.log("in the j for loop")
    		let dateBox =document.createElement("div");
   	 		dateBox.className="Day";
        dateBoxContainer.appendChild(dateBox);
        //if(4%4==0){
        if(currentDate.getFullYear()%4==0){//checking for leap years to add the 29th day
        	if((j<29+firstDay) && j>=firstDay){
        	dateBox.textContent=(j-firstDay)+1;
        	}
        }
        else {
          if((j<28+firstDay) && j>=firstDay){
        		dateBox.textContent=(j-firstDay)+1;
        	}
        }
      }
      
    }
  } 
}
