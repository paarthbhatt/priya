# Gesture-Based Pick and Drop System

This project allows users to control a robotic arm or pick-and-drop mechanism using hand gestures. Powered by computer vision and a microcontroller, this system simplifies interactions using a webcam to detect gestures and map them to actions.


---

## Features

Real-time gesture recognition.

Control robotic hardware with simple hand movements.

Configurable gestures and actions.



---

## Installation

1. Clone the repository:

git clone https://github.com/username/gesture-pick-drop-system.git  
cd gesture-pick-drop-system


2. Install required Python libraries:

pip install -r requirements.txt


3. Flash the microcontroller with the hardware control script:


## For Arduino:

Open the hardware/arduino_code.ino file in the Arduino IDE.

Upload the code to your Arduino board.


---

## Usage

Step 1: Start the Gesture Recognition

Run the Python script to detect gestures:

python gesture_control.py

Step 2: Calibrate Gestures

Once the script starts, you’ll see instructions on the console:

Place your hand in front of the camera.  
Move your hand to the predefined positions.

Step 3: Control the Robotic Arm

Use the following gestures:

Fist: Pick the object.

Open Palm: Drop the object.

Swipe Left/Right: Move the arm horizontally.



---


## Customization

Modify the gesture_control.py script to add or change gestures.

Edit the arduino_code.ino to control additional hardware components.



---

## Demo

Add a video link or GIF showcasing the working system.


---

## License

This project is licensed under the MIT License.


---

## Contact

Author: [Your Name]
Email: yourname@example.com
GitHub: Your GitHub Profile


---

