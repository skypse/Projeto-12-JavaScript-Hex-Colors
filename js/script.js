// Função que muda a cor clicando no botão (vetor)
function changeColor(){
  let hex_numbers = ['0','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

  let hex_code = '';

  for (let i=0;i < 6;i++){
    let random_chosen = Math.floor(Math.random() * hex_numbers.length);

    hex_code += hex_numbers[random_chosen]
  }
  document.getElementById('hex-code').innerHTML = hex_code;

  const body = document.getElementsByTagName('body')[0];
  body.style.background = "#" + hex_code;
  body.style.transition = 'all 0.6s ease-in-out';
}