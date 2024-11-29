# JavaScript Accordion

This project demonstrates a simple JavaScript implementation of an accordion. The accordion allows users to expand or collapse sections of content by clicking on headers, with only one section open at a time.

## Features

Vanilla JavaScript implementation (no frameworks).
Uses getElementsByClassName for DOM traversal (no querySelector or forEach).
Avoids direct use of parentElement by leveraging the contains method to find the parent accordion-item.
Only one accordion section can be active (open) at a time.
How It Works
Each accordion section consists of a header and corresponding content inside an accordion-item.

## Clicking a header:

Toggles the visibility of its associated content by toggling the active class on the accordion-item.
Hides content for all other accordion sections by removing their active class.
The logic is implemented using addEventListener for each header.
