<template>
  <div>
    <b-container fluid="md">
      <center>
        <h1>Filtro de Convenios</h1>
      </center>
      <br />

      <b-form>

        <b-row>
          <b-col md="5">
            <b-form-input type="text" v-model="pais" :state="comprobarExistenciaDelPais" placeholder="Ingresa el pais del convenio que quieres consultar..."> </b-form-input>
            <b-button size="sm" @click="comprobarExistenciaDelPais(pais)" variant="dark"> Buscar convenios por pais</b-button>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col md="5">
            <b-form-input type="text" v-model="ciudad" :state="comprobarExistenciaDeLaCiudad" placeholder="Ingresa la ciudad del convenio que quieres consultar..."> </b-form-input>
            <b-button size="sm" @click="listarConveniosCiudad(ciudad)" variant="dark"> Buscar convenios por ciudad</b-button>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col md="5">
            <b-form-input type="text" v-model="entidad" :state="comprobarExistenciaDeLaEntidad" placeholder="Ingresa el nombre de la entidad que quieres consultar..."> </b-form-input>
            <b-button size="sm" @click="listarConveniosEntidad(entidad)" variant="dark"> Buscar convenios por entidad</b-button>
          </b-col>
        </b-row>
        <br>


        <p>Filtrado por Pais: {{pais}}</p>
        <p>Filtrado por Ciudad: {{ciudad}}</p>
        <p>Filtrado por Entidad: {{entidad}}</p>

      </b-form>
    </b-container><br>


    <b-table striped hover :items="lista_convenios">
      <template v-slot:cell(acciones)="">
      </template>
    </b-table>
  </div>
</template>

<script src="@/assets/listaFiltrada.js" />