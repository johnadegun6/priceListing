const switchToggle = document.getElementById('switchToggle');
const nuts = document.getElementById('nuts')
const button = document.getElementById('button');
const priceOne = document.getElementById('price-one');
const priceTwo = document.getElementById('price-two');
const annualPriceThree = document.getElementById('annual-price-three');
const tog = document.getElementById('toggle');


flag = true

switchToggle.addEventListener('click', ()=>{
  toggle()
  nuts.classList.toggle("toggle")
})

const toggle = ()=>{
//   btn.className = flag ? "w-10 h-5 bg-blue-900 rounded-3xl relative" : "w-10 h-5 bg-blue-900 rounded-3xl relative"
//   tog.className = flag ? "bg-white w-5 h-5 rounded-full absolute top-0" : "bg-white w-5 h-5 rounded-full absolute top-0 right-0"
//   learnOne.className = flag ? "bg-blue-900 text-white  text-xs font-semibold text-center border px-12 py-2 rounded-lg" : "text-xs font-semibold text-center border border-blue-900 px-12 py-2 rounded-lg"

//   learnTwo.className = flag? "bg-white text-blue-900 text-xs font-semibold text-center border px-12 py-2 rounded-lg" : "text-white text-xs font-semibold text-center border border-white px-12 py-2 rounded-lg"

//   learnThree.className = flag ? "bg-blue-900 text-white  text-xs font-semibold text-center border px-12 py-2 rounded-lg" : "text-xs font-semibold text-center border border-blue-900 px-12 py-2 rounded-lg"

  priceOne.innerHTML = flag ? "199.99" : "19.99"
  priceTwo.innerHTML = flag ? "249.99" : "24.99"
  annualPriceThree.innerHTML = flag ? "399.99" : "39.99"


  flag = !flag
}






// const switchToggle = document.getElementById('switchToggle')
// const nuts = document.getElementById('nuts')
// const monthly = document.getElementsByClassName('#month')
// const annually = document.getElementsByClassName('#annual')

// const price = document.getElementsByName("price")


// switchToggle.addEventListener('click', ()=>{
//     nuts.classList.toggle("toggle")
    // annually.classList.toggle("show-price")
    // monthly.classList.toggle("hide-price")
    // price.classList.toggle("show-price")
// })