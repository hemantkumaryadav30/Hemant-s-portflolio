import waba from "../Assets/waba.gif";
import Logo from "../Assets/H (1)-modified.png";
import fb from "../Assets/fb.gif";
import insta from "../Assets/insta.gif";
import twitt from "../Assets/twitt.gif";
import project1 from "../Assets/project1.png";
import hem from "../Assets/po1.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="homemain w-full h-auto  lg:w-full">
        {/* //  <div className="main w-full h-screen fixed lg:w-full"> */}
        <div className="w-auto h-auto ">
          <div className="flex justify-between pr-10">
          <img
            src={Logo}
            alt=""
            className="h-[80px] ml-[30px] pt-[20px] lg:h-[100px]"

          />
          <button className="text-white w-[200px] h-[30px] lg:h-[40px] mt-8 rounded-[4px] bg-orange-500 lg:mt-11"  style={{ fontFamily: "Young Serif" }}>Connect with me 🚀</button>
          </div>

          <ul className="bg-orange-600 flex lg:px-28  w-auto px-2 justify-between overflow-auto ">
            <li className="text-white lg:text-[20px] lg:font-medium" style={{ fontFamily: "Young Serif" }}>
              Next JS
            </li>
            <li className="text-white lg:text-[20px] lg:font-medium " style={{ fontFamily: "Young Serif" }}>
              React JS
            </li>
            <li className="text-white lg:text-[20px] lg:font-medium " style={{ fontFamily: "Young Serif" }}>
              Node JS
            </li>
            <li className="text-white lg:text-[20px] lg:font-medium " style={{ fontFamily: "Young Serif" }}>
              WordPress
            </li>
            <li className="text-white lg:text-[20px] lg:font-medium "  style={{ fontFamily: "Young Serif" }}>PHP</li>
          </ul>
        </div>
        <div className="w-[310px] mx-auto pt-[50px] lg:w-[1140px] lg:pt-[70px]">
          <h1
            className="text-[30px] lg:text-[50px] text-center px-4 text-white"
            style={{ fontFamily: "Young Serif" }}
          >
            Hii, I am Hemant Kumar Yadav, a {<br />}{" "}
            <span className="text-fuchsia-500">🌐Web Developer</span> &{" "}
            <span className="text-orange-500">Graphic Designer</span>
          </h1>
          <img src={hem} alt="" className="h-[300px] mx-auto lg:h-[500px]" />
        </div>
        {/* <img src={comp} alt="" className="absolute top-[300px] right-[200px] h-[200px]"/> */}
        <div class="stars">
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  </div>

        <div className="absolute hidden lg:block top-52 space-y-7 ">
          <img
            src={fb}
            alt=""
            className="rounded-full"
           
          />
          <img
            src={insta}
            alt=""
            className="rounded-full"
          />
          <img
            src={twitt}
            alt=""
            className="rounded-full"
          />
           <img
            src={waba}
            alt=""
            className="rounded-full"
          />
        </div>
      </div>

      {/* My projects */}
      <div className="mypro w-auto  pt-[30px] h-auto ">
        <div className="w-[310px] mx-auto h-screen">
          <h1
            className="text-[30px] text-center text-white"
            style={{ fontFamily: "Young Serif" }}
          >
            My <span className="text-orange-400">Projects</span>
          </h1>
          <div className="w-[200px] h-[2px] mx-auto animate-pulse  bg-white"></div>
          <div className="w-[310px] mt-5 h-auto mx-auto">
            <div className="w-[310px] p-2 bg-white h-auto">
              <img src={project1} alt="" />
              <h2 className="text-[25px]" style={{ fontFamily: "Young Serif" }}>
                Parkeasyway
              </h2>
              {/* <p>
                Parkeasyway is a cutting-edge web application dedicated to
                addressing the pervasive parking dilemma by seamlessly uniting
                various parking lot owners on a unified platform. Our platform
                caters to two primary user categories:
              </p>
              <ul>
                <li>
                  <strong> Parking Seekers:</strong> These users are everyday
                  individuals seeking a secure and convenient parking solution
                  for their vehicles. Parkeasyway connects them to a network of
                  parking facilities, ensuring their peace of mind and a
                  hassle-free parking experience.
                </li>
                <li>
                  <li>
                   <strong> Parking Lot Owners:</strong> For businesses and individuals who own
                    parking lots, Parkeasyway offers a unique opportunity to
                    expand their operations and increase revenue. Join our
                    platform to make your parking spaces more accessible and
                    profitable.
                  </li>
                </li>
              </ul>
              
              <p>Experience the future of parking with Parkeasyway!</p> */}
              <p>
Parkeasyway is the ultimate parking solution. For those in search of secure parking spots and parking lot owners looking to expand their business, we bring them together on a single platform.</p>
            <button className="w-[150px] h-10 bg-orange-600  text-white rounded-full my-[30px]">Visit Website</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
