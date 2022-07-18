import { Box, TextField, Typography,Grid,currency,MenuItem} from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Center = () => {
  const Gender = [
    {
      label: 'Female',
      value: 'Female'
    },
    {
      label: 'Male',
      value: 'Male'
    }
  ];
  const City = [
    {
      label: 'Madurai',
      value: 'Madurai'
    },
    {
      label: 'Tenkasi',
      value: 'Tenkasi'
    },
    {
      label: 'Chennai',
      value: 'Chennai'
    },
    {
      label: 'Banglore',
      value: 'Banglore'
    }
  ];
  const State = [
    {
      label: 'TamilNadu',
      value: 'TamilNadu'
    },
    {
      label: 'Telungana',
      value: 'Telugana'
    },
    {
      label: 'kerala',
      value: 'Kerala'
    },
    {
      label: 'Goa',
      value: 'Goa'
    }
  ];
  const Country= [
    {
      label: 'India',
      value: 'India'
    },
    {
      label: 'China',
      value: 'China'
    },
    {
      label: 'USA',
      value: 'USA'
    },
    {
      label: 'Japan',
      value: 'Japan'
    }
  ];
  const Paymethod = [
    {
      label: 'cash',
      value: 'Cash'
    },
    {
      label: 'Card',
      value: 'Card'
    }
  ];
  const Paycycle = [
    {
      label: 'Weekly',
      value: 'Weekly'
    },
    {
      label: 'Monthly',
      value: 'Monthly'
    },
    {
      label: 'Yearly',
      value: 'Yearly'
    },
  ];
  return (
    <Box flex={4} p={2}>
        <Container sx={{border: "1px solid lightgrey", borderRadius:"5px"}}>
         <Typography color='blue' variant='h6' fontWeight='bolder'>
          Create User
         </Typography>
         <br/>
         <Typography color='blue' fontSize='17px' sx={{borderTopColor:'black'}}>
          Personal Details
          <span sx={{borderBottomColor:'black'}}></span>
         </Typography>
         <br/>
         <form>
          <Grid container>
            <Grid item xs={12}>
         <TextField
         InputProps={{ style: { fontSize: 10 } }}
         InputLabelProps={{ style: { fontSize: 15 } }} 
         sx={{m:1} } size="small" variant='outlined' label='FirstName'>
         </TextField>
         <TextField 
         InputProps={{ style: { fontSize: 10 } }}
         InputLabelProps={{ style: { fontSize: 15 } }}
         sx={{m:1}}size='small' variant='outlined' label='LastName'>
        </TextField>
        <TextField
          InputProps={{ style: { fontSize: 10 } }}
          InputLabelProps={{ style: { fontSize: 15 } }} 
          sx={{m:1}}size='small' type='number' variant='outlined' label='Employee ID'>
        </TextField>
        <br/>
        <TextField 
         InputProps={{ style: { fontSize: 10 } }}
         InputLabelProps={{ style: { fontSize: 15 } }}
         sx={{m:3,ml:1}}size='small' variant='outlined' label='Role'>
        </TextField>
        <TextField
          InputProps={{ style: { fontSize: 10 } }}
          InputLabelProps={{ style: { fontSize: 15 } }} 
          sx={{m:3,width:250}} size='small' type='email' variant='outlined' label='E-mail Address'>
        </TextField>
        <br/>
        <TextField
         InputProps={{ style: { fontSize: 10 } }}
         InputLabelProps={{ style: { fontSize: 15 } }} 
         sx={{m:1} } size="small" type='date'variant='outlined' label='Date of Birth'>
         </TextField>
         <TextField 
         InputProps={{ style: { fontSize: 10 } }}
         InputLabelProps={{ style: { fontSize: 15 } }}
         sx={{m:1}}size='small' variant='outlined' type='number' label='Mobile Number'>
        </TextField>
        <TextField
          InputProps={{ style: { fontSize: 10 } }}
          InputLabelProps={{ style: { fontSize: 15 } }} 
          sx={{m:1}}size='small' type='tel' variant='outlined' label='Work Number'>
        </TextField>
        <br/>
        <TextField
          InputProps={{ style: { fontSize: 10 } }}
          InputLabelProps={{ style: { fontSize: 15 } }} 
          id="outlined-select-currency"
          select
          label="Gender"
          sx={{m:3,ml:1,width:150}} size='small'
        >
          {Gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>   
        <TextField
          InputProps={{ style: { fontSize: 10 } }}
          InputLabelProps={{ style: { fontSize: 15 } }} 
          sx={{m:3,width:150}}size='small' type='date' variant='outlined' label='Date of joining'> 
          </TextField>
          <br/> 
          <Typography color='blue' fontSize='17px' sx={{borderTopColor:'black'}}>
          Address Details
          <span sx={{borderBottomColor:'black'}}></span>
         </Typography> 
         <TextField 
         InputProps={{ style: { fontSize: 10 } }}
         InputLabelProps={{ style: { fontSize: 15 } }}
         sx={{m:3,ml:1,width:270}}size='small' variant='outlined' label='Address'>
        </TextField>
        <TextField
          InputProps={{ style: { fontSize: 10 } }}
          InputLabelProps={{ style: { fontSize: 15 } }} 
          id="outlined-select-currency"
          select
          label="City"
          sx={{m:3,ml:1,width:150}} size='small'
        >
          {City.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          <br/>
         <TextField 
           InputProps={{ style: { fontSize: 10 } }}
           InputLabelProps={{ style: { fontSize: 15 } }} 
           id="outlined-select-currency"
           select
           label="State"
           sx={{m:1,width:150}} size='small'>
           {State.map((option) => (
             <MenuItem key={option.value} value={option.value}>
               {option.label}
             </MenuItem>
           ))}
        </TextField>
        <TextField
          InputProps={{ style: { fontSize: 10 } }}
          InputLabelProps={{ style: { fontSize: 15 } }} 
          id="outlined-select-currency"
          select
          label="Country"
          sx={{m:1,width:150}} size='small'>
          {Country.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          InputProps={{ style: { fontSize: 10 } }}
          InputLabelProps={{ style: { fontSize: 15 } }} 
          sx={{m:1}}size='small' type='number' variant='outlined' label='Postal code'>
        </TextField>
        <br/>
        <Typography color='blue' fontSize='17px' sx={{borderTopColor:'black'}}>
          Salary Details
          <span sx={{borderBottomColor:'black'}}></span>
         </Typography>
         <TextField 
           InputProps={{ style: { fontSize: 10 } }}
           InputLabelProps={{ style: { fontSize: 15 } }} 
           label="Basic Pay"
           sx={{m:1,width:150}} size='small'>
        </TextField>
        <TextField
          InputProps={{ style: { fontSize: 10 } }}
          InputLabelProps={{ style: { fontSize: 15 } }} 
          id="outlined-select-currency"
          select
          label="Pay Cycle"
          sx={{m:1,width:150}} size='small'>
          {Paycycle.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
            InputProps={{ style: { fontSize: 10 } }}
            InputLabelProps={{ style: { fontSize: 15 } }} 
            id="outlined-select-currency"
            select
            label="Pay Method"
            sx={{m:1,width:150}} size='small'>
            {Paymethod.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
          </Grid>
          </Grid>
          </form>
         </Container> 
    </Box>
  )
}

export default Center