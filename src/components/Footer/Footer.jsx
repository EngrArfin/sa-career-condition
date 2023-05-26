import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-pink-900 text-white p-10'>
            <div className='flex justify-around p-4'>
                <div className='w-40'>
                    <h1 className='font-bold text-xl  mb-5'>SA Career</h1>
                    <p className='text-sm'>our service is best and it will made u career better.</p>
                    <div className='flex mt-5'>
                        <img className='w-6 ms-1' src="/images/facebook.png" alt="facebook" />
                        <img className='w-6 ms-1' src="/images/twitter.png" alt="twitter" />
                        <img className='w-6 ms-1' src="/images/instagram.png" alt="instagram" />
                    </div>

                </div>
                <div className='w-70 '>
                    <h1 className='mb-5 font-bold mb-5'>Company</h1>
                    <p className='text-sm'>About Us <br />Work<br />Latest News<br />Careers</p>
                </div>
                <div className='w-40'>
                    <h1 className='mb-5 font-bold mb-5'>Product</h1>
                    <p className='text-sm'>
                        Prototype <br />
                        Plans & Pricing <br />
                        Customers <br />
                        Integrations <br />
                    </p>
                </div>
                <div className='w-40'>
                    <h1 className='mb-5 font-bold mb-5'>Support</h1>
                    <div className='text-sm'>
                        <p>
                            Help Desk <br />
                            Sales <br />
                            Become a Partner <br />
                            Developers
                        </p>
                    </div>
                </div>
                <div className='w-40'>
                    <h1 className='mb-5 font-bold mb-5'>Contact</h1>
                    <p className='text-sm'>Mohammadpur,<br />Magura, Bangladesh</p>
                </div>
            </div>
            
            <div className='flex justify-between mb-6 text-blue-400 text-center'>
                <p className='text-xs p-3 text-center'>@2023 SA Career Copyright</p>
            </div>
        </div>
    );
};

export default Footer;