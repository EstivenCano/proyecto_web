<template>

  <div>
  

  <b-card>
    <b-card-text>
      Formulario
    </b-card-text>

   <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Correo Electronico:"
        label-for="input-1"
        description="Este correo no sera compartido."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Ingresar correo"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Ingresar nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Tipo convenio:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
  
      </b-form-group>

      <b-button type="submit" variant="primary">Aceptar</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>
    <b-card class="mt-3" header="Vista previa">
      <pre class="m-0">{{ form }}</pre>
    </b-card>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>

 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Seleciona una', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>