---
layout: page
title: MRI-SEG Tool (Cross-Platform)
description: MRI-SEG, Spine MRI Segmentation and Classification Tool (Cross-Platform)
img: assets/img/spine_seg_g.gif
importance: 3
category: Research
---

I developed **MRI-SEG**, a cross-platform software package for **automatic classification and segmentation of Spine MRI images**. The tool features a custom **GUI** designed for ease of use on both **Windows and Linux** systems. MRI-SEG integrates a **deep learning model** that I personally built and trained, enabling accurate segmentation and diagnosis support for spinal structures in MRI scans.

> **Data Source**: Spine MRI data was provided by **AIIMS Raebareli**, Department of Neurosurgery, under the guidance of **Dr. Suyash Singh**. This project was a **collaborative effort** between **NIT Meghalaya** and **AIIMS Raebareli**.

## Features

- **Custom-built deep learning architecture** for spine MRI segmentation.
- **GUI-based application** with real-time visualization and result output.
- Compatible with **Windows and Linux** platforms.
- Designed for **ease of integration** into clinical workflows and research settings.

<div class="caption">
            Overview (Performance) of a customized nnU-Net (used to train :: first step) version
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/spine_seg.png" title="GUI Image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/spine_annotated.png" title="spine_annotated" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/spine_mask.png" title="mask image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


Check nnU-Net <a href="https://github.com/MIC-DKFZ/nnUNet">here</a>.

**Note:** More information about this project will be added soon.
