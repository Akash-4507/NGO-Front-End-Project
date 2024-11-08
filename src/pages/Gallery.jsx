import React, { useState } from 'react';

// Mock data for past events
const mockEventData = [
  {
    id: 1,
    title: 'Wedding Ceremony',
    imageUrl: 'https://via.placeholder.com/300',
    overview: 'A beautiful wedding ceremony held in spring.',
    review: 'The venue was perfect, and the catering was top-notch!',
    specifications: 'Capacity: 200, Theme: Rustic, Catering: Included',
    feedback: 'Amazing experience, would recommend!',
  },
  {
    id: 2,
    title: 'Corporate Event',
    imageUrl: 'https://via.placeholder.com/300',
    overview: 'A successful corporate meeting with a formal setting.',
    review: 'Great organization and atmosphere, everything was on point!',
    specifications: 'Capacity: 150, Theme: Formal, Catering: Optional',
    feedback: 'Highly professional service!',
  },
  {
    id: 3,
    title: 'Birthday Celebration',
    imageUrl: 'https://via.placeholder.com/300',
    overview: 'An intimate birthday party with close friends and family.',
    review: 'Lovely decorations, and the DJ was fantastic!',
    specifications: 'Capacity: 50, Theme: Casual, Catering: BYO',
    feedback: 'Perfect for small gatherings!',
  },
];

const Gallery = () => {
  const [events, setEvents] = useState(mockEventData);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    imageUrl: '',
    overview: '',
    review: '',
    specifications: '',
    feedback: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedEvents = [...events, { id: events.length + 1, ...newEvent }];
    setEvents(updatedEvents);
    setShowForm(false); // Close the form after submission
    setNewEvent({ title: '', imageUrl: '', overview: '', review: '', specifications: '', feedback: '' });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Event Gallery</h1>
      
      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-700 text-sm mb-2"><strong>Overview:</strong> {event.overview}</p>
            <p className="text-gray-700 text-sm mb-2"><strong>Review:</strong> {event.review}</p>
            <p className="text-gray-700 text-sm mb-2"><strong>Specifications:</strong> {event.specifications}</p>
            <p className="text-gray-700 text-sm"><strong>Feedback:</strong> {event.feedback}</p>
          </div>
        ))}
      </div>

      {/* Floating Plus Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition"
      >
        <span className="text-2xl">+</span>
      </button>

      {/* Add Event Form */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-4/6">
            <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-600">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-600">Image URL</label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={newEvent.imageUrl}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="overview" className="block text-sm font-medium text-gray-600">Overview</label>
                <textarea
                  id="overview"
                  name="overview"
                  value={newEvent.overview}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="review" className="block text-sm font-medium text-gray-600">Review</label>
                <textarea
                  id="review"
                  name="review"
                  value={newEvent.review}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="specifications" className="block text-sm font-medium text-gray-600">Specifications</label>
                <textarea
                  id="specifications"
                  name="specifications"
                  value={newEvent.specifications}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-600">Feedback</label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={newEvent.feedback}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Add Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
