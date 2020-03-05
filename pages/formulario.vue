<template>
  <div>
    <b-container fluid="md">
      <center>
        <h1>Gestión de Tareas</h1>
      </center>
      <br />
      <!-- Formulario con los parametros indicados -->
      <b-form action="javascript:void(0)" @submit="crearTarea()" @reset="onReset" >
        <!-- Opciones dentro del formulario -->
        <b-form-group label="ID:" label-for="id">
          <b-form-input
            class="form-control"
            type="text"
            v-model="tarea.id"
            placeholder="Ingrese ID de la tarea"
            id="id"
          />
        </b-form-group>

        <b-form-group label=" Nombre:" label-for="nombre">
          <b-form-input
            class="form-control"
            type="text"
            v-model="tarea.nombre"
            placeholder=" Ingrese Nombre de la tarea"
            id="nombre"
          />
        </b-form-group>

        <b-form-group label=" Descripción:" label-for="descripcion">
          <b-form-input
            class="form-control"
            type="text"
            v-model="tarea.descripcion"
            placeholder="Ingrese descripción de la tarea"
            id="descripcion"
          />
        </b-form-group>
        <!-- b-form-select para los estados de tareas -->
        <b-form-group label=" Estado:" label-for="estado">
          <b-form-select class="form-control" v-model="tarea.estado" :options="estado" id="estado" />
        </b-form-group>

        <!-- Botones agrupados -->
        <b-button type="submit" variant="primary" v-if="!enEdicion">Crear Tarea</b-button>
        <b-button @click="actualizarTarea()" variant="primary" v-else>Actualizar Tarea</b-button>
        <b-button type="reset" variant="danger">Limpiar</b-button>
      </b-form><br>

      <!-- Tabla de tareas -->
      <b-table striped hover :items="lista_tareas">
        <template v-slot:cell(acciones)="row">
          <!-- Botones para editar y eliminar tareas de la lista -->
          <b-button size="sm" @click="cargarTarea(row)" class="mr-2">Modificar</b-button>
          <b-button size="sm" @click="eliminarTarea(row)" class="mr-2">Eliminar</b-button>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script src="@/assets/formulario.js"/>
