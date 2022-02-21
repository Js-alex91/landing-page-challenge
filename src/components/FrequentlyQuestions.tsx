import { Accordion, AccordionDetails, AccordionSummary, Box, makeStyles, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles({
    btn1: {
        background: 'hsl(231, 69%, 60%)',
        color: 'white',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingBottom: '.5rem',
        paddingTop: '.5rem',

        '&:focus': {
            border: '1px solid hsl(231, 69%, 60%) ',
            background: 'white',
            color: 'hsl(231, 69%, 60%)'
        }

    },


})



export const FrequentlyQuestions = () => {
    const classes = useStyles()

    return (
        <Box className="w-full  h-[100vh] flex justify-center items-center flex-col" >

            <Box className="flex flex-col justify-center h-[20%] items-center w-full mt-10   md:w-1/3">
                <h1 className="text-3xl font-semibold text-center " > Frequently Asked Questions</h1>
                <p className="text-center mt-5 text-sm md:text-xl ">
                    Here are some of our FAQs. If you have any other questions you’d like
                    answered please feel free to email us.</p>
            </Box>


            <Box className=' h-[80%] md:w-1/2 w-[100%] px-1 mt-10 flex flex-col items-center'>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h6" className='font-bold'>  What is Bookmark?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='p' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                            justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="h6" className='font-bold'>How can I request a new browser?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='p'>
                            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
                            Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                            ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
                            Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="h6" className='font-bold'>Is there a mobile app?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='p'>
                            Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
                            urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
                            sollicitudin ex et ultricies bibendum.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="h6" className='font-bold'> What about other Chromium browsers?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='p'>
                            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam
                            vitae neque eget nisl gravida pellentesque non ut velit.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <button className={`${classes.btn1} rounded-md mt-5`}  >More info</button>


            </Box>
        </Box>
    )
}
