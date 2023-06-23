import Paper from '@mui/material/Paper';
import { Typography, Grid, Box, Rating } from '@mui/material';
import {AccessTime} from '@mui/icons-material';

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img 
          src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
          alt=""
        />
        <Box paddingX={1}>
          <Typography variant='subtitle1' component='h2'>
            Immerse ino the Falls
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <AccessTime sx={{width: 12.5}} />
            <Typography variant='body2' component='p' marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              marginTop={3}
          >
            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
            <Typography variant='body2' component="p" marginLeft={0.5}>4.5</Typography>
            <Typography variant='body3' component="p" marginLeft={1.5}>
                (655 reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant='h6' component="h3" marginTop={0}>
                From C $147
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  )
}

export default TourCard;