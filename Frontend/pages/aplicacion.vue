<template>
  <div>
    <!-- Card para delimitar el tamaño del formulario y centrarlo en la pagina -->
    <b-container fluid="md">
      <!-- Centrar contenido -->
      <center>
        <!-- Salto de linea -->
        <br />
        <!-- Titulo principal -->
        <h1 style="font-size:200%;">Formulario de aplicación a convenio</h1>
        <!-- Imagen decorativa sobre formularios -->
        <img
          src="https://pngimage.net/wp-content/uploads/2018/06/formulario-png-5.png"
          fluid
          alt="Responsive image"
          height="100px"
          width="100px"
        />
      </center>

      <!-- Salto de linea -->
      <br />
      <!-- Linea divisora -->
      <hr />
      <br />

      <!-- Formulario con los parametros indicados -->
      <b-form
        action="javascript:void(0)"
        @submit="crearAplicacion"
        @reset="onReset"
        v-if="show"
      >
        <!-- Opciones dentro del formulario -->

        <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
          <b-form-input
            id="nombre"
            v-model="form.nombre"
            required
            placeholder="Ingresar nombre"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-7" label="Apellido:" label-for="input-7">
          <b-form-input
            id="apellido"
            v-model="form.apellido"
            required
            placeholder="Ingresar apellido"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Correo Electronico:"
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
        >
          <b-form-input
            id="id_usuario"
            v-model="form.id_usuario"
            required
            placeholder="Ingresar documento de identidad"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Celular:" label-for="input-5">
          <b-form-input
            id="celular"
            v-model="form.celular"
            required
            placeholder="Ingresar número de celular"
          ></b-form-input>
        </b-form-group>
        <!-- b-form-select para los convenios disponibles -->
        <b-form-group
          id="input-group-3"
          label="Tipo convenio:"
          label-for="input-3"
        >
          <b-form-select
            id="convenio"
            v-model="form.convenio"
            :options="convenios"
            required
          ></b-form-select>
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
        <b-button type="reset" variant="danger">Limpiar</b-button>
      </b-form>
    </b-container>

    <br />
    <center>
      <h3>Lista de aplicaciones</h3>
      <br />
      <!-- Boton para recargar la lista con los datos guardados en el LocalStorage -->
      <b-button @click="recargarAplicaciones()" variant="primary"
        >Recargar aplicaciones</b-button
      >
    </center>
    <br />

    <!-- Tabla de aplicaciones -->
    <b-table striped hover :items="aplicaciones">
      <template v-slot:cell(acciones)="row">
        <!-- Botones para editar y eliminar aplicaciones de la lista -->
        <b-button size="sm" @click="cargarAplicacion(row)" class="mr-2"
          >Modificar</b-button
        >
        <b-button size="sm" @click="eliminarAplicacion(row)" class="mr-2"
          >Eliminar</b-button
        >
      </template>
    </b-table>
  </div>
</template>

<!-- Codigo .js para la pagina aplicacion.vue -->
<script src="@/assets/aplicacion.js" />
