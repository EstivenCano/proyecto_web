<template>
  <div>
    <b-container fluid="md">
      <br/>
      <center>
        <h1>Gestión de Tareas</h1>
        <!-- Imagen decorativa-->
        <img
          src="https://pngimage.net/wp-content/uploads/2018/06/formulario-png-5.png"
          fluid
          alt="Responsive image"
          height="100px"
          width="100px"
        />
      </center>
      <hr/>
      <!-- Formulario con los parametros indicados -->
      <b-form action="javascript:void(0)" @submit="crearTarea()" @reset="onReset" >
        <!-- Opciones dentro del formulario -->
        <b-form-group label="Codigo:" label-for="id" v-if="!enEdicion">
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

        <b-form-group label=" Nombre:" label-for="nombre">
          <b-form-input
            class="form-control"
            type="text"
            v-model="tarea.nombre"
            placeholder=" Ingrese Nombre de la tarea"
            id="nombre"
            required
          />
        </b-form-group>

        <b-form-group label=" Descripción:" label-for="descripcion">
          <b-form-textarea
            class="form-control"
            v-model="tarea.descripcion"
            rows= "3"
            max-rows="7"
            placeholder="Ingrese descripción de la tarea"
            id="descripcion"
            required
          />
        </b-form-group>

        <b-form-group label=" Modulo:" label-for="modulo">
          <b-form-input
            class="form-control"
            type="number"
            v-model="tarea.modulo"
            placeholder="Ingrese el modulo al que pertenece la tarea"
            id="modulo"
            required
          />
        </b-form-group>

        <!-- Botones agrupados -->
        <b-button type="submit" variant="primary" v-if="!enEdicion">Crear Tarea</b-button>
        <b-button @click="actualizarTarea()" variant="success" v-else>Actualizar Tarea</b-button>
        <b-button @click="cargarLS()" variant="danger" v-if="!enEdicion">Cargar Lista</b-button>
        <b-button @click="cancelarEdicion()" v-if="enEdicion" variant="danger">Cancelar</b-button>
      </b-form><br>

      <!-- Tabla de tareas -->
      <b-table striped hover :items="lista_tareas" :fields="fields" v-if="cargada">
        <template v-slot:cell(acciones)="row">
          <!-- Botones para editar tareas de la lista -->
          <b-button size="sm" @click="cargarTarea(row)" class="mr-2">Modificar</b-button>
        </template>
      </b-table>
      <hr/>
      <br/>
      <hr/>

<center>
          <h1>Eliminación de Tareas</h1>
        </center>
        <br />
        <!-- Formulario para eliminar -->
        <b-form action="javascript:void(0)" @submit="eliminarTarea()" @reset="onReset">
          <b-form-group label="Ingrese ID de la tarea a eliminar" label-for="id">
            <b-form-input
              class="lbl-control"
              type="number"
              v-model="tarea.id"
              placeholder="¡Solo sirve para Eliminar!"
              id="id"
              required
            />
          </b-form-group>
          <!-- Botones agrupados -->
          <b-button type="submit" variant="danger" v-if="!enEdicion">Eliminar Tarea</b-button>
        </b-form>

    </b-container>
  </div>
</template>

<script src="@/assets/tarea.js"/>
