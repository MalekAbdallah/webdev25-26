/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/

/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/
function BMI(){
       let H = parseFloat(document.getElementById("H").value);
       let W = parseFloat(document.getElementById("W").value);
       let output = document.getElementById("output");
       let bmi = (W/(H*H))*703;
       message=""
       picture=""
       if(bmi >= 30){
              message="Obesity";
              picture="obeseweight.png";
       }else if(bmi >= 25){
              message="Overweight";
              picture="overweight.png";
       }else if(bmi >= 18.5 ){
              message="Healthy Weight";
              picture="healthyweight.png";
       }else{
              message="Underweight"
              picture="underweight.png";
       }
       output.innerHTML=`BMI is ${bmi} and your status is: ${message}<img src="${picture}">`;
}
