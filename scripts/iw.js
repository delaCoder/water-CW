
document.getElementById('cartWater').addEventListener('submit', estimateTotal);

function estimateTotal(e) {
    e.preventDefault();

    // STORE FORM VALUES
    var waterOR = parseInt(document.getElementById('q-or').value, 10) || 0,
        waterCM = parseInt(document.getElementById('q-cm').value, 10) || 0,
        waterSB = parseInt(document.getElementById('q-sb').value, 10) || 0,
        state = document.getElementById('sState').value,
        shippingMethod;

    var methods = document.getElementById('cartWater').rMethod;

    // USER NEEDS TO SELECT STATE
    if(state === '') {
        alert('Please choose shipping state.');
        document.getElementById('sState').focus();
    }

    // GET THE VALUE OF THE CHECKED RADIO BUTTON
    for(var i = 0; i < methods.length; i++) {
        if(methods[i].checked == true) {
            shippingMethod = methods[i].value;
            console.log(shippingMethod);
        }
    }

    // CONVERT STRING VALUE TO NUMERIC EQUIVALENT ON SHIPPING
    var shippingCostPer = 0;
    switch(shippingMethod) {
        case 'pickup' :
            shippingCostPer = 0;
            break;
        case 'usps' :
            shippingCostPer = 2;
            break;
        case 'ups' :
            shippingCostPer = 3;
            break;
    }
    console.log(shippingCostPer);

    // TAX
    var taxFactor = 1;
    if(state === 'CA') {
        taxFactor = 1.0925;
    }

    console.log(taxFactor);

    var totalBtls = waterOR + waterCM + waterSB,
        shippingCost = totalBtls * shippingCostPer;
    
    var subTotal = ((waterOR * 10) + (waterCM * 8) + (waterSB * 9)) * taxFactor;
    console.log(subTotal);
    
    var estimate = '$' + (subTotal + shippingCost).toFixed(2);
    console.log(estimate);

    // document.getElementById('txtEstimate').value = estimate;

    // document.getElementById('results').innerHTML = 'Total bottles ordered: ' + totalBtls + '<br>';
    // document.getElementById('results').innerHTML += 'Total shipping fees: $' + shippingCost + '<br>';
    // document.getElementById('results').innerHTML += 'Tax: ' + ((taxFactor - 1) * 100).toFixed(2) + '%';

    if (state === '') {
        alert('Please choose your shipping State');
        document.getElementById('sState').focus();
    } else {
        document.getElementById('txtEstimate').value = estimate;
        document.getElementById('results').innerHTML = 'Total bottles ordered: ' + totalBtls + '<br>';
        document.getElementById('results').innerHTML += 'Total shipping fees: $' + shippingCost + '<br>';
        document.getElementById('results').innerHTML += 'Tax: ' + ((taxFactor - 1) * 100).toFixed(2) + '%';
    }

} // ENDS ESTIMATETOTAL FUNCTION