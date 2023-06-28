import "./styles.css";

export const Services = () => {
  const servicesList: {
    iconClass: string;
    heading: string;
    description: string;
  }[] = [
    {
      iconClass: "fa-brands fa-android",
      heading: "Build Android Apps",
      description: `Designing Android Apps using Java in Android Studio. Simplifying tasks by incorporating them as
            features in an Android app, along with Relational Databases.`,
    },
    {
      iconClass: "fa-solid fa-crop-simple",
      heading: "Build Websites",
      description: `Building websites using HTML, CSS, Node.js and Mongo Database.`,
    },
    {
      iconClass: "fa-solid fa-cloud",
      heading: "Devops",
      description: `Deploying, Managing and Monitoring the Infrastructure on Cloud Platforms like AWS.`,
    },
  ];

  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title row">Services</h1>
        <div className="services-list">
          {servicesList.map((data) => {
            return (
              <div key={data.heading}>
                <i className={data.iconClass}></i>
                <h2>{data.heading}</h2>
                <p>{data.description}</p>
                {/* <a href="#">Learn more</a> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
