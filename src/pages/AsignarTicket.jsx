import React, {useState} from 'react';

export const AsignarTicket = () => {

return (
    <div className='flex justify-center items-center h-screen'>
    <div className="bg-black bg-opacity-75 p-6 mt-1 rounded-lg border-2 border-green-400 w-full sm:w-4/5 md:w-3/5 lg:w-2/5">
      <h2 className="text-2xl font-semibold text-white mb-4 text-center mb-8">Asignar Ticket</h2>
      <form>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="tecnico">Técnico</label>
          <select className="bg-gray-800 rounded-lg p-2 w-full text-white hover:text-green-400 hover:font-semibold transition duration-600 hover:ease-in-out">
            <option value="">Selecciona un técnico...</option>
            <option value="jja">Juan José Alegría</option>
            <option value="ea">Esteban Andrade</option>
            <option value="co">Charles Ovalle</option>
            <option value="nt">Nicolas Trevizán</option>           
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="nombre">Cliente</label>
          <select className="bg-gray-800 rounded-lg p-2 w-full text-white hover:text-green-400 hover:font-semibold transition duration-600 hover:ease-in-out">
            <option value="">Selecciona el cliente solicitante...</option>
            <option value="AGA">Agencia de aduanas Alejandro Etheverry</option>
            <option value="HLT">Hotel Las Torres</option>
            <option value="SPM">Serpromag</option>
            <option value="AVS">Avansur</option>
            <option value="MDS">Maestros del Sur</option>           
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="nombre">Categoría</label>
          <select className="bg-gray-800 rounded-lg p-2 w-full text-white hover:text-green-400 hover:font-semibold transition duration-600 hover:ease-in-out">
            <option value="">Selecciona la categoría correspondiente...</option>
            <option value="AGA">Redes</option>
            <option value="HLT">CCTV</option>
            <option value="SPM">Software</option>
            <option value="AVS">Hardware</option>
            <option value="MDS">Web</option> 
            <option value="MDS">Mantención Mensual</option> 
            <option value="MDS">Mantención General</option>           
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="nombre">Título:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            placeholder='Ej: Mantención mensual Agencia de Aduanas...'
            className="bg-gray-800 rounded-lg p-2 w-full text-white hover:bg-green-400 hover:text-gray-600 hover:font-semibold transition duration-600 hover:ease-in-out"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="nombre">Descripción</label>
          <textarea
            type="textarea"
            id="desc"
            name="desc"
            placeholder='Ej: Revisión mensual pactada, Agencia De Aduanas, Alejandro Etcheverry'
            className="bg-gray-800 rounded-lg p-2 w-full text-white hover:bg-green-400 hover:text-gray-600 hover:font-semibold transition duration-600 hover:ease-in-out"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="nombre">estado</label>
          <select className="bg-gray-800 rounded-lg p-2 w-full text-white hover:text-green-400 hover:font-semibold transition duration-600 hover:ease-in-out">
            <option value="">Selecciona el estado del ticket...</option>
            <option value="AGA">Completo</option>
            <option value="HLT">Pendiente</option>      
          </select>
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
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Cancelar
          </button>
        </div>
      </form>
      
    </div>
    </div>
  );
}