i=1;
j=0;
p = []
let l,m,n
// ******************
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();

let tDate = `${day}/${month}/${year}`
document.getElementById('cdate').setAttribute('value', 0);
document.getElementById('cdate').setAttribute('value', tDate);
// ******************
// document.getElementById('a3').value


add = () =>{
    
    l = document.getElementById(`a${i}`).value
    m = document.getElementById(`b${i}`).value
    n = document.getElementById(`c${i}`).value
    localStorage.setItem(`a${i}`, l);
    localStorage.setItem(`b${i}`, m);
    localStorage.setItem(`c${i}`, n);  
    i++

    let x= document.createElement('div');

                        x.innerHTML = ` <div style="border: 2px solid black; border-radius: 15px;" class="sub-div container bg-warning text-center my-3 d-flex flex-column">
                        <div class="input-group my-3 ">
                            <span class="input-group-text " id="inputGroup-sizing-default">Dish Name</span>
                            <input id='a${i}' type="text" class="form-control" >
                            </div>
                            <div class="input-group mb-3">
                            <span class="input-group-text " id="inputGroup-sizing-default">Quantity</span>
                            <input id='b${i}' type="text" class="form-control me-2" >
                            <span class="input-group-text" id="inputGroup-sizing-default">Price</span>
                            <input id='c${i}' type="text" class="form-control" >
                        </div>                
                        </div>`

                        document.getElementById('main-div').appendChild(x);
                    }

                        

// ********************************************************************************?

finalize = ()=>{
    cName = document.getElementById(`cName`).value
    cdate = document.getElementById(`cdate`).value
    ctime = document.getElementById(`ctime`).value
    cDelivery = document.getElementById(`cDelivery`).value
    localStorage.setItem(`cName`, cName);
    localStorage.setItem(`cdate`, cdate);
    localStorage.setItem(`ctime`, ctime);  
    localStorage.setItem(`cDelivery`, cDelivery);  
    
    l = document.getElementById(`a${i}`).value
    m = document.getElementById(`b${i}`).value
    n = document.getElementById(`c${i}`).value
    localStorage.setItem(`a${i}`, l);
    localStorage.setItem(`b${i}`, m);
    localStorage.setItem(`c${i}`, n);  


    

}