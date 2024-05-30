import { Box, Container, Typography } from '@mui/material';


const Specialist = () => {
    return (
        <Container>
            <Box sx={{
                margin:"50px 0px" ,
                textAlign:"center"
            }}>
                <Box sx={{
                    textAlign:'start'
                }}>
                    <Typography variant='h4' fontWeight={600}>
                        Explore Treatments Across Specialists
                    </Typography>
                    <Typography component='p' fontWeight={200} fontSize={18}>
                        Experienced Doctors Across All Specialties
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Specialist;