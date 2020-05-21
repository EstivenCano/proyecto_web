<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="danger">
        <img
          src="https://pqrsf.udem.edu.co/img/logo.png"
          fluid
          alt="Universidad de Medellín"
          height="55px"
          width="120px"
        />
        <b-navbar-brand href="#"></b-navbar-brand>
        <b-navbar-brand href>Gestion de Movilidad</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item v-if="admin">|</b-nav-item>
            <b-nav-item :to="{ name: 'tarea' }" v-if="admin">Tareas</b-nav-item>
            <b-nav-item v-if="usuario">|</b-nav-item>
            <b-nav-item :to="{ name: 'aplicacion' }" v-if="usuario">Aplicación</b-nav-item>
            <b-nav-item v-if="admin">|</b-nav-item>
            <b-nav-item :to="{ name: 'seguimiento' }" v-if="admin">Seguimiento</b-nav-item>
            <b-nav-item v-if="usuario">|</b-nav-item>
            <b-nav-item :to="{ name: 'listaConvenios' }" v-if="usuario">Buscar convenios</b-nav-item>
            <b-nav-item>|</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>Ingresar</em>
              </template>
              <b-dropdown-item @click="loginUsuario()">Usuario</b-dropdown-item>
              <b-dropdown-item @click="loginAdmin()">Admin</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <nuxt />
  </div>
</template>

<style>

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-image: url("https://proyecto-seguridad-udem.herokuapp.com/_nuxt/img/4b15d96.png");
  background-repeat: no-repeat;
  background-size: cover;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<script src="@/assets/default.js"/>