let upsLoad = document.getElementById('UPS_load');
upsLoad.addEventListener('change',()=>{
    document.getElementById('mainTable').classList.remove('hidden');
    UPSdataTable.forEach(row =>{
        if (upsLoad.value >= row.power){
            row.classList.add('hidden');
        }
        else{
            row.classList.remove('hidden');
        }
    })
});