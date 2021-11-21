const row = document.querySelector('.row')

if (row != null) {
    const ajax = new XMLHttpRequest()
    ajax.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            let data = JSON.parse(this.responseText)

            for (let i = 0; i < data.length; i++) {

                //tag div dengan class portofolio-item
                const div = document.createElement("DIV");
                const kelasDiv = document.createAttribute("class");
                kelasDiv.value = "portofolio-item";
                div.setAttributeNode(kelasDiv)
                row.appendChild(div)

                //tag figure
                const figure = document.createElement("FIGURE");
                div.appendChild(figure)

                // tag img untuk profil
                const img = document.createElement("IMG");
                const src = document.createAttribute("src");
                src.value = `assets/img/portofolio/${data[i].img}`;
                img.setAttributeNode(src)
                figure.appendChild(img)

                // tag h2 untuk nama portofolio
                const h2 = document.createElement("H2");
                const kelasJudul = document.createAttribute("class");
                const judul = document.createTextNode(`${data[i].judul}.`);
                h2.appendChild(judul);
                kelasJudul.value = "portofolio-title";
                h2.setAttributeNode(kelasJudul)
                div.appendChild(h2)

                // tag div dengan class portofolio - desc
                const divDesc = document.createElement("DIV");
                const kelasDivDesc = document.createAttribute("class");
                kelasDivDesc.value = "portofolio-desc";
                divDesc.setAttributeNode(kelasDivDesc)
                div.appendChild(divDesc)

                // tag p untuk deskripsi
                const p = document.createElement("P");
                const desc = document.createTextNode(`${data[i].deskripsi}.`);
                p.appendChild(desc);
                divDesc.appendChild(p);
            }
        }
    }
    ajax.open('GET', './assets/data.json', true)
    ajax.send()
}