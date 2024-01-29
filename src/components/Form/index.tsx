import styles from './Form.module.css';

const Form = ({ altura, setAltura, massa, setMassa }) => {
    return (
        <form className={styles.form}>
            <div className={styles.formField}>
                <label htmlFor="altura" className={styles.formFieldLabel}>
                    Altura (cm)
                </label>
                <input
                    id="altura"
                    className={styles.formFieldInput}
                    value={altura}
                    onChange={e => setAltura(parseInt(e.target.value))}
                    type="number"
                    min="120"
                    max="230"
                    required
                />
            </div>
            <div className={styles.formField}>
                <label htmlFor="massa" className={styles.formFieldLabel}>
                    Massa (kg)
                </label>
                <input
                    id="massa"
                    className={styles.formFieldInput}
                    value={massa}
                    onChange={e => setMassa(parseInt(e.target.value))}
                    type="number"
                    min="25"
                    max="400"
                    required
                />
            </div>
        </form>
    );
};

export default Form;
