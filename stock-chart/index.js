// API Docs: https://www.alphavantage.co/documentation/
const key = "demo";
const functionName = "TIME_SERIES_DAILY";
const symbolName = "MSFT";
const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&symbol=${symbolName}&apikey=${key}`;

axios
  .get(apiUrl)
  .then(responseFromAPI => {
    console.log(responseFromAPI);
    printTheChart(responseFromAPI.data); // <== call the function here where you used to console.log() the response
  })
  .catch(err => console.log("Error while getting the data: ", err));

function printTheChart(stockData) {
  const dailyData = stockData["Time Series (Daily)"];

  const stockDates = Object.keys(dailyData);
  const stockPrices = stockDates.map(date => dailyData[date]["4. close"]);
  const ctx = document.getElementById("my-chart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: stockDates,
      datasets: [
        {
          label: "Stock Chart",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: stockPrices
        },
        {
          label: "Stock Chart 2",
          backgroundColor: "rgb(220, 80, 132)",
          borderColor: "rgb(280, 99, 100)",
          data: stockPrices.map(n => n + 5)
        }
      ]
    }
  }); // closes chart = new Chart()
} // closes printTheChart()
