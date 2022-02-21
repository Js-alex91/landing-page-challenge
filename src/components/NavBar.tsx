import { Box, Button, Link, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import { LogoBookMark } from './svgs/LogoBookMark';



// types
export interface ILinksItem {
    name: string,
    link: string

}
export interface ILinks extends Array<ILinksItem> { }



export const NavBar = (): JSX.Element => {

    const links: ILinks = [
        {
            name: 'FEATURES',
            link: '#features'
        },
        {
            name: 'PRICING',
            link: '#pricing'
        },
        {
            name: 'CONTACT',
            link: '#contact'
        },

    ]
    const [show, setshow] = useState(false);
    return (
        <Box className="h-[6vh] flex justify-between w-[100%] ">
            <Box className=" md:w-[20%] w-[40%] flex justify-center items-center " >
                <LogoBookMark />
            </Box>



            <Box className={`md:w-[70%] flex justify-center items-center md:opacity-100
                            md:static absolute top-0 w-[100vw] h-[100vh]
                            md:h-auto md:bg-white bg-slate-800 text-black
                             flex-col md:flex-row duration-700 ease-in-out ${show ? 'top-15' : 'top-[-100vh]'}`}>
                {
                    links.map((item) => (
                        <Link href={item.link} style={{ textDecoration: 'none' }} onClick={() => { setshow(!show) }}
                            className={` md:px-4 md:py-2 md:mr-8 focus:md:text-red-600 duration-500 w-[90%]  flex justify-center md:w-auto my-8 py-5 font-light border-b-[0.2px] md:border-0 border-b-slate-400`} >
                            {item.name}
                        </Link>
                    ))

                }

                <button className=" md:ml-5 md:mt-0 md:w-auto w-1/2 mt-6 transition-all font-light duration-200 px-10 py-1 bg-red-400 text-white rounded-md  focus:md:border-red-600 focus:border-[1px] focus:md:bg-white focus:md:text-red-600">LOGIN</button>

            </Box>


            <Box className="md:hidden cursor-pointer flex justify-center items-center">
                <Button onClick={() => { setshow(!show) }} ><MenuIcon className={`font-medium ${show ? 'text-white' : 'text-black'}`} /></Button>
            </Box>
        </Box>
    )
};
