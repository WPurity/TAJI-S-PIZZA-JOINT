// order constructor -backend
function pizzaOrder(size, crust, toppings, total) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
  }
  var grandTotal = 0;
  var deliver = 200;
  
  $(document).ready(function () {
    // hide table
    $(".order-table").hide();
    $("#amount").hide();
    // $(".order-again").hide()
    
  
$("#user-order").submit(function(e){
    e.preventDefault()
})


    $("button#place-order").click(function (event) {
      //prevent default action
      event.preventDefault();
  
      // // show table after clicking place order
      $(".order-table").show();
      $("button#place").hide();
      $("button#order-again").hide();
      $("button#restart").show();
  
      var selectedPizzaSize = $("#pizza-size option:selected").val();
      var sizeName = $("#pizza-size option:selected").text();
  
      var selectedPizzaCrust = $("#pizza-crust option:selected").val();
      var crustName = $("#pizza-crust option:selected").text();
  
      var selectedPizzaTopping = $("#pizza-topping option:selected").val();
      var topName = $("#pizza-topping option:selected").text();
  
      var total =
        parseInt(selectedPizzaSize) +
        parseInt(selectedPizzaCrust) +
        parseInt(selectedPizzaTopping);
  
      grandTotal = grandTotal + total;
  
      // $("order-table").show()
  
      var newPizzaOrder = new pizzaOrder(
        selectedPizzaSize,
        selectedPizzaCrust,
        selectedPizzaTopping,
        total
      );
  
      // insert new row
      var newRow =
        "<tr><td>" +
        sizeName +
        " " +
        newPizzaOrder.size +
        "</td><td>" +
        crustName +
        " " +
        newPizzaOrder.crust +
        "</td><td>" +
        topName +
        " " +
        newPizzaOrder.toppings +
        "</td><td>" +
        newPizzaOrder.total +
        "</td></tr>";
  
      $("#pizzatable").append(newRow);
    });
  
    $("button#add-order").click(function () {
      var selectedPizzaSize = $("#pizza-size option:selected").val();
      var sizeName = $("#pizza-size option:selected").text();
  
      var selectedPizzaCrust = $("#pizza-crust option:selected").val();
      var crustName = $("#pizza-crust option:selected").text();
  
      var selectedPizzaTopping = $("#pizza-topping option:selected").val();
      var topName = $("#pizza-topping option:selected").text();
  
      var total =
        parseInt(selectedPizzaSize) +
        parseInt(selectedPizzaCrust) +
        parseInt(selectedPizzaTopping);
      grandTotal = grandTotal + total;
   console.log(total);
   console.log(selectedPizzaTopping);
      // $("order-table").show()
  
      var newPizzaOrder = new pizzaOrder(
        selectedPizzaSize,
        selectedPizzaCrust,
        selectedPizzaTopping,
        total
      );
  
      // insert new row
      var newRow =
        "<tr><td>" +
        sizeName +
        " " +
        newPizzaOrder.size +
        "</td><td>" +
        crustName +
        " " +
        newPizzaOrder.crust +
        "</td><td>" +
        topName +
        " " +
        newPizzaOrder.toppings +
        "</td><td>" +
        newPizzaOrder.total +
        "</td></tr>";
  
      $("#pizzatable").append(newRow);
    });
  
    $("button#finish-order").click(function () {
      $("#amount").show();
      $("button#order-again").hide();
      $(".pizzatable").hide();
      $("button#place").hide();
      $("button#add-order").hide();
      $("button#finish-order").hide();
      $("#dtotal").show();
      $("#totalamount").hide();
      $("form#location").hide();
      $("#pay").show();
      $("button#restart").show();
  
      $(".grand-total").text(grandTotal);
    });
  
    $("#delivery").click(function () {
      $("#totalamount").hide();
      $("form#location").show();
      $("#delivery").hide();
      $("#deliveryHelp").hide();
      $("#pay").hide();
      $("#dtotal").hide();
    });
  
    $("form#location").submit(function (event) {
      //prevent default action
      event.preventDefault();
  
      var inputtednewLocation = $("input#new-location").val();
      $(".the-location").text(inputtednewLocation);
      grandTotal = grandTotal + deliver;
      $(".delivery-total").text(grandTotal);
  
      $("#dtotal").hide();
      $("#delivery-switch").hide();
      $("#totalamount").show();
      $("form#location").hide();
      $("button#place").hide();
      $("#pay").show();
    });
    //to reload page once done
    $("button#restart").click(function () {
      location.reload();

    });
  });