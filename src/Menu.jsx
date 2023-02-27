
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import data from "./Menucard";
import Menucard from './Menucard'
// import './index.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';




function Menu() {
    return (
        <>
            {/* <div className="menu1 ">
                <div className="menu2">
                    <h4 className="what-on">What's On Your Mind?</h4>
                </div>
                <section className="container">
                    <div className="row">
                        <div className="menuimg1">
                            {data.cardData.map((item, index) => {
                                return (
                                    <div className="" key={index}>
                                        <div class=" card p-0 overflow-hidden  h-100 shadow" >
                                            <img src={item.imgSrc} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{item.title}</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>
            </div> */}
            <div className="menu1 ">
                <div className="menu2">
                    <h4 className="what-on">What's On Your Mind?</h4>
                </div>

                <div className='d-flex content1'>

                    {data.Data.map((item, index) => {
                        return (
                            <Link className='link' to={item.link}>
                                <Card sx={{ maxWidth: 345 }} key={index}>
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
                                    </CardContent>
                                    <CardActions>

                                    </CardActions>
                                </Card>
                            </Link>
                        )
                    })}

                </div>

            </div>









        </>
    )
}

export default Menu;