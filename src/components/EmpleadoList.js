import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'

import Empleado from '../components/Empleado'

const SPACE_ID = 'hzl4nnlsl61x'
const ACCESS_TOKEN = 'cff50f411ffc269d85dc471c09ff096fdb165cb495437c40d9075fb6f36debfe'

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class EmpleadoList extends Component {

    state = {
        empleados: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getEmpleados()
    }

    getEmpleados = () => {
        client.getEntries({
            content_type: 'empleado',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({empleados: response.items})
            console.log(this.state.empleados)
        })
        .catch((error) => {
            console.log("Error ocurred while fetching Entries")
            console.error(error)
        })
    }

    onSearchInputChange = (event) => {
        console.log("Search changed..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getEmpleados()
    }

    render() {
        return (
            <div>
                { this.state.empleados ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Ingrese su nada"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding:24}}>
                            { this.state.empleados.map(currentEmpleado => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Empleado empleado={currentEmpleado} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No se eoncontro nada" }
            </div>
        )
    }
}

export default EmpleadoList;