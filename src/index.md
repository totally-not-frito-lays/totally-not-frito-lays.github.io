---
title: Howdy partner, I'm Ryan 🎩
permalink: /
layout: layout.liquid
pagination:
  data: collections.projects
  size: 2
  alias: projects
---

<section>
<div class="grid">
  {%- if dog %}
  <figure>
    <img src="{{ dog }}" alt="doggo" width="700" height="700"/>
    <figcaption>My current mood</figcaption>
  </figure>
  {%- endif %}

  <div>
  <small>
    The names Lay, Ryan Lay. 

    Other than bearing a striking similarity to potatoes, I’ve just graduated from 
    UC San Diego and I’m working on a few projects and experiments in the CS 
    education space.

    I have experience leading multi-disciplinary teams from 5 person dev teams to 
    an 80 person student organization. I am frequently in public speaking positions
    coordinating logistics for large scale events.

    In my spare time, I’ve directed a hackathon 🔱; led a club ♣; won a lettuce 
    eating competition 🥬; built a VR app; raced mountain bikes 🚵‍♂️; built robots 
    🤖; acted in a fan film ⚔️; and made some art 🎨.

    Also, I’m a big star wars nerd.
  </small>
  </div>

</div>
</section>

## Projects

Here's some stuff that I've done!

{% for projects in collections.projects %}

- [{{projects.data.title}}]({{projects.url}})

{% endfor %}

<!-- <footer>
  <ul>
    {% for social in socials %}
      <li><a href="{{ social.url }}">{{ social.name }}</a></li>
    {% endfor %}
  </ul>
</footer> -->