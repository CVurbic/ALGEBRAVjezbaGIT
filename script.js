const sat = document.getElementsByClassName("datum")
console.log(sat)

const satCount= sat.length;

var currentdate = new Date(); 
var datetime =  currentdate.getHours() + ":"  
+ currentdate.getMinutes() + " " 
+ currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear()   
                


    
for(i=0; i<satCount ; i++){
sat[i].innerHTML = datetime;
console.log(datetime)
}
