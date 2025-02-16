import { MdEvent, MdPeople, MdLocationOn, MdAccessTime } from "react-icons/md";

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Career Fair 2024",
    date: "April 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual Event",
    type: "Career Fair",
    participants: 150,
  },
  {
    id: 2,
    title: "React Developer Meetup",
    date: "April 20, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Hub, New York",
    type: "Meetup",
    participants: 50,
  },
];

export default function Events() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">Upcoming Events</h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id}
                className="border border-gray-100 rounded-lg p-6 hover:shadow-lg
                         transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary-50 text-primary-700 
                                   rounded-full text-sm">
                      {event.type}
                    </span>
                  </div>
                  <MdEvent className="w-6 h-6 text-primary-600" />
                </div>

                <div className="mt-4 space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MdAccessTime className="text-gray-400" />
                    <span>{event.date}, {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdLocationOn className="text-gray-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdPeople className="text-gray-400" />
                    <span>{event.participants} Participants</span>
                  </div>
                </div>

                <button
                  className="mt-6 w-full bg-primary-600 text-white py-2 px-4 rounded-lg
                           hover:bg-primary-700 transition-colors duration-300"
                >
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 