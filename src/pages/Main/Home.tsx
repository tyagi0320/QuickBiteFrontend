import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Grid
} from '@mui/material';
import { motion } from 'framer-motion';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Link } from 'react-router-dom';

const Home = () => {
  const MID_NAVY = '#1B3B5F';
  const NAVY_GRADIENT = 'linear-gradient(135deg, #f5f7fa 0%, #d6dee9 100%)';
  
  return (
    <Box sx={{ overflowX: 'hidden', bgcolor: '#ffffff' }}>
      {/* HERO SECTION */}
      <Box sx={{
        background: NAVY_GRADIENT,
        py: { xs: 8, md: 12 },
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{xs:12, md:6}}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <LocalFireDepartmentIcon sx={{ color: MID_NAVY, fontSize: 20 }} />
                  <Typography variant="overline" sx={{ color: MID_NAVY, fontWeight: 800, letterSpacing: 2 }}>
                    FASTEST DELIVERY IN THE CITY
                  </Typography>
                </Stack>
                
                <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, lineHeight: 1.1, color: '#0f172a' }}>
                  QuickBite. <br /> 
                  <Box component="span" sx={{ color: MID_NAVY }}>Premium Taste.</Box>
                </Typography>
                
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.1rem', maxWidth: 450 }}>
                  Healthy meals from the city's finest kitchens, delivered to your doorstep in 20 minutes or less.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button 
                    component={Link} to="/fooditems"
                    variant="contained" 
                    size="large" 
                    endIcon={<ArrowForwardIcon />} 
                    sx={{ px: 4, py: 1.5, borderRadius: 2, bgcolor: MID_NAVY, '&:hover': { bgcolor: '#142d4a' } }}
                  >
                    Start Ordering
                  </Button>
                </Stack>
              </motion.div>
            </Grid>

            <Grid size={{xs:12, md:6}}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box sx={{
                  width: '100%',
                  height: { xs: 300, md: 400 },
                  bgcolor: MID_NAVY,
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 30px 60px rgba(27, 59, 95, 0.25)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <RestaurantMenuIcon sx={{ fontSize: 140, color: 'rgba(255,255,255,0.9)' }} />
                  <Box sx={{ 
                    position: 'absolute', width: '80%', height: '80%', 
                    border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%' 
                  }} />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
