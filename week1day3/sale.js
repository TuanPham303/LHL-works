var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function totalSale(saleArray){
  var sum = 0;
  for (var i = 0; i < saleArray.length; i++){
    sum += saleArray[i];
  }
  return sum;
}

function calculateSalesTax(salesData, taxsRate){
  var report = {};
  for(var i = 0; i < salesData.length; i++){
    salesData[i].taxs = totalSale(salesData[i].sales) * taxsRate[salesData[i].province];
    if(!report[salesData[i].name]){
      report[salesData[i].name] = {};
      report[salesData[i].name].totalSales = 0;
      report[salesData[i].name].totalTaxs = 0;
    }
    
    report[salesData[i].name].totalSales += totalSale(salesData[i].sales);
    report[salesData[i].name].totalTaxs += salesData[i].taxs;
  }
  console.log(report);
}

calculateSalesTax(companySalesData, salesTaxRates);


