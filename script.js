var products = [
  {
    image:"https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        price:"19.99",
        name:"God of War",
        description:"Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform:"playstation",
    color: "blue"
  },
  {
   image:"https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        price:"14.99",
        name:"Killer Instinct",
        description:"Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform:"xbox",
    color: "green"
  },
  {
  image:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        price:"49.99",
        name:"Donkey Kong Country: Tropical Freeze",
        description:"A giant gorilla and possibly apes quest to unfeeze their island form a bunch of icey animals and collect lots of bananas.",
        platform:"switch",
    color: "Red"
  }
];




$.each(products, function(i, value) {
  var product = $("<div></div>");
  product.addClass("product");
  product.append("<img src='" + value.image + "'/>");

  
  product.append("<div> Price: $" + value.price + "</div>");

  $(product).attr("color", value.color);
  $(product).attr("name", value.name);
  $(product).attr("price", value.price);
  $(product).attr("description", value.description);
  $(product).attr("platform", value.platform);
  $(product).attr("img", value.image);

  $("body").append(product);
});

$(".product").hover(
  function() {
    var color = $(this).attr("color");
    $(this).css("border-color", color);
  },
  function() {
    var color = $(this).attr("color");
    $(this).css("platform", color);
  
  });
  

var popUp = $("<div></div>");
popUp.addClass("popUp");
popUp.append("<img class='imgDiv'></img>");
popUp.append("<div class='nameDiv'></div>");
popUp.append("<div class='priceDiv'></div>")
popUp.append("<div class='descriptionDiv'></div>");
popUp.append("<div class='platformDiv'></div>");
$("body").append(popUp);
$(".popUp").hide();


$(".product").click(products, function(i, value) {
  $(".popUp").show();
  $(".imgDiv").attr("src", $(this).attr("img"));
  $(".nameDiv").text($(this).attr("name"));
  $(".priceDiv").text($(this).attr("price"));
  $(".descriptionDiv").text($(this).attr("description"));
   $(".platformDiv").text($(this).attr("platform"));

});


$(".popUp").click(function() {
  $(this).hide();
});