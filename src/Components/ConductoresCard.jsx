import "../styles/Card.css";

const ConductoresCard = ({ image, name, lastname, experience, index }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card card-specialist h-100 p-3" id={index}>
        <img
          src={image}
          className="card-img-top rounded-circle photo m-3"
          alt="Specialist Photo"
          style={{ height: "135px", width: "135px" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {name} {""} {lastname}
          </h5>
          <ul className="doctor-info p-3 ms-1 mb-0">
            <li className="li-item mb-2 paragraph">{experience}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConductoresCard;
