---
layout: base.liquid
title: Hello world
pagination:
  data: collections.projects
  size: 2
  alias: projects
---

<section class="grid">
  <figure>
    <img 
      src="https://imgs.search.brave.com/Ap1mET2URQ7ZqrnF1c6jKwzkNZ6fNxDOLsgPgTBesMM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/ZG9nLXBhd3MuanBn/P3dpZHRoPTEwMDAm/Zm9ybWF0PXBqcGcm/ZXhpZj0wJmlwdGM9/MA"
      alt="doggo"
      width="700"
      height="700"
      >
    <figcaption>My current mood</figcaption>
  </figure>
  <div>
    Hi, I'm Ryan. I like to make workshops.
  </div>
</section>

{% for project in collection.projects %}
- [{{ projects.data.title}}]({{ projects.data.url }})
{% endfor %}
a