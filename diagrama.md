graph TD
    A[Usuarios] -->|Iniciar Sesión| B[Inicio de Sesión]
    B --> C[Panel Principal]

    C -->|Gestionar Empleados| D[Panel de Empleados]
    C -->|Visualizar y Modificar Finanzas| E[Panel de Finanzas]
    C -->|Gestionar Incidentes Laborales| F[Panel de Incidentes]
    C -->|Gestionar Base de Datos| G[Panel de Asistente]

    D -->|Secretario General / Asistente| H
    E -->|Secretario de Finanzas| I
    F -->|Secretario de Trabajo / Asistente| J
    G -->|Asistente| K
