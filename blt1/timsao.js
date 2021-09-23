function sao(a){
    for (let i=0;i<star.length;i++){
        if (star[i]==a){
            document.getElementById('xx').innerHTML=con[i];
            break;
        }else{document.getElementById('xx').innerHTML='không tìm thấy gì'}
    }
}