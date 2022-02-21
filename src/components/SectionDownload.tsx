
import { Card, CardContent, Button, Box, Typography, makeStyles } from '@material-ui/core';
import { LogoChrome } from './svgs/LogoChrome';
import { LogoFirefox } from './svgs/LogoFirefox';
import { LogoOpera } from './svgs/LogoOpera';
import { BgDots } from './svgs/BgDots';


const useStyles = makeStyles({
  btn: {
    background: 'hsl(231, 69%, 60%)',
    color: 'white',
    padding: '.5rem',
    '&:focus': {
      border: '1px solid hsl(231, 69%, 60%) ',
      background: 'white',
      color: 'hsl(231, 69%, 60%)'
    }

  }
})

export const SectionDownload = () => {
  const classes = useStyles()
  return (

    <Box className="md:w-[100%] md:h-[100vh] w-full h-[150vh] flex justify-around flex-col  items-center mt-[20rem] md:mt-[0rem]  " id='pricing' >

      <Box className="flex flex-col justify-center items-center w-full  md:w-1/3">
        <h1 className="text-3xl font-semibold" >Download the extension</h1>
        <p className="text-center mt-5 text-sm md:text-xl ">  We’ve got more browsers in the pipeline. Please do let us know if you’ve
          got a favourite you’d like us to prioritize.</p>
      </Box>

      <Box className='grid md:grid-cols-3 grid-cols-1 grid-rows-3 md:grid-rows-1 gap-5 w-[75%] md:w-[50%] md:h-[50%] h-[75%] mb-20 '>
        <Card className='' data-aos="fade-down" data-aos-duration="800">
          <CardContent className='flex flex-col justify-between  h-[100%]'>
            <Box className='flex flex-col justify-center items-center h-[75%]' >
              <LogoChrome />
              <Typography variant='h5' className='' > Add to Chrome</Typography>
              <Typography variant='caption' className='mt-10' >  Minimum version 62</Typography>
            </Box>
            <BgDots />
            <button className={`${classes.btn} rounded-md`}>Add & Install Extension</button>

          </CardContent>
        </Card>

        <Card className='relative top-10' data-aos="fade-down" data-aos-duration="1500">
          <CardContent className='flex flex-col justify-between  h-[100%]'>
            <Box className='flex flex-col justify-center items-center h-[75%]' >
              <LogoFirefox />
              <Typography variant='h5' className='' >Add to Firefox</Typography>
              <Typography variant='caption' className='mt-10' >Minimum version 55</Typography>
            </Box>
            <BgDots />

            <button className={`${classes.btn} rounded-md`}>Add & Install Extension</button>

          </CardContent>
        </Card>

        <Card className='relative top-20' data-aos="fade-down" data-aos-duration="2500">
          <CardContent className='flex flex-col justify-between  h-[100%]'>
            <Box className='flex flex-col justify-center items-center h-[75%]' >
              <LogoOpera />
              <Typography variant='h5' className='' >Add to Opera</Typography>
              <Typography variant='caption' className='mt-10' >Minimum version 46</Typography>
            </Box>
            <BgDots />

            <button className={`${classes.btn} rounded-md`}  >Add & Install Extension</button>

          </CardContent>
        </Card>

      </Box>

    </Box>

  )
}
