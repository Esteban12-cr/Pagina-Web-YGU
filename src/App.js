import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Abogada from './components/Abogada/abogada';
import yuli from './assets/yuli.jpg';
import Texto from './components/Maintext/mainText';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
        
      <header className="header">
        <Navbar />
      </header>

      <div className="contenido-principal">
       
        <section id="inicio">
          <div className="mainText">
            <Texto
              titulo="Bienvenidos a la página de Yuli, tu abogada de confianza"
              parrafo="En esta página encontrarás información sobre mis servicios legales, mi experiencia y cómo puedo ayudarte con tus necesidades legales. Estoy comprometida a brindarte asesoramiento legal de calidad y a luchar por tus derechos. ¡Explora mi sitio para conocer más sobre mí y cómo puedo asistirte!"
            />
          </div>
        </section>


      

        
        <section id="abogada">
          <div className="abogadas-container">
            <Abogada
              nombre="Yuli"
              descripcion="Abogada especializada en derecho civil, penal y laboral."
              imagen={yuli}
              especialidades={['Derecho Civil', 'Derecho Penal', 'Derecho Laboral']}
            />
          </div>
        </section>
      </div>

     
      <section id="footer">
        <footer>
          <Footer />
        </footer>
      </section>
    </div>
  );
}

export default App;
