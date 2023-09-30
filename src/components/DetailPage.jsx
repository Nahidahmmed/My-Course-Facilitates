import { useLoaderData } from "react-router-dom";

const DetailPage = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div className="">
            <div className="w-3/4 mx-auto ">
                <h1>space</h1>
                <h1>space</h1>
                <h1 className="mb-24">space</h1>
                <img
                    src={course.course.image}
                    alt={course.course.title}
                    className="h-2/3 w-2/4 mx-auto"
                />
                {/* details */}

                <div className="max-w-4xl mx-auto p-6 relative bg-white">
                    <h1 className="text-3xl font-semibold text-purple-800 mb-4">{course.course.title}</h1>
                    <p className="text-gray-600 mb-6">{course.course.description}</p>
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-purple-800">Instructor</h2>
                        <div className="flex items-center">
                            <img
                                src={course.course.instructor.image}
                                alt={course.course.instructor.name}
                                className="w-12 h-12 object-cover rounded-full mr-4"
                            />
                            <div>
                                <p className="text-gray-600">{course.course.instructor.name}</p>
                                <p className="text-gray-600">{course.course.instructor.bio}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-28">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-purple-800">Syllabus</h2>
                        <ul className="list-disc pl-6 text-gray-600">
                            {course.course.syllabus.map((module, index) => (
                                <li key={index}>
                                    <strong>{module.module}</strong>
                                    <ul className="list-disc pl-4">
                                        {module.lessons.map((lesson, lessonIndex) => (
                                            <li key={lessonIndex}>{lesson}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-purple-800">Reviews</h2>
                        <ul>
                            {course.course.reviews.map((review, index) => (
                                <li key={index} className="mb-6">
                                    <h3 className="text-lg font-semibold">{review.user}</h3>
                                    <div className="flex items-center  mb-2">
                                        
                                    <h1>Ratings: <span className="text-yellow-400">{review.rating} star</span></h1>
                                    </div>
                                    <p className="text-gray-600">{review.comment}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default DetailPage;