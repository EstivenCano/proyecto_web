<template>
  <div>
    <b-container fluid="md">
      <br>
      <center>
        <h1>Filtro de Convenios</h1>
      </center>
      <br />


      <center>
      <b-form>
        <!-- Busqueda por pais -->
        <b-row>
          <b-col >
            <b-form-input type="text" v-model="pais" :state="comprobarExistenciaDelPais" placeholder="Ingresa el pais del convenio que quieres consultar..."> </b-form-input>
            <b-button size="sm" @click="comprobarExistenciaDelPais(pais)" variant="dark"> Buscar convenios por pais</b-button>
          </b-col>
        </b-row>
        <br>
        <!-- Busqueda por ciudad -->
        <b-row>
          <b-col>
            <b-form-input type="text" v-model="ciudad" :state="comprobarExistenciaDeLaCiudad" placeholder="Ingresa la ciudad del convenio que quieres consultar..."> </b-form-input>
            <b-button size="sm" @click="listarConveniosCiudad(ciudad)" variant="dark"> Buscar convenios por ciudad</b-button>
          </b-col>
        </b-row>
        <br>
        <!-- Busqueda por entidad -->
        <b-row>
          <b-col>
            <b-form-input type="text" v-model="nombre" :state="comprobarExistenciaDeLaEntidad" placeholder="Ingresa el nombre de la entidad que quieres consultar..."> </b-form-input>
            <b-button size="sm" @click="listarConveniosEntidad(nombre)" variant="dark"> Buscar convenios por entidad</b-button>
          </b-col>
        </b-row>
        <br>
      </b-form>
    </center>
    </b-container><br>
    

    <!-- Genera la tabla -->
    <b-table striped hover :items="lista_convenios">
      <template v-slot:cell(acciones)="">
      </template>
    </b-table>
    
  </div>
</template>

<script src="@/assets/listaFiltrada.js" />