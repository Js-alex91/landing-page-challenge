
import { Box, makeStyles, Typography } from '@material-ui/core';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import tab1Ilustration from '../../public/assets/images/illustration-features-tab-1.png';
import tab2Ilustration from '../../public/assets/images/illustration-features-tab-2.png';
import tab3Ilustration from '../../public/assets/images/illustration-features-tab-3.png';

import 'react-tabs/style/react-tabs.css';

const useStyles = makeStyles({

  root: {
    display: 'flex',
    width: '100%',

    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },

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
})



export const Features = () => {

  const classes = useStyles()
  return (

    <Box className="w-full h-[100vh] flex justify-start items-center flex-col" id='features'>

      <Box className=' flex flex-col items-center justify-center h-[20%]'>
        <h1 className=" text-3xl font-semibold "  >Features</h1>
        <Typography variant='inherit' className='pt-4 md:w-[40%] w-full text-center' >Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go.</Typography>
      </Box>



      <Tabs className="mt-20 w-full flex flex-col h-[80%] "  >

        <TabList className="flex justify-center w-full items-center md:flex-row flex-col md:mt-0 mt-5 mb-5">
          <Tab className="focus:border-b-[1px] focus:border-b-red-500 cursor-pointer mr-10 font-bold md:mt-0 mt-5">Simple Bookmarketing</Tab>
          <Tab className="focus:border-b-[1px] focus:border-b-red-500 cursor-pointer mr-10 font-bold md:mt-0 mt-5">Speedy Searching</Tab>
          <Tab className="focus:border-b-[1px] focus:border-b-red-500 cursor-pointer mr-10 font-bold md:mt-0 mt-5">Easy Sharing</Tab>
        </TabList>

        <TabPanel className={`${classes.root} md:flex-row flex-col`}>

          <Box className="md:w-1/2 w-full  h-[100%] " >
            <Box className="h-[70%] w-[90%] rounded-r-full mt-20 relative  -z-10" style={{ backgroundColor: 'hsl(231, 69%, 60%)' }} >
              <img src={tab1Ilustration} alt="hero-ilustration " className=" object-cover relative md:-right-[30%] -right-[10%] bottom-20 " />
            </Box>
          </Box>

          <Box className=" md:w-1/2 w-full h-full flex flex-col justify-start items-center px-1">
            <h1 className="self-start text-3xl font-semibold mt-20 "  > Bookmark in one click</h1>
            <p className='pt-4  md:w-[75%] w-full self-start' > Organize your bookmarks however you like. Our simple drag-and-drop interface
              gives you complete control over how you manage your favourite sites.</p>

            <Box className="0 self-start">
              <button className={`${classes.btn1} rounded-md mr-1 `}>More Info</button>
            </Box>

          </Box>

        </TabPanel>


        <TabPanel className={`${classes.root} md:flex-row flex-col`}>
          <Box className="md:w-1/2 w-full  h-[100%] " >
            <Box className="h-[70%] w-[90%] rounded-r-full mt-20 relative  -z-10" style={{ backgroundColor: 'hsl(231, 69%, 60%)' }} >
              <img src={tab2Ilustration} alt="hero-ilustration " className=" object-cover relative md:-right-[30%] -right-[10%] bottom-20  " />
            </Box>
          </Box>

          <Box className=" md:w-1/2 w-full h-full flex flex-col justify-start items-center px-1">
            <h1 className="self-start text-3xl font-semibold mt-20 "  > Intelligent search</h1>
            <p className='pt-4  md:w-[75%] w-full self-start' >  Our powerful search feature will help you find saved sites in no time at all.
              No need to trawl through all of your bookmarks.</p>

            <Box className="0 self-start">
              <button className={`${classes.btn1} rounded-md mr-1 `}>More Info</button>
            </Box>

          </Box>
        </TabPanel>


        <TabPanel className={`${classes.root} md:flex-row flex-col`}>
          <Box className="md:w-1/2 w-full  h-[100%] " >
            <Box className="h-[70%] w-[90%] rounded-r-full mt-20 relative  -z-10" style={{ backgroundColor: 'hsl(231, 69%, 60%)' }} >
              <img src={tab3Ilustration} alt="hero-ilustration " className=" object-cover relative md:-right-[30%] -right-[10%] bottom-20 " />
            </Box>
          </Box>

          <Box className=" md:w-1/2 w-full h-full flex flex-col justify-start items-center px-1">
            <h1 className="self-start text-3xl font-semibold mt-20 "  >Share your bookmarks</h1>
            <p className='pt-4  md:w-[75%] w-full self-start' >  Easily share your bookmarks and collections with others. Create a shareable
              link that you can send at the click of a button.</p>

            <Box className="0 self-start">
              <button className={`${classes.btn1} rounded-md mr-1 `}>More Info</button>
            </Box>

          </Box>
        </TabPanel>
      </Tabs>
    </Box>


  );
}

