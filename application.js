(function app() {
  'use strict';

  let documentReady = () => {
    
    var entry = [];
    var operatorArray = [];
    var operationsQueue = [];

    $("#ac").click(function() {
      $(".display").empty();
      entry = [];
      operationsQueue = [];
      operatorArray = [];
      console.log(entry);
    });
  
    $(".number").click(function() {
      var number = $(this).text();
      entry.push(number);
      var currentNumber = entry.join("");
      console.log(number);
      $(".display").text(currentNumber);
      console.log(currentNumber);
    });

    $(".op").click(function() {
      var operator = $(this).text();
      operatorArray.push(operator);
      console.log(operatorArray);
      operationsQueue.push(entry.join(""));
      console.log("operationsQueue: ", operationsQueue);
      entry = [];
      console.log("entry:", entry);
      operate();
    });

    $("#percent").click(function() {
      operationsQueue.push(entry.join(""));
      operationsQueue = [parseInt(operationsQueue[0]) / 100];
      // $("display").text(operationsQueue.toString());
      console.log("percent: ", operationsQueue);
    });

      function operate() {
        if (operationsQueue.length === 2) {
          var poppedOp = operatorArray.splice(0, 1);
          console.log("popop:", poppedOp);
          poppedOp = operationsQueue.splice(1, 0, poppedOp[0]);
          console.log("queue", operationsQueue);
          var switchExp = operationsQueue[1];
          console.log("switchexp", switchExp);  
          var display = "";
          switch (switchExp) {
            case '+':
              var removeOp = operationsQueue.splice(1, 1);
              operationsQueue = parseInt(operationsQueue[0]) + parseInt(operationsQueue[1]);
              operationsQueue = [operationsQueue];
              console.log("opq:", operationsQueue);
              display = $(".display").text(operationsQueue);
              break;
            case '-':
              var removeOp = operationsQueue.splice(1, 1);
              operationsQueue = parseInt(operationsQueue[0]) - parseInt(operationsQueue[1]);
              operationsQueue = [operationsQueue];
              console.log("aftercase", operationsQueue);
              display = $(".display").text(operationsQueue);
              break;
            case '*':
              var removeOp = operationsQueue.splice(1, 1);
              operationsQueue = parseInt(operationsQueue[0]) * parseInt(operationsQueue[1]);
              operationsQueue = [operationsQueue];
              console.log("aftercase", operationsQueue);
              display = $(".display").text(operationsQueue);
              break;
            case '/':
              var removeOp = operationsQueue.splice(1, 1);
              operationsQueue = parseInt(operationsQueue[0]) / parseInt(operationsQueue[1]);
              operationsQueue = [operationsQueue];
              console.log("aftercase", operationsQueue);
              display = $(".display").text(operationsQueue);
              break;
          }
        }
      }
    }
  }

  $(documentReady);

})();