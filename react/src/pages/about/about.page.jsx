import { Fragment } from "react";

const AboutPage = () => {
  return (
    <Fragment>
      <h1 className="text-center">About Us</h1>
      <h2 className="text-center">
        Rondo Tires Ltd. specializes in all areas of tires and provides fast and
        professional services at fair prices.
      </h2>
      <h2 className="text-center">Owners</h2>
      <div className="row">
        <div className="col-sm-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Dudu Shabat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                incidunt rem nam ipsum quibusdam illum optio qui modi tenetur
                harum.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Shlomo Shabat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                tenetur ea sint incidunt hic necessitatibus ipsam placeat modi
                vel laudantium?
              </p>
            </div>
          </div>
        </div>
      </div>
      <section class=" py-5">
        <div class="container">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-6">
                <div>
                  <h1 class="fw-bold display-5">Changing &amp; fixing tires</h1>
                  <p class="text-white lead">
                    Dynamically disintermediate technically sound technologies
                    with compelling quality vectors error-free communities.{" "}
                  </p>
                </div>
                <img
                  src="http://tiredeal.co.il/html5/Web/1120/office-work-place-12177758.jpg"
                  class="img-fluid rounded shadow my-5 first-img"
                  alt="random"
                />
              </div>
              <div class="col-md-6">
                <div class="d-flex flex-column">
                  <img
                    src="https://www.tiredeal.co.il/html5/WEB/1120/homePeoplePic.png"
                    class="img-fluid rounded shadow mb-5"
                    alt="random"
                  />
                  <img
                    src="http://tiredeal.co.il/html5/web/1120/59010ImageFile.png"
                    class="img-fluid rounded shadow align-self-end last-img"
                    alt="random"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"></div>
      </section>
    </Fragment>
  );
};
export default AboutPage;
