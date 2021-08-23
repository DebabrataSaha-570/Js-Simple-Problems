// 0 , 1, 1, 2, 3, 5, 8, 13, 21;

/*
3rdNumber = 2nd number + 1st number;
4th Number = 3rd number + 2nd Number;
11th = 10th + 9th;
16th = 15th + 14th; 
119th = 118th - 117th ;
nth = (n-1)th + (n-2)th;
ith = (i - 1)th + (i -2)th ;
*/

const fibo = [0, 1]
for (i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
    console.log(fibo)
}
