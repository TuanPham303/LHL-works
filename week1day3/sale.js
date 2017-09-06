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
  return saleArray.reduce(function(a, c){
    return a + c;
  });
}

function calculateSalesTax(salesData, taxsRate){
  var report = {};
  for(var i = 0; i < salesData.length; i++){
    salesData[i].taxes = totalSale(salesData[i].sales) * taxsRate[salesData[i].province];
    if(!report[salesData[i].name]){ 
      report[salesData[i].name] = {};
      report[salesData[i].name].totalSales = 0;
      report[salesData[i].name].totalTaxes = 0;
    }
    
    report[salesData[i].name].totalSales += totalSale(salesData[i].sales);
    report[salesData[i].name].totalTaxes += salesData[i].taxes;
  }
  return report;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));


