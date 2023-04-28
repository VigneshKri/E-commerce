//access the wrapper for slider effect
const wrapper=document.querySelector(".sliderWrapper")
const menuitems=document.querySelectorAll(".menuItem")

//product array to show colors and others on change
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 250,
      colors: [
        {
          code: "black",
          img: "./image/air.png",
        },
        {
          code: "darkblue",
          img: "./image/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 285,
      colors: [
        {
          code: "lightgray",
          img: "./image/jordan.png",
        },
        {
          code: "green",
          img: "./image/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 199,
      colors: [
        {
          code: "lightgray",
          img: "./image/blazer.png",
        },
        {
          code: "green",
          img: "./image/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 345,
      colors: [
        {
          code: "black",
          img: "./image/crater.png",
        },
        {
          code: "lightgray",
          img: "./image/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 299,
      colors: [
        {
          code: "gray",
          img: "./image/hippie.png",
        },
        {
          code: "black",
          img: "./image/hippie2.png",
        },
      ],
    },
  ];

  let choosenproduct=products[0]
  const currentproductimg=document.querySelector(".productImg")
  const currentproducttitle=document.querySelector(".producttitle")
  const currentproductprice=document.querySelector(".productprice")
  const currentproductcolors=document.querySelectorAll(".color")
  const currentproductsizes=document.querySelectorAll(".size")

menuitems.forEach((item,index) => {
    item.addEventListener('click',() =>
    {
        // use `` this symbol not single quote
        //animations
        wrapper.style.transform = `translateX(${ -100 * (index)}vw)`;

        //change the chosen product
        choosenproduct=products[index]

        //change texts of current product
        currentproducttitle.textContent=choosenproduct.title
        currentproductprice.textContent="$" +choosenproduct.price
        currentproductimg.src=choosenproduct.colors[0].img

        //styles for each color
        //js will get the color from array called position
        currentproductcolors.forEach((color,index)=>
        {
            color.style.backgroundColor=choosenproduct.colors[index].code
        });

    });

});

//changing color upon clicking the image in the desc box
currentproductcolors.forEach((color,index)=>
{
    color.addEventListener("click",()=>
    {
        currentproductimg.src=choosenproduct.colors[index].img
    });
});

//sizes change
currentproductsizes.forEach((size,index)=>
{
    size.addEventListener("click",()=>
    {
        currentproductsizes.forEach(size=>{
            size.style.backgroundColor="white"
            size.style.color="black" 
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
})

const productButton =document.querySelector(".productButton")
const payment =document.querySelector(".payment")
const close=document.querySelector(".close")

productButton.addEventListener("click",() =>{
  payment.style.display="flex";
})

close.addEventListener("click",() =>{
  payment.style.display="none";
})