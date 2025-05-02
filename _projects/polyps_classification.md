---
layout: page
title: Depth-ResNet – Polyp Image Classification Tool
description: DepthResNet – Polyp Image Classification Tool using Depth-ResNet (Cross-Platform)
img: assets/img/polyps.gif
importance: 4
category: Research
---

Developed **DepthResNet**, a cross-platform GUI-based application for the **automatic classification of polyp images** by a **customized convolutional neural network named Depth-ResNet**. This project is made to assist medical professionals and researchers with fast and accurate identification of polyps from endoscopic images.

The core of the application is **Depth-ResNet**, a customized extension of the ResNet50 architecture, specifically customized to identify patterns and subtle features unique to polyp structures. This model was trained on a diverse dataset of labeled polyp images.

The trained model is integrated into a custom-built **GUI application** that works on both **Windows and Linux** systems. The interface allows users to load images, receive real-time classification results, and optionally model predictions with confidence scores or heatmaps.

> **Use Case**: Ideal for use in medical research labs, clinical screening tools, academic projects, and educational settings.

## Key Features

- **Depth-ResNet**: A custom deep learning model based on ResNet50, optimized for polyp classification.
- **Cross-platform GUI application** supporting both Windows and Linux systems.
- Real-time classification with optional confidence score.
- Built for **practical clinical and research integration**.

<div class="caption">
            Overview
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/polyps.gif" title="Polyps SC1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
            SCs
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/polyps_c.png" title="Polyps SC1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/polyps_c1.png" title="Polyp SC2" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/polyps_c2.png" title="mask image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


> **Ongoing Work**: The project is currently in its **research and development phase**, with ongoing efforts to improve spee and accuracy for clinical deployment.

**Note:** More information about this project will be added soon.
