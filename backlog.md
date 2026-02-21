---
layout: default
title: Backlog
permalink: /backlog/
---

{% assign in_progress_posts = site.posts | where: "backlog", "in-progress" | sort: "date" | reverse %}
{% if in_progress_posts.size > 0 %}
### working on...
{% for post in in_progress_posts %}
<article>
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p class="post-meta">{{ post.date | date: "%b %-d, %Y" }}{% if post.project %} · {{ post.project | join: ", " }}{% endif %}{% if post.backlog %} · {{ post.backlog | join: ", " }}{% endif %}</p>
  <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
</article>
{% endfor %}
---
{% endif %}


{% assign todo_posts = site.posts | where: "backlog", "todo" | sort: "date" | reverse %}
{% if todo_posts.size > 0 %}
### todo
{% for post in todo_posts %}
<article>
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p class="post-meta">{{ post.date | date: "%b %-d, %Y" }}{% if post.project %} · {{ post.project | join: ", " }}{% endif %}{% if post.backlog %} · {{ post.backlog | join: ", " }}{% endif %}</p>
  <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
</article>
{% endfor %}
---
{% endif %}


{% assign done_posts = site.posts | where: "backlog", "done" | sort: "date" | reverse %}
{% if done_posts.size > 0 %}
### recently done
{% for post in done_posts limit:3 %}
<article>
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p class="post-meta">{{ post.date | date: "%b %-d, %Y" }}{% if post.project %} · {{ post.project | join: ", " }}{% endif %}{% if post.backlog %} · {{ post.backlog | join: ", " }}{% endif %}</p>
  <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
</article>
{% endfor %}
---
{% endif %}