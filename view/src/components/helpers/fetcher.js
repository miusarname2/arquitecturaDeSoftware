export async function FetcherAllProcess(url, method = "GET", body = {}) {
  if (method == "GET") {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error("Ocurrió un error:", error);
      });
  } else {
    fetch(url, {
      method: method, // Especifica el método POST
      headers: {
        "Content-Type": "application/json", // Define el tipo de contenido, en este caso, JSON
      },
      body: JSON.stringify(body), // Convierte los datos a JSON y colócalos en el cuerpo
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error("Ocurrió un error:", error);
      });
  }
}