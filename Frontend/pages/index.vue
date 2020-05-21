<template>
  <div>
    <b-container fluid="md" id="container">
      <br />
      <center>
        <div id="titlecontent">
          GESTIÓN DE MOVILIDAD
        </div>
      </center>
      <br />
      <br />


      <div class="info-columna">
        <p>
          <center><h4>Desarrollada por:</h4></center>
          <center>
            JOAN SEBASTIÁN CADENA PATERNINA<br />
            ESTIVEN CANO URREGO<br />
            SEBASTIÁN DÍEZ VALLEJO
            <br />
            <b-img
              src="https://www.precheck.com/sites/default/files/3%20Ways%20to%20Develop%20Effective%20Healthcare%20Leaders.png"
              fluid
              alt="Responsive image"
            ></b-img>
          </center>
        </p>
        <hr />
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

#titlecontent {
  margin-top: 10px;
  font-family: Oswald, sans-serif;
  font-size: 25px;
  color: #076a94;
  align-items: center;
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
