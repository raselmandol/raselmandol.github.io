---
layout: page
title: MRI-SEG Lite - Lightweight Spine MRI Segmentation
description: MRI SEG Lite – Lightweight Spine MRI Segmentation for Edge Devices (R-Pi & all.)
img: assets/img/spine.gif
importance: 4
category: Research
---

I developed **MRI SEG Lite**, a lightweight version of the original MRI-SEG software package, specifically tailored for **resource-constrained environments** such as the **Raspberry Pi**. This version is designed to perform **automatic classification and segmentation of Spine MRI images** directly on edge devices without reliance on high-end GPUs or cloud infrastructure.

To make this possible, the original deep learning model was **converted and optimized** using techniques such as **model pruning, quantization**, and **format conversion** (e.g., TensorFlow Lite), significantly reducing memory and compute requirements while **preserving model accuracy** to a similar level of the original one.

MRI SEG Lite supports the same core functionalities as the desktop version, including real-time visualization, but is optimized for environments with **limited hardware resources and power constraints**. This makes it suitable for use in **remote clinics, field hospitals**, or **mobile diagnostic units**.

<div class="caption">
            Overview
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/spine_org.png" title="Original Spine image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/spine_annotated.png" title="spine_annotated" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/spine_mask.png" title="mask image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


> **Ongoing Work**: The project is currently in its **research and development phase**, with ongoing efforts to improve speed, accuracy, and power efficiency for clinical deployment.

**Note:** More information about this project will be added soon.
