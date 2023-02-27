
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './Briyani.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from './Rating';
import Rolldata from './Rolldata';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function Sandwich() {

    return (
        <>


            <h1> Roll and Puff</h1>

            <div className='d-flex content1 biryani' id='ber'>

                {Rolldata.cardData.map((item, index1) => {
                    return (
                        <div className='hair'>
                            <Card sx={{ maxWidth: 345 }} key={index1} className='doone' >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={item.imgSrc}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}

                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.cont}
                                        

                                    </Typography>
                                  <div className='rs1'>  
                                    <Rating /> <div className='rs2'><CurrencyRupeeIcon/>{item.rs}</div>
                                    </div>
                                    <div className='btn19'>
                                        <button> Order Now</button>
                                    </div>
                                </CardContent>
                                <CardActions>

                                </CardActions>

                            </Card>
                        </div>

                    )
                })}

            </div>


        </>
    )
}
export default Sandwich;