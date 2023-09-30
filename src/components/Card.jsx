/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ course }) => {
    console.log(course._id);
    
    return (
        <div className="w-full h-full max-w-md mx-auto">
            <div className="bg-purple-800 text-white shadow-lg shadow-gray-600 rounded-lg overflow-hidden">
                <img src={course.course.image} alt={course.course.title} className="w-full h-64 object-cover object-center" />
                <div className="p-6 h-[180px]">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-3">{course.course.title}</h2>
                    <p className="text-gray-300 mb-4">{course.course.description}</p>
                    <div className="flex justify-between items-center">
                        <Link to={`/courses/${course._id}`} className="text-yellow-400 hover:text-yellow-500 hover:underline">Learn more</Link>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;