import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Empleado = (props) => {
    console.log(props)
    return(
        <div>
            { props.empleado ? (
                <Card>
                    <CardMedia style={{height:0, paddingTop: '56.25%'}}
                    image={props.empleado.fields.empleadoImage.fields.file.url}
                    title={props.empleado.fields.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.empleado.fields.nombre}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={props.empleado.fields.url} target="_blank">
                            Ir a su perfil
                        </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}

export default Empleado