import { AiFillCheckCircle } from 'react-icons/ai'
const Features = ({feature}) => {
    console.log(feature)
    return (
        <div >
            <h3 className='flex gap-2 items-center '> <AiFillCheckCircle className='text-yellow-500'></AiFillCheckCircle> {feature}</h3>
        </div>
    );
};

export default Features;