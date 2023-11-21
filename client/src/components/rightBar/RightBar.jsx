import "./rightBar.scss";
import { Link } from "react-router-dom";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container" id="for_user2">
        <div className="item">
          <span>Sugestões</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="/upload/1700403020439IMG-20210911-WA0168.jpg"
                alt=""
              />
              <Link
                to={`/profile/5`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>Magma</span>
              </Link>
            </div>
            <div className="buttons">
              <button>Seguir</button>
              <button>Dispensar</button>
            </div>
          </div>
        </div>
        {/* <div className="item">
          <span>Atividade recente</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div> */}
        <div className="item">
          <span>Seguidos</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="/upload/170039979805820210429_121928.jpg"
                alt=""
              />
              <Link
                to={`/profile/3`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="online" />
                <span>Jose Maria</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Seguidores</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="/upload/1700403020439IMG-20210911-WA0168.jpg"
                alt=""
              />
              <Link
                to={`/profile/5`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>Magma</span>
              </Link>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="/upload/170039979805820210429_121928.jpg"
                alt=""
              />
              <Link
                to={`/profile/3`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="online" />
                <span>Jose Maria</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
