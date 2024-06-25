let ism = prompt('ismingizni kiriting')
let ot = prompt(`${ism} biror harf kiriting`)

if (ism.includes(`${ot}`)){
    alert(`${ism} ismingizda ${ot} harifi bor eka kirish mumkin`)
}else{
    alert(`${ism} ismingizda ${ot} harifi yoq ekan kirish mumkin emas`)
}