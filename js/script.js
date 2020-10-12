console.log('Pobierania danych programisty')

$(document).ready(function () {
    let btnClick = $('#btn-load')
    btnClick.click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {
                // console.log('dziala');
                console.log(data);

                let box = $('#dane-programista');
                let imie = $('<p></p>').text(`Imie: ${data.imie}`);
                let nazwisko = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
                let firma = $('<p></p>').text(`Firma: ${data.firma}`);
                let zawod = $('<p></p>').text(`Zawod: ${data.zawod}`);
                // console.log(zawod);

                console.log(box.length);
                if (box.length > 0) {
                    box.append(imie);
                    box.append(nazwisko);
                    box.append(firma);
                    box.append(zawod);
                } else {
                    let boxTmp = $("<div id='dane-programista'></div>");
                    $('body').append(boxTmp);
                    boxTmp.append(imie);
                    boxTmp.append(nazwisko);
                    boxTmp.append(firma);
                    boxTmp.append(zawod);
                }

            });

    });
});