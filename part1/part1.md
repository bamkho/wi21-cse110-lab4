1. At line 11, the value of i is printed to the console without error because the var variable was declared in the same scope and since var variables are function scoped. In this case, the variable was declared in the discountPrices function and the console.log statement in line 11 is also in the discountPrices function. Assuming discountPrices([100, 200, 300], .5) is called, the value of i is 3. 

2. At line 12, the value of discountedPrice is printed to the console without error because the var variable was declared in the same scope and since var variables are function scoped. In this case, the variable was declared in the discountPrices function and the console.log statement in line 12 is also in the discountPrices function. Assuming discountPrices([100, 200, 300], .5) is called, the value of discountedPrice is 150. 


3. At line 13, the value of finalPrice is printed to the console without error because the var variable was declared in the same scope and since var variables are function scoped. In this case, the variable was declared in the discountPrices function and the console.log statement in line 13 is also in the discountPrices function. Assuming discountPrices([100, 200, 300], .5) is called, the value of finalPrice is 150. 


4. The function will return [50, 100, 150] which are the correct values after executing the function because in the for loop after the finalPrice is calculated, it is pushed into the discounted array which is returned at the end of the function. All the values are correct because of scope which is mentioned in the previous questions. 

5. At line 11, an error occurs because i is declared in a separate code block than the console.log statement on line 11 which is because let variables are scoped to the block they are declared in.

6. At line 12, an error occurs because discountedPrice is declared in a separate code block than the console.log statement on line 12 which is because let variables are scoped to the block they are declared in.

7. At line 13, the value of finalPrice is printed to the console without error because the let variable was declared in the same scope as the console.log statement and since let variables are block scoped. Assuming discountPrices([100, 200, 300], .5) is called, the value of finalPrice is 150. 

8. The function will return [50, 100, 150] which are the correct values after executing the function because in the for loop after the finalPrice is calculated, it is pushed into the discounted array which is returned at the end of the function. In addition, finalPrice never produces an error because finalPrice is accessed in a loop nested in the function.  All the values are correct because of scope which is mentioned in the previous questions. 

9.  At line 11, an error occurs because i is declared in a separate code block than the console.log statement on line 11 which is because let variables are scoped to the block they are declared in.

10. At line 12, an error occurs because discountedPrice is a const variable and functionality of the loop trys to assign discountedPrice a new value. 

11. At line 13, an error occurs because finalPrice is a const variable and functionality of the loop trys to assign finalPrice a new value. 

12. The function will return an error because some of the variables in the function are const and within that function, the variables are being ressigned new values.

13.
  A. student.name
  B. student['Grad Year']
  C. student.greeting()
  D. student['Favorite Teacher'].name
  E. student.courseLoad[0]
 
14.
  A. "32" because the 2 is converted into a string
  B. 1 because the '3' is converted into a number
  C. 3 because null is converted into 0
  D. "3null" because null is converted into a string
  E. 4 because true is converted into a 1
  F. 0 because null is conerted into a 0
  G. "3undefined" because undefined is converted into a string
  H. NaN because "3" is converted into NaN
 
15.
  A. True because '2' is converted into a number 
  B. False because it is a string comparison is 
  C. True because '2' is converted into a number 
  D. False because of strict equality comparison 
  E. False because boolean is being compared 
  F. True because Boolean(2) is converted into boolean
 
 16. === means strict equality meaning the type and value have to be the same unlike == which is only where value has to be the same
 
 17. 'How are you?' gets displayed because 2 == true is false and else if(2) is true because any number beside 0 is true
