import React from 'react'
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from '../store';
import { color } from 'framer-motion';

const ColorPicker = () => {
  const snap = useSnapshot(state); 
  
  
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
      color={snap.color}
      disableAlpha
      // presetColors={[
      //   "#ccc",
      //   "#EFBD4E",
      //   "#80C670",
      //   "#72ED67",
      //   "#353934",
      //   "#2CCCE4",
      //   "#ff8a65",
      //   "#7098DA",
      //   "#C19277",
      //   "#FF96AD",
      //   "#512314",
      //   "#5F123D",
      //   "red"
      // ]}
      onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker