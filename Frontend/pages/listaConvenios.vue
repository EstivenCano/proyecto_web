<template>
  <div>
    <b-container fluid="md" id="container">
      <br />
      <div id="titlecontent">
        CONVENIOS
      </div>
      <hr />
      <b-form
        action="javascript:void(0)"
        @submit="cargarLStipo()"
        @reset="onReset"
        id="f1"
      >
        <b-form-group
          id="tipo"
          label="Filtrar por tipo de convenio:"
          label-for="filtro1"
        >
          <b-form-select
            id="tipo_convenio"
            v-model="convenio.tipo_convenio"
            :options="tipos_convenio"
            required
          ></b-form-select>
        </b-form-group>

        <center>
          <b-button size="sm" type="submit" variant="success"
            >Filtrar por tipo de Convenio</b-button
          >
        </center>
      </b-form>
      <hr />

      <b-form
        action="javascript:void(0)"
        @submit="cargarLSpais()"
        @reset="onReset"
        id="f2"
      >
        <b-form-group id="pais" label="Filtrar por País:" label-for="filtro2">
          <b-form-select
            id="id_pais"
            v-model="pais.id"
            :options="paises"
            required
          ></b-form-select>
        </b-form-group>

        <center>
          <b-button size="sm" type="submit" variant="success"
            >Filtrar por País</b-button
          >
        </center>
      </b-form>
      <hr />

      <b-form
        action="javascript:void(0)"
        @submit="cargarLSentidad()"
        @reset="onReset"
        id="f3"
      >
        <b-form-group
          id="entidad"
          label="Filtrar por Entidad:"
          label-for="filtro3"
        >
          <b-form-select
            id="id_entidad"
            v-model="entidad.id"
            :options="entidades"
            required
          ></b-form-select>
        </b-form-group>

        <center>
          <b-button size="sm" type="submit" variant="success"
            >Filtrar por Entidad</b-button
          >
        </center>
      </b-form>

      <hr />

      <div id="titlecontent">
        LISTA DE CONVENIOS
      </div>

      <hr />

      <b-table
        striped
        hover
        responsive
        bordered
        :items="lista_convenios"
        :fields="fields1"
        v-if="cargada1"
      >
        <template v-slot:cell(acciones)="row">
          <b-button
            size="sm"
            @click="lsDatosCorreo(row)"
            class="mr-2"
            variant="primary"
            >Divulgar</b-button
          >
          <b-button
            size="sm"
            @click="enviarCookies(row)"
            class="mr-2"
            variant="success"
            >Aplicar</b-button
          >
        </template>
      </b-table>

      <b-table
        striped
        hover
        responsive
        bordered
        :items="lista_convenios"
        :fields="fields2"
        v-if="cargada2"
      >
        <template v-slot:cell(acciones)="row">
          <b-button
            size="sm"
            @click="lsDatosCorreo(row)"
            class="mr-2"
            variant="primary"
            >Divulgar</b-button
          >
          <b-button
            size="sm"
            @click="enviarCookies(row)"
            class="mr-2"
            variant="success"
            >Aplicar</b-button
          >
        </template>
      </b-table>

      <b-table
        striped
        hover
        responsive
        bordered
        :items="lista_convenios"
        :fields="fields3"
        v-if="cargada3"
      >
        <template v-slot:cell(acciones)="row">
          <b-button
            size="sm"
            @click="lsDatosCorreo(row)"
            class="mr-2"
            variant="primary"
            >Divulgar</b-button
          >
          <b-button
            size="sm"
            @click="enviarCookies(row)"
            class="mr-2"
            variant="success"
            >Aplicar</b-button
          >
        </template>
      </b-table>
      <br />
      <b-modal ref="my-modal" hide-footer title="Divulgación de convenio">
        <div class="d-block text-center">
          <b-form-group
            id="input-group-1"
            label="Correos Electrónicos:"
            label-for="input-1"
            description="Separados por ',' (example@gmail.com,another@gmail.com)"
          >
            <b-form-input
              id="correos"
              required
              placeholder="Ingresa los correos"
            ></b-form-input>
          </b-form-group>
        </div>
        <b-button
          class="mt-2"
          variant="outline-success"
          block
          @click="enviarCorreo"
          >Enviar</b-button
        >
        <b-button
          class="mt-3"
          variant="outline-danger"
          block
          @click="ocultarModal"
          >Cerrar</b-button
        >
      </b-modal>
    </b-container>
  </div>
</template>

<script src="@/assets/listaConvenios.js" />

<style>
#titlecontent {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  font-family: Oswald, sans-serif;
  font-size: 20px;
  color: #076a94;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  align-content: center;
  font-weight: bold;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#container {
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 30px;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  box-shadow: -7px 7px 26px 0 #969696;
}
</style>
