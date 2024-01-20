function calculate() {
    const av1 = parseFloat(document.getElementById('av1').value);
    const av2 = parseFloat(document.getElementById('av2').value);
    const av3 = parseFloat(document.getElementById('av3').value);

    if (isNaN(av1) || isNaN(av2) || isNaN(av3)) {
        alert('Por favor, insira valores válidos para as avaliações.');
        return;
    }

    const mediaAv1Av2 = (av1 + av2) / 2;
    const nf = (mediaAv1Av2 + av3) / 2;

    let result = 'Situação do Aluno: ';

    if (nf >= 5.0 && mediaAv1Av2 >= 4.0 && av3 >= 4.0) {
        result += 'Aprovado';
    } else {
        result += 'Reprovado - ';

        if (nf < 5.0) {
            result += 'Nota Final inferior a 5.0';
        } else if (mediaAv1Av2 < 4.0) {
            result += 'Média entre AV1 e AV2 inferior a 4.0';
        } else if (av3 < 4.0) {
            result += 'Nota de AV3 inferior a 4.0';
        }
    }

    document.getElementById('result').textContent = result + ` (Nota Final: ${nf.toFixed(2)})`;
}
