import { Link } from "@geist-ui/core"
import { Box, makeStyles, TextField, Typography } from "@material-ui/core"
import { useRef } from "react"
import { ILinks } from "./NavBar"
import { IconFacebook } from "./svgs/IconFacebook"
import { IconTwitter } from "./svgs/IconTwitter"

import { LogoBookMarkFooter } from "./svgs/LogoBookMarkFooter"

const useStyles = makeStyles({

    root: {
        background: 'hsl(231, 69%, 60%)'
    },

    secondParent: {
        background: 'hsl(229, 31%, 21%)',
    },

    link: {
        marginLeft: '.5rem'
    }

})
export const Footer = () => {

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


    const btn = useRef(null)



    const classes = useStyles()
    return (
        <Box className={`${classes.root} h-[50vh] md:h-[40vh] w-full`} id='contact' >

            <Box className=' h-[80%] w-full flex flex-col items-center justify-around '>

                <Box className=' md:w-1/2 w-full flex flex-col items-center'>
                    <Typography variant='p' className='text-slate-200 flex justify-center  ' style={{ letterSpacing: '.4rem' }} >35,000+ already joined</Typography>
                    <Typography variant='h5' className='text-slate-200 flex justify-center md:w-1/3 w-full text-center' > Stay up-to-date with what we’re doing</Typography>
                </Box>

                <form className='  md:w-1/2 h-1/2 md:h-auto w-full flex md:flex-row flex-col justify-center items-center' onSubmit={(e) => e.preventDefault()} >
                    <TextField type='email' id="outlined-basic" label="Enter your email addresss" variant="outlined" className='md:w-auto mt-5 w-[75%]' />
                    <button type='submit' className='bg-red-600 h-1/3 px-2 md:mt-0 mt-2 md:w-[15%] w-[75%]  rounded-md md:h-full text-white md:ml-3 focus:bg-slate-50 focus:text-red-600 focus:border-[1px] duration-200 transition-all focus:border-red-600' >Contact Us</button>
                </form>
            </Box>


            <Box className={`${classes.secondParent} md:h-[20%] h-[50%]  flex items-center md:flex-row flex-col justify-around w-full`} >
                <LogoBookMarkFooter />

                <Box className='md:w-1/3 flex  md:flex-row flex-col ' >
                    {
                        links.map((item) => (
                            <Link href={item.link} style={{ marginLeft: '1rem', color: 'white' }} className='' >
                                {item.name}
                            </Link>
                        ))

                    }
                </Box>

                <Box className=' mr-5 grid grid-cols-2 gap-4'>
                    <IconFacebook />
                    <IconTwitter />
                </Box>
            </Box>
        </Box >
    )
}
