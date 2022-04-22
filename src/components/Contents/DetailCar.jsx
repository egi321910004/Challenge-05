import "../css/DetailCar.css";
import ButtonCar from "./ButtonCar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const DetailCar = () => {
  const { idCar } = useParams();
  const { dataListCar } = useSelector(
    (globalStore) => globalStore.dataCarReducer
  );

  let i = -1;

  for (let j = 0; j < dataListCar.length; j++) {
    if (dataListCar[j].id == idCar) {
      i = j;
    }
  }

  useEffect(() => {
    document.getElementsByClassName("buttonCar")[0].value ="Lanjutkan Pembayaran";
    document.getElementsByClassName("buttonCar")[0].style.width ="358px";
  }, []);

  return (
    <>
      <div className="detailCar position-absolute start-50 translate-middle">
        <div className="cardDetail">
          <h1>Tentang Paket</h1>
          <p>Include</p>
          <div className="textDetail1">
            <ul>
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
          </div>
          <p>Exclude</p>
          <div className="textDetail2">
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
          <h1>Refund, Reschedule, Overtime</h1>
          <div className="textDetail3">
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
        </div>
        <div className="cardDetail">
          <div className="cardImage">
            <img src={dataListCar[i].image} alt="car" />
          </div>
          <div className="cardTitle">
            <h1>{dataListCar[i].name}</h1>
            <div className="cardIcon">
              <div className="iconTitle">
                <img src="/img/users.svg" alt="jumlah orang" />
                <p>4 orang</p>
              </div>
              <div className="iconTitle">
                <img src="/img/settings.svg" alt="tipe mobil" />
                <p>Manual</p>
              </div>
              <div className="iconTitle">
                <img src="/img/calendar.svg" alt="calendar" />
                <p>Tahun 2020</p>
              </div>
            </div>
            <div className="cardText">
              <p>Total</p>
              <h1>
                Rp{" "}
                {dataListCar[i].price
                  .toFixed(0)
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}{" "}
                / hari
              </h1>
            </div>
            <ButtonCar />
          </div>
        </div>
      </div>
      <div className="buttonPosition position-absolute start-50 translate-middle">
        <button className="buttonCard">Lanjutkan Pembayaran</button>
      </div>
    </>
  );
};

export default DetailCar;
