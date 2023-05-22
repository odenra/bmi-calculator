function calc() {
  let bmi;
  let result = document.getElementById("result");
  let category = document.getElementById("category");

  let weight = parseInt(document.getElementById("weight").value);
  document.getElementById("weVal").textContent = weight + "Kg";

  let height = parseInt(document.getElementById("height").value);
  document.getElementById("heVal").textContent = height + "Cm";

  bmi = (weight / Math.pow((height / 100), 2)).toFixed();
  result.textContent = bmi;

  if (bmi <= 18.5){
    category.innerText = "underweight";
    result.style.color = "#ffc44d"
  }else if (bmi >= 18.5 && bmi <= 24.0){
    category.innerText = "normal"
    result.style.color = "#0be881"
  }else if (bmi >= 25 && bmi <= 29.9){
    category.innerText = "overweight";
    result.style.color = "#ff884d"
  }else if (bmi >= 30.0){
    category.innerText = "obese";
    result.style.color = "red";
  }
} 
