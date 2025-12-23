# BookMyShow-Style Seat Layout UI

A data-driven seat booking UI inspired by **BookMyShow**, built using **React** and **CSS Grid**.  
This project demonstrates how complex theatre layouts (seats, gaps, aisles, stairs, pricing sections) can be rendered dynamically using a structured JSON configuration.


## Features

- Dynamic seat layout rendering
- JSON-driven theatre configuration
- Supports:
  - Seats
  - Gaps / empty spaces
  - Aisles
  - Stairs
- Row labels displayed on the left
- Price-based seat sections (Silver / Gold / Recliner)
- Higher-priced sections rendered first
- Seat selection & deselection toggle
- Booked vs available seat states
- Scalable and backend-ready architecture


## Core Concept

Instead of hardcoding seats, each theatre screen is described using a **seat layout JSON**.  
The frontend reads this configuration and renders the layout using a grid system.

This approach allows:
- Different layouts for every theatre
- Easy modification without frontend code changes
- Clear separation of data and UI


## Seat Layout JSON Structure

Example:

```json
{
  "screenName": "Screen 1",
  "columns": 14,
  "rows": [
    {
      "rowLabel": "A",
      "price": 150,
      "seats": [
        { "type": "SEAT", "id": "A1" },
        { "type": "SEAT", "id": "A2" },
        { "type": "GAP" },
        { "type": "SEAT", "id": "A3" }
      ]
    },
    {
      "rowLabel": "B",
      "price": 200,
      "seats": [
        { "type": "SEAT", "id": "B1" },
        { "type": "AISLE" },
        { "type": "SEAT", "id": "B2" }
      ]
    }
  ]
}

```
## Preview
<img width="1271" height="922" alt="Screenshot from 2025-12-23 21-02-25" src="https://github.com/user-attachments/assets/78e6c216-6089-4748-8e6d-9cf5707837e7" />
<img width="1271" height="922" alt="Screenshot from 2025-12-23 23-07-40" src="https://github.com/user-attachments/assets/c13d2522-6967-48b6-8f03-a010b213da06" />

