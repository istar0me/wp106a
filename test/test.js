function modify(num, array) {
  num = num + 1;
  array[0] = array[0] + 1;    
}

var n=3, a=[3,2,1];

modify(n, a);
// n 僅傳值(複製)給 num，跟原先的檔案不同  
// a 傳址(重新命名)給 array，與原先的檔案相關

console.log("n=", n, " a=", a);