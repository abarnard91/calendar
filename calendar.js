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
  
const currentDate= new Date();
const dateBoxContainer=document.getElementById("date_boxes")

for (let i=0; i<=months.length; i++){
	console.log("in the i for loop"+i)
  console.log(currentDate.getMonth())
  //if(6==i){  //For Debugging testing
	if(currentDate.getMonth()==i){
  	document.getElementById("Month_year").textContent=`${months[i]} ${currentDate.getFullYear()}`;
  	console.log(months[i])
  	if(i==0||i==2||i==4||i==6||i==7||i==9||i==11){
    	for (let j=0; j<=34; j++){
      	console.log("in the j for loop")
    		let dateBox =document.createElement("div");
   	 		dateBox.className="Day";
        dateBoxContainer.appendChild(dateBox)
        if(j<31){
        	dateBox.textContent=j+1;
        }
    
    	}
    }
    if(i==3||i==5||i==8||i==10){
    	for (let j=0; j<=34; j++){
      	console.log("in the j for loop")
    		let dateBox =document.createElement("div");
   	 		dateBox.className="Day";
        dateBoxContainer.appendChild(dateBox)
        if(j<30){
        	dateBox.textContent=j+1;
        }
  }
}
		if(i==1){
    	for (let j=0; j<=34; j++){
      	console.log("in the j for loop")
    		let dateBox =document.createElement("div");
   	 		dateBox.className="Day";
        dateBoxContainer.appendChild(dateBox);
        //if(4%4==0){
        if(currentDate.getFullYear()%4==0){
        	if(j<29){
        	dateBox.textContent=j+1;
        	}
        }
        else {
          if(j<28){
        		dateBox.textContent=j+1;
        		}
        }
      }
      
    }
  } 
}
