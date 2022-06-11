import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Box} from '@mui/material';
import {Home, ExerciseDetail} from './pages';
import {Navbar,Footer} from './components';

const App = () => {
  return (
    <div>
      <Box with="400px" sx={{ width: {xl : '1536px' }}} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </Box>

      <Footer />
    </div>
  )
}

export default App