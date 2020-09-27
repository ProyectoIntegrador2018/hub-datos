import React, { Component } from "react";
import "./IniciarSesion.css";
import { Button } from "./components/button";
import { Subbutton } from "./components/Subbutton";
import "bootstrap/dist/css/bootstrap.min.css";

class IniciarSesion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      showRegister: false,
    };
  }
  operation() {
    this.setState({
      showLogin: this.state.showRegister,
      showRegister: this.state.showLogin,
    });
  }
  render() {
    return (
      <div class="splitRight right">
        <div class="centered">
          <div>
            {this.state.showLogin ? (
              <div class="forms-login">
                <form>
                  <input
                    type="text"
                    class="nombre"
                    name="nombre"
                    placeholder="Correo Electrónico"
                  />
                  <input
                    type="text"
                    class="nombre"
                    name="nombre"
                    placeholder="Contraseña"
                  />
                  <Button>Iniciar Sesión</Button>
                  <p class="mensaje">
                    ¿Aún no te registras?{" "}
                    <Subbutton onClick={() => this.operation()} type="submit">
                      Registrarme
                    </Subbutton>
                  </p>
                </form>
              </div>
            ) : null}

            {/* FORMULARIO DE REGISTRO */}

            <body>
    <div id="container">
      <div id="main">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          aliquam ac enim aliquam mollis. Ut non egestas quam, sed semper odio.
          Nullam at faucibus urna. Quisque sagittis finibus viverra. Nulla
       esuada. Aliquam tincidunt quis purus a pretium. Maecenas
          rutrum congue est ac ornare. Duis blandit a metus id pretium. Nam
         m ut commodo porta.
          psum leo, et semper ipsum vulputate id. Nulla facilisi. tetur
          adipiscing elit. Mauris aliquam ac enim aliquam mollis. Ut non egestas
          quam, sed semper odio. Nullam at faucibus urna. Quisque sagittis
          finibus viverra. Nulla varius dictum neque, eget ullamcorper libero
          venenatis eget. Donec faucibus ultrices purus, vel tristique dui
          sodales vitae. Sed congue nulla venenatis augue convallis, vulputate
          suscipit mi ornare. Duis eros magna, interdum non hendrerit ut,
          eleifend ac neque. Phasellus ullamcorper mollis leo. Vestibulum
          tincidunt lorem ut commodo porta.
          psum leo, et semper ipsum vulputate id. Nulla facilisi. tetur
          adipiscing elit. Mauris aliquam ac enim aliquam mollis. Ut non egestas
          quam, sed semper odio. Nullam at faucibus urna. Quisque sagittis
          finibus viverra. Nulla varius dictum neque, eget ullamcorper libero
          venenatis eget. Donec faucibus ultrices purus, vel tristique dui
          sodales vitae. Sed congue nulla venenatis augue convallis, vulputate
          suscipit mi ornare. Duis eros magna, interdum non hendrerit ut,
          eleifend ac neque. Phasellus ullamcorper mollis leo. Vestibulum
          tincidunt lorem ut commodo porta.
          psum leo, et semper ipsum vulputate id. Nulla facilisi. tetur
          adipiscing elit. Mauris aliquam ac enim aliquam mollis. Ut non egestas
          quam, sed semper odio. Nullam at faucibus urna. Quisque sagittis
          finibus viverra. Nulla varius dictum neque, eget ullamcorper libero
          venenatis eget. Donec faucibus ultrices purus, vel tristique dui
          sodales vitae. Sed congue nulla venenatis augue convallis, vulputate
          suscipit mi ornare. Duis eros magna, interdum non hendrerit ut,
          eleifend ac neque. Phasellus ullamcorper mollis leo. Vestibulum
          tincidunt lorem ut commodo porta.
          psum leo, et semper ipsum vulputate id. Nulla facilisi. tetur
          adipiscing elit. Mauris aliquam ac enim aliquam mollis. Ut non egestas
          quam, sed semper odio. Nullam at faucibus urna. Quisque sagittis
          finibus viverra. Nulla varius dictum neque, eget ullamcorper libero
          venenatis eget. Donec faucibus ultrices purus, vel tristique dui
          sodales vitae. Sed congue nulla venenatis augue convallis, vulputate
          suscipit mi ornare. Duis eros magna, interdum non hendrerit ut,
          eleifend ac neque. Phasellus ullamcorper mollis leo. Vestibulum
          tincidunt lorem ut commodo porta.
          psum leo, et semper ipsum vulputate id. Nulla facilisi. tetur
          adipiscing elit. Mauris aliquam ac enim aliquam mollis. Ut non egestas
          quam, sed semper odio. Nullam at faucibus urna. Quisque sagittis
          finibus viverra. Nulla varius dictum neque, eget ullamcorper libero
          venenatis eget. Donec faucibus ultrices purus, vel tristique dui
          sodales vitae. Sed congue nulla venenatis augue convallis, vulputate
          suscipit mi ornare. Duis eros magna, interdum non hendrerit ut,
          eleifend ac neque. Phasellus ullamcorper mollis leo. Vestibulum
          tincidunt lorem ut commodo porta.
          psum leo, et semper ipsum vulputate id. Nulla facilisi. tetur
          adipiscing elit. Mauris aliquam ac enim aliquam mollis. Ut non egestas
          quam, sed semper odio. Nullam at faucibus urna. Quisque sagittis
          finibus 
          psum leo, et semper ipsum vulputate id. Nulla facilisi. tetur
          adipiscing elit. Mauris aliquam ac enim aliquam mollis. Ut non egestas
          quam, sed semper odio. Nullam at faucibus urna. Quisque sagittis
          finibus viverra. Nulla varius dictum neque, eget ullamcorper libero
          venenatis eget. Donec faucibus ultrices purus, vel tristique dui
          sodales vitae. Sed congue nulla venenatis augue convallis, vulputate
          suscipit mi ornare. Duis eros magna, interdum non hendrerit ut,
          eleifend ac neque. Phasellus ullamcorper mollis leo. Vestibulum
          tincidunt lorem ut commodo porta.
          psum leo, et semper ipsum vulputate id. Nulla facilisi. tetur
          adipiscing elit. Mauris aliquam ac enim aliquam mollis. Ut non egestas
          quam, sed semper odio. Nullam at faucibus urna. Quisque sagittis
          finibus 
          psum leo, et semper ipsum vulputate id. Nulla facilisi. tetur
          adipiscing elit. Mauris aliquam ac enim aliquam mollis. Ut non egestas
          quam, sed semper odio. Nullam at faucibus urna. Quisque sagittis
          finibus viverra. Nulla varius dictum neque, eget ullamcorper libero
          venenatis eget. Donec faucibus ultrices purus, vel tristique dui
          sodales vitae. Sed congue nulla venenatis augue convallis, vulputate
          suscipit mi ornare. Duis eros magna, interdum non hendrerit ut,
          eleifend ac neque. Phasellus ullamcorper mollis leo. Vestibulum
          tincidunt lorem ut commodo porta.
          psum leo, et semper ipsum vulputate id. Nulla facilisi. tetur
          adipiscing elit. Mauris aliquam ac enim aliquam mollis. Ut non egestas
          quam, sed semper odio. Nullam at faucibus urna. Quisque sagittis
          finibus 
        </p>
      </div>
    </div>
    </body>




            {this.state.showRegister ? (
              <div class="forms-registro">
                <form class="login-form">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input
                        type="text"
                        class="nombre"
                        name="nombre"
                        placeholder="Nombre"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <input
                        type="text"
                        class="nombre"
                        name="nombre"
                        placeholder="Apellido"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input
                        type="text"
                        class="nombre"
                        name="nombre"
                        placeholder="Edad"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <select class="form-control"id="inputGenero">
                        <option>Género</option>
                      </select>{" "}
                    </div>
                  </div>
                  <input
                    type="text"
                    class="nombre"
                    name="nombre"
                    placeholder="Universidad / Compañia"
                  />
                  <select class="form-control inputBoots">
                    <option>Selecciona tu perfil</option>
                  </select>
                  <div class="custom-file inputFile">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="validatedCustomFile"
                      required
                    />
                    <label class="custom-file-label" for="validatedCustomFile">
                      Choose file...
                    </label>
                  </div>
                  <input
                    type="text"
                    class="nombre"
                    name="nombre"
                    placeholder="Correo Electrónico"
                  />
                  <input
                    type="text"
                    class="nombre"
                    name="nombre"
                    placeholder="Contraseña"
                  />
                    <div id="btnRegistro">
                        <Button>Registrarse</Button>
                    </div>
                  
                  <div className="bottom">
                    <p class="mensaje">
                      ¿Ya te registraste?{" "}
                      <Subbutton onClick={() => this.operation()} type="submit">
                        {" "}
                        Iniciar Sesión
                      </Subbutton>
                    </p>
                  </div>
                </form>
              </div>
            ) : null}
          </div>
        </div>
        <div class="splitLeft left">
          <div class="centered">
            {this.state.showRegister ? <h1>REGISTRO</h1> : null}
            {this.state.showLogin ? <h1>INICIAR SESIÓN</h1> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default IniciarSesion;
