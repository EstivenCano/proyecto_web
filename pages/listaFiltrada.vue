<template>
  <div>
    <b-container fluid="md">
      <center>
        <h1>Filtro de Convenios</h1>
      </center>
      <br />

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Pais:" label-for="input-1">
          <b-form-select v-model="selected1" :options="options1"></b-form-select>
          <br />
          <b-button size="sm" @click="listarConveniosPais(selected1)" variant="dark">Buscar convenios por pais</b-button>
        </b-form-group>

        <b-form-group id="input-group-2" label="Ciudad:" label-for="input-2">
          <b-form-select v-model="selected1" class="mb-1">
            <b-form-select-option-group label="Ciudades de colombia">
              <b-form-select-option :value=" 'colombia/medellin' ">Medellín</b-form-select-option>
              <b-form-select-option :value=" 'colombia/bogota' ">Bogotá</b-form-select-option>
            </b-form-select-option-group>
            <b-form-select-option-group label="Ciudades de alemania">
              <b-form-select-option :value=" 'alemania/munich' ">Múnich</b-form-select-option>
              <b-form-select-option :value=" 'alemania/berlin' ">Berlín</b-form-select-option>
            </b-form-select-option-group>
          </b-form-select>
          <b-button size="sm" @click="listarConveniosCiudad(selected1)" variant="dark">_Buscar convenios por ciudad</b-button>
        </b-form-group>

        <b-form-group id="input-group-3" label="Universidad:" label-for="input-3">
          <b-form-select v-model="selected2" class="mb-1">
            <b-form-select-option-group label="Universidades ubicadas en Colombia-Medellín">
              <b-form-select-option :value=" 'udem' ">Universidad de Medellín</b-form-select-option>
              <b-form-select-option :value=" 'unal-mede' ">Universidad Nacional de Medellín</b-form-select-option>
            </b-form-select-option-group>
            <b-form-select-option-group label="Universidades ubicadas en Colombia-Bogota">
              <b-form-select-option :value=" 'unal-bog' ">Universidad Nacional de Bogota</b-form-select-option>
              <b-form-select-option :value=" 'uniandes' ">Universidad de los Andes</b-form-select-option>
            </b-form-select-option-group>
          </b-form-select>
          <b-button size="sm" @click="listarConveniosUniversidad(selected2)" variant="dark">_Buscar convenios por universidaD</b-button>
        </b-form-group>

        <div class="mt-1">
          Filtrado por ubicación:
          <strong>{{ selected1 }}</strong>
        </div>
        <div class="mt-2">
          Filtrado por universidad:
          <strong>{{ selected2 }}</strong>
        </div>
      </b-form>
    </b-container><br>
    <b-table striped hover :items="lista_convenios">
      <template v-slot:cell(acciones)="">
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected1: null,
      options1: [
        { value: null, text: "Selecciona un pais" },
        { value: "colombia", text: "Colombia" },
        { value: "usa", text: "Estados Unidos" },
        { value: "argentina", text: "Argentina" },
        { value: "alemania", text: "Alemania", disabled: true }
      ],

      convenio: {
        id: "",
        pais: "",
        ciudad: "",
        universidad: "",
        descripcion: ""
      },
      lista_convenios: [
        {
          id: "0001",
          pais: "colombia",
          ciudad: "medellin",
          universidad: "udem",
          descripcion:
            "este convenio te da una beca del 10 porciento por ser extranjero"
        }
      ],

      show: true
    };
  },
  methods: {
    listarConveniosPais(pais){
      this.listarConveniosPais((items)=> items.pais.includes(this.pais));
    },
    listarConveniosCiudad(ciudad){
      this.listarConveniosPais((items)=> items.ciudad.includes(this.ciudad));
    },
    listarConveniosUniversidad(universidad){
      this.listarConveniosPais((items)=> items.universidad.includes(this.universidad));
    }
  }
};
</script>