let form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
  
    let genero = getSelectedValue('genero');
    let idade = getInputNumberValue('idade');
    let peso = getInputNumberValue('peso');
    let altura = getInputNumberValue('altura');
    let nivelAtividade = getSelectedValue('nivel-ativ');
  
    let tmb = Math.round(
      genero === 'fem'
        ? (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade))
        : (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade))
    );
    let manutencao = Math.round(tmb * Number(nivelAtividade));
    let perderPeso = manutencao - 450;
    let ganharPeso = manutencao + 450;
  
    let layout = `
      <h2>Aqui está o resultado:</h2>
  
      <div class="conteudo-result">
        <ul>
          <li>
            Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
          </li>
          <li>
            Para manter o seu peso você precisa consumir em média <strong>${manutencao} calorias</strong>.
          </li>
          <li>
            Para perder peso você precisa consumir em média <strong>${perderPeso} calorias</strong>.
          </li>
          <li>
            Para ganhar peso você precisa consumir em média <strong>${ganharPeso} calorias</strong>.
          </li>
        </ul>
      </div>
    `;
  
    const result = document.getElementById('result');
  
    result.innerHTML = layout;
  }
  
  function getSelectedValue(id) {
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].value;
  }
  
  function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
  }