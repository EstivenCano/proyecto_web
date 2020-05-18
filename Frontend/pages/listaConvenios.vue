<template>
  <div>
    <b-container fluid="md">
      <br />
      <center>
        <h1>Filtrado de Convenios</h1>
      </center>
      <hr />

      <b-form action="javascript:void(0)" @submit="cargarConvenio()" @reset="onReset">
        <b-form-group label="Filtrar por tipo de convenio:" label-for="filtro1" v-if="!enEdicion">
          <b-form-input
            class="form-control"
            type="number"
            v-model="tarea.id"
            placeholder="Ingrese ID de la tarea"
            id="id"
            required
            v-if="!enEdicion"
          />
        </b-form-group>

        <center>
        <b-button size="sm" type="submit" variant="success" v-if="!enEdicion">Cargar Lista 1</b-button>
        </center> 
      </b-form>
      <br />

      <b-table striped hover :items="lista_convenios" :fields="fields" v-if="cargada">
        <template v-slot:cell(acciones)="row">
          <b-button size="sm" @click="cargarConvenio(row)" class="mr-2">Divulgar</b-button>
        </template>
      </b-table>
      <hr />
      <br />
      <hr />
    </b-container>
  </div>
</template>

<script src="@/assets/listaConvenios.js" />