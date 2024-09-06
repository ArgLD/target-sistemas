// 1
function calcularSoma() {
  let INDICE = 13;
  let SOMA = 0;
  let K = 0;

  while (K < INDICE) {
      K = K + 1;
      SOMA = SOMA + K;
  }

  document.getElementById('resultadoSoma').innerText = 'O valor da variável SOMA é: ' + SOMA;
}

// 2
function verificarFibonacci() {
  let num = parseInt(document.getElementById('numeroFibonacci').value);
  let a = 0, b = 1, temp;

  while (b < num) {
      temp = b;
      b = a + b;
      a = temp;
  }

  if (b === num || num === 0) {
      document.getElementById('resultadoFibonacci').innerText = num + ' pertence à sequência de Fibonacci.';
  } else {
      document.getElementById('resultadoFibonacci').innerText = num + ' não pertence à sequência de Fibonacci.';
  }
}

// 3
function calcularFaturamento() {
  fetch('dados.json')
      .then(response => response.json())
      .then(data => {
          let valores = data.filter(d => d.valor > 0).map(d => d.valor);
          let menor = Math.min(...valores);
          let maior = Math.max(...valores);
          let media = valores.reduce((a, b) => a + b, 0) / valores.length;
          let diasAcimaMedia = valores.filter(v => v > media).length;

          document.getElementById('resultadoFaturamento').innerText = 
              `Menor valor: R$${menor.toFixed(2)}, Maior valor: R$${maior.toFixed(2)}, Dias acima da média: ${diasAcimaMedia}`;
      });
}

// 4
function calcularPercentual() {
  let faturamento = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Outros: 19849.53
  };
  let total = Object.values(faturamento).reduce((a, b) => a + b, 0);
  let percentuais = {};

  for (let estado in faturamento) {
      percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2);
  }

  document.getElementById('resultadoPercentual').innerText = 
      `Percentuais: SP: ${percentuais.SP}%, RJ: ${percentuais.RJ}%, MG: ${percentuais.MG}%, ES: ${percentuais.ES}%, Outros: ${percentuais.Outros}%`;
}

// 5
function inverterString() {
  let str = document.getElementById('stringInput').value;
  let invertida = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
  }

  document.getElementById('resultadoString').innerText = 'String invertida: ' + invertida;
}