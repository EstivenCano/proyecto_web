<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <img
          src="https://pqrsf.udem.edu.co/img/logo.png"
          fluid
          alt="Universidad de Medellín"
          height="55px"
          width="120px"
        />
        <b-navbar-brand href="#"> </b-navbar-brand>
        <b-navbar-brand href="">Gestion de Movilidad</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item v-show="true">|</b-nav-item>
            <b-nav-item :to="{ name: 'tarea' }" v-show="true">Tareas</b-nav-item>
            <b-nav-item >|</b-nav-item>
            <b-nav-item :to="{ name: 'aplicacion' }">Aplicación</b-nav-item>
            <b-nav-item>|</b-nav-item>
            <b-nav-item :to="{ name: 'seguimiento' }">Seguimiento</b-nav-item>
            <b-nav-item>|</b-nav-item>
            <b-nav-item :to="{ name: 'listaFiltrada' }"
              >Lista de convenios</b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Buscar"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Buscar</b-button
              >
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>Usuario</em>
              </template>
              <b-dropdown-item href="#">Ingresar</b-dropdown-item>
              <b-dropdown-item href="#">Salir</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <nuxt />
  </div>
</template>

<style>
.navbar.navbar-dark.bg-dark {
  background-color: brown !important;
}

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
