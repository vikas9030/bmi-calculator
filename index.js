let height = document.getElementById("height");
let weight = document.getElementById("weight");
let calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click",function() {
    let heightInCms = (height.value) * 0.01;
    let height_cms_final = heightInCms * heightInCms;
    let bmi = Math.round(weight.value/height_cms_final);
    let bmiSpan = document.getElementById("span");
    bmiSpan.textContent = bmi;
    document.getElementById("resultContainer").classList.add("display");
    let weight_result = document.getElementById("weight_result");
    if (bmi < 18.5) {
        weight_result.textContent = "Underweight";
        weight_result.classList.add("underWeight");
        weight_result.classList.remove("normal");
        weight_result.classList.remove("overWeight");
        weight_result.classList.remove("obese");
      } else if (bmi >= 18.5 && bmi < 25) {
      weight_result.textContent = "Normal"
      weight_result.classList.add("normal");
      weight_result.classList.remove("underWeight");
      weight_result.classList.remove("overWeight");
      weight_result.classList.remove("obese");
      } else if (bmi >= 25 && bmi < 30) {
        weight_result.textContent = "Over Weight"
        weight_result.classList.add("overWeight");
        weight_result.classList.remove("normal");
        weight_result.classList.remove("underWeight");
        weight_result.classList.remove("obese");
      }else {
        weight_result.textContent = "Obese"
        weight_result.classList.add("obese");
        weight_result.classList.remove("underWeight");
        weight_result.classList.remove("normal");
        weight_result.classList.remove("overWeight");
      }
      document.getElementById("resultContainer").classList.remove("display");
})
