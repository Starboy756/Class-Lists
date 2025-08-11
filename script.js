//ClassLists = Used to Reuse CSS in JS by using 

// add()
//remove()
//toggle() (remove if present add if not)
//replace (oldClass,newClass)
//contains()

//const myButton = document.getElementById("myBtn");

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// })
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// })
// myButton.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");
// })
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover");
// })

// const myH1 = document.getElementById("myH1");

// myH1.classList.add("enabled");

// myH1.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += " 🛵";
//     } else {
//         event.target.classList.replace("enabled","disabled");
//     }
// })

// myButton.classList.add("enabled");
// myButton.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += " 🛵";
//     } else {
//         event.target.classList.replace("enabled","disabled");
//     }
// })

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
})

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover")
    })
})