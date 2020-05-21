<template>
  <div>
    <b-container fluid="md" id= "container">
      <br />

      <div id="titlecontent">
        SEGUIMIENTO DE LA APLICACIÓN
      </div>

      <hr />
      <!-- Formulario con los parametros indicados -->
      <b-form action="javascript:void(0)" @submit="crearSeg()" @reset="onReset">
        <!-- Opciones dentro del formulario -->
        <b-form-group label="Código:" label-for="id" v-if="!enEdicion">
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

        <b-form-group
          label="Código de aplicación:"
          label-for="id_app"
          v-if="!enEdicion"
        >
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
            rows="3"
            max-rows="7"
            placeholder="Ingrese comentario del seguimiento"
            id="comentario"
            required
          />
        </b-form-group>

        <b-form-group
          id="estado"
          label="Estado de Aplicación:"
          label-for="estado"
        >
          <b-form-select
            id="estado"
            v-model="seguimiento.estado"
            :options="estados"
            required
          ></b-form-select>
        </b-form-group>

        <!-- Botones agrupados -->
        <b-button type="submit" variant="primary" v-if="!enEdicion"
          >Crear seguimiento</b-button
        >
        <b-button @click="actualizarSeg()" variant="success" v-else
          >Actualizar seguimiento</b-button
        >
        <b-button @click="cargarLSA()" variant="danger" v-if="!enEdicion"
          >Cargar Aplicaciones</b-button
        >
        <b-button @click="cargarLS()" variant="success" v-if="!enEdicion"
          >Cargar Seguimientos</b-button
        >
        <b-button @click="cancelarEdicion()" v-if="enEdicion" variant="danger"
          >Cancelar</b-button
        >
      </b-form>
      <br />

      <center>
      <div id="titlecontent" v-if="cargada1">
        LISTA DE APLICACIONES
      </div>
      </center>
      <!-- Lista de aplicaciones -->
      <b-table
        striped
        hover
        :items="lista_aplicaciones"
        :fields="fields2"
        v-if="cargada1"
      >
        <template v-slot:cell(acciones)="row">
          <!-- Botones para editar seguimientos de la lista -->
          <b-button size="sm" @click="cargarId(row)" class="mr-2" variant="primary"
            >Realizar Seguimiento</b-button
          >
        </template>
      </b-table>
      <hr />
      <br />

      <center>
      <div id="titlecontent" v-if="cargada">
        LISTA DE SEGUIMIENTOS
      </div>
      </center>
      <!-- lista de seguimientos -->
      <b-table
        striped
        hover
        :items="lista_seguimientos"
        :fields="fields"
        v-if="cargada"
      >
        <template v-slot:cell(acciones)="row">
          <!-- Botones para editar seguimientos de la lista -->
          <b-button size="sm" @click="cargarSeg(row)" class="mr-2" variant="warning"
            >Modificar</b-button
          >
        </template>
      </b-table>
      <hr />
      <br />

      <div id="titlecontent">
        ELIMINACIÓN DE SEGUIMIENTOS
      </div>
      <br />
      <!-- Formulario para eliminar -->
      <b-form
        action="javascript:void(0)"
        @submit="eliminarSeg()"
        @reset="onReset"
      >
        <b-form-group
          label="Ingrese ID del seguimiento a eliminar"
          label-for="id"
        >
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
        <b-button type="submit" variant="danger" v-if="!enEdicion"
          >Eliminar seguimiento</b-button
        >
      </b-form>
      <br />
    </b-container>
  </div>
</template>

<script src="@/assets/seguimiento.js" />

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
