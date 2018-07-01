let dataTable=[];
let i=0;
let table=document.getElementById('tableBody')
easyUPS3S_data.forEach(element=>{
    dataTable[i]=document.createElement('tr');
    dataTable[i].id=element.id;
    // dataTable[i].forEach(data)
    table.appendChild(dataTable[i]);
})