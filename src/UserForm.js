import { Button, Grid2, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({addUser, updateUser, submitted, data, isEdit}) =>{

    const[id, setID] = useState(0)
    const[name, setName] = useState(' ')

    useEffect(() =>{
        if(!submitted){
            setID(0);
            setName('');
        }
    }, [submitted]);

    useEffect(() =>{
        if(data?.id && data.id !==0){
            setID(data.id);
            setName(data.name)
        }
    }, [data]);

    return(
        <Grid2
            container
            spacing={2}
            sx={{
                backgroundColor:'#fff',
                marginBottom:'30px',
                display:'block',
            }} //get as class not an inline css 
        >
            <Grid2 item xs={12}> 
                <Typography component={'h1'} sx={{color:'#000'}}>User Form</Typography>
            </Grid2> 

            <Grid2 item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography 
                component={'label'} 
                htmlFor="id"
                sx={{
                    color:'#000',
                    marginRight: '20px',
                    fontSize: '16px',
                    width: '100px',
                    display:'block',
                }}    
                >
                ID 
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{width: '400px'}}
                    value={id}
                    onChange={e=> setID(e.target.value)} 
                />
            </Grid2>

            <Grid2 item xs={12} sm={6} sx={{display:'flex'}}>
                 <Typography component={'label'} 
                htmlFor="id"
                sx={{
                    color:'#000',
                    marginRight: '20px',
                    fontSize: '16px',
                    width: '100px',
                    display:'block',
                }} 
                >   
                Name
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{width: '400px'}}
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
            </Grid2>   

            <Button
                sx={{
                    margin:'auto',
                    mardinBottom:'20px',
                    backgroundColor:'#00c6e6',
                    color:'#000',
                    marginLeft:'15px',
                    marginTop:'20px',
                    '&:hover':{
                        opacity:'0.7',
                        backgroundColor:'#00c6e6'
                    }
                }}
                onClick={()=> isEdit ? updateUser({id, name}) : addUser({id, name})}
            >
                {
                    isEdit ? 'Update' : 'Submit'
                }
            </Button>       
        </Grid2>
    );
}

export default UserForm 