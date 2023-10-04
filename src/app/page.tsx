'use client'
import type { Metadata } from 'next';
import { CodeBlock, atomOneDark, vs2015 } from 'react-code-blocks';



export default function Home() {
 
      const showLineNumbers = true;
      const wrapLines = true;
      const codeBlock = true;
      return (
        
        
          <div className='h-full font-mono'>
          <CodeBlock
customStyle={{
  height:'100%',
}}            text={`//Starting my portfolio works. Never mind, i am already inside it!`}
            language={'jsx'}
            theme={vs2015}
            {...{ showLineNumbers, wrapLines, codeBlock }}
          />
        </div>
      );
      
  
}
