let total = 0

f1 = ()=>{
// Assuming cName, date, and time are already defined somewhere

// Retrieve values from localStorage
const nameVal = localStorage.getItem('cName');
const dateVal = localStorage.getItem('cdate');
const timeVal = localStorage.getItem('ctime');
let cDelivery = localStorage.getItem('cDelivery');

// Check if cDelivery is not null or undefined before parsing
if (cDelivery !== null && cDelivery !== undefined) {
    cDelivery = parseInt(cDelivery);
} else {
    // Handle the case when cDelivery is not found in localStorage
    // For example, you could set it to a default value
    cDelivery = 0;
}

// Set attribute values for elements in the HTML document
document.getElementById('pcName').setAttribute('value', nameVal);
document.getElementById('pdate').setAttribute('value', dateVal);
document.getElementById('ptime').setAttribute('value', timeVal);
document.getElementById('pcDelivery').value = cDelivery + "/-";
total += cDelivery;


for (let i = 1; ; i++) {
    let key1 = `a${i}`;
    let key2 = `b${i}`;
    let key3 = `c${i}`;

    if (!localStorage.getItem(key1)) {
        break;
    }
    const value3 = localStorage.getItem(key3);
    if (!isNaN(parseInt(value3))) {
        total += parseInt(value3);
    }

        
        const value1 = localStorage.getItem(key1);
        const value2 = localStorage.getItem(key2);
        console.log(`${key1}: ${value1}`);
        console.log(`${key2}: ${value2}`);
        console.log(`${key3}: ${value3}`);
        // total = total + parseInt(value3);
        // console.log(i)

    let existingContent = document.getElementById('cont2').innerHTML;
    let addition = `<div class="m-auto my-1  width95">
    <input style="width: 60%; font-size: 15px;" type="text" class="bg-gray ps-1 me-1" value="${value1}">
    <input style="width: 18%; font-size: 15px;" type="text" class="bg-gray me-1 text-center"  value="${value2}">
    <input style="width: 16%; font-size: 15px;" type="text" class="bg-gray me-1 text-center" value="${value3}">
      </div>  `
let finalContent = existingContent + addition
      document.getElementById('cont2').innerHTML = finalContent

}
console.log(total)
let ptotal = document.getElementById('ptotal')
ptotal.value = `${total}/-`;
}

f1()


setTimeout(() => {
    localStorage.clear()
    console.log("hi")
}, "3000");
