import imgSalaDeConferencias from './assets/sala-de-conferencias.jpg';
import imgAuditorio from './assets/auditorio.jpg';
import imgSalaDePresentaciones from './assets/sala-de-presentaciones.jpg';
import imgSalaDeReuniones from './assets/sala-de-reuniones.jpg';
import imgSalaDeReunionesPequena from './assets/sala-de-reuniones-pequena.jpg';
import imgProyector from './assets/proyector.jpg';
import imgAltavoces from './assets/altavoces.jpg';
import imgMicrofono from './assets/microfono.jpg';
import imgPizarra from './assets/pizarra.jpg';
import imgSenales from './assets/senales.jpg';

export { imgSalaDeConferencias, imgAuditorio, imgSalaDePresentaciones, imgSalaDeReuniones, imgSalaDeReunionesPequena, imgProyector, imgAltavoces, imgMicrofono, imgPizarra, imgSenales};

const Images = () => {
  return (
    <div
      style={{
        margin: '5em auto',
        padding: '5em',
        display: 'grid',
        textAlign: 'center',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3em',
        outline: '1px solid black',
      }}
    >
      <p>
        <h2>Sala de conferencias</h2>
        <img src={imgSalaDeConferencias} alt="Sala de conferencias" width="250" />
      </p>
      <p>
        <h2>Auditorio</h2>
        <img src={imgAuditorio} alt="Auditorio" width="250" />
      </p>
      <p>
        <h2>Sala de presentaciones</h2>
        <img src={imgSalaDePresentaciones} alt="Sala de presentaciones" width="250" />
      </p>
      <p>
        <h2>Sala de reuniones</h2>
        <img src={imgSalaDeReuniones} alt="Sala de reuniones" width="250" />
      </p>
      <p>
        <h2>Sala de reuniones pequeña</h2>
        <img src={imgSalaDeReunionesPequena} alt="Sala de reuniones pequeña" width="250" />
      </p>
      <p>
        <h2>Proyector</h2>
        <img src={imgProyector} alt="Proyector" width="250" />
      </p>
      <p>
        <h2>Altavoces</h2>
        <img src={imgAltavoces} alt="Altavoces" width="250" />
      </p>
      <p>
        <h2>Micrófono</h2>
        <img src={imgMicrofono} alt="Micrófono" width="250" />
      </p>
      <p>
        <h2>Pizarra</h2>
        <img src={imgPizarra} alt="Pizarra" width="250" />
      </p>
      <p>
        <h2>Señales</h2>
        <img src={imgSenales} alt="Señales" width="250" />
      </p>
    </div>
  );
};

export default Images;
