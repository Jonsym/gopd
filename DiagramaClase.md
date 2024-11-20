```mermaid
classDiagram
    class Usuario {
        +int idUsuario
        +String nombre
        +String email
        +String password
        +String rol
        +iniciarSesion()
        +recuperarContraseña()
        +cerrarSesion()
    }

    class Empleado {
        +int idEmpleado
        +String nombre
        +String apellido
        +String puesto
        +Date fechaContratacion
        +agregarEmpleado()
        +modificarEmpleado()
        +eliminarEmpleado()
        +generarReporte()
    }

    class SecretarioGeneral {
        +gestionarEmpleados()
        +generarReporteEmpleados()
    }

    class SecretarioFinanzas {
        +modificarFinanzas()
        +visualizarDatosFinancieros()
    }

    class SecretarioTrabajoConflictos {
        +registrarIncidente()
        +modificarEstadoIncidente()
        +generarInformeIncidentes()
    }

    class Asistente {
        +actualizarBaseDatos()
        +generarInformes()
        +gestionarEmpleados()
        +gestionarIncidentes()
    }

    class Incidente {
        +int idIncidente
        +String descripcion
        +String estado
        +Date fecha
        +registrarIncidente()
        +modificarEstadoIncidente()
        +consultarIncidente()
    }

    class Finanzas {
        +int idFinanzas
        +Date fechaModificacion
        +consultarFinanzas()
    }

    class BaseDeDatos {
        +conectar()
        +consultarDatos()
        +modificarDatos()
        +cerrarConexion()
    }

    Usuario <|-- SecretarioGeneral
    Usuario <|-- SecretarioFinanzas
    Usuario <|-- SecretarioTrabajoConflictos
    Usuario <|-- Asistente

    SecretarioGeneral --> Empleado : gestiona
    SecretarioFinanzas --> Finanzas : modifica
    SecretarioTrabajoConflictos --> Incidente : gestiona
    Asistente --> BaseDeDatos : actualiza
    SecretarioTrabajoConflictos --> BaseDeDatos : consulta
    SecretarioGeneral --> BaseDeDatos : consulta
    SecretarioFinanzas --> BaseDeDatos : consulta
