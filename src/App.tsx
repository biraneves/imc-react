import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Imc from './components/Imc';

function App() {
    const [altura, setAltura] = useState(0);
    const [massa, setMassa] = useState(0);

    return (
        <div className="container">
            <div className="body-app">
                <Header />
                <main>
                    <Form altura={altura} setAltura={setAltura} massa={massa} setMassa={setMassa} />
                    {altura > 0 && massa > 0 && <Imc altura={altura} massa={massa} />}
                </main>
            </div>
        </div>
    );
}

export default App;
