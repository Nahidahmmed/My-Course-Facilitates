import UseCarts from "../../Hooks/Usecarts";

const AddedCarts = () => {
    const [cart] = UseCarts();
    console.log(cart);
    return (
        <div>
            <div className=" bg-gray-100">
      <div className="max-w-screen-2xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-purple-800 mb-4">Course List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((course) => (
            <div key={course.courseId} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-purple-800 mb-2">{course.title}</h2>
                <p className="text-gray-600">{course.description}</p>
                <p className="text-gray-600 mt-2">Email: {course.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
    );
};

export default AddedCarts;