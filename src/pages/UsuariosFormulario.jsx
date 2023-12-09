import React, {useState} from 'react';

export const UsuariosFormulario = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        contrasenia: '',
        tipo_usuario: '',
    });

    const [alerta, setAlerta] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUsuario({ ...usuario, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/usuarios', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(usuario),
            });

            if (response.status === 200) {
                setAlerta('Usuario agregado correctamente');
              } else {
                setAlerta('Usuario agregado correctamente');
              }
    } catch (error) {
        console.error(error);
        setAlerta('Error al conectar con el servidor');
    }
  };

  const handleCancelar = () => {
    setUsuario({
        nombre: '',
        email: '',
        contrasenia: '',
        tipo_usuario: '',
    });
    setAlerta('');
  };

  return (
    <div className='flex justify-center items-center h-screen'>
    <div className="bg-black bg-opacity-75 p-6 mt-1 rounded-lg border-2 border-green-400 w-full sm:w-4/5 md:w-3/5 lg:w-2/5">
      <h2 className="text-2xl font-semibold text-white mb-4 text-center mb-8">Agregar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={usuario.nombre}
            onChange={handleChange}
            className="bg-gray-800 rounded-lg p-2 w-full text-white hover:bg-green-400 hover:bg-opacity-75 hover:text-white hover:font-semibold transition duration-600 hover:ease-in-out"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            className="bg-gray-800 rounded-lg p-2 w-full text-white hover:bg-green-400 hover:text-gray-600 hover:font-semibold transition duration-600 hover:ease-in-out"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="contrasenia">Contraseña</label>
          <input
            type="text"
            id="contrasenia"
            name="contrasenia"
            value={usuario.contrasenia}
            onChange={handleChange}
            className="bg-gray-800 rounded-lg p-2 w-full text-white hover:bg-green-400 hover:text-gray-600 hover:font-semibold transition duration-600 hover:ease-in-out"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="tipo_usuario">Rol</label>
          <input
            type="text"
            id="tipo_usuario"
            name="tipo_usuario"
            value={usuario.tipo_usuario}
            onChange={handleChange}
            className="bg-gray-800 rounded-lg p-2 w-full text-white hover:bg-green-400 hover:text-gray-600 hover:font-semibold transition duration-600 hover:ease-in-out"
            required
          />
        </div>
        {/*Aquí debajo pueden agregar más campos...*/}
        
        <div className="mt-4 justify-center flex">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 mr-4 rounded-lg transition duration-300"
          >
            Registrar
          </button>
          <button
            type="button"
            onClick={handleCancelar}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Cancelar
          </button>
        </div>
      </form>
      {alerta && (
        <div className="mt-4 p-2 bg-green-100 text-green-800 rounded-lg">
          {alerta}
        </div>
      )}
    </div>
    </div>
  );
};

