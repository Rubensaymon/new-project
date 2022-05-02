# Use TWIG to encapsulate page components

Keep your code DRY (Don't Repeat Yourself) by using [`{% include %}`](https://twig.symfony.com/doc/3.x/tags/include.html) to encapsulate the code. Take the following code:

```html
<div
  class="flex items-center max-w-sm p-6 mx-auto space-x-4 bg-white shadow-lg rounded-xl"
>
  <div>
    <div class="text-xl font-medium text-black">Mary</div>
    <p class="text-slate-500">First message!</p>
  </div>
</div>

<div
  class="flex items-center max-w-sm p-6 mx-auto space-x-4 bg-white shadow-lg rounded-xl"
>
  <div>
    <div class="text-xl font-medium text-black">Joe</div>
    <p class="text-slate-500">Second message!</p>
  </div>
</div>
```

We can extract the "Message" into a TWIG partial in `_partials/_message.twig`:

```twig
<div
  class="flex items-center max-w-sm p-6 mx-auto space-x-4 bg-white shadow-lg rounded-xl"
>
  <div>
    <div class="text-xl font-medium text-black">{{name|default("USER")}}</div>
    <p class="text-slate-500">{{message|default("MESSAGE")}}</p>
  </div>
</div>
```

Now we can reference it in our code:

```twig
{% include "_partials/_message.twig" with {
  name: "Mary",
  message: "First message!"
} %}

{% include "_partials/_message.twig" with {
  name: "Joe",
  message: "Second message!"
} %}
```

This way, the component can be easily maintained!
