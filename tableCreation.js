let UPSdataTable=[];
let i=0;
let table=document.getElementById('tableBody')
easyUPS3S_data.forEach(element=>{
    UPSdataTable[i]=document.createElement('tr');
    let dataRow = UPSdataTable[i];
    dataRow.id=element.SKU;
    dataRow.power = element.power;
    for( let key in element){
        dataCell=document.createElement('td');
        dataCell.innerText=element[key];
        dataRow.appendChild(dataCell);
    }
    table.appendChild(dataRow);
    i=i+1;
})