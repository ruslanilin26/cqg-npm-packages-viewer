# NPM Packages Viewer

This is a test project for CQG that displays information about NPM packages. The project allows users to fetch and view packages in a card format, filter them by name, and reload package data. Additionally, it highlights package dependencies and handles error notifications for failed API requests.

## Features

- Card View for NPM Packages: Displays package details such as weekly downloads and dependencies.
- Search & Filter: Allows users to search for packages by name.
- Package Dependency Highlighting: When hovering over a package card, the package's dependencies are highlighted.
- Error Notifications: Red notification panel for errors when fetching data.
- Reload Button: Users can reload the package data manually.

## Getting Started

### Prerequisites

- Node.js and NPM installed.
- Angular CLI version 18 or above installed.

### Installation

- Clone the repository:

```git clone https://github.com/ruslanilin26/cqg-npm-packages-viewer.git```

```cd npm-packages-viewer```

- Install dependencies:

```npm install```

### Running the Project

- Start the server (make sure the backend API is running at http://localhost:3000):

```npm start```

- Open a browser and navigate to:

```http://localhost:4200/packages-page```

You will now see the NPM packages viewer in action.
