/*The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in. */


    //best pratice
    
    function century(year) {
        let centuryCount = 0;
        while (year > 0){
          year = year - 100;
          centuryCount = centuryCount + 1;
        }
        return centuryCount;
      }
      



    //Smarter way
 function centuryContador(year) {
    return Math.ceil (year/100)

 }

