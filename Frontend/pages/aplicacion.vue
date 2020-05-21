<template>
  <div>
    <!-- Card para delimitar el tamaño del formulario y centrarlo en la pagina -->
    <b-container fluid="md" id = "container">
      <br />
      <div id="titlecontent">
        <div>
          FORMULARIO DE APLICACIÓN
        </div>
        <!-- Salto de linea -->
        <br />
      </div>
      <!-- Centrar contenido -->

      <!-- Linea divisora -->
      <hr />

      <!-- Formulario con los parametros indicados -->
      <b-form
        action="javascript:void(0)"
        @submit="guardarAplicacion"
        @reset="onReset"
        v-if="show"
        id="formulario"
      >
        <!-- Opciones dentro del formulario -->

        <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
          <b-form-input
            id="nombre"
            v-model="form.nombre"
            v-facade="'AAAAAAAAAAAAAAAAA'"
            type="text"
            required
            placeholder="Ingresar nombre"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-7" label="Apellido:" label-for="input-7">
          <b-form-input
            id="apellido"
            v-model="form.apellido"
            v-facade="'AAAAAAAAAAAAAAAAA'"
            type="text"
            required
            placeholder="Ingresar apellido"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Correo Electrónico:"
          label-for="input-1"
          description="Este correo no sera compartido."
        >
          <b-form-input
            id="correo"
            v-model="form.correo"
            type="email"
            required
            placeholder="Ingresar correo"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Documento de identidad:"
          label-for="input-6"
          v-if="!enEdicion"
        >
          <b-form-input
            id="id_usuario"
            v-model="form.id_usuario"
            v-facade="'##############'"
            required
            placeholder="Ingresar documento de identidad"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Celular:" label-for="input-5">
          <b-form-input
            id="celular"
            v-model="form.celular"
            type="tel"
            v-facade="'###-###-####'"
            required
            placeholder="Ingresar número de celular"
          ></b-form-input>
        </b-form-group>
        <!-- b-form-select para los convenios disponibles -->
        <b-form-group
          id="input-group-3"
          label="Código de convenio:"
          label-for="input-3"
        >
          <b-form-input
            id="id_convenio"
            v-model="form.id_convenio"
            v-facade="'###########'"
            disabled
            required
            placeholder="Ingresar el codigo del convenio"
          ></b-form-input>
        </b-form-group>

        <!-- Botones agrupados -->
        <b-form-group id="input-group-4"></b-form-group>
        <b-button type="submit" variant="primary" v-if="!enEdicion"
          >Aceptar</b-button
        >
        <b-button
          @click="actualizarAplicacion()"
          variant="primary"
          v-if="enEdicion"
          >Actualizar</b-button
        >
        <b-button type="reset" v-if="!enEdicion" variant="danger"
          >Limpiar</b-button
        >

        <b-button @click="cancelarEdicion()" v-if="enEdicion" variant="danger"
          >Cancelar</b-button
        >
      </b-form>

      <!-- Linea divisora -->
      <hr />

      <div id="titlecontent">
       
          LISTA DE APLICACIONES
  
      </div>

      <br />

      <!-- Tabla de aplicaciones -->
      <b-table striped hover responsive bordered :items="aplicaciones" :fields="fields">
        <template v-slot:cell(acciones)="row">
          <!-- Botones para editar y eliminar aplicaciones de la lista -->
          <b-button
            size="sm"
            @click="modificarAplicacion(row)"
            class="mr-2"
            variant="warning"
            >Modificar</b-button
          >
          <b-button
            size="sm"
            @click="eliminarAplicacion(row)"
            class="mr-2"
            variant="danger"
            >Eliminar</b-button
          >
        </template>
      </b-table>
      <br />
    </b-container>
  </div>
</template>

<!-- Codigo .js para la pagina aplicacion.vue -->
<script src="@/assets/aplicacion.js" />

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
