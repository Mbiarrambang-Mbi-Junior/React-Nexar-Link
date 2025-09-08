import React from 'react';
import Tilt from 'react-parallax-tilt';
import '../styles/card.css';
import { BsPlus } from 'react-icons/bs';

// Note: You can remove the individual image imports like `nikeBlue`
// as the image path will now be passed through props.

function Card({ product }) {
    // Destructure the product prop to easily access its properties
    const { image, price, catigory, name, description } = product;

    // The state and increment function can remain the same
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div className="card-content">
            <Tilt
                className="card blue"
                tiltMaxAngleX={25}
                tiltMaxAngleY={25}
                perspective={1000}
                transitionSpeed={5000}
                glareEnable={true}
                glareMaxOpacity={0.5}
            >
                <span className="sneakers">{catigory}</span>
                <span className="price">{price}</span>
                {/* Use the 'image' prop here */}
                <img src={image} alt={name} />
                <div className="title">
                    <h2>{name}</h2>
                    <div className="product-description">
                        <p className="description">
                            {description}
                        </p>
                    </div>
                    <BsPlus className='add-icon' onClick={increment} />
                </div>
            </Tilt>
        </div>
    );
}

export default Card;