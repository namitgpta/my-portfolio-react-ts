import "./styles.css";

export const Portfolio = () => {
  const workList: {
    imgName: string;
    heading: string;
    description: string;
    url: string;
  }[] = [
    {
      imgName: "work-1.jpg",
      heading: "Attendance Booster",
      description:
        "Programmed a python script which automatically opens the scheduled zoom meetings.",
      url: "https://github.com/namitgpta/Attendance-Booster",
    },
    {
      imgName: "work-2.jpg",
      heading: "Cryptography & Steganography App",
      description: `An Android App for Encryption & Decryption with help of Cryptographic Techniques and
        Image Steganography for data hiding, using Java & AWS RDS Database in Android Studio.`,
      url: "https://github.com/namitgpta/Crypto-Vault-App",
    },
    {
      imgName: "work-3.jpg",
      heading: "Blockchain based E-Commerce Website",
      description:
        "A Blockchain based E-Commerce Warranty System Website using NFTs and Smart Contracts.",
      url: "https://github.com/namitgpta/Attendance-Booster",
    },
  ];

  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title row">Projects</h1>
        <div className="work-list">
          {workList.map((data) => {
            return (
              <div className="work" key={data.imgName}>
                <img src={"images/" + data.imgName} alt={data.heading} />
                <div className="layer">
                  <h3>{data.heading}</h3>
                  <p>{data.description}</p>
                  <a href={data.url} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        {/* <a href="#" className="btn">See more</a> */}
      </div>
    </div>
  );
};
