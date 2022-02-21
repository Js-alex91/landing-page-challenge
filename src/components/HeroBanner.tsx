import { Box, makeStyles } from '@material-ui/core'
import imgIlustration from '../../public/assets/images/illustration-hero.png';


const useStyles = makeStyles({
    btn1: {
        background: 'hsl(231, 69%, 60%)',
        color: 'white',
        padding: '.5rem',
        '&:focus': {
            border: '1px solid hsl(231, 69%, 60%) ',
            background: 'white',
            color: 'hsl(231, 69%, 60%)'
        }

    },

    btn2: {
        background: 'hsl(229, 8%, 60%)',
        color: 'white',
        padding: '.5rem',
        '&:focus': {
            border: '1px solid hsl(229, 8%, 60%) ',
            background: 'white',
            color: 'hsl(229, 8%, 60%)'
        }

    }
})


export const HeroBanner = (): JSX.Element => {

    const classes = useStyles()
    return (
        <Box id="banner"
            className="w-[100%] md:h-[94vh] h-[94vh] flex md:flex-row flex-col-reverse"
        >

            <Box className=" md:w-1/2 md:h-[100%] h-[50%] w-full flex flex-col  items-center ">

                <Box className=" h-[100%] md:w-[75%] w-full px-5 flex flex-col justify-center items-center self-end">
                    <h1 className="self-start text-3xl font-semibold"  >A Simple Bookmark Manager</h1>

                    <p className='pt-4  md:w-[75%] w-full self-start' >A clean and simple interface to organize your favourite websites. Open a new
                        browser tab and see your sites load instantly. Try it for free.r</p>

                    <Box className=" self-start mt-5 md:w-[50%] w-full flex md:justify-around ">
                        <button className={`${classes.btn1} rounded-md mr-1`}>Get it on Chrome</button>
                        <button className={`${classes.btn2} rounded-md`}>Get it on Firefox</button>

                    </Box>

                </Box>
            </Box>

            <Box className=" md:w-1/2 md:h-[100%] h-[50%] w-full flex items-center " style={{ justifyContent: 'flex-end' }} >
                <Box className=" h-[50%] w-[75%] rounded-l-full -z-10" style={{ backgroundColor: 'hsl(231, 69%, 60%)' }} >
                    <img src={imgIlustration} alt="hero-ilustration " className="justify-self-end object-cover relative top-[-20%] left-[-10%] " />
                </Box>
            </Box>


        </Box>
    )
}
