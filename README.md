# 🧠 AIoT-Based Depression Early Risk Monitoring System

Welcome to the **AIoT-Based Depression Early Risk Monitoring System** web dossier and interactive 3D technical showcase.

This project integrates Artificial Intelligence (AI) and the Internet of Things (IoT) to monitor biological and behavioral indicators continuously, providing early risk screening for depression.

---

## 📌 Project Highlights & Updates

- **Real-World Hardware Stack**: ESP32 Controller, MAX30102 PPG Optical Sensor (Heart Rate & SpO₂), MPU6050 6-DOF Motion Sensor, DHT22 Temperature & Humidity Sensor, OLED Wrist Screen, and 3.7V LiPo Battery.
- **Dual Interactive 3D Models**:
  1. 🔌 **Component Layout (Breadboard Prototype)**: Full interactive 3D view of component wiring and breadboard testing layout.
  2. ⌚ **Wearable Device (AIoT Smartband)**: Full interactive 3D view of the compact wearable smartband with internal component breakdown.
- **Bilingual Interface (English & Egyptian Arabic)**: Full support for English and everyday Egyptian Arabic (**عربي عامي مصري بسيط**) with a seamless `EN / AR` toggle switch in the left sidebar.
- **6-Stage End-to-End System Pipeline**: Data Collection → Data Transmission (MQTT/HTTP) → Data Processing → Database (Firebase/MySQL) → AI Machine Learning Analysis (Logistic Regression, Random Forest, SVM) → Dashboard Display & Instant Alerts.
- **10 Core System Challenges & Mitigations**: Detailed analysis of data privacy, sensor accuracy, internet connectivity, battery life, user diversity, and legal compliance.
- **Scientifically Documented References**: Comprehensive citations from WHO, PubMed, The Lancet Psychiatry, Nature Medicine, IEEE Xplore, SpringerLink, ClinicalKey, Kaggle, and PhysioNet.

---

## 🛠️ System Architecture & Technology Stack

### 1. Hardware Components & Wiring (I²C Bus)
* **ESP32**: Main microcontroller with built-in Wi-Fi & Bluetooth LE.
* **MAX30102**: Heart Rate (BPM) & Blood Oxygen (SpO₂%) optical pulse oximeter.
* **MPU6050**: 3-Axis Accelerometer + 3-Axis Gyroscope for activity & sleep tracking.
* **DHT22**: Ambient temperature & humidity monitoring.
* **OLED Display**: Wrist display showing real-time metrics (78 BPM, SpO₂ 98%, connectivity).
* **3.7V Battery & Module**: Rechargeable LiPo battery with USB charging board.

### 2. Software & AI Stack
* **Frontend**: HTML5, Vanilla CSS3 (Custom Glassmorphic Dark Theme), JavaScript (ES6+), Three.js (3D Graphics).
* **Backend**: Python, Flask, REST API.
* **Database**: Firebase Realtime Database / MySQL.
* **AI / ML Models**: Python, scikit-learn, Pandas (Logistic Regression, Random Forest, SVM).

---

## 📁 Repository Structure

```
AIOT/
├── index.html       # Main Dossier & Interactive App Structure
├── script.js        # DOM Logic, Dual 3D Three.js Renderers, Interactive Gauge & I18n Engine
├── style.css        # Custom Glassmorphic Dark Design System, Responsive Layouts & RTL Styles
├── README.md        # Comprehensive Technical Documentation
└── pdf_pages/       # Extracted Reference Documents & Translation Assets
```

---

## 🚀 Running the System Showcase Locally

### Option 1: Direct File Access
Double-click `index.html` to launch in any web browser.

### Option 2: Local HTTP Server (Recommended)
```bash
# Using VS Code Live Server extension:
Right-click 'index.html' -> Select "Open with Live Server"

# OR using Python:
python -m http.server 8000
```
Navigate to `http://localhost:8000`.

---

## 🌐 Language Support

Click the `EN / AR` switch in the left sidebar to toggle between:
- **English**: Original technical terminology & dossiers.
- **Arabic (عربي عامي مصري)**: Easy-to-understand Egyptian Arabic translations across all sections.

---

## ⚖️ Disclaimer

This system is an educational research prototype designed for **early risk screening and passive monitoring only**. It is **not a diagnostic medical device** and does not replace professional clinical diagnosis.
