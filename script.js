// Dados de consumo de água
const consumo = { 
    milho: 3.5, 
    soja: 3.0, 
    feijao: 2.8, 
    cafe: 4.2, 
    hortaliças: 4.0, 
    trigo: 3.2 
};

// Função da Calculadora de Economia de Água
function calcularEconomia() {
    const area = parseFloat(document.getElementById('area').value);
    const cultura = document.getElementById('cultura').value;
    const resultadoDiv = document.getElementById('resultado');
    const textoResultado = document.getElementById('textoResultado');

    if (isNaN(area) || area <= 0) {
        textoResultado.innerHTML = "❌ Digite uma área válida maior que zero!";
        resultadoDiv.classList.remove('hidden', 'bg-green-50', 'border-verde');
        resultadoDiv.classList.add('bg-red-50', 'border-red-400', 'text-red-700');
        return;
    }

    const consumoBase = consumo[cultura];
    const convencional = consumoBase * 1.3;
    const sustentavel = consumoBase;
    const economiaTotal = (area * convencional) - (area * sustentavel);

    textoResultado.innerHTML = `
        <strong class="text-verde">Cultura:</strong> ${cultura.charAt(0).toUpperCase() + cultura.slice(1)}<br>
        <strong class="text-verde">Área:</strong> ${area.toFixed(2)} m²<br>
        <strong>Consumo convencional:</strong> ${(area * convencional).toFixed(2)} litros<br>
        <strong>Consumo sustentável:</strong> ${(area * sustentavel).toFixed(2)} litros<br>
        <span class="text-verde font-bold text-xl block mt-2">✅ Economia total: ${economiaTotal.toFixed(2)} litros por safra!</span>
    `;

    resultadoDiv.classList.remove('hidden', 'bg-red-50', 'border-red-400', 'text-red-700');
    resultadoDiv.classList.add('bg-green-50', 'border-verde', 'text-gray-700');
}

// Verificador de Rotação de Culturas
function verificarRotacao() {
    const a1 = document.getElementById('ano1').value;
    const a2 = document.getElementById('ano2').value;
    const a3 = document.getElementById('ano3').value;
    const res = document.getElementById('resultadoRotacao');

    if (a1 !== a2 && a2 !== a3 && a1 !== a3) {
        res.innerHTML = `✅ <strong>Excelente!</strong> Essa sequência ajuda a manter o solo fértil, evita pragas e melhora a produção. Recomendado!`;
        res.className = "mt-5 p-4 rounded-lg bg-green-50 border-l-4 border-verde text-green-800";
    } else {
        res.innerHTML = `⚠️ <strong>Atenção:</strong> Evite repetir o mesmo tipo de cultura seguidamente. Isso pode esgotar nutrientes e aumentar pragas. Tente alternar: leguminosa → cereal → raiz.`;
        res.className = "mt-5 p-4 rounded-lg bg-orange-50 border-l-4 border-alerta text-orange-800";
    }
    res.classList.remove('hidden');
}

// Calculadora de Adubação Orgânica
function calcularAdubo() {
    const area = parseFloat(document.getElementById('areaAdubo').value);
    const tipo = document.getElementById('tipoAdubo').value;
    const res = document.getElementById('resultadoAdubo');

    if (isNaN(area) || area <= 0) {
        res.innerHTML = "❌ Digite uma área válida!";
        res.classList.remove('hidden', 'bg-green-50', 'border-verde');
        res.classList.add('bg-red-50', 'border-red-400');
        return;
    }

    let quantidade, mensagem;
    if (tipo === 'esterco') {
        quantidade = area * 5;
        mensagem = `Para ${area} m², você precisará de aproximadamente <strong>${quantidade.toFixed(0)} kg</strong> de esterco curtido. Aplique antes do plantio.`;
    } else if (tipo === 'composto') {
        quantidade = area * 3;
        mensagem = `Para ${area} m², você precisará de aproximadamente <strong>${quantidade.toFixed(0)} kg</strong> de adubo composto. Melhora muito a estrutura do solo!`;
    } else {
        quantidade = area * 2;
        mensagem = `Para ${area} m², você precisará de aproximadamente <strong>${quantidade.toFixed(0)} kg</strong> de cascalho vegetal. Ajuda a reter umidade e nutrientes.`;
    }

    res.innerHTML = mensagem;
    res.classList.remove('hidden', 'bg-red-50', 'border-red-400');
    res.classList.add('bg-green-50', 'border-verde');
}
