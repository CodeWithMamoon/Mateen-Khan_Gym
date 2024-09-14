import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Exclusive Workout Sessions</h1>
        <p>
          At Mateen Khan Gym, we offer tailored workout sessions designed to help
          you achieve your fitness goals. Whether you're looking to lose weight,
          gain muscle, or enhance your overall fitness, our expert trainers are
          here to guide you every step of the way. Join us for an invigorating 
          experience that combines science-backed training with personalized attention.
        </p>
        <img src="/pic2.jpeg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>Featured Bootcamps</h1>
        <p>
          Elevate your fitness journey with our dynamic bootcamp sessions. These
          high-intensity programs are designed for all fitness levels and focus
          on endurance, strength, and full-body conditioning. Whether you prefer
          training online or onsite, we guarantee results that will leave you
          feeling stronger and more confident.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Weight Loss Bootcamp</h4>
            <p>
              Shed those extra pounds with our targeted weight loss bootcamp. Our
              trainers will guide you through intensive cardio and strength
              routines designed to maximize fat burning and improve cardiovascular
              health.
            </p>
          </div>
          <div>
            <h4>Muscle Gain Bootcamp</h4>
            <p>
              Build lean muscle mass with our muscle gain bootcamp. Combining
              strength training, resistance exercises, and nutrition guidance,
              this program is perfect for those looking to sculpt their physique.
            </p>
          </div>
          <div>
            <h4>Personalized Fitness Coaching</h4>
            <p>
              Enjoy one-on-one training with our expert coaches, either online or
              in-person. We customize workout plans to fit your unique goals,
              ensuring maximum efficiency and progress.
            </p>
          </div>
          <div>
            <h4>Cardio & Strength Combination</h4>
            <p>
              Experience the best of both worlds with our cardio and strength
              combination classes. These sessions focus on improving endurance,
              building strength, and burning calories, all in one power-packed
              workout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
