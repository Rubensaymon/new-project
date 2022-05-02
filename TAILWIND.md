# Lean on Tailwind

Avoid writing css components, unless you have to.

Traditionally, whenever you need to style something on the web, you write CSS. For Example:

```html
<div class="chat-notification">
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>
<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```

With Tailwind, you style elements by applying pre-existing classes directly in your HTML.

```html
<div
  class="flex items-center max-w-sm p-6 mx-auto space-x-4 bg-white shadow-lg rounded-xl"
>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```

This approach allows us to implement a completely custom component design without writing a single line of custom CSS.

Once you’ve actually built something this way, you’ll notice some really important benefits:

**You aren’t wasting energy inventing class names.** No more adding silly class names like `sidebar-inner-wrapper` just to be able to style something, and no more agonizing over the perfect abstract name for something that’s really just a flex container.

**Your CSS stops growing.** Using a traditional approach, your CSS files get bigger every time you add a new feature. With utilities, everything is reusable so you rarely need to write new CSS.

**Making changes feels safer.** CSS is global and you never know what you’re breaking when you make a change. Classes in your HTML are local, so you can change them without worrying about something else breaking.

Besides the benefits to the developer experience, our build process removes any unused styles, reducing the overall size of the CSS and boosting the performance of the page.
