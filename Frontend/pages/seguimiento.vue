<template>
  <div>
    <b-container fluid="md">
      <br />
      <center>
        <h1>Seguimiento de Aplicación</h1>
      </center>
      <hr />
      <!-- Formulario con los parametros indicados -->
      <b-form action="javascript:void(0)" @submit="crearSeg()" @reset="onReset">
        <!-- Opciones dentro del formulario -->
        <b-form-group label="Codigo:" label-for="id" v-if="!enEdicion">
          <b-form-input
            class="form-control"
            type="number"
            v-model="seguimiento.id"
            placeholder="Ingrese ID del seguimiento"
            id="id"
            required
            v-if="!enEdicion"
          />
        </b-form-group>

        <b-form-group label="Codigo de Aplicación:" label-for="id_app" v-if="!enEdicion">
          <b-form-input
            class="form-control"
            type="number"
            v-model="seguimiento.id_aplicacion"
            placeholder="ID de la aplicación seleccionada"
            id="id_app"
            required 
            disabled
            v-if="!enEdicion"
          />
        </b-form-group>

        <b-form-group label=" Fecha:" label-for="fecha">
          <b-form-input
            class="form-control"
            type="date"
            v-model="seguimiento.fecha"
            placeholder=" Ingrese fecha del seguimiento"
            id="fecha"
            required
          />
        </b-form-group>

        <b-form-group label=" Comentario:" label-for="comentario">
          <b-form-textarea
            class="form-control"
            v-model="seguimiento.comentario"
            rows= "3"
            max-rows="7"
            placeholder="Ingrese comentario del  seguimiento"
            id="comentario"
            required
          />
        </b-form-group>

        <b-form-group id="estado" label="Estado de Aplicación:" label-for="estado">
          <b-form-select id="estado" v-model="seguimiento.estado" :options="estados" required></b-form-select>
        </b-form-group>

        <!-- Botones agrupados -->
        <b-button type="submit" variant="primary" v-if="!enEdicion">Crear seguimiento</b-button>
        <b-button @click="actualizarSeg()" variant="success" v-else>Actualizar seguimiento</b-button>
        <b-button @click="cargarLSA()" variant="danger">Cargar Aplicaciones</b-button>
        <b-button @click="cargarLS()" variant="success">Cargar Seguimientos</b-button>
      </b-form>
      <br />

      <center>
        <h3 v-if="cargada1">Lista de aplicaciones</h3>
      </center>
      <!-- Lista de aplicaciones -->
      <b-table striped hover :items="lista_aplicaciones" :fields="fields2" v-if="cargada1">
        <template v-slot:cell(acciones)="row">
          <!-- Botones para editar seguimientos de la lista -->
          <b-button size="sm" @click="cargarId(row)" class="mr-2">Realizar Seguimiento</b-button>
        </template>
      </b-table>
      <hr />
      <br />

      <center>
        <h3 v-if="cargada">Lista de segumientos</h3>
      </center>
      <!-- lista de seguimientos -->
      <b-table striped hover :items="lista_seguimientos" :fields="fields" v-if="cargada">
        <template v-slot:cell(acciones)="row">
          <!-- Botones para editar seguimientos de la lista -->
          <b-button size="sm" @click="cargarSeg(row)" class="mr-2">Modificar</b-button>
        </template>
      </b-table>
      <hr />
      <br />
      <hr />

      <center>
        <h1>Eliminación de seguimientos</h1>
      </center>
      <br />
      <!-- Formulario para eliminar -->
      <b-form action="javascript:void(0)" @submit="eliminarSeg()" @reset="onReset">
        <b-form-group label="Ingrese ID de la seguimiento a eliminar" label-for="id">
          <b-form-input
            class="lbl-control"
            type="number"
            v-model="seguimiento.id"
            placeholder="¡Solo sirve para Eliminar!"
            id="id"
            required
          />
        </b-form-group>
        <!-- Botones agrupados -->
        <b-button type="submit" variant="danger" v-if="!enEdicion">Eliminar seguimiento</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script src="@/assets/seguimiento.js"/>
