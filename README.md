# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

COMPANY:CODTECH IT SOLUTIONS

NAME:VIJAY DURGA

INTERN ID:CT06DL1498

DOMAIN:FULL STACK DEVELOPMENT 

DURATION:6 WEEKS

MENTOR:NEELA SANTHOSH KUMAR

Core Functionality: A multi-component system designed to help users understand and improve their digital productivity by automatically tracking time spent on various websites, classifying those sites, and providing insightful analytics through a dedicated web dashboard.

Key Components:

Chrome Extension (Client-side Tracking):

Automatic Time Tracking: Runs in the browser's background, intelligently monitoring the active tab and measuring the duration of time spent on different websites.
Data Collection: Gathers URL, domain, and time-on-site data.
Local Storage & Sync: Temporarily stores tracking data locally in the browser and periodically syncs it with the backend server.
User Interface (Popup): A minimalist popup accessible via the Chrome toolbar provides quick access to real-time activity and basic controls.
Backend (Data Storage & API):

Robust Data Storage: Utilizes a database (MongoDB or PostgreSQL) to securely store user-specific Browse data, website classifications, and aggregated productivity metrics.
API Endpoints: Provides secure RESTful APIs for:
User authentication (registration, login, session management).
Receiving tracked data payloads from the Chrome extension.
Serving aggregated productivity data to the web dashboard.
Managing user-defined website classifications.
Data Processing: Aggregates raw time tracking data to generate meaningful productivity metrics.
Web Dashboard (Analytics & Management):

Dynamic & Responsive UI: Built with a modern JavaScript framework (React.js or Vue.js) to provide an interactive and responsive user experience.
User Authentication: Secure login system to ensure data privacy and personalized analytics.
Productivity Reports: Generates detailed daily, weekly, and monthly reports on time allocation.
Data Visualization: Presents productivity insights through intuitive charts and graphs (e.g., pie charts for time distribution, bar charts for daily activity, line graphs for trends).
Website Classification Management: Allows users to define and customize categories for websites (e.g., "Productive," "Unproductive," "Neutral," or custom categories like "Learning," "Work," "Entertainment").
Top Websites: Highlights most visited or time-consuming websites.
Key Technologies (Illustrative):

Chrome Extension: Manifest V3, JavaScript (Background Scripts, Popup Scripts), Chrome APIs (tabs, alarms, storage, webNavigation).
Backend: Node.js (with Express.js) or Python (with Django/Flask), Mongoose (for MongoDB) or Sequelize/TypeORM (for PostgreSQL).
Frontend (Dashboard): React.js or Vue.js, Chart.js/D3.js for data visualization, Fetch API/Axios for API interaction.
Database: MongoDB or PostgreSQL.
Main Features/Highlights:

Automated & Passive Tracking: Runs in the background without user intervention once configured.
Customizable Productivity Definitions: Users have control over how websites are categorized.
Actionable Insights: Provides visual and quantitative data to help users identify distractions and optimize their online habits.
Secure User Data: Emphasizes secure storage and transmission of personal Browse data.
Scalable Architecture: Designed to handle increasing amounts of user data and concurrent users.

*OUTPUT*:![Image](https://github.com/user-attachments/assets/e4eefca4-241e-45b2-b9a1-b6b9fb11b95c)
