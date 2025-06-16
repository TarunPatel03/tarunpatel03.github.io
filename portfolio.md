---
title: Portfolio
layout: portfolio_index
permalink: /portfolio/
---

<div class="portfolio-grid">

{% for project in site.portfolio %}
  <div class="portfolio-card">
    <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
    <p>{{ project.excerpt }}</p>
  </div>
{% endfor %}

</div>
