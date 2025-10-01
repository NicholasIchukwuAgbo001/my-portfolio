# Project Structure

## Directories

### `/features`

Contains feature-based components organized by section:

- `/contact` - Contact section components
- `/projects` - Projects section components
- `/skills` - Skills section components
- `/about` - About section components
- `/hero` - Hero section components
- `/layout` - Layout components

### `/ui`

Contains reusable UI components:

- `/buttons` - Button components
- `/cards` - Card components
- `/sections` - Section components

### `/shared`

Contains shared components, utilities, and constants used across features.

### `/hooks`

Contains custom React hooks.

### `/utils`

Contains utility functions.

## Component Organization

Components are organized by:

1. **Reusability** - Highly reusable components go in `/ui`
2. **Feature-specific** - Components specific to a feature go in `/features/[feature-name]`
3. **Single Responsibility** - Each component should have one clear purpose
4. **Composition** - Larger components are composed of smaller, reusable components

## Import Patterns

```javascript
// Importing reusable UI components
import { Button, ProjectCard } from "../ui";

// Importing feature-specific components
import ContactInfo from "../features/contact/ContactInfo";
```
