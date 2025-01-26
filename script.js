
// const items = document.querySelectorAll("ul li");
// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     document.querySelector("li.active").classList.remove("active");
//     item.classList.add("active");
//   });
// });

// function Validate()
// {
//     var namee =  document.getElementById('name');
//     reg = /^[A-Z]{20}$/;
//     if(reg.test(namee))
//     {
//         alert("Correct Name")
//     }
//     else
//     {
//         alert("Invalid Name")
//     }
// }
// const myInput = document.getElementById("my-input");
// function stepper(btn)
// {
// 	let id = btn.getAttribute("id");
// 	let min  = myInput.getAttribute("min")
// 	let max = myInput.getAttribute("max");
// 	let step = myInput.getAttribute("step");
// 	let val = myInput.getAttribute("value");
// 	let calcstep = (id == "increment" ) ? (step*1) : (step * -1);
// 	let newValue = parseInt(val) + calcstep;

// 	if(newValue >= min && newValue <=max)
// 	{
// 		myInput.setAttribute("value", newValue)
// 	}
// } 
// function bgImage(bg) 
// {
//                     document.backgroundImage = bg;
// }
// function choice(n)
// {
//     if(n == 'two-day')
//     {

//         read2.readOnly;
//         read3.readOnly;
//     }
//     else if(n == 'three-day')
//     {
//         read1.readOnly;
//         read2.readOnly;
//     }
//     else{
//         read2.readOnly;
//         read3.readOnly;
//     }
// }