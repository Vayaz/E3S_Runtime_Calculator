let loadInput = document.getElementById('UPS_load');
function inputCorrection(){
    let input=Number(this.value.replace(/,/,'.'));
    if (input){
    tableManipulation(input);
    }
    else {
        alert('Verify your input, please');
    }
};
function runtimeCalc (){};
function tableManipulation (actualLoad){
    document.getElementById('mainTable').classList.remove('hidden');
    UPSdataTable.forEach(row =>{
        if (actualLoad > row.power){
            row.classList.add('hidden');
        }
        else{
            row.classList.remove('hidden');
            row.childNodes.forEach(node=>{
                if (node.classList.contains('runtimeCell')){
                    node.innerText= row.nbBatt+5;
                }
            })
        }
    })
}; 
loadInput.addEventListener('change',inputCorrection);
// loadInput.addEventListener('change',tableManipulation);