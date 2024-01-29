import { useEffect, useState } from 'react';
import styles from './Imc.module.css';

const Imc = ({ altura, massa }) => {
    const [imc, setImc] = useState(0);
    const [fundoImc, setFundoImc] = useState('');

    useEffect(() => {
        if (altura && massa) {
            const alturaEmMetro = altura / 100;
            const valorImc = massa / (alturaEmMetro * alturaEmMetro);
            setImc(valorImc);
            atualizaFundoImc(valorImc);
        }
    }, [altura, massa]);

    const atualizaFundoImc = valorImc => {
        if (valorImc <= 18.5) {
            setFundoImc('imc1');
        } else if (valorImc <= 24.9) {
            setFundoImc('imc2');
        } else if (valorImc <= 29.9) {
            setFundoImc('imc3');
        } else if (valorImc <= 34.9) {
            setFundoImc('imc4');
        } else if (valorImc <= 39.9) {
            setFundoImc('imc5');
        } else {
            setFundoImc('imc6');
        }
    };

    const interpretacaoImc = () => {
        if (imc <= 18.5) {
            return 'Abaixo do peso';
        } else if (imc <= 24.9) {
            return 'Peso ideal';
        } else if (imc <= 29.9) {
            return 'Levemente acima do peso';
        } else if (imc <= 34.9) {
            return 'Obesidade grau I';
        } else if (imc <= 39.9) {
            return 'Obesidade grau II (severa)';
        } else {
            return 'Obesidade grau III (mórbida)';
        }
    };

    return (
        <div className={`${styles.resultado} ${fundoImc.length > 0 ? styles[fundoImc] : ''}`}>
            <p className={styles.resultadoImc}>
                <strong>Seu IMC:</strong> {imc.toFixed(1)}
            </p>
            <p className={styles.resultadoInterpretacao}>{interpretacaoImc()}</p>
        </div>
    );
};

export default Imc;
