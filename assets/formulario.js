export default {
    data() {
        return {
            enEdicion: false,
            lista_tareas: [
                
            ],
            tarea: {
                id: "",
                nombre: "",
                descripcion: "",
                acciones: true
            },
            estado: [
                { text: "Seleccione estado de la tarea", value: null },
                "Activa",
                "Inactiva"
            ],
            show: true
        };
    },
    methods: {
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.tarea.id = "";
            this.tarea.nombre = "";
            this.tarea.descripcion = "";
            this.tarea.estado = null;

        },
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
        eliminarTarea({ item }) {
            let posicion = this.lista_tareas.findIndex(tarea => tarea.id == item.id);
            this.lista_tareas.splice(posicion, 1);
        },
        cargarTarea({ item }) {
            let aux = this.lista_tareas.find(tarea => tarea.id == item.id);
            this.enEdicion = true;
            this.tarea = Object.assign({}, aux);
        },
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