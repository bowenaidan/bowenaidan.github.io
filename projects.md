---
layout: default
title: Projects
permalink: /projects/
---

### [fantasy-hoops](https://github.com/bowenaidan/fantasy-hoops)
Custom fantasy basketball game with automated scoring.

{% assign fantasyhoops_posts = site.posts | where: "project", "fantasy-hoops" | sort: "date" | reverse %}
{% if fantasyhoops_posts.size > 0 %}
#### latest update:
{% for post in fantasyhoops_posts limit:1 %}
<article>
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p class="post-meta">{{ post.date | date: "%b %-d, %Y" }}{% if post.project %} · {{ post.project | join: ", " }}{% endif %}{% if post.backlog %} · {{ post.backlog | join: ", " }}{% endif %}</p>
  <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
</article>
{% endfor %}
{% endif %}

---
### misc.
This could be anything small that I wouldn't consider much of a project. Not that a project has to be big!

{% assign misc_posts = site.posts | where: "project", "misc" | sort: "date" | reverse %}
{% if misc_posts.size > 0 %}
#### latest update(s):
{% for post in misc_posts limit:3 %}
<article>
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p class="post-meta">{{ post.date | date: "%b %-d, %Y" }}{% if post.project %} · {{ post.project | join: ", " }}{% endif %}{% if post.backlog %} · {{ post.backlog | join: ", " }}{% endif %}</p>
  <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
</article>
{% endfor %}
{% endif %}