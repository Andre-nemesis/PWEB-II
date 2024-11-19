let num = prompt("Informe três números dividos por ':'")
let nums = num.split(":");
nums = nums.map(nums => parseInt(nums))
alert("O maior valor foi: " + Math.max(...nums))