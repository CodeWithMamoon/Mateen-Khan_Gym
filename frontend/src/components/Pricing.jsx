import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pic3.jpeg",
      title: "QUARTERLY",
      price: 12000,
      length: 3,
    },
    {
      imgUrl: "/pic3.jpeg",
      title: "HALF-YEARLY",
      price: 22000,
      length: 6,
    },
    {
      imgUrl: "/pic3.jpeg",
      title: "YEARLY",
      price: 42000,
      length: 12,
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <h1>Affordable Fitness Plans for All</h1>
      <p>
        At Mateen Khan Gym, we provide affordable fitness plans for middle-class 
        families who want to stay fit without breaking the bank. We offer both 
        onsite and online training, allowing you to choose the option that works 
        best for you. Our online sessions are perfect for those who prefer working 
        out from home.
      </p>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Online and Onsite Training
                </p>
                <p>
                  <Check /> Flexible Workout Schedules
                </p>
                <p>
                  <Check /> Professional Trainer Support
                </p>
                <p>
                  <Check /> Customized Diet and Workout Plans
                </p>
                <p>
                  <Check /> 10-Day Plan Freezing Option
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
