<template>
  <div>
    <b-container fluid="md">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group label="ID:" label-for="id">
          <b-form-input
            class="form-control"
            type="text"
            v-model="form.id"
            placeholder="Ingrese ID de la tarea"
            id="id"
          />
        </b-form-group>

        <b-form-group label=" Nombre:" label-for="nombre">
          <b-form-input
            class="form-control"
            type="text"
            v-model="form.nombre"
            placeholder=" Ingrese Nombre de la tarea"
            id="nombre"
          />
        </b-form-group>

        <b-form-group label=" Descripción:" label-for="desc">
          <b-form-input
            class="form-control"
            type="text"
            v-model="form.desc"
            placeholder="Ingrese descripción de la tarea"
            id="desc"
          />
        </b-form-group>

        <b-form-group label=" Estado:" label-for="estado">
          <b-form-input
            class="form-control"
            type="number"
            v-model="form.estado"
            placeholder="Ingrese estado de la tarea (1:acitva/2:inactiva)"
            id="estado"
          />
        </b-form-group>

        <b-button type="submit" variant="primary">Crear Tarea</b-button>
        <b-button type="reset" variant="danger">Limpiar</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: "",
        nombre: "",
        desc: "",
        estado: null
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.id = "";
      this.form.nombre = "";
      this.form.desc = "";
      this.form.estado = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>