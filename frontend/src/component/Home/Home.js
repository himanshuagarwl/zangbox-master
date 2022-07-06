import React, { Fragment, useEffect } from "react";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Imgba from "./ilya-mashkov-_qxbJUr9RqI-unsplash.jpg";
import Imgbb from "./monika-grabkowska-xd5kuJAYPig-unsplash.jpeg";
import SugarCaneHalwa from "./Halwa.png";
import BelgiumNutty from "./pNutty.png";
import Tikki from "./Tikki.png";
import Payasam from "./Payasam.jpeg";
import Laddoo from "./Laddoo.png";
import Combo from "./combo 1.png";
import Menu7 from "./menu7.jpg";
import Menu8 from "./menu8.jpg";
import Chef1 from "./chef1.jpeg";
import Chef2 from "./chef2.jpeg";
import Chef3 from "./chef3.jpeg";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          {/* SectionA */}
          <div className="sectiona">
            <div className="leftside">
              <div className="secatitle">
                <div className="line1">Experience the best quality</div>
                <div className="line2a">
                  Deliciousness jumping into the mouth
                </div>
                <p>
                  Together creeping heaven upon third dominion be upon won't
                  darkness rule land behold it created good saw after she'd Our
                  set living. Signs midst dominion creepeth morning
                </p>
                <button>Order Now</button>
              </div>
            </div>
            <div className="rightside"></div>
          </div>

          <div className="head1">Our Exclusive Items</div>
          <div className="cards">
            <div className="card1">
              <img src={Imgba} className="card" alt="burger" />
              <div className="carddesc"> </div>
              <h3 className="burger">Indian Burger</h3>
              <div>
                Was brean shed moveth day yeilding tree yielding day were female
                and.......
              </div>
              <button>Order Now</button>
            </div>
            <div className="card1">
              <img src={Imgbb} className="card" alt="burger" />
              <div className="carddesc"> </div>
              <h3 className="burger">Indian Burger</h3>
              <div>
                Was brean shed moveth day yeilding tree yielding day were female
                and.......
              </div>
              <button>Order Now</button>
            </div>

            <div className="card1">
              <img src={Imgba} className="card" alt="burger" />
              <div className="carddesc"> </div>
              <h3 className="burger">Indian Burger</h3>
              <div>
                Was brean shed moveth day yeilding tree yielding day were female
                and.......
              </div>
              <button>Order Now</button>
            </div>
          </div>
          <div className="seaction2">
            <div>
              <div className="img1"></div>
            </div>
            <div className="para">
              {/* <div className="line1">Our History</div> */}
              <div className="line2">
                Where The Food’s As <br /> Good As The Root Beer.
              </div>
              <div className="line3">
                Satisfying people hunger for simple pleasures
              </div>
              <p>
                May over was. Be signs two. Spirit. Brought said dry own
                firmament lesser best sixth deep abundantly bearing, him,
                gathering you blessed bearing he our position best ticket in
                month hole deep
              </p>
              {/* <div className="sec2img"></div> */}
            </div>
          </div>
          <div className="section3">
            <div className="head2">Delicious Food Menu</div>
            {/* <ul className="a">
              <li>Special</li>
              <li>Breakfast</li>
              <li>Lunch</li>
              <li>Dinner</li>
              <li>Snacks</li>
            </ul> */}
          </div>

          <div className="sectiond">
            <div className="c1">
              <div>
                <img src={SugarCaneHalwa} alt="muffin" width="200" height="200" />
              </div>
              <div className="cardtext">
                <h2>SugarCane Halwa</h2>
                <p>They're wherein heaven seed hath nothing</p>
              </div>
            </div>
            <div className="c1">
              <div>
                <img src={BelgiumNutty} alt="muffin" width="200" height="200" />
              </div>
              <div className="cardtext">
                <h2>Belgium Nutty</h2>
                <p>They're wherein heaven seed hath nothing</p>
              </div>
            </div>
            <div className="c1">
              <div>
                <img src={Tikki} alt="muffin" width="200" height="200" />
              </div>
              <div className="cardtext">
                <h2>Caribean Tikki</h2>
                <p>They're wherein heaven seed hath nothing</p>
              </div>
            </div>
            <div className="c1">
              <div>
                <img src={Payasam} alt="muffin" width="200" height="200" />
              </div>
              <div className="cardtext">
                <h2>Black Payasam</h2>
                <p>They're wherein heaven seed hath nothing</p>
              </div>
            </div>
            <div className="c1">
              <div>
                <img src={Laddoo} alt="muffin" width="200" height="200" />
              </div>
              <div className="cardtext">
                <h2>Kajjoor Laddu</h2>
                <p>They're wherein heaven seed hath nothing</p>
              </div>
            </div>
            <div className="c1">
              <div>
                <img src={Combo} alt="muffin" width="200" height="200" />
              </div>
              <div className="cardtext">
                <h2>Combo Meal</h2>
                <p>They're wherein heaven seed hath nothing</p>
              </div>
            </div>
            <div className="c1">
              <div>
                <img src={Menu7} alt="muffin" width="200" height="200" />
              </div>
              <div className="cardtext">
                <h2>Puri Sabzi</h2>
                <p>They're wherein heaven seed hath nothing</p>
              </div>
            </div>
            <div className="c1">
              <div>
                <img src={Menu8} alt="muffin" width="200" height="200" />
              </div>
              <div className="cardtext">
                <h2>Sandwich</h2>
                <p>They're wherein heaven seed hath nothing</p>
              </div>
            </div>
          </div>
          <div className="head1">Our Experience Chefs</div>
          <div className="cards bottomcard">
            <div className="card1">
              <img src={Chef1} className="card" alt="burger" />
              <div className="carddesc"> </div>
              <h3 className="burger">Loream Loream</h3>
              <div>Chef Master</div>
              <div>Read More</div>
            </div>
            <div className="card1">
              <img src={Chef2} className="card" alt="burger" />
              <div className="carddesc"> </div>
              <h3 className="burger">Loream Loream</h3>
              <div>Chef Master</div>
              <div>Read More</div>
            </div>

            <div className="card1">
              <img src={Chef3} className="card" alt="burger" />
              <div className="carddesc"> </div>
              <h3 className="burger">Loream Loream</h3>
              <div>Chef Master</div>
              <div>Read More</div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
