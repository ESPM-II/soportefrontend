import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UsuariosFormulario } from './UsuariosFormulario';

export const UsuariosTabla = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedUsuario, setEditedUsuario] = useState({
    id: null,
    nombre: '',
    email: '',
    contrasenia: '',
    tipo_usuario: '',
  });
  const [setAviso] = useState(null);
  const [alerta, setAlerta] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3020/api/usuarios')
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de los usuarios: ', error);
      });
  }, []);

  const handleEliminarUsuario = (id) => {
    axios.delete(`http://localhost:3020/api/usuarios/${id}`)
      .then(() => {
        setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
        setAviso("Usuario eliminado correctamente");
        setTimeout(() => setAviso(null), 3000);
      })
      .catch((error) => {
        console.error('Error al eliminar el usuario: ', error);
      });
  };

  const handleEditarUsuario = (usuario) => {
    setEditedUsuario(usuario);
    setModalVisible(true);
  };

  const handleGuardarCambios = () => {
    axios.put(`http://localhost:3020/api/usuarios/${editedUsuario.id}`, editedUsuario)
      .then(() => {
        setUsuarios(usuarios.map((usuario) =>
          usuario.id === editedUsuario.id ? editedUsuario : usuario
        ));
        setModalVisible(false);
      })
      .catch((error) => {
        console.error('Error al actualizar el usuario: ', error);
      });
  };

  const handleCancelar = () => {
    setModalVisible(false);

    setEditedUsuario({
      id: null,
      nombre: '',
      email: '',
      contrasenia: '',
      tipo_usuario: '',
    });
  };

  const handleClick = () => {
    setEditedUsuario({
      id: null,
      nombre: '',
      email: '',
      contrasenia: '',
      tipo_usuario: '',
    });
    setModalVisible(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUsuario({ ...editedUsuario, [name]: value });
  };


  return (
    <div className="">
    <button
      className="bg-green-500 hover:bg-green-600 transition duration-900 rounded-full p-3 text-white absolute top-10 right-4"
      onClick={<UsuariosFormulario/>}
    >
      +
    </button>
      <table className="w-3/4 mx-auto text-white table-auto top-10">
        <thead className="bg-green-400 text-center">
          <tr>
            <th className="border border-green-400">Nombre</th>
            <th className="border border-green-400">Email</th>
            <th className="border border-green-400">Rol</th>
            <th className="border border-green-400">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td className="border border-green-400">{usuario.nombre}</td>
              <td className="border border-green-400">{usuario.email}</td>
              <td className="border border-green-400">{usuario.tipo_usuario}</td>
              <td className="border border-green-400">
                <button
                  className="bg-blue-300 hover:bg-blue-400 transition duration-900 rounded px-2 py-1 mx-1"
                  onClick={() => handleEditarUsuario(usuario)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-300 hover:bg-red-400 transition duration-900 rounded px-2 py-1 mx-1"
                  onClick={() => handleEliminarUsuario(usuario.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-90  flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 "></div>
          <div className="border border-green-400 bg-black bg-opacity-30 rounded-lg p-4 w-96">
            <div className="flex justify-end">
              <button className="text-red-400 hover:text-red-700" onClick={handleCancelar}>
                X
              </button>
            </div>
            <h2 className="text-lg text-white font-semibold mb-4">Editar Usuario</h2>
            <div className="mb-4">
              <label htmlFor="nombre" className="block mb-2 text-white">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={editedUsuario.nombre}
                onChange={handleChange}
                className="border border-green-400 text-white rounded px-2 py-1 w-full bg-black bg-opacity-30 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-white">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={editedUsuario.email}
                onChange={handleChange}
                className="border border-green-400 text-white rounded px-2 py-1 w-full bg-black bg-opacity-30 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contrasenia" className="block mb-2 text-white">Contraseña:</label>
              <input
                type="text"
                id="contrasenia"
                name="contrasenia"
                value={editedUsuario.contrasenia}
                onChange={handleChange}
                className="border border-green-400 text-white rounded px-2 py-1 w-full bg-black bg-opacity-30 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="tipo_usuario" className="block mb-2 text-white">Rol:</label>
              <input
                type="text"
                id="tipo_usuario"
                name="tipo_usuario"
                value={editedUsuario.tipo_usuario}
                onChange={handleChange}
                className="border border-green-400 text-white rounded px-2 py-1 w-full bg-black bg-opacity-30 text-white"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 text-white hover:bg-blue-600 transition duration-900 rounded px-4 py-2 mx-2"
                onClick={handleGuardarCambios}
              >
                Guardar Cambios
              </button>
              <button
                className="bg-red-500 text-white hover:bg-red-600 transition duration-900 rounded px-4 py-2 mx-2"
                onClick={handleCancelar}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
      {alerta && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-90 text-white p-4 rounded">
            {alerta}
          </div>
        </div>
      )}
    </div>
  );
};
