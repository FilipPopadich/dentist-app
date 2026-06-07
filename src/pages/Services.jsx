import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import {mdiClockOutline, mdiCheckboxMarkedCircleOutline, mdiCalendarMonth} from '@mdi/js';
import './Services.css';

const Services = () => {
    const [showRootCanalDetails, setShowRootCanalDetails] = useState(false);

    const services = [
        {
            name: "Teeth Cleaning",
            description: "Professional cleaning to remove plaque, tartar, and stains. Includes polishing and fluoride treatment.",
            price: "$90 - $150",
            duration: "30-45 min",
            icon: "🦷",
            popular: true
        },
        {
            name: "Root Canal Therapy",
            description: "Treatment to save a severely infected or decayed tooth. Relieves pain and prevents extraction.",
            price: "$650 - $950",
            duration: "60-90 min",
            icon: "🦷",
            details: "Root canal treatment removes infected pulp, cleans the canal, and seals it to prevent reinfection. Most patients experience relief immediately after. Insurance covers 50-80% typically."
        },
        {
            name: "Dental Fillings",
            description: "Tooth-colored composite fillings to repair cavities and restore your smile.",
            price: "$150 - $300",
            duration: "30-60 min",
            icon: "🦷"
        },
        {
            name: "Teeth Whitening",
            description: "Professional whitening treatment for a brighter, more confident smile.",
            price: "$300 - $400",
            duration: "60 min",
            icon: "✨"
        },
        {
            name: "Dental Crowns",
            description: "Custom-made caps to restore damaged teeth, improving strength and appearance.",
            price: "$800 - $1,200",
            duration: "2 visits",
            icon: "👑"
        },
        {
            name: "Emergency Care",
            description: "Same-day appointments for dental emergencies like pain, broken teeth, or injuries.",
            price: "Call for quote",
            duration: "Emergency",
            icon: "🚨"
        }
    ];

    const signs = [
        {
            title: "Severe Toothache",
            description: "Persistent pain, especially when chewing or applying pressure"
        },
        {
            title: "Temperature Sensitivity",
            description: "Prolonged sensitivity to hot or cold, even after removal"
        },
        {
            title: "Tooth Discoloration",
            description: "Darkening of the tooth indicating nerve damage"
        },
        {
            title: "Swollen Gums",
            description: "Tender, swollen gums near the affected tooth"
        }
    ];

    const aftercareItems = [
        "Most patients experience minimal discomfort and can return to normal activities the next day",
        "Avoid chewing on the treated tooth until the permanent crown is placed",
        "Take prescribed antibiotics and pain medication as directed",
        "Maintain good oral hygiene with gentle brushing and flossing",
        "With proper care, a root canal-treated tooth can last a lifetime"
    ];

    return (
        <div className="services-page">
            <div className="container">
                <div className="hero services-hero">
                    <h1>Our Dental Services</h1>
                    <p>Comprehensive care for your entire family, from preventive to restorative treatments.</p>
                </div>

                <div className="section">
                    <div className="grid-2">
                        {services.map((service, idx) => (
                            <div className="card" key={idx}>
                                <div className="services-card-header">
                                    <h3>{service.icon} {service.name}</h3>
                                </div>
                                {service.popular && <span className="service-tag">Popular</span>}
                                <p>{service.description}</p>
                                <div className="service-footer">
                                    <p><strong>Duration:</strong> {service.duration}</p>
                                    <p className="price">{service.price}</p>
                                    <Link to="/booking" state={{ selectedService: service.name }} className="btn btn-primary card-btn-bottom">
                                        Book This Service →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="root-canal" className="section services-root-canal-section">
                    <div className="services-root-canal-container">
                        <h2 className="services-root-canal-title">Understanding Root Canal Treatment</h2>
                        <div className="card services-root-canal-card">
                            <h3 className="services-h3">What is a Root Canal?</h3>
                            <div className="root-canal-container">
                                <p>A root canal is a dental procedure that treats infection or damage in the pulp (innermost part)
                                    of a tooth. The pulp contains nerves, blood vessels, and connective tissue. When it becomes
                                    infected or inflamed due to deep decay, cracks, or trauma, a root canal becomes necessary to
                                    save the tooth.
                                </p>
                                <p>During the procedure, our experienced dentist removes the damaged pulp, cleans and disinfects
                                    the tooth's interior, fills it with a special material, and seals it to prevent future
                                    infection. The tooth is then typically restored with a crown for protection and full function.
                                </p>
                            </div>

                            <button
                                className="btn btn-outline services-toggle-btn"
                                onClick={() => setShowRootCanalDetails(!showRootCanalDetails)}
                            >
                                {showRootCanalDetails ? 'Show Less' : 'Learn More Details'}
                            </button>

                            {showRootCanalDetails && (
                                <div className="services-details-container">
                                    <h4 className="signs-heading">Signs You Might Need a Root Canal</h4>
                                    <div className="signs-grid">
                                        {signs.map((sign, idx) => (
                                            <div className="sign-card" key={idx}>
                                                <Icon path={mdiCheckboxMarkedCircleOutline} size={1} className="sign-icon" />
                                                <h5 className="sign-title">{sign.title}</h5>
                                                <p className="sign-description">{sign.description}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="two-column-lists">
                                        <div className="list-column">
                                            <h4>Step-by-Step Process:</h4>
                                            <ol className="services-details-list">
                                                <li>Numbing the area with local anesthesia</li>
                                                <li>Creating an opening in the tooth crown</li>
                                                <li>Removing infected pulp tissue</li>
                                                <li>Cleaning and disinfecting the canals</li>
                                                <li>Filling and sealing the canals</li>
                                                <li>Placing a crown or filling for protection</li>
                                            </ol>
                                        </div>

                                        <div className="list-column">
                                            <h4>Cost Breakdown:</h4>
                                            <ul className="services-cost-list">
                                                <li>Exam & X-rays: $50-$150 (often covered by insurance)</li>
                                                <li>Root canal treatment: $650-$950 (depends on tooth location)</li>
                                                <li>Dental crown (if needed): $500-$1,000</li>
                                            </ul>
                                            <div className="services-insurance-note">
                                                <p>💡</p>
                                                <p style={{textAlign: 'left'}}>
                                                    Most dental insurance plans cover 50-80% of root canal costs. Ask about our payment plans!
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <h4>
                                        <Icon path={mdiClockOutline} size={1} className="aftercare-title-icon" />
                                        Recovery & Aftercare
                                    </h4>
                                    <div className="aftercare-list">
                                        {aftercareItems.map((item, idx) => (
                                            <div className="aftercare-item" key={idx}>
                                                <Icon path={mdiCheckboxMarkedCircleOutline} size={1} className="aftercare-icon" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="services-consultation-container">
                                        <Link to="/booking" state={{ selectedService: "Root Canal Therapy" }} className="btn btn-primary card-btn-bottom">
                                            Schedule Root Canal Consultation →
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;