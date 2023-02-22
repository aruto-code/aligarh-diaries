import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navbar from "./Navbar";

function New() {
  const [data, setData] = useState([]);
  const getNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2fc86ba57563490b9145c6ed8065e60b`
      )
      .then((response) => {
        //console.log(response);
        setData(response.data.articles);
      });
  };
  return (
    <>
      <Navbar />
      <div className="about">
        <button className="btn" onClick={getNews}>
          Fetch News
        </button>

        <div className="container">
          <div className="row">
            {data.map((value) => {
              return (
                <div className="col-3">
                  <div
                    className="card"
                    style={{ width: "40rem", margin: "1rem auto" }}
                  >
                    <img
                      className="card-img-top"
                      src={value.urlToImage}
                      alt="Card image cap"
                      style={{
                        width: "20rem",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href="#" class="btn btn-primary">
                        Main News
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default New;

// import Navbar from "./Navbar";
// import axios from 'axios';
// import "../App.css";

// class ComingSoon extends React.Component{

//   state = {
//     data : {}

//   }

//    componentDidMount(){
//     axios.get({`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2fc86ba57563490b9145c6ed8065e60b`})
//     .then(res  => {
//       console.log(res.data.articles)
//       this.setState({data : res.data});
//       console.log(this.state.data);
//     })

//   }

//   render(){
//     return (
//       <>
//         <Navbar />
//         <div className="ComingSoon">
//           <p>New Apis Here</p>
//         </div>
//       </>
//     );
//   }

// }

// export default ComingSoon;
