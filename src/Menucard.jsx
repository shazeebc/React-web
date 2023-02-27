import img1 from "../src/img/ambur-biryani-2.jpeg";
import img2 from "../src/img/Club-sandwich.jpg";
import img3 from "../src/img/puff.jpg";
import img4 from "../src/img/chicken noodles.webp";
import img5 from "../src/img/chicken menu.jpg";
import { Link} from "react-router-dom";
const data ={
   Data : [
 
            {
               id: 1,
               imgSrc:img1 ,
               title: 'Briyani Box',
               cont : 'Ambur Briyani , Hydrabadi Briyani , Arbian Briyani , Chattinadu Briyani,Mandi Briyani',
                link : './Briyani'
            },
            {
               id: 4,
               imgSrc:img4 ,
               title: 'Fried rice & Noodles',
               cont : 'Ambur Briyani , Hydrabadi Briyani , Arbian Briyani , Chattinadu Briyani',
               link : './Noodles'
            },
            {
               id: 5,
               imgSrc:img5 ,
               title: 'Chicken Items',  
               cont : 'Ambur Briyani , Hydrabadi Briyani , Arbian Briyani , Chattinadu Briyani',
               link :  './Chicken'
            },
            {
                id: 2,
                imgSrc:img2 ,
                title: 'Sandwich',
                cont : 'Chicken Sandwich. ,Grilled Chicken Sandwich, Egg Sandwich, Seafood Sandwich. , Nutella Sandwich,Grilled Cheese',
                link :'./Sandwich'
             } ,
           
             {
                id: 3,
                imgSrc:img3 ,
                title: 'Rolls,Puff',
                cont : 'Ambur Briyani , Hydrabadi Briyani , Arbian Briyani , Chattinadu Briyani',
                link : './Roll'
             },
             
          
           
    ]
};

export default data;