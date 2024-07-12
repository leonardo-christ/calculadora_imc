import { useState } from 'react'
import styles from './main.module.css'

function App() {
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  
  function calc () {
    const calcaltura = altura * altura;   
    const imc = peso / calcaltura;
    return imc
  }
  function pesos () {
    if (calc() !== null) {
      if (18.5 > calc()) {
        return <div className={styles.alinhamento2}>
          <h2>Abaixo do normal</h2>
          <h3>Seu IMC é: {calc().toFixed(2)}</h3>
          <span className={styles.span}>Procure um médico, pois o baixo peso pode ser uma característica do organismo ou um sinal de problemas como desnutrição.</span>
        </div>
        }
      if (24.9 >= calc()) {
        return <div className={styles.alinhamento2}>
          <h2>Normal</h2>
          <h3>Seu IMC é: {calc().toFixed(2)}</h3>
          <span className={styles.span}>Mantenha um estilo de vida ativo e uma alimentação equilibrada para continuar com o peso normal!</span>
        </div>
      }
      if (29.9 >= calc()){
        return <div className={styles.alinhamento2}>
          <h2>Sobrepeso</h2>
          <h3>Seu IMC é: {calc().toFixed(2)}</h3>
          <span className={styles.span}>Ele está em pré-obesidade, e muitas pessoas nessa faixa já apresentam doenças como diabetes e hipertensão; é importante rever hábitos e buscar ajuda para evitar a obesidade.</span>
        </div>
      }
      if (34.9 >= calc()){
        return <div className={styles.alinhamento2}>
          <h2>Obesidade grau 1</h2>
          <h3>Seu IMC é: {calc().toFixed(2)}</h3>
          <span className={styles.span}>Sinal de alerta! Mesmo com exames normais, comece a cuidar da alimentação e procure acompanhamento com nutricionista e/ou endocrinologista.</span>
        </div>
      }
      if (39.9 >= calc()){
        return <div className={styles.alinhamento2}>
          <h2>Obesidade grau 2</h2>
          <h3>Seu IMC é: {calc().toFixed(2)}</h3>
          <span className={styles.span}>Mesmo que seus exames pareçam normais, é hora de se cuidar, iniciando mudanças no estilo de vida com acompanhamento de profissionais de saúde.</span>
        </div>
      }
      if (40 <= calc()){
        return <div className={styles.alinhamento2}>
          <h2>Obesidade grau 3</h2>
          <h3>Seu IMC é: {calc().toFixed(2)}</h3>
          <span className={styles.span}>Aqui o sinal é vermelho, com alta probabilidade de doenças graves associadas; o tratamento deve ser ainda mais urgente.</span>
        </div>
      }
    }
  }
  return (
  <section className={styles.alinhamento}>
    <div className={styles.container}>
      <header className={styles.ajuste}>
        <h1 className={styles.h1}>Calculadora de IMC</h1>
      </header>
      <div className={styles.menor}>
        <div>
          <h3 className={styles.h3}>Digite a sua altura</h3>
          <input type="number" name='altura' onChange={(evento) => setAltura(evento.target.value)}  placeholder='1.80' />
        </div>
        <div>
          <h3 className={styles.h3}>Digite o seu peso</h3>
          <input type="number" name='peso' onChange={(evento) => setPeso(evento.target.value)} placeholder='75' />
        </div>
        <div className={styles.divbutton}>
          <input className={styles.button} type="button" value='Calcular'/>
        </div> 
        {pesos()}
      </div>
    </div>
  </section>
  ) 
}

export default App
