import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface Activity {
  _id: number;
  title: string;
  location: string;
  description: string;
  price: number;
  image: string;
}

const DetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const price: number = activity?.price || 0;
  const tax: number = 59;
  const subtotal: number = price * quantity;
  const total: number = subtotal + tax;

  const dates = ["Oct 22", "Oct 23", "Oct 24", "Oct 25", "Oct 26"];
  const times = [
    { time: "07:00 am", left: 4 },
    { time: "09:00 am", left: 2 },
    { time: "11:00 am", left: 5 },
    { time: "01:00 pm", left: 0 },
  ];

  // ✅ Fetch activity data from backend
  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await axios.get<Activity>(`https://bookit-1pfq.vercel.app/api/activities/${id}`);

        setActivity(res.data);
      } catch (error) {
        console.error("Failed to fetch activity:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [id]);

  const handleNavigate = () => navigate("/");

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time before confirming.");
      return;
    }

    const orderData = {
      activityId: activity?._id,
      title: activity?.title,
      quantity,
      selectedDate,
      selectedTime,
      total,
      timestamp: new Date().toLocaleString(),
    };

    localStorage.setItem("latestOrder", JSON.stringify(orderData));
    navigate(`/checkout/${id}`);
  };

  // ✅ Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading activity details...
      </div>
    );
  }

  // ✅ Activity not found
  if (!activity) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Activity not found
        </h2>
        <button
          onClick={handleNavigate}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  // ✅ Main content
  return (
    <div className="flex flex-col px-5 sm:px-10 md:px-[70px] py-5 font-sans">
      {/* Back Button and Title */}
      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={handleNavigate}
          className="text-gray-700 hover:text-black transition-colors"
        >
          <FaArrowLeft size={18} />
        </button>
        <h1 className="text-lg sm:text-xl font-medium">Details</h1>
      </div>

      {/* Image and Price Summary */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image */}
        <img
          src={activity?.image || ""}
          alt={activity?.title || "Activity"}
          className="w-full lg:w-[70%] h-[250px] sm:h-[330px] object-cover rounded-xl shadow-md"
        />

        {/* Price Summary Card */}
        <div className="w-full lg:w-[30%] bg-[#F5F5F5] rounded-2xl shadow-md p-5 text-sm">
          <div className="flex justify-between mb-3">
            <span className="text-gray-600">Starts at</span>
            <span className="font-medium">₹{price}</span>
          </div>

          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600">Quantity</span>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                −
              </button>
              <span>{quantity}</span>
              <button
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">₹{subtotal}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Taxes</span>
            <span className="font-medium">₹{tax}</span>
          </div>

          <hr className="border-gray-300 mb-3" />

          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-base">Total</span>
            <span className="font-semibold text-base">₹{total}</span>
          </div>

          <button
            onClick={handleConfirm}
            className={`w-full py-2 rounded-md transition ${
              selectedDate && selectedTime
                ? "bg-yellow-400 text-black hover:bg-yellow-500"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!selectedDate || !selectedTime}
          >
            Confirm
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-5 py-10">
        <h1 className="font-medium text-xl sm:text-2xl">{activity?.title}</h1>
        <p className="text-[#6C6C6C] text-sm sm:text-base">
          {activity?.description}
        </p>

        {/* Choose Date */}
        <h3 className="font-semibold">Choose date</h3>
        <div className="flex flex-wrap gap-3 sm:gap-5">
          {dates.map((data, index) => (
            <button
              key={index}
              onClick={() => setSelectedDate(data)}
              className={`px-4 py-2 rounded-lg border text-sm sm:text-base ${
                selectedDate === data
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "bg-white text-gray-600 border-gray-300"
              } hover:bg-yellow-100 transition`}
            >
              {data}
            </button>
          ))}
        </div>

        {/* Choose Time */}
        <div>
          <h3 className="font-semibold mb-3">Choose time</h3>
          <div className="flex flex-row flex-wrap gap-3 sm:gap-5">
            {times.map(({ time, left }, index) => (
              <button
                key={index}
                onClick={() => left > 0 && setSelectedTime(time)}
                disabled={left === 0}
                className={`relative px-5 py-2 rounded-lg border text-sm text-center gap-2 ${
                  left === 0
                    ? "bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed"
                    : selectedTime === time
                    ? "bg-yellow-400 text-black border-yellow-400"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-yellow-100"
                } transition flex items-center justify-center`}
              >
                <span>{time}</span>
                {left === 0 ? (
                  <span className="text-xs text-gray-400 mt-1">Sold out</span>
                ) : (
                  <span className="text-xs text-red-500 mt-1">{left} left</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* About Section */}
        <h3 className="font-semibold mb-3">About</h3>
        <p className="text-sm text-[#838383] px-4 py-3 text-left bg-[#EEEEEE] rounded-lg">
          Scenic routes, trained guides, and safety briefing. Minimum age 10.
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
