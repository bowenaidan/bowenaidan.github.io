---
layout: default
title: Projects
permalink: /projects/
---

## project highlights

### Fantasy Hoops
Habit-first budgeting app focused on recurring charges and weekly check-ins.

{% assign fantasyhoops_posts = site.posts | where: "project", "fantasy-hoops" | sort: "date" | reverse %}
{% if fantasyhoops_posts.size > 0 %}
#### Latest update
{% for post in fantasyhoops_posts limit:1 %}
<article>
  <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
  <p class="post-meta">{{ post.date | date: "%b %-d, %Y" }}{% if post.tags %} · {{ post.tags | join: ", " }}{% endif %}</p>
  <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
</article>
{% endfor %}
{% endif %}