import { Link } from "react-router-dom"

const Gestion = () => {
    return (
        <>
            <Link to='/books/new'>Create</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">N° de Servicio</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Ciudad de entrega</th>
                        <th scope="col">Dirección de entrega</th>
                        <th scope="col">Estado</th>
                        <th></th>
                        <th></th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <Link to='/books/1'>1</Link>
                        </th>
                        <td>07/04/2021</td>
                        <td>Bogotá</td>
                        <td>Calle 89 # 44-78</td>
                        <td>Guardado</td>
                        <td> <Link to='/books/1/edit'>Edit</Link> </td>
                        <td> <Link to='/books/1/edit'>Eliminar</Link> </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Link to='/books/2'>2</Link>
                        </th>
                        <td>07/04/2022</td>
                        <td>Medellín</td>
                        <td>Carrera 89 # 44-78</td>
                        <td>Cumplido</td>
                        <td><Link to='/books/2/edit'>Edit</Link></td>
                        <td> <Link to='/books/1/edit'>Eliminar</Link> </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Link to='/books/3'>3</Link>
                        </th>
                        <td>07/01/2020</td>
                        <td>Barranquilla</td>
                        <td>Calle 89 # 44-78</td>
                        <td>Cancelado</td>
                        <td><Link to='/books/3/edit'>Edit</Link></td>
                        <td> <Link to='/books/1/edit'>Eliminar</Link> </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Gestion