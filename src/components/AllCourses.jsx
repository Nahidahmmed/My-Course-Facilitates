import { useEffect, useState } from "react";
import Card from "./card";


const AllCourses = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('https://online-course-server-gamma.vercel.app/courses')
            .then(res => res.json())
            .then(data => { setCourses(data), setLoading(false) })
    }, []);
    if (loading) {
        return <span className="loading loading-bars loading-lg pt-96 ml-80 pl-52"></span>
    }
    return (
        <div className="pt-20 w-4/5 mx-auto">
            <h1 className="text-center  text-yellow-500 text-6xl p-20">All Courses</h1>
            <div className="grid gap-8 pl-9 md:grid-cols-3">

                {
                    courses.map(course => <Card key={course._id} course={course}></Card>)
                }
            </div>
        </div>
    );
};

export default AllCourses;