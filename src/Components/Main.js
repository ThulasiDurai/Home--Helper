import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
import imgDetail from '../Assets/home.webp';
// import imgDetail2 from '../Assets/pexels-pixabay-271816.jpg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Home Service at your doorstep'
                    }
                    textAlign={'start'}
                    /> 
                    <CustomTypography style={{marginTop : '50px'}}>
                    Welcome to our Happy Home ,
                    the ultimate solution for <br></br>simplifying your home management experience. 
                    Our application <br></br>is designed with you in mind, 
                    offering a comprehensive<br></br> range of services to transform your 
                    living space into a haven of comfort and convenience.
                    </CustomTypography> 
                    <button style={{width: '200px',borderRadius:'30px',marginTop:'80px',backgroundColor:'orange'}}>GetStarted</button>
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '80%',
                    margin : '5px'
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                {/* <img src={imgDetail2} alt=""  */}
                {/* style={{ 
                    width: "100%",
                }}
                /> */}
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    {/* <Title
                    text={
                        'Match with the best agent'
                        
                    } */}
                    {/* textAlign={'start'}
                    /> */}
                    {/* <CustomTypography>
                        Our verified partner Agents are local experts who<br /> 
                        earn an average of 4.8/5 stars from buyers and sellers.
                    </CustomTypography> */}
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;