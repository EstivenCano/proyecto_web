export default {
    data() {
      return {
        data: {
          user: "",
          password: "",
          rol: 1
        },
        show: true
      };
    },
    methods: {
      ingresar() {
        let user = this.data.user;
        let password = this.data.password;
        let rol = this.data.rol;
        let url = `http://127.0.0.1:3001/login/${user}/${password}/${rol}`;
        this.$axios
          .get(url)
          .then(respuesta => {            
              if (respuesta.data.ok != true) {
                alert("Usuario y/o contraseña incorrectos");
              } else {
                alert("Ingreso Exitoso, Bienvenido " + respuesta.data.info[0]["nombre"]);
                location.href ="http://localhost:3000/";
              }
          })
          .catch(error => {});
      }
    }
  };
  