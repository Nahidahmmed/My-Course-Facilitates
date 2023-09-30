/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Card = ({ course }) => {
    console.log(course._id);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = (course) => {
        const addedCourses = {courseId: course._id,image: course.course.image, title: course.course.title,description: course.course.description, email: user.email}
        if(user && user.email){
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(addedCourses)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your course has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'please Login to Add course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login', {state: {from: location}})
                }
              })
        }
    }

    return (
        <div className="w-full h-full max-w-md mx-auto">
            <div className="bg-purple-800 text-white shadow-lg shadow-gray-600 rounded-lg overflow-hidden">
                <img src={course.course.image} alt={course.course.title} className="w-full h-64 object-cover object-center" />
                <div className="p-6 h-[180px]">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-3">{course.course.title}</h2>
                    <p className="text-gray-300 mb-4">{course.course.description}</p>
                    <div className="flex justify-between items-center">
                        <Link to={`/courses/${course._id}`} className="text-yellow-400 hover:text-yellow-500 hover:underline">Learn more</Link>

                        <Link
                            onClick={() => handleAddToCart(course)}
                            className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition duration-300"
                        >
                            Add Course
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;