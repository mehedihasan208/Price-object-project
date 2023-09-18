import Features from "../Features/Features";

const PriceOptions = ({option}) => {
    const {name,price,features} = option
    return (
    <div className="bg-cyan-800 p-4 text-center flex flex-col">
    <div><span  className="text-4xl font-bold">{price}</span>
    <span className="text-lg">/mon</span></div>
    <h2>{name}</h2>
            <div className="pl-6 flex-grow">
    {
        features.map((feature,index)=><Features key={index} feature={feature}></Features>)
    }
            </div>
            <button className="w-full p-2 rounded-lg bg-purple-800 hover:bg-pink-800">Buy Now</button>
        </div>
        
    );
};

export default PriceOptions;