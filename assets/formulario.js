/** Codigo .js para la pagina aplicacion.vue */
export default {
    data() {
        return {
            /** Determina si la aplicacion se encuentra en estado de edicion */
            enEdicion: false,
            /** Array de tareas */
            lista_tareas: [
                
            ],
            /** Parametros de formulario */
            tarea: {
                id: "",
                nombre: "",
                descripcion: "",
                acciones: true
            },
            /** Opciones de estado en la lista desplegable */
            estado: [
                { text: "Seleccione estado de la tarea", value: null },
                "Activa",
                "Inactiva"
            ],
            show: true
        };
    },
    /** Metodos */
    methods: {
        /** Limpia los campos del formulario */
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.tarea.id = "";
            this.tarea.nombre = "";
            this.tarea.descripcion = "";
            this.tarea.estado = null;

        },
        /** Almacena los datos obtenidos del formulario en un objeto aplicacion y lo guarda en el array */
        crearTarea() {
            this.lista_tareas.push(this.tarea);
            this.tarea = {
                id: "",
                nombre: "",
                descripcion: "",
                estado: null,
                acciones: true
            };
        },
        /** Busca la posicion del objeto dentro del array y lo elimina */
        eliminarTarea({ item }) {
            let posicion = this.lista_tareas.findIndex(tarea => tarea.id == item.id);
            this.lista_tareas.splice(posicion, 1);
        },
        /** Llena los campos del formulario con los datos de la aplicacion para luego ser editados, segun la fila
    en que se encuentre */
        cargarTarea({ item }) {
            let aux = this.lista_tareas.find(tarea => tarea.id == item.id);
            this.enEdicion = true;
            this.tarea = Object.assign({}, aux);
        },
        /** Toma la posicion de la aplicacion en el array y lo reemplaza por el objeto modificado */
        actualizarTarea() {
            let posicion = this.lista_tareas.findIndex(
                tarea => tarea.id == this.tarea.id
            );
            this.lista_tareas.splice(posicion, 1, this.tarea);
            this.tarea = {
                id: "",
                nombre: "",
                descripcion: "",
                estado: null,
                acciones: true
            };
        }
    }
};