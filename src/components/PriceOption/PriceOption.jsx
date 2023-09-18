import PriceOptions from "../PriceOptions/PriceOptions";

const PriceOption = () => {

    const priceOption = [
    
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to cardio equipment",
              "Access to strength training equipment",
              "Locker room access",
              "Fitness assessment upon signup",
              "Access to group fitness classes (limited)"
            ],
            "price": 30.00
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "features": [
              "Access to all gym equipment",
              "Unlimited group fitness classes",
              "Personalized workout plan",
              "Nutrition consultation",
              "Access to sauna and spa facilities"
            ],
            "price": 40.00
          },
          {
            "id": 3,
            "name": "Student Membership",
            "features": [
              "Access to cardio equipment",
              "Access to strength training equipment",
              "Valid student ID required",
              "Locker room access",
              "Discounted group fitness classes"
            ],
            "price": 70.00
          }
        ]
      

    return (
        <div>
            <h2>Mere Kasam Alam</h2>
            <div className="grid md:grid-cols-3 gap-4">
            {
                priceOption.map(option=><PriceOptions key={option.id} option={option}></PriceOptions>)
            }
            </div>
        </div>
    );
};

export default PriceOption;