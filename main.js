/* Завдання 1
let obj ={
    '1':'one', '2':'two', '3':'three', '4':'four', '5':'five','6':'six','7':'seven', '8':'eight', '9':'nine', '0':'zero', '-':'minus',
  }

function verNum(arr){
    let res = []
    for(let i=0;i<arr.length;++i){
        if(arr[i].length > 1){
        } res.push(obj[arr[i]])
    } return res;
}

console.log(verNum([1, 9, 5, 7, 0]))
*/

/* Завдання з ** і ***
let oneNine = ['', 'один', 'два', 'три', 'чотири', 'п`ять', 'шість', 'сім', 'вісім', 'дев`ять'],
     teenTwenty = ['', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п`ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев`ятнадцять'],
     tens = ['', 'десять', 'двадцять', 'тридцять', 'сорок', 'п`ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев`яносто'],
     hundreds = ['', 'сто', 'двісті', 'триста', 'чотириста', 'п`ятсот', 'шістсот', 'сімсот', 'вісімсот', 'дев`ятсот'],
     thousands = ['', 'тисяча', 'дві тисячі', 'три тисячі', 'чотири тисячі', 'п`ять тисяч', 'шість тисяч', 'сім тисяч', 'вісім тисяч', 'дев`ять тисяч'];


     function convertTens(num) {
        if ((num >= 11) && (num <= 19))
            return tens[num - 10]
        else if (num >= 10)
            return tens[Math.floor(num / 10)] + " " + oneNine[num % 10]
        else if (num < 10)
            return oneNine[num % 10]
     }

     console.log(convertTens(44))

     function convertHundred(num){
        if(num >= 100){
            return hundreds[Math.floor(num / 100)] + " " + convertTens(num % 100)
        }else 
            return convertHundred(num)
     }

     console.log(convertHundred(149))

     function convertThousands(num){
        if(num >=1000){
            return thousands[Math.floor(num / 1000)] + " " + convertHundred(num % 1000)
        }else
            return convertThousands(num)
     }

     console.log(convertThousands(1872))
     */