// App.js

import React from "react";
import './homepage.css';

function App() {
    return (
        <div className="container">
            <header className="header">
                <h1>Transform Your Customer Experience with AI Voice Agents</h1>
                <p>Engage, Automate, and Accelerate Business with Conversational AI</p>
            </header>

            <section className="section">
                <h2>Automate Key Business Processes</h2>
                <p>
                    Our AI voice agents handle complex tasks like <strong>order status inquiries, appointment bookings, and answering FAQs</strong>,
                    allowing your team to focus on higher-value work. Unlock the power of 24/7 automated support without compromising quality.
                </p>
                <ul>
                    <li>Reduce Operational Costs by up to 40% with automated customer interactions.</li>
                    <li>Increase Response Efficiency by handling thousands of simultaneous conversations.</li>
                    <li>Boost Customer Satisfaction with personalized, accurate, and fast service every time.</li>
                </ul>
            </section>

            <section className="section">
                <h2>Actionable Conversations, Real Results</h2>
                <p>
                    Built with industry-leading natural language understanding, our AI voice agents don’t just talk—they act. Empower your agents to:
                </p>
                <ul>
                    <li>Schedule appointments</li>
                    <li>Check order statuses</li>
                    <li>Provide customized answers based on your knowledge base</li>
                </ul>
                <p><strong>Immediate Impact:</strong></p>
                <ul>
                    <li>Cut call handling time by up to 50% with intelligent voice interactions.</li>
                    <li>Increase First Contact Resolution (FCR) by providing accurate, real-time responses.</li>
                    <li>Scale Without Limits: Handle peak traffic effortlessly and ensure 24/7 availability.</li>
                </ul>
            </section>

            <section className="section">
                <h2>Integrate with Ease</h2>
                <p>
                    No more complicated implementations—our platform seamlessly integrates with your existing systems,
                    from CRMs to e-commerce platforms. Create, deploy, and manage your voice agents effortlessly, with minimal coding required.
                </p>
                <ul>
                    <li>Accelerate Time-to-Market by launching agents in days, not weeks.</li>
                    <li>Adapt Quickly with a fully customizable platform that grows with your business.</li>
                </ul>
            </section>

            <section className="cta">
                <h3>Why AI Voice Agents Matter</h3>
                <p>85% of customer interactions will be automated by 2025. Be ahead of the curve.</p>
                <p>30% higher retention rates with faster, more accurate customer service.</p>
                <button className="cta-button">Get Started Today</button>
            </section>

        </div>
    );
}

export default App;
