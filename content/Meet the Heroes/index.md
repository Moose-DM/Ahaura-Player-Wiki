
```base
views:
  - type: cards
    name: Meet the Heroes
    filters:
      and:
        - file.inFolder("content/Meet the Heroes")
        - file.name != "index"
    order:
      - file.name
    image: note.image
    imageAspectRatio: 1.4

````
