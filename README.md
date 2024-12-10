# Next.js 15 useEffect Counter Bug

This repository demonstrates a bug in Next.js 15 where a `useEffect` hook used to update a counter doesn't immediately reflect the correct count upon page load.  The counter is initialized to 0 but displays 1 or 2 before showing the correct value.

## Bug Description

A simple counter implemented using the `useEffect` hook in a Next.js 15 application shows a delayed update upon initial render. The counter should start at 0, but it often jumps to 1 or 2 before displaying the actual count.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page.
5. Observe that the counter doesn't immediately start at 0, but instead begins at a value of 1 or 2 before incrementing correctly.

## Solution

The solution involves using the `useLayoutEffect` hook instead of `useEffect`.  This ensures that the counter updates are performed before the browser renders the page content.

See the `aboutSolution.js` file for the corrected code.