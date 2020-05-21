export default {
    data() {
      return {
        usuario: false,
        admin: false,
        show: true
      };
    },
    methods: {
      loginUsuario(){
        this.usuario = true;
        this.admin = false;
      },
      loginAdmin(){
        this.usuario = false;
        this.admin = true;
      }
    }
  };