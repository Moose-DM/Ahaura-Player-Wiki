---
title: Welcome to Ahaura
---
```base
views:
  - type: leaflet-map
    name: Ahaura Interactive Map
    mapName: Ahaura_Map
    image: Ahaura_Map.png
    height: 600
    minZoom: -3
    maxZoom: 3
    defaultZoom: -2.0
    zoomDelta: 0.50
    scale: "0.0935"
    unit: mi
```

[[Ahaura_Map.png|View full map image]]

```base
views:
  - type: cards
    name: Table
    filters:
      and:
        - "!image.isEmpty()"
    image: note.image
    cardSize: 220
    imageAspectRatio: 0.75

````