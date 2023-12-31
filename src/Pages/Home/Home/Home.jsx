import PopularCourses from "../../../components/PopulerCourses";

const Home = () => {
    return (
        <div className="w-3/4  mx-auto">
            <div className="carousel mt-20 h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/src/assets/20191209online.jpg" className="w-full  mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/src/assets/Arch2O-10-places-to-study-online-architecture-programs-get-architecture-courses-4.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/src/assets/getty_933383882_2000133420009280345_410292.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/src/assets/20191209online.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="pb-12 pt-12">
                <PopularCourses></PopularCourses>
            </div>
        </div>
    );
};

export default Home;