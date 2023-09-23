import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [response, setResponse] = useState(null);

  const handleClick = async () => {
    const url = "https://appointment.ena.com.pa/api/Informacion/recibir";
    const data = {
      Informacion: {
        Name: "vane",
        Apellido: "sarmiento",
        Cedula: "171985331",
        Email: "hduranc24@gmail.com",
        Celular: "69271957",
        Telefono: "69271957",
        Placa: "MI2001",
        Corregimiento: "NA",
        Edificio: "NA",
        Calle: "NA",
        Casa: "NA",
        Tag: "NA",
        Color: "NA",
        Cuenta: "NA",
        Modelo: "NA",
        Stiker: "NA",
        ValorJson: "NA",
        PolizaAuto: "NA",
        RazonSocial: "NA",
        CopiaCedulaJ: "NA",
        CopiaCedulaN: "NA",
        ValorJsonOld: "NA",
        AvisoOperacion: "NA",
        NombreComercial: "NA",
        RegistroVehicular: "NA",
        RepresentanteLegal: "NA",
        CopiaAvisoOperacion: "NA",
        DocumentoAutorizacion: "NA",
      },
      Comentario: {
        Mensaje: "esto fue vanessa desde azure",
      },
    };

    const config = {
      auth: {
        username: "gtena3tech",
        password: "gtena3tech2023..",
      },
    };

    try {
      const response = await axios.post(url, data, config);
      setResponse(response.data);
    } catch (error) {
      console.error("Error al enviar esta vaina:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Enviar Solicitud</button>
        {response && (
          <div>
            <p>Respuesta del servidor:</p>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
