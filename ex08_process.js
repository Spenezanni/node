function temParam(param){
    return process.argv.indexOf(param) !== -1
}
if(temParams('--producao')){
    console.log('Atancao total!!!')
 } else{
            console.log('Tranquilo!!!')
        }
