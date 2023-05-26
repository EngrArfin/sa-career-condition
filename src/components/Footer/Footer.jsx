import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-slate-900 text-white p-10'>
            <div className='flex justify-around p-4'>
                <div className='w-40'>
                    <h1 className='font-bold text-xl text-blue-700 mb-5'>HeadHunters</h1>
                    <p className='text-sm'>We provide the best services. You will get the premium quality advise which will make your career better.</p>
                    <div className='flex mt-5'>
                        <img className='w-8 ms-1' src="/images/facebook.png" alt="facebook" />
                        <img className='w-8 ms-1' src="/images/twitter.png" alt="twitter" />
                        <img className='w-8 ms-1' src="/images/instagram.png" alt="instagram" />
                    </div>

                </div>
                <div className='w-40 '>
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
                    <p className='text-sm'>Kazipara,<br /> Mirpur, Dhaka</p>
                </div>
            </div>
            <hr className='bg-white mt-5 mb-5' />
            <div className='flex justify-between mb-6 text-slate-400'>
                <p className='text-xs'>@2023 HeadHunters. All Rights Reserved</p>
                <p className='text-xs'>Powered By HeadHunters</p>
            </div>
        </div>
    );
};

export default Footer;