# Gestión de Movilidad

Este proceso tiene diversos momentos:
1. Mostrar opciones de consulta (pasante: estudiante UdeM, externos y profesores)
a. Por tipo de convenio, entidad participante, país
b. Opción de consulta gráfica (por ubicación en mapa, x país)
2. Generar opciones de divulgación de becas/ayudas de movilidad a listas de correo de estudiantes y/o profesores según sea el caso
3. Mostrar listados de convenios según selección.
4. Opciones de generación, impresión y exportación de reportes de consultas
5. Aplicación a un convenio seleccionado
a. Registro de info básica personal (según formulario)
b. Registro de info específica, por tipo de convenio (según formulario)
c. Gestión de archivos adjuntos, soportes de la solicitud
6. Revisión de aplicaciones
a. revisión de ‘aplicación’
b. registro de observaciones
c. selección de concepto (aprobado o rechazado)
d. notificación a actor

# Desarrolladores
1. Joan Cadena Paternina - Estudiante de ingenieria de sistemas de 5to semestre - innmortal_20@live.com
2. Sebastian Diez - Estudiante de ingenieria de sistemas de 5to semestre- sebasdiez84@gmail.com
3. Estiven Cano - Estudiante de ingenieria de sistemas de 5to semestre - estivencano99@gmail.com

# Funcionalidades
- [A] CRUD de aplicación a convenios.
```js
  {
    id: "",
    nombre: "",
    correo: "",
    telefono: "",
    convenio: null,
  }
  ```
- [B] CRUD de tareas 
  ```js
  {
    id: "",
    nombre: "",
    descripcion: "",
    estado: []
  }
  ```
- [C] Listado de convenio con filtros y posibilidad para enviar a varios correos.

