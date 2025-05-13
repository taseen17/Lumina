
const Slider = () => {

    return (
        <div className="w-11/12 mx-auto">
            <div className='mt-8 text-center space-y-3'>
                <h2 className='text-5xl font-bold'>Personalized Career Guideline</h2>
                <p className='text-xl'> LU<span className='text-amber-400'>MI</span>NA illuminates the life of those who are looking for lights  in their life. <br /> Our goal is to help you plan, prepare and create a future for you.</p>
            </div>
            <div className="carousel mt-9">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/4wzp8zhP/post-05.jpg"
                        className="w-full rounded-lg" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle scroll-smooth">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/yF6xMWL8/post-01.jpg"
                        className="w-full rounded-lg" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/sz7QBN9/post-07.jpg"
                        className="w-full rounded-lg" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Slider;