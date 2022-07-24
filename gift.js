var mensData = [
    {
      image_url:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
      name: "E-Gift Voucher ",
      price: "500",
      strikedoffprice: "999",
    },
    {
      image_url:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
      name: "E-Gift Voucher ",
      price: 1000,
      strikedoffprice: 1499,
    },
    {
      image_url:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
      name: " E-Gift Voucher ",
      price: 1500,
      strikedoffprice: 1999,
    },
    {
      image_url:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
      name: "E-Gift Voucher ",
      price: 2000,
      strikedoffprice: 2599,
    },
    {
      image_url:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
      name: "E-Gift Voucher  ",
      price: 3000,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg ",
      name: " E-Gift Voucher  ",
      price: 4000,
      strikedoffprice: 4999,
    },
    
  ];

  var cartData = JSON.parse(localStorage.getItem("cart")) || [];
  mensData.map(function (elem) {
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image_url;

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerText = elem.price;

    var strikedoffprice = document.createElement("s");
    strikedoffprice.innerText = elem.strikedoffprice;

    var btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      addToCart(elem);
    });

    box.append(img, name, price,strikedoffprice, btn);

    document.querySelector("#container").append(box);
  });

  function addToCart(elem) {
    console.log(elem);
    cartData.push(elem);
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("item added to cart");
  }