var stockPrices = [4, 3,5,5,5,5,5,5,6,5,5,5,5,5,5,5,7,456,34646,245625,62456,8];

var getMaxProfit = function (prices) {
    var difference = 0;
    for (var i = 0; i < prices.length; i++) {
        for (var j = 0; j < prices.length; j++) {
            if (i < j && prices[j] - prices[i] > difference) {
                difference = prices[j] - prices[i];
            }
        }
    }
   console.log (difference);
};

getMaxProfit(stockPrices); 