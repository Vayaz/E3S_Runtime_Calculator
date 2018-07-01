let UPSdataTable=[];
let i=0;
let table=document.getElementById('tableBody')
easyUPS3S_data.forEach(element=>{
    UPSdataTable[i]=document.createElement('tr');
    let dataRow = UPSdataTable[i];
    dataRow.id=element.SKU;
    dataRow.power = element.power;
    for( let key in element){
        if (key === 'SKU' || key === 'power' || key === 'SKU'){
        dataCell=document.createElement('td');
        dataCell.classList.add(key);
        dataCell.innerText=element[key];
        dataRow.appendChild(dataCell);
        }
    }
    let runtimeCell = document.createElement('td');
    runtimeCell.classList.add('runtimeCell');
    dataRow.appendChild(runtimeCell);
    table.appendChild(dataRow);
    i=i+1;
})