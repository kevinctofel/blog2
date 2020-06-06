<html>
<iframe>
  <form>
    <label form="coin">Choose a cryptocurrency:</label>
    <select id="coin" name="coins">
      <option value="BTC">Bitcoin</option>
      <option value="LTC">Litecoin</option>
      <option value="ETC">Etherium</option>
      <input type="button" value="Submit" onclick="printCoin()">
      <input type="reset" onclick="location.reload()">
    </select>
  </form>
  <p id="choice"></p>
  <p id="choicePrice"></p>

  <script>
    function printCoin() {
      currency = document.querySelector('#coin');
      console.log(currency.value);
      document.getElementById("choice").innerHTML = "You chose: " + currency.value;
      getPrice(currency);
    }
  </script>

  <script>
    function getPrice(currency) {
      let requestURL = 'https://min-api.cryptocompare.com/data/price?fsym=' + currency.value + '&tsyms=USD&api_key=e29b700b7cfd70faa0de907743ea4e186cd2e1f2f3b999332f7718be49feb6ae';
      var request = new XMLHttpRequest();
      request.open('GET', requestURL, true);
      request.responseType = 'text';
      request.send();
      request.onload = function () {
        if (request.readyState === request.DONE) {
          var coinPrice = request.responseText;
          // console.log(coinPrice);
          var coinPriceData = [].slice.call(coinPrice)
          // console.log(coinPriceData);
          var i;
          var currentValueUSD = "";
          for (i = 7; i < (coinPriceData.length-1); i++) {
            currentValueUSD = currentValueUSD + coinPriceData[i];
          }
        }
        document.getElementById("choicePrice").innerHTML = "Current price is: $" + currentValueUSD;
      }
    }
  </script>
  </iframe>
  </html>
