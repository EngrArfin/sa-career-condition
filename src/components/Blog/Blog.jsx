import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'

const Blog = () => {
    return (
        <div className='container  m-1 p-0 justify-center'>
            <h2 className='text-2xl font-bold bg-pink-700 '>When should you use context API?</h2><br />
            <h3 className='bg'>Ans:</h3>
            <p className=' mb-10'>
            API to store the current theme of your application and make <br />
            it available to all components. This way, whenever the user switches <br />
             the theme such as enabling dark mode, all components will be updated with the new theme <br />
            </p>

            <h2 className='text-2xl font-bold bg-pink-700'>What is a custom hook?</h2>
            <h3>Ans:</h3>
            <p className=' mb-10'>
            custom Hook is a JavaScript function whose name <br />
             starts with ”use” and that may call other Hooks. <br />
             That's it! If you have code in a component that <br />
             you feel would make sense to extract, either for reuse elsewhere or <br />
              to keep the component simpler <br />
            </p>


            <h2 className='text-2xl font-bold bg-pink-700'>What is useRef?</h2>
            <h4 className='font-bold'>Answer:</h4>
            <p className=' mb-10'>
            Useref is a built-in React hook <br />
             that accepts one argument as the initial value and returns a reference
            </p>
            
        </div>
    );
};

export default Blog;