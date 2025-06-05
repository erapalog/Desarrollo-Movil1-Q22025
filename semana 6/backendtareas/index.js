const express= require('express')
const Tareas= require('./Models/Tareas')

const app= express();

app.use(express.json());


//GET --> listar informacion
//POST --> listar informacion/ agregar informacin
//PUT --> actualizar informacion
//Delete --> eliminar informacino
//CRUD

//request: parametro que se le envia desde el cliente
//response: es todo el api responde (respuesta json)

app.get('/tarea',async (req,resp)=>{

    try {

        //select *from Tareas
        const listaTarea= await  Tareas.findAll();

        if(listaTarea.length==0){            
            resp.status(400).json({'Mensaje':'No hay informacion para mostrar'})
        }
        else{
            resp.status(200).json(listaTarea);
        }

        
    } catch (error) {
                    console.log(error)

        resp.status(500).json({"error": 'Ocurrio un error' + error})
    }

})


app.post('/tarea', async(req,resp)=>{
    
    try {

        console.log(req.body);

        //insert into tareas (...)
        const tarea = await Tareas.create(req.body);
         resp.status(200).json({'Mensaje':'Registro creado', data:tarea});

        
    } catch (error) {
        resp.status(500).json({"error": 'Ocurrio un error' + error})

    }
})

//metodo para actualizar
app.put('/tarea/:IdTarea', async(req,resp)=>{
    
    try {

        console.log(req.body);
        console.log(req.params.IdTarea)

        //update tareas set...
        const [updated] = await Tareas.update(req.body,{
            where:{IdTarea:req.params.IdTarea}
        });

        if(updated){
            resp.status(200).json({'Mensaje':'Registro actualizado'});
        }
        else{
             resp.status(400).json({'Mensaje':'No existe registro a actualizar'});
        }
        

        
    } catch (error) {
        resp.status(500).json({"error": 'Ocurrio un error' + error})

    }
})

//metodo delete

app.delete('/tarea/:IdTarea', async(req,resp)=>{
    
    try {

        console.log(req.params.IdTarea)

        //delete frm tareas ...
        const deleted = await Tareas.destroy({
            where:{IdTarea:req.params.IdTarea}
        });

        if(deleted){
            resp.status(200).json({'Mensaje':'Elimado correctamente'});
        }
        else{
             resp.status(400).json({'Mensaje':'No existe registro a eliminar'});
        }
        

        
    } catch (error) {
        resp.status(500).json({"error": 'Ocurrio un error' + error})

    }
})

app.listen(6000,()=>{
    console.log('APlicacion ejecutando en puerto 6000')
})