import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Activity {
  _id: number;
  title: string;
  location: string;
  description: string;
  price: number;
  image: string;
}

const Homepage: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  const navigate = useNavigate();

  // ✅ Fetch activities from deployed backend
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await axios.get("https://bookit-1pfq.vercel.app/api/activities");
        setActivities(res.data);
        setFilteredActivities(res.data);
      } catch (error) {
        console.error("❌ Failed to fetch activities:", error);
      }
    };
    fetchActivities();
  }, []);

  // ✅ Handle search
  const handleSearch = (searchTerm: string) => {
    const lowerTerm = searchTerm.toLowerCase();
    const filtered = activities.filter((activity) =>
      activity.title.toLowerCase().includes(lowerTerm)
    );
    setFilteredActivities(filtered);
  };

  // ✅ Handle navigation
  const handleViewDetails = (id: number) => {
    navigate(`/details/${id}`);
  };

  return (
    <div>
      {/* Navbar with search */}
      <Navbar onSearch={handleSearch} />

      {/* Activities Section */}
      <div className="px-13 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-5">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((data) => (
              <div
                key={data._id}
                className="w-60 md:w-68 h-95 md:h-90 rounded-2xl shadow-md overflow-hidden bg-[#F0F0F0] mb-6"
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-48 w-full object-cover"
                />
                <div className="flex justify-between px-5 py-4">
                  <h3 className="font-semibold text-md">{data.title}</h3>
                  <span className="text-sm bg-gray-200 px-2 py-1 rounded-md">
                    {data.location}
                  </span>
                </div>
                <p className="text-xs text-[#6C6C6C] ml-5">{data.description}</p>
                <div className="flex justify-between items-center px-5 py-5">
                  <p className="font-medium">From ₹{data.price}</p>
                  <button
                    onClick={() => handleViewDetails(data._id)}
                    className="bg-[#FFD643] py-2 px-3 text-sm rounded-lg hover:bg-yellow-400 transition-colors duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-500 text-lg py-10">
              No matching activities found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
