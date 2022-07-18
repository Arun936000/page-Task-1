import React from 'react'
import { Box,CardActionArea,CardMedia,CardContent,Typography,Card,Divider,ListItem,ListItemText,Button} from '@mui/material'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const Rightside = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:'none',sm:"block"}}}>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea height="250">
        <CardContent>
          <Typography>
            Documents
          </Typography>
          <ListItem>
           <CardMedia
          component="img"
          height="250"
          image="https://st.depositphotos.com/1052233/2815/v/950/depositphotos_28158459-stock-illustration-male-default-profile-picture.jpg"
          alt="image"
        />
        </ListItem>
         <Divider/>
           <ListItem>
        <ListItemText primary="Profile Picture.jpeg" sx={{color:'blue'}}/>
        <ClearOutlinedIcon sx={{fontSize:20,color:'red'}}/>
      </ListItem>
      <Divider/>
      <ListItem>
        <ListItemText primary="Passport.pdf" sx={{color:'blue'}}/>
        <ClearOutlinedIcon sx={{fontSize:20,color:'red'}}/>
      </ListItem>
      <Button sx={{backgroundColor:'blue',color:'white'}} fullWidth variant='contained'>Upload</Button>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
)
}

export default Rightside