function bmiCalculator(weight,height){
    var bmi = weight / Math.pow(height , 2);
    var result = "";
    if(bmi < 18.5){
        result = "your BMI is : " + bmi + " so you are underweight"
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        result = "your BMI is : " + bmi + " so you have normal weight"
    }
    else{
        result = "your BMI is : " + bmi + " so you are owerheight"
    }
    return result;    
}
console.log(bmiCalculator(75 , 1.84));