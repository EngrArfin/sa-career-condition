import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'

const Blog = () => {
    return (
        <div className='container  m-10 p-40 justify-center'>

            <h2 className='text-4xl font-bold'>When should you use context API?</h2>
            <hr className='border-2 mt-5' />
            <h4 className='font-bold'>Answer:</h4>
            <p className=' mb-10'>
                The React Context API is used to manage the state of an application.
                When we need to be shared across multiple components.
                Some uses: <br />
                1. When we have global state that needs to be accessible to multiple levels of nested components. <br />
                2. The Context API can be used to provide the theme or language data to all the components in our application. This will allow us to change the theme or language dynamically without having to modify each component individually.
            </p>


            <h2 className='text-4xl font-bold'>What is a custom hook?</h2>
            <hr className='border-2 mt-5' />
            <h4 className='font-bold'>Answer:</h4>
            <p className=' mb-10'>
               JavaScript function that allow us to reuse stateful logic between components.
               It is essentially a way to extract reusable logic from a component and share it among other components. Custom Hook can help us to make our code more modular, readable, and easier to maintain.
            </p>


            <h2 className='text-4xl font-bold'>What is useRef?</h2>
            <hr className='border-2 mt-5' />
            <h4 className='font-bold'>Answer:</h4>
            <p className=' mb-10'>
                In Javascript, useRef is a hook. That is provided by the React that allows us to create a reference to DOM element. The useRef hook returns a mutable object that contains a current property that can be used to store any value. <br />
                Common use case for useRef is to access a DOM element directly from within a component.
            </p>


            <h2 className='text-4xl font-bold'>What is useMemo?</h2>
            <hr className='border-2 mt-5' />
            <h4 className='font-bold'>Answer:</h4>
            <p>
                It is also a hook like useRef. useMemo is a hook that allows us to memoize expensive computations so that they are only re-computed when their dependencies change. <br />
                The useMemo hook takes two arguments: a function that computes the memoized value, and an array of dependencies. The hook will only recompute the memoized value when one or more of the dependencies have changed.
            </p>
        </div>
    );
};

export default Blog;