import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faUtensilSpoon, faKitchenSet, faBowlFood  } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({

}));

const LandingPage = () => {
    const classes = useStyles();

    return (
        <div>
            <header class="hero">
                <h1>Satisfy Your Cravings with Culinary Creativity!</h1>
                <p>Experience the Art of Flavors with Creative Kravings.</p>
                <div class="service-icons">
                    <div class="icon">
                        <FontAwesomeIcon icon={faUtensils}/>
                        <p>Meal Subscription</p>
                    </div>
                    <div class="icon">
                        <FontAwesomeIcon icon={faUtensilSpoon}/>
                        <p>A La Cart Orders</p>
                    </div>
                    <div class="icon">
                        <FontAwesomeIcon icon={faKitchenSet}/>
                        <p>Meal Plans</p>
                    </div>
                    <div class="icon">
                        <FontAwesomeIcon icon={faBowlFood}/>
                        <p>Catering</p>
                    </div>
                </div>
            </header>
            <section>
                <h2>Time saving convenience</h2>
                <ul>
                    <li>Enjoy chef-prepared meals without spending hours in the kitchen</li>
                    <li>Save time on meal planning and grocery shopping</li>
                    <li>Conveniently have delicious and nutritious meals ready to enjoy</li>
                    <li>Say goodbye to meal prep stress and hello to more free time</li>
                    <li>Effortlessly elevate your dining experience with time-saving convenience</li>
                </ul>
            </section>

            <section>
                <h2>Healthy and nutritious options</h2>
                <ul>
                    <li>Choose from a variety of balanced and wholesome meal options</li>
                    <li>Fuel your body with fresh, high-quality ingredients</li>
                    <li>Discover delicious meals that are both nutritious and satisfying</li>
                    <li>Opt for healthier choices without compromising on flavor</li>
                    <li>Nourish your body with wholesome and nutrient-rich dishes</li>
                </ul>

            </section>

            <section>
                <h2>Customization and personalization</h2>

                <ul>
                    <li>Tailor your meals to fit your dietary preferences and restrictions</li>
                    <li>Personalize your dishes with additional ingredients or modifications</li>
                    <li>Customize portion sizes to suit your appetite and needs</li>
                    <li>Create a meal plan that aligns with your health and wellness goals</li>
                    <li>Enjoy the flexibility of choosing what goes into your meals</li>
                </ul>
            </section>

            <section>
                <h2>Variety and menu flexibility</h2>

                <ul>
                    <li>Explore a diverse range of cuisine options from around the world</li>
                    <li>Indulge in seasonal specials and rotating menu selections</li>
                    <li>Enjoy daily chef's recommendations for exciting culinary experiences</li>
                    <li>Choose from a variety of meal sizes and combinations</li>
                    <li>Embrace the freedom to mix and match dishes to create your ideal meal combination</li>
                </ul>
            </section>

            <section>
                <h2>Delivery and flexibility</h2> 

                <ul>
                    <li>Schedule convenient delivery times to fit your busy lifestyle</li>
                    <li>Enjoy the option for contactless delivery for added convenience and safety</li>
                    <li>Easily modify or cancel orders to accommodate unexpected changes</li>
                    <li>Track your delivery in real-time for peace of mind</li>
                    <li>Select from a range of delivery options, including express or standard shipping</li>
                </ul>
            </section>

            <section>
                <h2>Cost savings</h2>

                <ul>
                    <li>Take advantage of special promotions and discounts for cost-effective dining</li>
                    <li>Opt for value meal deals to enjoy savings on bundled meal options</li>
                    <li>Join loyalty programs or subscription services for exclusive member discounts</li>
                    <li>Utilize coupon codes or promotional offers for additional cost savings</li>
                    <li>Explore budget-friendly menu items without compromising on quality or taste</li>
                </ul>
            </section>

            <section>
                <h2>Expertise and culinary excellence </h2>

                <ul>
                    <li>Our chefs bring a wealth of experience and skill to create exquisite culinary masterpieces</li>
                    <li>Diverse culinary backgrounds ensure a fusion of flavors and techniques for a unique dining experience</li>
                    <li>Attention to detail and precision in preparation showcase our commitment to culinary excellence</li>
                    <li>Constant innovation and creativity in menu development showcase our dedication to culinary artistry</li>
                    <li>Emphasis on using fresh, high-quality ingredients to elevate each dish to a gourmet level</li>
                </ul>
            </section>
        </div>


    );
};

export default LandingPage;