function doiMang(a){
    let b=0;
    let c=a.length-1;
    while (b<c){
        let d=a[b]
        a[b]=a[c]
        a[c]=d;
        b++;
        c--;
    }alert(a)
}