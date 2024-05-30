import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import bgImage from '@/assets/Banner/bgImage.jpg';

const HeroSection = () => {
    return (
        <Container sx={{
            direction: "row",
            display: "flex",
            my: '16'
        }}>
            <Box
            // sx={{
            //     flex:1 ,
            //     position:"relative" ,
            // }}
            >
                {/* <Box 
                    sx={{
                        position:"absolute" ,
                        width:"700px" ,
                        top:"-90px" ,
                        left:"-120px"
                    }}
                    >
                    <Image src={bgImage} alt='Background Image' />
                </Box> */}

                <Typography variant="h3" component="h1" fontWeight={600} sx={{
                    width: '50%',
                    marginTop: '80px',
                }}>
                    Healthier Hearts
                </Typography>

                <Typography variant="h3" component="h1" fontWeight={600} >
                    Come From
                </Typography>

                <Typography variant="h3" component="h1" fontWeight={600} color="primary.main" sx={{
                    width: '50%',
                    marginBottom: '20px',
                }} >
                    Preventive Care
                </Typography>
                <Typography component="p" fontWeight={400} sx={{
                    width: '50%',
                    marginBottom: '30px',
                }} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nesciunt eos minus error voluptatem saepe voluptas blanditiis consectetur quasi quidem doloribus a iste porro delectus libero eligendi.
                </Typography>

                <Box sx={{
                        display:"flex" ,
                        gap: 2 ,
                    }}>
                    <Button>Make Appointment</Button>
                    <Button variant='outlined'>Contact Us</Button>
                </Box>
            </Box>
            <Box>Right</Box>
        </Container>
    );
};

export default HeroSection;