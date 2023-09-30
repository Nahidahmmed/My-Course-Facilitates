/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useState } from "react";
import Card from "./card";


const PopularCourses = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false);
    const firstSixData = courses.slice(0,6)

    useEffect(() => {
        setLoading(true)
        fetch('https://online-course-server-gamma.vercel.app/courses')
            .then(res => res.json())
            .then(data => {setCourses(data) , setLoading(false)})
    }, []);
    if (loading) {
        return <span className="loading loading-bars loading-lg pt-96 ml-80 pl-52"></span>
    }
    return (
        <div>
            <h1 className="font-bold text-center text-yellow-400 text-5xl my-12">Popular Courses</h1>
            <div className="grid gap-8 pl-9 md:grid-cols-3">

                {
                    firstSixData.map(course => <Card key={course._id} course={course}></Card>)
                }
            </div>
        </div>
    );
};

export default PopularCourses;