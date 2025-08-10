---
layout: page
title: gallery
permalink: /gallery/
description: A photo gallery showcasing selected moments and project visuals.
nav: true
nav_order: 4
# optional: if you want categories like projects, set display_categories and enable_project_categories
# display_categories: [People, Nature, Lab]
horizontal: false
---

<!-- pages/gallery.md -->
<div class="projects">
{% assign items = site.gallery %}
{% assign sorted_items = items | sort: "importance" %}

{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
      {% for project in sorted_items %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
    </div>
  </div>
{% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_items %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>
