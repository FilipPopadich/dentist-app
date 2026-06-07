import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: location.state?.selectedService || 'Teeth Cleaning',
        preferredDate: '',
        preferredTime: 'morning',
        notes: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);

    const services = [
        "Teeth Cleaning",
        "Root Canal Therapy",
        "Dental Fillings",
        "Teeth Whitening",
        "Dental Crowns",
        "Emergency Care",
        "Consultation"
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.preferredDate) {
            alert('Please fill in all required fields');
            return;
        }

        const booking = {
            id: Math.floor(Math.random() * 10000),
            ...formData,
            bookedAt: new Date().toLocaleString()
        };
        setBookingDetails(booking);
        setSubmitted(true);
        console.log('Booking submitted:', booking);
    };

    const today = new Date().toISOString().split('T')[0];

    if (submitted && bookingDetails) {
        return (
            <div className="booking-page">
                <div className="container">
                    <div className="hero booking-hero">
                        <h1>✅ Appointment Confirmed!</h1>
                        <div className="card booking-confirmation-card">
                            <h3>Booking Details:</h3>
                            <p><strong>Name:</strong> {bookingDetails.name}</p>
                            <p><strong>Service:</strong> {bookingDetails.service}</p>
                            <p><strong>Date:</strong> {bookingDetails.preferredDate}</p>
                            <p><strong>Time Slot:</strong> {bookingDetails.preferredTime === 'morning' ? 'Morning (9AM-12PM)' : 'Afternoon (1PM-5PM)'}</p>
                            <p><strong>Confirmation #:</strong> {bookingDetails.id}</p>
                            <hr className="booking-divider" />
                            <p>📧 A confirmation email has been sent to {bookingDetails.email}</p>
                            <p>📞 Call us at (123) 456-7890 to reschedule or with questions.</p>
                            <button
                                className="btn btn-primary booking-another-btn"
                                onClick={() => {
                                    setSubmitted(false);
                                    setFormData({
                                        name: '', email: '', phone: '', service: 'Teeth Cleaning',
                                        preferredDate: '', preferredTime: 'morning', notes: ''
                                    });
                                }}
                            >
                                Book Another Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="booking-page">
            <div className="container">
                <div className="hero booking-hero">
                    <h1>Book Your Dental Appointment</h1>
                    <p>Fill out the form below and we'll confirm your visit within 2 hours.</p>
                </div>

                <div className="section">
                    <div className="booking-form-container">
                        <form onSubmit={handleSubmit} className="card booking-form-card">
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address *</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="johndoe@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number *</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(111) 222-3333" required />
                            </div>
                            <div className="form-group">
                                <label>Select Service *</label>
                                <select name="service" value={formData.service} onChange={handleChange}>
                                    {services.map(service => <option key={service} value={service}>{service}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Preferred Date *</label>
                                <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} min={today} required />
                            </div>
                            <div className="form-group">
                                <label>Preferred Time Slot *</label>
                                <select name="preferredTime" value={formData.preferredTime} onChange={handleChange}>
                                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                                    <option value="afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Additional Notes (optional)</label>
                                <textarea name="notes" rows="3" value={formData.notes} onChange={handleChange} placeholder="Any special concerns or requests..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary booking-submit-btn">Confirm Appointment →</button>
                            <p className="booking-note">We'll send you a confirmation email and reminder 24 hours before your appointment.</p>
                        </form>
                    </div>
                </div>
                <div className="booking-help-section">
                    <h3>Need help?</h3>
                    <p>Call us at <strong>(613) 123-4567</strong> or visit our <a href="/contact">contact page</a> for more options.</p>
                </div>
            </div>
        </div>
    );
};

export default Booking;