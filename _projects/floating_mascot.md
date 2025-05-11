---
layout: page
title: Floating Mascot
description: A floating mascot app made with PyQt6. You can load animated GIFs or images.
img: assets/img/floating_mascot.gif
importance: 2
category: fun
---

# floating-mascot

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/floating_mascot.gif" title="floating_mascot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

`floating_mascot` is a simple floating character mascot application for your desktop, made with PyQt6. It supports animated GIFs/images, 3D models(.glb), and some extendable built-in animations like bouncing balls and snakes. You can also add your own custom character or animation.


---

[![GitHub release](https://img.shields.io/github/v/release/raselmandol/floating_mascot)](#) [![GitHub release date](https://img.shields.io/github/release-date/raselmandol/floating_mascot)](#) [![GitHub last commit](https://img.shields.io/github/last-commit/raselmandol/floating_mascot)](#)


## Features

- Load and display a **GIF** or **PNG** character.
- Make the mascot draggable around your desktop.
- Transparent background (no window frame).
- Built-in full-screen animations (bouncing balls, snake, twinkling stars).
- Simple settings window.


---

## Screenshots

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/screenshot_f_mascot_1.png" title="floating_mascot_screenshot" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/screenshot_f_mascot_2.png" title="floating_mascot_screenshot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Installation

Follow these steps to set up the project:

### Clone the Repository

```bash
git clone https://github.com/raselmandol/floating_mascot.git
cd floating_mascot
```

## Virtual Environment Setup

Create and activate a virtual environment called `mascot`:

### Windows

```bash
python -m venv mascot
mascot\Scripts\activate
```

---

##  Install Dependencies

After activating the virtual environment:

```bash
pip install -r requirements.txt
```

---
## Usage

Make sure you're in the project folder, then run:

```bash
python main.py
```

---


##  Requirements

- Python 3.9+
- PyQt6
- PyOpenGL
- Pillow (for GIF/image handling)

---

##  Build Executable (Windows)

if you want to create an `.exe`:

### Install PyInstaller:
   ```bash
   pip install pyinstaller
   ```

> **Note:** Already added in `requirements.txt`. (If you want to ignore it, make sure to remove it from `requirements.txt`.)


Convert your PNG icon to ICO.

### Run:
   ```bash
   pyinstaller --onefile --windowed --icon=icon.ico main.py
   ```

---

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change.

---


## To-Do

- [ ]  Enhance error handling  
- [ ]  Improve documentation with more examples  
- [ ]  Add more configuration options  
- [ ]  Minimize to system tray  
- [ ]  Include more default animations  
- [ ]  Add proper 3D model support  
- [ ]  Load from URL  
- [ ]  Add autostart on system startup  
- [x]  Implement proper drag functionality  
- [ ]  Create animation builder/editor  
- [x]  Draggable Label
- [ ]  Keyboard Shortcuts
- [ ]  Background Music 
- [ ]  Multiple GIFs option