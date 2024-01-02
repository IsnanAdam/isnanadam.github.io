const submitBtnLuas = document.getElementById('submit-luas');
const outputRumus = document.getElementById('desc-rumus')
const outputJawaban = document.getElementById('desc-jawaban');

const submitBtnKel = document.getElementById('submit-keliling');
const outputCara = document.getElementById('desc-cara')
const outputHasil = document.getElementById('desc-hasil');

const inputAlas = document.getElementById('alas');
const inputTinggi = document.getElementById('tinggi');

const inputS1 = document.getElementById('sisi-satu');
const inputS2 = document.getElementById('sisi-dua');
const inputS3 = document.getElementById('sisi-tiga');

const resetBtnLuas = document.getElementById('reset-luas');
const resetBtnKel = document.getElementById('reset-keliling');

function inputValidation(input) {
    const intergerRegex = /^-?\d+$/;
    return intergerRegex.test(input)
}

document.addEventListener('DOMContentLoaded', function () {
    submitBtnLuas.addEventListener('click', function () {
        alas = parseFloat(inputAlas.value);
        tinggi = parseFloat(inputTinggi.value);
        luas = 0.5 * alas * tinggi;
        outputRumus.textContent = `L = 1/2 X ${alas} X ${tinggi}`;
        outputJawaban.textContent = `= ${luas}`;
    });
});

resetBtnLuas.addEventListener('click', function () {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    alas.textContent = '';
    tinggi.textContent = '';
    outputRumus.textContent = '';
    outputJawaban.textContent = '';
});

document.addEventListener('DOMContentLoaded',function(){
    submitBtnKel.addEventListener('click', function () {
        S1=parseFloat(inputS1.value);
        S2=parseFloat(inputS2.value);
        S3=parseFloat(inputS3.value);
        kel= S1 + S2 + S3;
        // console.log(kel)
        outputCara.textContent = `K = ${S1} + ${S2} + ${S3}`;
        outputHasil.textContent= ` = ${kel}`;
        });
    });

resetBtnKel.addEventListener('click', function () {
    document.getElementById('sisi-satu').value = '';
    document.getElementById('sisi-dua').value = '';
    document.getElementById('sisi-tiga').value = '';
    S1.textContent = '';
    S2.textContent = '';
    S3.textContent = '';
    outputCara.textContent = '';
    outputHasil.textContent = '';
});