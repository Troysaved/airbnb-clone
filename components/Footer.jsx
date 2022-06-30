import React from 'react';

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14
        bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>Community</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty cool clone</p>
                <p>Hire me</p>
                <p>Troy Satchell</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p>I Love dogs</p>
                <p>But</p>
                <p>Cats are pretty</p>
                <p>Cool as well</p>
                <p>Why pick, get both</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>Help Center</p>
                <p>Trust & Saftey</p>
                <p>AirCover</p>
                <p>Saftey Information</p>
                <p>Our COVID-19 Response</p>
            </div>


        </div>
    );
}

export default Footer;
