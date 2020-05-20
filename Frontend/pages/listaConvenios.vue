<template>
  <div>
    <b-container fluid="md">
      <br />
      <center>
        <h1>Filtrado de Convenios</h1>
      </center>
      <hr />

      <b-form action="javascript:void(0)" @submit="cargarLS()" @reset="onReset" id="f1">
        
        <b-form-group id="estado" label="Filtrar por tipo de convenio:" label-for="filtro1">
          <b-form-select id="tipo_convenio" v-model="convenio.tipo_convenio" :options="tipos_convenio" required></b-form-select>
        </b-form-group>

        <center>
        <b-button size="sm" type="submit" variant="success">Filtrar por tipo de Convenio</b-button>
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