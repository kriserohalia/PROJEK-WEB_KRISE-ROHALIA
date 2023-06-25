const elemenOutput = document.querySelector('#box');

function tampil() {
    fetch('https://cuaca-gempa-rest-api.vercel.app/quake')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json);

            const tamp = document.createElement('div');
            tamp.className = "warna";

            const elemen1 = document.createElement('p');
            elemen1.textContent = 'Tanggal : ' + json.data.tanggal;
            tamp.appendChild(elemen1);
            elemenOutput.appendChild(tamp);

            const elemen2 = document.createElement('p');
            elemen2.textContent = 'Jam  :' + json.data.jam;
            tamp.appendChild(elemen2);
            elemenOutput.appendChild(tamp);


            const elemen3 = document.createElement('p');
            elemen3.textContent = 'Bujur : ' + json.data.bujur;
            tamp.appendChild(elemen3);
            elemenOutput.appendChild(tamp);

            const elemen4 = document.createElement('p');
            elemen4.textContent = 'Coordinates : ' + json.data.coordinates;
            tamp.appendChild(elemen4);
            elemenOutput.appendChild(tamp);

            const elemen5 = document.createElement('p');
            elemen5.textContent = 'Kedalaman : ' + json.data.kedalaman;
            tamp.appendChild(elemen5);
            elemenOutput.appendChild(tamp);

            const elemen6 = document.createElement('p');
            elemen6.textContent = 'Lintang : ' + json.data.lintang;
            tamp.appendChild(elemen6);
            elemenOutput.appendChild(tamp);

            const elemen7 = document.createElement('p');
            elemen7.textContent = 'Magnitude : ' + json.data.magnitude;
            tamp.appendChild(elemen7);
            elemenOutput.appendChild(tamp);

            const elemen8 = document.createElement('p');
            elemen8.textContent = 'Potensi : ' + json.data.potensi;
            tamp.appendChild(elemen8);
            elemenOutput.appendChild(tamp);

            const elemen9 = document.createElement('p');
            elemen9.textContent = 'Wilayah : ' + json.data.wilayah;
            tamp.appendChild(elemen9);
            elemenOutput.appendChild(tamp);

            const elemen10 = document.createElement('img');
            elemen10.src = json.data.shakemap;
            tamp.appendChild(elemen10);
            elemenOutput.appendChild(tamp);
        })
}