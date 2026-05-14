const agaclar = [
    {
        ad: "Çam Ağacı (Pinus)",
        bilgi: "3-5 yaş aralığındadır.Dallar üzerinde demetler halinde bulunan, sert ve sivri uçlu yaprakları vardır. Bu yapraklar her mevsim yeşil kalır.Ağacın uç kısımlarında yukarı doğru uzanan açık renkli kısımlar, ağacın bu bahar döneminde verdiği yeni sürgünlerdir.Kuraklığa ve soğuğa karşı oldukça dayanıklı bir türdür, bu yüzden peyzaj çalışmalarında ve ağaçlandırma alanlarında sıkça tercih edilir. ",
        resim: "images/agac3.jpg"
    },
];

function getId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id")) || 1;
}

function agaciGoster(id) {
    const agac = agaclar[id - 1];
    document.getElementById("agacAdi").innerText = agac.ad;
    document.getElementById("agacBilgi").innerText = agac.bilgi;
    document.getElementById("agacResim").src = agac.resim;
}

function sonrakiAgac() {
    let id = getId();
    id++;
    if (id > agaclar.length) id = 1;
    window.location.search = "?id=" + id;
}

agaciGoster(getId());