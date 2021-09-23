function min(ar) {
    if (ar.length == 0) {
        alert('ko có giá trị')
    }

    let mmm = ar[0];
    for (let i = 1; i < ar.length; i++) {
        if (ar[i] < mmm) {
            mmm = ar[i];
        }
    }
    alert(mmm)
}