import { Box, Container, Typography, Paper, BottomNavigation } from '@mui/material';
import CustomizedAccordions from '../components/Accordion';
import ImageCollage from '../components/ImageCollage';
import BasicModal from '../components/Modal';

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant='h3' component='h1' marginTop={3}>
        Explore the World in Los Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img style={{ height: 450, width: 550 }} src="https://media.timeout.com/images/105124791/750/422/image.jpg" alt="" />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant='h6' component='h4' marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant='paragraph' component='p' marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore fugit nostrum fugiat et voluptatibus tenetur unde rem quisquam explicabo? Ea tenetur omnis a suscipit tempora nostrum, hic quisquam facilis?
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 13 }}>
        <Typography variant='h6' component='h4' marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container >
  );
};

export default Tour;