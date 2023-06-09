import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
    <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio
      nombre = {<strong> Shawn Wang </strong>}
      pais= 'Singapur'
      cargo= 'Ingeniera de Software'
      empresa= {<strong> Amazon </strong>}
      testimonio= {<span>Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. <strong>FreeCodeCamp cambió mi vida</strong> </span>}
      imagen= 'shawn'
      />
    
      <Testimonio
      nombre = {<strong> Sarah Chima </strong>}
      pais= 'Nigeria'
      cargo= 'Ingeniera de Software'
      empresa= {<strong> ChatDesk </strong>}
      testimonio={<span><strong>FreeCodeCamp fue la puerta de entrada a mi carrera</strong> como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.</span>}
      imagen= 'sarah'
      />

    <Testimonio
      nombre = 'Emma Bostian'
      pais= 'Suecia'
      cargo= 'Ingeniera de Software'
      empresa= 'Spotify'
      testimonio={<span>Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en <strong>freeCodeCamp me dio las habilidades</strong> y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.</span>}
      imagen= 'emma'
      />
    </div>
    </div>
  );
}

export default App;
