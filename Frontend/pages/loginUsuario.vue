<template>
  <div>
    <b-container fluid="md">
      <br/>
      <center>
        <h1>Login Usuario</h1>
        <!-- Imagen decorativa-->
        <img
          src="https://www.coordinadora.com/wp-content/uploads/sidebar_usuario-corporativo.png"
          fluid
          alt="Responsive image"
          height="100px"
          width="100px"
        />
      </center>
      <hr/>
      <!-- Formulario con los parametros indicados -->
      <b-form action="javascript:void(0)" @submit="ingresar()">
        <!-- Opciones dentro del formulario -->
        <b-form-group label="Usuario:" label-for="user">
          <b-form-input
            class="form-control"
            type="number"
            v-model="data.user"
            placeholder="Ingrese su usuario"
            id="user"
            required         
          />
        </b-form-group>

        <b-form-group label="Contraseña:" label-for="password">
          <b-form-input
            class="form-control"
            type="password"
            v-model="data.password"
            placeholder=" Ingrese su contraseña"
            id="password"
            required
          />
        </b-form-group>
        <center>
        <!-- Botones agrupados -->
        <b-button type="submit" variant="primary">Ingresar</b-button>
        </center> 
      </b-form><br>

      <hr/>
      <br/>

    </b-container>
  </div>
</template>

<script src="@/assets/loginUsuario.js"/>
