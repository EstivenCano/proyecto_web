<template>
  <div>
    <b-container fluid="md">
      <br />
      <center>
        <h1>Filtrado de Convenios</h1>
      </center>
      <hr />

      <b-form action="javascript:void(0)" @submit="cargarLStipo()" @reset="onReset" id="f1">
        <b-form-group id="tipo" label="Filtrar por tipo de convenio:" label-for="filtro1">
          <b-form-select
            id="tipo_convenio"
            v-model="convenio.tipo_convenio"
            :options="tipos_convenio"
            required
          ></b-form-select>
        </b-form-group>

        <center>
          <b-button size="sm" type="submit" variant="success">Filtrar por tipo de Convenio</b-button>
        </center>
      </b-form>
      <hr />

      <b-form action="javascript:void(0)" @submit="cargarLSpais()" @reset="onReset" id="f2">
        <b-form-group id="pais" label="Filtrar por País:" label-for="filtro2">
          <b-form-select
            id="id_pais"
            v-model="pais.id"
            :options="paises"
            required
          ></b-form-select>
        </b-form-group>

        <center>
          <b-button size="sm" type="submit" variant="success">Filtrar por País</b-button>
        </center>
      </b-form>
      <hr />

      <b-form action="javascript:void(0)" @submit="cargarLSentidad()" @reset="onReset" id="f3">
        <b-form-group id="entidad" label="Filtrar por Entidad:" label-for="filtro3">
          <b-form-select
            id="id_entidad"
            v-model="entidad.id"
            :options="entidades"
            required
          ></b-form-select>
        </b-form-group>

        <center>
          <b-button size="sm" type="submit" variant="success">Filtrar por Entidad</b-button>
        </center>
      </b-form>
      <hr />

      <b-table striped hover :items="lista_convenios" :fields="fields1" v-if="cargada1">
        <template v-slot:cell(acciones)="row">
          <b-button size="sm" @click="cargarConvenio(row)" class="mr-2">Divulgar</b-button>
        </template>
      </b-table>

      <b-table striped hover :items="lista_convenios" :fields="fields2" v-if="cargada2">
        <template v-slot:cell(acciones)="row">
          <b-button size="sm" @click="cargarConvenio(row)" class="mr-2">Divulgar</b-button>
        </template>
      </b-table>

      <b-table striped hover :items="lista_convenios" :fields="fields3" v-if="cargada3">
        <template v-slot:cell(acciones)="row">
          <b-button size="sm" @click="lsDatosCorreo(row)" class="mr-2"
            >Divulgar</b-button
          >
        </template>
      </b-table>
      <br />
    </b-container>
  </div>
</template>

<script src="@/assets/listaConvenios.js" />
