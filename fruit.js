var womensData = [
    {
      image_url:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8c9ddd15-4d39-411c-a7d2-f371c2b8a6cd_425x425.jpg",
      name: "Brinjal",
      price: 49,
      strikedoffprice: 99,
    },
    {
      image_url:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f3725818-3543-44cc-991a-c5c58047ea4c_425x425.JPG",
      name: "Brinjal",
      price: 29,
      strikedoffprice: 49,
    },
    {
      image_url:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f4b01a37-baf5-413c-825b-92dd94e99cc6_425x425.jpg",
      name: "Beans",
      price: 39,
      strikedoffprice: 45,
    },
    {
      image_url:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/531fc153-6064-4338-a146-6d18a5a1e836_425x425.jpg",
      name: "HA ORGANIC PINEAPPLE 1 PCS",
      price: 179,
      strikedoffprice: 299,
    },
    {
      image_url:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d7cc532d-9b56-43a4-b912-a3649811515e_425x425.jpg",
      name: "HA ORGANIC BANANA 6 PCS",
      price: 79,
      strikedoffprice: 99,
    },
    {
      image_url:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/83fab914-408e-4e79-989b-240384a0277a_425x425.jpg",
      name: "HA ORGANIC PAPAYA 1 PCS",
      price: 99,
      strikedoffprice: 119,
    },
   
  ];
  var cartData = JSON.parse(localStorage.getItem("cart")) || [];
  womensData.map(function (elem) {
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