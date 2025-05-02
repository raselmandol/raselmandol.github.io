---
layout: page
title: Lumbosacral Spine MRI Segmentation
description: Lumbosacral spine MRI segmentation and fracture assessment.
img: assets/img/spine.gif
importance: 2
category: Research
---

Aimed to develop a deep learning model that can automatically find and highlight parts of the lower spine (lumbosacral region) in MRI scans. It can also check for possible fractures. By using models like nnU-Net, the system-integrating machine learning models with a software application-can accurately spot bones and discs, helping doctors measure and analyze spine injuries more easily and quickly.

<div class="caption">
            Overview (Performance) of a customized nnU-Net version
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


Check nnU-Net <a href="https://github.com/MIC-DKFZ/nnUNet">here</a>.
