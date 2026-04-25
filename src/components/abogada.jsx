import '../Styles/abogada.css';

function abogada({ nombre, imagen, descripcion, especialidades }){
  return (
    <section className="abogada-container">

      <div className="abogada-img-box">
        <img src={imagen} alt={nombre} />
      </div>

      <div className="abogada-info">
        <h2>{nombre}</h2>

        <p className="abogada-descripcion">
          {descripcion}
        </p>

        <ul>
          {especialidades.map((esp, i) => (
            <li key={i}>{esp}</li>
          ))}
        </ul>
      </div>

    </section>
  );
}

export default abogada;