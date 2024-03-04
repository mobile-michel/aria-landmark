---
title: Landmarks
description: ARIA Landmarks simplified
layout: default
tags: primary
---

[Example from Developer Mozilla](https://developer.mozilla.org/en-US/blog/aria-accessibility-html-landmark-roles/)

```
  <body>
    <header>
      <a class="logo" href="/"><span class="visually-hidden">Mr. Pineapple's Pizzeria</span></a>
      <nav aria-label="Primary">
        <ul>
          <li><a aria-current="page" href="/">Home</a></li>
          <li><a href="/menu">Our pizzas</a></li>
          <li><a href="/contact">Get in touch</a></li>
        </ul>
      </nav>
      <search>
        <form name="site-search" action="/search" method="get" role="search">
          <label for="query">Find your perfect pizza</label>
          <input type="search" id="query" name="query" />
        </form>
      </search>
    </header>
    <main>
      <h1>Mr. Pineapple's Pizzeria</h1>
      <section aria-labelledby="our-pizzas-heading">
        <h2 id="our-pizzas-heading">Our pizzas</h2>
        <p>All our pizzas come with the best pizza topping in the world. Pineapple!</p>
        <ul>
          <li>Margherita with pineapple</li>
          <li>Veggie with pineapple</li>
          <li>Meaty with pineapple</li>
        </ul>
      </section>
      <aside aria-labelledby="pizza-recipe-heading">
        <h3 id="pizza-recipe-heading">Make your own pie!</h3>
        <p>Below is a list of our favorite pizza recipes.</p>
        <ul>
          <li><a href="/musroom-pizza">The shroom</a></li>
          <li><a href="/smokey-joe">Smokey Joe</a></li>
          <li><a href="/fromage">Fromage</a></li>
        </ul>
      </aside>
      <div class="newsletter">
        <h3 id="newsletter-subscribe-form-heading">Subscribe to Mr. Pineapple's newsletter</h3>
        <p>In our newsletter you can expect even more wonderful pizza recipes. All featuring the versatile pineapple.</p>
        <form aria-labelledby="newsletter-subscribe-form-heading" name="newsletter" action="/subscribe" type="post">
          <label for="email">Please provide your email address</label>
          <input type="email" id="email" name="email" />
          <button type="submit">Pineapple Me </button>
        </form>
      </div>
    </main>
    <footer>
      <p>Copyright &copy; Mr. Pineapple's Pizzeria - 2024</p>
    </footer>
  </body>
```
