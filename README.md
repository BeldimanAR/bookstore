# Bookstore App (React + TypeScript + Tailwind)

A fully functional React application for a bookstore, showcasing:
- Responsive layout (cart sidebar remains visible on all device sizes).
- Tailwind CSS for fast, consistent styling.
- TypeScript for type safety and maintainability.

## Features

1. **Navigation & Routing**  
   - Books page (`/`) with searchable list of books and "Add to Cart".
   - User Profile (`/profile`) to update user details, with form validation and dynamic avatar.
   - 404 Page for unknown routes.

2. **Responsive Design**  
   - On large screens: 3-column layout (left nav, middle content, right sidebar).
   - On small screens: stacked layout so cart is still visible but below the main content.

3. **Shopping Cart**  
   - Always displayed as a sidebar (on mobile, it appears below content).
   - Shows added books, quantity updates, total price, and "Submit" action.

4. **User-Friendly UX**  
   - Clear input placeholders and focus states in forms.
   - Alerts for stock limitations.
   - Succinct error messages and success notifications.

5. **Bonus**  
   - Stock management logic prevents exceeding the available stock.
   - Potential extension for further concurrency checks with real APIs.

## Getting Started

1. **Clone the Repo**  
   ```bash
   cd my-bookstore


#  Project Structure
.
├── public/ (optional if you need static assets)
├── src/
│   ├── data/
│   ├── pages/
│   ├── components/
│   ├── context/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── tsconfig.json

#  Technical Choices
React Router v6 for navigation.
Context API for cart and user data; simpler than Redux for this size of project.
Tailwind CSS for rapid UI development and built-in responsiveness.
TypeScript ensures type safety across the codebase.

# Future Improvements
Persistent Data: Connect to a real backend or local storage.
Extended Stock Handling: More robust concurrency checks if multiple users try to buy the same item.
Accessibility: Add ARIA labels for improved screen reader support, better focus states, etc.
Testing: Jest + React Testing Library for unit and integration tests.