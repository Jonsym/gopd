```mermaid
graph TD
    A[Cliente (Navegador Web)] -->|Solicitud HTTP/HTTPS| B[Servidor Web (ReactJS)]
    B -->|Procesar interfaz de usuario| C[Motor PHP]
    C -->|Solicitudes dinámicas| D[Base de Datos (XAMPP)]
    D -->|Recuperar/Modificar datos| C
    C -->|Generar respuesta HTML| B
    B -->|Respuesta HTML| A
