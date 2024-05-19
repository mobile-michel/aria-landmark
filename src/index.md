---
title: Welcome
description: Example with ARIA Landmarks explained & dropdowns.
date: 2024-01-01
layout: default
tags: primary
---
## How to make page links in dropdowns

### Navigation elements
- header.liquid -> primary navigation + dropdowns
- aside.liquid -> secondary navigation
- pagination.liquid -> for collections
- footer.liquid -> footer navigation

### Dropdowns
- index page -> tags: primary + navigation: "category name"
- sub-pages -> tags: dropdown + navigation: "category name"

{% raw %}
```
  <nav aria-label="Primary">
    <ul>
      {%- for i in collections.primary %}
      {%- if i.data.navigation %}
      <li>{{ i.data.title }}
        <ul>
          {%- for item in collections.dropdown -%}
          {%- if i.data.navigation == item.data.navigation %}
          <li><a href="{{ item.url | url }}"{% if page.url==item.url %} aria-current="page"{% endif %}>{{item.data.title}}</a></li>
          {%- endif %}
          {%- endfor %}
        </ul>
      </li>
      {%- else %}
      <li><a href="{{ i.url | url }}"{% if page.url==i.url %} aria-current="page"{% endif %}>{{i.data.title}}</a></li>
      {%- endif %}
      {%- endfor %}
    </ul>
  </nav>
```
{% endraw %}