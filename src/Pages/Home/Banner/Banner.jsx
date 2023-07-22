
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/images/banner1.jpg';
import banner2 from '../../../assets/images/banner2.jpg';
import banner3 from '../../../assets/images/banner3.png';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={banner1} />

                </div>
                <div>
                    <img src={banner2} />

                </div>
                <div>
                    <img src={banner3} />

                </div>
            </Carousel>
        </div>
    );
};

export default Banner;