import stylesQR from "./QrCode.module.css"

const QrCode = ({ }) => {
  return (
    <div className={stylesQR.qrcode}>
      <div className={stylesQR.card}>
        <div className={stylesQR.imgCodeQR}></div>

        <h4 className={stylesQR.TextOne}>
          Improve your front-end <br />
          skills by building projects
        </h4>
        <h4 className={stylesQR.TextTwo}>
          Scan the QR code the to visit Frontend <br /> Mentor and take your
          coding skills to <br /> the next level
        </h4>
      </div>
    </div>
  );
};

export default QrCode;
