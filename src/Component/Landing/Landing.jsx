import Logo from "../../assets/Logo.webp";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.webp";
import img3 from "../../assets/3.webp";
import img4 from "../../assets/landing.jpg";
import img5 from "../../assets/award.png";
import img6 from "../../assets/briefcase.png";
import img7 from "../../assets/car.png";
import img8 from "../../assets/twitter.png";

import "../Landing/Landing.css";

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <div className="Left">
            {/* <img className='logo' src={Logo} /> */}

            <p style={{ fontSize: 22, margin: 0, fontWeight: 500 }}>
              Flex Business Pro
            </p>
            <p style={{ fontSize: 16, margin: 0 }}>
              clean and modern business theme
            </p>
          </div>
          <div className="Right">
            <ul style={{ display: "flex" }}>
              <li>
                <button line={1}>Home</button>{" "}
              </li>
              <li>
                <button>About us</button>{" "}
              </li>
              <li>
                <button>Studio</button>{" "}
              </li>
              <li>
                <button>Blog</button>{" "}
              </li>
              <li>
                <button>Contact us</button>{" "}
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="landing">
        <img
          src={img4}
          style={{
            position: "absolute",
            height: "80%",
            width: "100%",
            top: "11%",
          }}
        />
        <div
          style={{
            position: "relative",
            marginTop: "8%",
            textAlign: "center",
            color: "white",
          }}
        >
          <p style={{ fontSize: 45, fontWeight: 400 }}>
            Your Awsome Business Theme
          </p>
          <p
            style={{
              textAlign: "center",
              lineHeight: "25px",
              fontSize: 18,
              marginBottom: 40,
            }}
          >
            We have a great theme for business development and we recommend you
            to use the same theme for all applications.
          </p>
          <button
            style={{
              backgroundColor: "#007fff",
              width: "20%",
              color: "white",
              fontWeight: 500,
              marginBottom: 40,
              borderRadius: 50,
            }}
          >
            Read More
          </button>
        </div>
      </div>
      <div style={{ marginTop: "15%" }}>
        <p
          style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: 35,
            margin: 0,
          }}
        >
          Our Features
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            height: "100%",
            marginTop: "2%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "28%",
            }}
          >
            <img src={img1} style={{ height: 100, width: 100 }} />
            <p style={{ fontSize: 22, fontWeight: 400 }}>Fully Responsive</p>
            <p style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              nobis ratione? Mollitia harum ullam iure facere temporibus
              voluptates error nisi perspiciatis. Magnam praesentium beatae odit
              qui totam omnis, necessitatibus molestias?
            </p>
            <p style={{ color: "#007fff", margin: 0 }}>Read More</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "28%",
            }}
          >
            <img src={img2} style={{ height: 100, width: 100 }} />
            <p style={{ fontSize: 22, fontWeight: 400 }}>Trusted Authors</p>
            <p style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              deleniti neque minima id est fugiat, praesentium recusandae
              aliquam sit asperiores ea nam dolores tempore magni ab atque?
              Deleniti, officiis aliquid.
            </p>
            <p style={{ color: "#007fff", margin: 0 }}>Read More</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "28%",
            }}
          >
            <img src={img3} style={{ height: 100, width: 100 }} />
            <p style={{ fontSize: 22, fontWeight: 400 }}>Reusable Elements</p>
            <p style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              delectus, incidunt aperiam assumenda adipisci saepe provident
              corrupti numquam excepturi laudantium doloribus eaque. Laborum
              quasi consectetur nesciunt blanditiis cupiditate repellendus
              debitis!
            </p>
            <p style={{ color: "#007fff", margin: 0 }}>Read More</p>
          </div>
        </div>
      </div>
      <div className="landing">
        <img
          src={img4}
          style={{
            position: "absolute",
            height: "50%",
            width: "100%",
            marginTop: "10%",
          }}
        />
        <div
          style={{
            position: "relative",
            marginTop: "12%",
            textAlign: "center",
            color: "white",
          }}
        >
          <div className="data">
            <div style={{ marginLeft: "20%", marginRight: "20%" }}>
              <img src={img5} style={{ height: 100, width: 100 }} />
              <h1>22</h1>
              <p>Award Winning</p>
            </div>
            <div style={{ marginLeft: "20%", marginRight: "20%" }}>
              <img src={img6} style={{ height: 100, width: 100 }} />
              <h1>145</h1>
              <p>Finished Project</p>
            </div>
            <div style={{ marginLeft: "20%", marginRight: "20%" }}>
              <img src={img7} style={{ height: 100, width: 100 }} />
              <h1>350</h1>
              <p>Product Sold</p>
            </div>
            <div style={{ marginLeft: "20%", marginRight: "20%" }}>
              <img src={img8} style={{ height: 100, width: 100 }} />
              <h1>2256</h1>
              <p>Twitter Fans</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div
          style={{
            width: "25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
          }}
        >
          <p style={{ fontWeight: 700 }}>About Flex Business Pro</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quaerat unde eligendi sed asperiores, ad labore corporis culpa
            molestias assumenda blanditiis autem sit provident explicabo dicta
            rerum! Ut, quaerat? Molestiae.
          </p>
        </div>
        <div
          style={{
            width: "25%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            flexDirection: "column",
            marginLeft: 50,
            color: "white",
          }}
        >
          <p style={{ fontWeight: 700 }}>Recents Posts</p>
          <p style={{ margin: 0 }}>Fly to London</p>
          <p style={{ fontSize: 12, marginTop: 3, marginBottom: 15 }}>
            September 18,2018
          </p>
          <p style={{ margin: 0 }}>Stair COmmunication</p>
          <p style={{ fontSize: 12, marginTop: 3, marginBottom: 15 }}>
            September 18,2018
          </p>
          <p style={{ margin: 0 }}>Do you want to be a robot</p>
          <p style={{ fontSize: 12, marginTop: 3, marginBottom: 15 }}>
            September 18,2018
          </p>
        </div>
        <div
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            color:'white'
          }}
        >
          <p style={{ fontWeight: 700 }}>Recents Posts</p>
          <div style={{display:'flex',flexFlow:'row'}}>
          <img src={img1} style={{ height: 100, width: 100,margin:5 }} />
          <img src={img2} style={{ height: 100, width: 100,margin:5 }} />
          <img src={img3} style={{ height: 100, width: 100,margin:5 }} />
          <img src={img4} style={{ height: 100, width: 100,margin:5 }} />
          </div>
          <div style={{display:'flex',flexFlow:'row'}}>
          <img src={img4} style={{ height: 100, width: 100,margin:5 }} />
          <img src={img3} style={{ height: 100, width: 100,margin:5 }} />
          <img src={img2} style={{ height: 100, width: 100,margin:5 }} />
          <img src={img1} style={{ height: 100, width: 100,margin:5 }} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
