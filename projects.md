---
layout: default
title: Projects
permalink: /projects/
---

## project highlights

### Fantasy Hoops
Custom fantasy basketball game with automated scoring.

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

### miscellaneous/tinkering
This could be anything small that I wouldn't consider much of a project. Not that a project has to be big!

{% assign misc_posts = site.posts | where: "project", "misc" | sort: "date" | reverse %}
{% if misc_posts.size > 0 %}
#### Latest update
{% for post in misc_posts limit:3 %}
<article>
  <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
  <p class="post-meta">{{ post.date | date: "%b %-d, %Y" }}{% if post.tags %} · {{ post.tags | join: ", " }}{% endif %}</p>
  <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
</article>
{% endfor %}
{% endif %}