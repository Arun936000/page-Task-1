import React from 'react'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Center from './component/Center'
import Rightside from './component/Rightside'
import { Box, Stack } from '@mui/material'

const App = () => {
  return (
       <Box>
          <Header/>
        <Stack spacing={2} direction='row' justifyContent='space-between'>
           <Sidebar/>
           <Center/>
           <Rightside/>
       </Stack>
      </Box> 
  )
}

export default App