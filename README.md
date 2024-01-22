# GlassFM - React Microsoft Clarity

A lightweight component to make adding Microsoft Clarity to your project easily.

# Install

```bash
npm install react-microsoft-clarity --save
```

# Usage

```typescript
import { clarity } from "react-microsoft-clarity";

// Start seeing data on the Clarity dashboard with your project ID
clarity.init(id);

// Identify the user
clarity.identify("USER_ID", "SESSION_ID", "PAGE_ID");

// Cookie consent
clarity.consent();

// Setup a custom tag
clarity.setTag("key", "value");

// Upgrade session
clarity.upgrade("upgradeReason");

// Check if Clarity has been initialized before calling its methods
if (clarity.hasStarted()) {
	clarity.identify("USER_ID", "SESSION_ID", "PAGE_ID", "FRIENDLY_NAME");
	clarity.setEvent("SOME_EVENT");
}
```

-   id: Stands for 'Clarity ID' - Your site's project ID found in setup. This is the ID which tells Clarity which site settings it should load and where it should save the data collected.

You can learn more from [Clarity Docs](https://learn.microsoft.com/en-us/clarity/)
