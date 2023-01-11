import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import ReactAudioPlayer from "react-audio-player";
import logolive from "../logolive.png";
import "../styles/Home.css";

const BannerPrincipal = () => {
  return (
    <>
      <section className="banner-ppal">
        <div className="row">
          <div className="col-sm-3">
            <a
              href="https://twitter.com/RadioEclipse_FM"
              className="text-reset social-media-icon"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/radioeclipse_quilicura/"
              className="text-reset social-media-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100063747198400"
              className=" text-reset social-media-icon"
            >
              <FaFacebook />
            </a>
          </div>
          <div className="col-sm-6">
            <ReactAudioPlayer
              src="https://www.youtube.com/watch?v=jfKfPfyJRdk"
              controls
            />
          </div>
          <div className="col-sm-3">
            <a className="float-end" href="/live">
              <img src={logolive} className="logo-live" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerPrincipal;
