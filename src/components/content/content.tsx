import React, { useState } from 'react';
import markdown from '../../assets/resume.md?raw'
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
//ceshi7
export default () => {
  const [text, setText] = useState(markdown);
  return <MdEditor modelValue={text} onChange={setText} previewOnly={true}/>;
};