var user = prompt("Enter a number to calculate the square root: ");
var x = 1;
function sqrt(z) 
{
    while(true)
        {
            var divide = z / x;
            var avg = ((divide + x) / 2);

            if ( ( ((x - avg < 0.000001) && (x - avg > 0)) || ((avg - x < 0.000001) && (avg - x > 0)) ) && (avg - Math.floor(avg) < 0.001) )
                {
                     document.write("The square root of " + user + " is " + avg.toFixed(0));
                     return;
                                                           
                }
            else if ( ( ((x - avg < 0.000001) && (x - avg > 0)) || ((avg - x < 0.000001) && (avg - x > 0)) ) && (avg - Math.floor(avg) > 0.0000001) )
                {
                    document.write("The square root of " + user + " is " + avg);  
                    return;
                }
            else 
                {
                    x = avg;
                }
        }

}

sqrt(user);


