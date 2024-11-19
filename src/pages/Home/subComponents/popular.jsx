import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Popular = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false }); // Initialize AOS with a 1000ms animation duration
  }, []);

  return (
    <div className="mt-10 w-full">
      {/* Header */}
      <header
        className="text-3xl capitalize text-black font-medium pl-4 md:pl-0 text-left"
        data-aos="fade-right"
      >
        popular things to do
      </header>

      <main>
        {/* City Tours */}
        <div
          className="city md:flex md:flex-row flex flex-col items-center md:gap-10 gap-7 md:py-20 md:px-20 pt-10 px-4"
          data-aos="fade-right"
        >
          <video
            src="https://media.istockphoto.com/id/1442610356/video/beautiful-latin-american-tourist-sightseeing-and-looking-at-her-smartphone-for-additional.mp4?s=mp4-640x640-is&k=20&c=ZC6b88STC3ykM0aWNaUM7izJB-d1dxhglz1Vg8qRIMw="
            autoPlay
            muted
            loop
            // controls
            className="w-full md:w-[350px]"
            style={{ flex: 0.5 }}
          />
          <aside
            style={{ flex: 0.5 }}
            className="flex flex-col md:gap-8 gap-3"
            data-aos="fade-left"
          >
            <h3 className="md:text-5xl text-3xl font-medium capitalize text-primary">
              city tours
            </h3>
            <p className="text-justify md:w-[90%] w-full leading-normal text-md">
              Discover the city's charm with guided tours of iconic landmarks,
              hidden gems, and local culture. Experience vibrant streets,
              fascinating history, and unforgettable moments. Book now!
            </p>
          </aside>
        </div>

        {/* Cultural Tours */}
        <div
          className="city md:flex md:flex-row flex flex-col-reverse items-center md:gap-10 gap-7 md:py-20 md:px-20 pt-10 px-4"
          data-aos="fade-left"
        >
          <aside
            style={{ flex: 0.5 }}
            className="flex flex-col md:gap-8 gap-3"
            data-aos="fade-right"
          >
            <h3 className="md:text-5xl text-3xl font-medium capitalize text-primary">
              cultural tours
            </h3>
            <p className="text-justify md:w-[90%] w-full leading-normal text-md">
              Discover the richness of local traditions with guided culture
              tours. Explore authentic cuisines, vibrant festivals, and unique
              customs. Immerse yourself in unforgettable cultural experiences.
              Book today!
            </p>
          </aside>
          <video
            src="https://media.istockphoto.com/id/1393085927/video/frevo-dancers-at-the-street-carnival-in-recife-pernambuco-brazil.mp4?s=mp4-640x640-is&k=20&c=e78nhmF7M7mTxYA5uRAA2rfTSfPZi2G389DRwYsYjqY="
            autoPlay
            muted
            loop
            // controls
            className="w-full md:w-[350px]"
            style={{ flex: 0.5 }}
            data-aos="fade-left"
          ></video>
        </div>

        {/* Food Tours */}
        <div
          className="city md:flex md:flex-row flex flex-col items-center md:gap-10 gap-7 md:py-20 md:px-20 pt-10 px-4"
          data-aos="fade-right"
        >
          <video
            src="https://media.istockphoto.com/id/1394211386/video/three-friends-standing-and-eating-corn.mp4?s=mp4-640x640-is&k=20&c=fQVFcBIzTw-WH_hJ3HApLpiwHbuMRENzJ6rBmDERBa0="
            autoPlay
            muted
            loop
            // controls
            className="w-full md:w-[350px]"
            style={{ flex: 0.5 }}
          ></video>
          <aside
            style={{ flex: 0.5 }}
            className="flex flex-col md:gap-8 gap-3"
            data-aos="fade-left"
          >
            <h3 className="md:text-5xl text-3xl font-medium capitalize text-primary">
              food tours
            </h3>
            <p className="text-justify md:w-[90%] w-full leading-normal text-md">
              Savor the city’s flavors with guided food tours. Enjoy authentic
              dishes, local delicacies, and hidden culinary gems. Indulge in
              unforgettable gastronomic adventures. Book your tour now!
            </p>
          </aside>
        </div>

        {/* Beach Tours */}
        <div
          className="city md:flex md:flex-row flex flex-col-reverse items-center md:gap-10 gap-7 md:py-20 md:px-20 pt-10 px-4"
          data-aos="fade-left"
        >
          <aside
            style={{ flex: 0.5 }}
            className="flex flex-col md:gap-8 gap-3"
            data-aos="fade-right"
          >
            <h3 className="md:text-5xl text-3xl font-medium capitalize text-primary">
              beach tours
            </h3>
            <p className="text-justify md:w-[90%] w-full leading-normal text-md">
              Relax and unwind with guided beach tours. Explore pristine shores,
              crystal-clear waters, and breathtaking sunsets. Experience the
              ultimate coastal escape. Book your beach adventure today!
            </p>
          </aside>
          <video
            src="https://media.istockphoto.com/id/1487831846/video/young-coupe-during-a-bike-ride-on-a-coastline.mp4?s=mp4-640x640-is&k=20&c=-RiIs3ML5iUJUtWuLt_8P5l1PxLeRCZz0zYuceyeK0s="
            autoPlay
            muted
            loop
            // controls
            className="w-full md:w-[350px]"
            style={{ flex: 0.5 }}
            data-aos="fade-left"
          ></video>
        </div>
      </main>
    </div>
  );
};

export default Popular;
