//business interface logic
function Pizza(size,crust,toppings,total){
    this.size=size;
    this.crust=crust;
    this.toppings=toppings;
    this.total=total;
}
    var pizzaTotal = priceSize + priceCrust + priceTopping;
    
var pricesize, pricecrust,pricetoppings;
 

   


 var price = function(pizzaSize, pizzaCrust, pizzaTopping) {
     switch (pizzaSize) {
        case "":
            priceSize = 0;
            break;
        case "large":
           priceSize = 1000;
           break;
         case "medium":
             priceSize = 750;
           break;
        case "small":
          priceSize = 500;
          break;
       default:
           location.reload();
           alert("Please select a pizza size");
    };

    switch (pizzaCrust) {
        case "":
           priceCrust = 0;
           break;
        case "crispy":
            priceCrust = 100;
            break;
         case "stuffed":
             priceCrust = 200;
            break;
       case "gluten free":
            priceCrust = 150;
            break;
        default:
        location.reload();
           alert("Please choose a crust");
    };

    if (pizzaSize == 'large') {
        priceTopping = pizzaTopping.length * 150;
     } else if (pizzaSize == 'medium') {
         priceTopping = pizzaTopping.length * 100;
   } else if (pizzaSize == 'small') {
        priceTopping = pizzaTopping.length * 50;
   }
   var pizzaTotal = priceSize + priceCrust + priceTopping;
   return pizzaTotal;

  }


// user interface logic
$(document).ready(function() {    
    $("button#orderPizza").click(function() {
        $(".view-two").toggle();
        $(".view-one").toggle();
    })

    //Continue button
    $("form#form1").submit(function(event) {
        event.preventDefault()
        
        
        $(".view-three").show();
        $(".view-two").hide();
        $(".view-four").hide();
        $("#continue1").hide();
        $(".checkbox").hide();

       
        //get form values
        let pizzaSize = $(".size option:selected").val();
        let pizzaCrust = $(".crust option:selected").val();
        let pizzaTopping = $(".toppings option:selected").val();
        

        var total = pizzaTotal;
        var grandTotal = total + 200;
        var newPizza = new Pizza(pizzaSize, pizzaCrust, pizzaTopping,total)
          var newRow='<tr><td>' +newPizza.size+'</td><td> id="size"' +newPizza.crust+'</td><td>id="cust"'+newPizza.toppings+'</td><td> id="toppings"'+newPizza.total+'</td></tr> id="total"'
          $(".confirm-order").append(newRow); 
        $(".current-order").append('<tr><td id="name">' + order.pizza + '</td><td id="size">' + order.size + '</td><td id="crust">' + order.crust + '</td><td id="toppings">' + order.toppings + '</td><td id="total">' + total);
    })
         //Pickup button
         $("#pick-up").click(function() {
            alert("Dear customer, your order will be ready for pickup in 1 hour. Your order total is: " + total);

            //refresh page
            location.reload();
        })

        //Checkout button
        $("#checkout").click(function() {
            //form data
            var clientName = $("#full-name").val();
            var clientNumber = $("#phone-number").val();
            var clientLocation = $("#location").val();

            if (clientName === "" || clientNumber === "" || clientLocation === "") {
                alert("Please fill in the delivery form. All fields are required")
            } else {
                alert("Dear " + clientName + " your order will be delivered to " + clientLocation + " within the hour! Your order total is: " +
                grandTotal + " Our rider will call you on arrival");
        }
    
})


//Add another pizza
$("#add").click(function(event) {
    event.preventDefault();

      //Add an extra order
      $(".view-three").hide();
      $(".view-four").hide();
      $(".view-two").show();
      document.getElementById("form1").reset();
  })

  //Delivery button
  $("#delivery").click(function() {
      $(".table-buttons").hide();
      $(".view-four").slideDown();
  })
})