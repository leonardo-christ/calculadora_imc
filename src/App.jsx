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

  return (
    <>
    <section className={styles.alinhamento}>
    <header className={styles.alinhamento}>
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
      <div>
        <span></span>
      </div>
    </div>
    </section>
    </>
  ) 
}

export default App
