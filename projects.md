---
layout: default
title: Projects
permalink: /projects/
---

## Portfolio Highlights

### Course Compass
Degree planning assistant that maps requirements to semester schedules and flags risk early.

{% assign course_compass_posts = site.posts | where: "project", "course-compass" %}
{% if course_compass_posts.size > 0 %}
**Related updates**
<ul>
  {% for post in course_compass_posts %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <span class="post-meta">({{ post.date | date: "%b %-d, %Y" }})</span></li>
  {% endfor %}
</ul>
{% endif %}

### SnapBudget
Habit-first budgeting app focused on recurring charges and weekly check-ins.

{% assign snapbudget_posts = site.posts | where: "project", "snapbudget" %}
{% if snapbudget_posts.size > 0 %}
**Related updates**
<ul>
  {% for post in snapbudget_posts %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <span class="post-meta">({{ post.date | date: "%b %-d, %Y" }})</span></li>
  {% endfor %}
</ul>
{% endif %}

### WriteFlow
Distraction-free writing workspace with AI-assisted outlines and publishing checklists.

{% assign writeflow_posts = site.posts | where: "project", "writeflow" %}
{% if writeflow_posts.size > 0 %}
**Related updates**
<ul>
  {% for post in writeflow_posts %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <span class="post-meta">({{ post.date | date: "%b %-d, %Y" }})</span></li>
  {% endfor %}
</ul>
{% endif %}
