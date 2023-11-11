var btnTable=document.getElementById('btnTable');

var id      = document.getElementById('txt-id');
var Name    = document.getElementById('txt-name');
var qty     = document.getElementById('txt-qty');
var price   = document.getElementById('txt-price');
var total   = document.getElementById('txt-total');

var index='';

var Add   =document.getElementById('btnAdd');
var Update= document.getElementById('btnUpdate');
Add.style.display='block';
Update.style.display='none';
 // data join table
const itemList=[
    {
        'id' :'1',
        'name' : 'coca', 
        'qty' :'5',
        'price':'3',
        'total':'20'
    },
    {
        'id' :'2',
        'name' : 'book', 
        'qty' :'10',
        'price':'3.5',
        'total':'100'
    },
    {
        'id' :'3',
        'name' : 'sting', 
        'qty' :'7',
        'price':'1.2',
        'total':'100'
    },
];
id.value= itemList.length+1;
getData=()=>{
    grandTotal=0;
    var txt='';
    txt +=`
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>QTY</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
        </tr>
    `;
    for(let i in itemList){
        txt +=`
            <tr>
                <td>${itemList[i]['id']}</td>
                <td>${itemList[i]['name']}</td>
                <td>${itemList[i]['qty']}</td>
                <td>${itemList[i]['price']}</td>
                <td>${itemList[i]['total']}</td>
                <td>
                    <input type="button" value="Edit" class="btn btn-primary btnEdit">
                    <input type="button" value="Delete"  class="btn btn-danger btnDelete">
                </td>
            </tr>
        `;
        grandTotal += parseFloat(itemList[i]['total']);
    }
    // GrandTotal
    var trTable='';
    trTable =`
        <tr>
            <td colspan="4" align='right'>Totla</td>
            <td>${grandTotal}</td>
            <td></td>
        </tr>
    `;
    //  Edit Data
    btnTable.innerHTML=txt + trTable;
    var btnEdite= document.querySelectorAll('.btnEdit');
    btnEdite.forEach((e,i)=>{
        e.addEventListener('click',function(){
            id.value=itemList[i]['id'],
            Name.value=itemList[i]['name'],
            qty.value=itemList[i]['qty'],
            price.value=itemList[i]['price']
            total.value=itemList[i]['total']
            index=i; // index = globle
            Add.style.display='none';
            Update.style.display='block';
        });
    });

    // Button Delete
    var btnDelete=document.querySelectorAll('.btnDelete');
    btnDelete.forEach((e,i)=>{
        e.addEventListener('click',function(){
            // itemList.pop(
            //     console.log(itemList)
            // )
            // delete itemList[1];
            // console.log(itemList)
            itemList.splice(0,1);
            getData();
        })
    })

}
getData();

// Add data to table
document.getElementById('btnAdd').addEventListener('click',function(){
    if(Name.value==""){
        alert('Please input Name');
        Name.focus();
    }
    itemList.push(
        
        {
            'id'   :id.value,
            'name' :Name.value, 
            'qty'  :qty.value,
            'price':price.value,
            'total':total.value,
        }
    );
    getData();
    id.value= itemList.length+1;
    clearData();
});

// Clear Data
clearData=()=>{
    // id.value="";
    Name.value="";
    qty.value="";
    price.value="";
    total.value="";
}
// Result Total
getTotal=()=>{
    total.value = qty.value * price.value;
}

qty.addEventListener('keyup',function(){
    getTotal();
});
price.addEventListener('keyup',function(){
    getTotal();
});

// Button Update
document.getElementById('btnUpdate').addEventListener('click',function(){
    itemList[index]['name']=Name.value;
    itemList[index]['qty']=qty.value;
    itemList[index]['price']=price.value;
    itemList[index]['total']=total.value;
    getData();
    Add.style.display='block';
    Update.style.display='none';
    clearData();
})
    
