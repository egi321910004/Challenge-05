import "../css/ListCar.css";
import ButtonCar from "./ButtonCar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ListCar = () => {
  const { dataListCar } = useSelector(
    (globalStore) => globalStore.dataCarReducer
  );
  return (
    <>
      <div className="container">
        <div className="listCar">
          {dataListCar?.map((data) => (
            <div className="cardMobil">
              <div className="frameCard">
                <img className="cardImage" src={data.image} alt="mobil" />
                <div className="textCard">
                  <p>{data.name}</p>
                  <h1>
                    Rp{" "}
                    {data.price
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}{" "}
                    / hari
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="iconCard">
                  <img src="/img/users.svg" alt="jumlah orang" />
                  <p>4 orang</p>
                </div>
                <div className="iconCard">
                  <img src="/img/settings.svg" alt="tipe mobil" />
                  <p>Manual</p>
                </div>
                <div className="iconCard">
                  <img src="/img/calendar.svg" alt="tahun" />
                  <p>Tahun 2020</p>
                </div>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/detailmobil/${data.id}`}
                >
                  <ButtonCar />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListCar;
