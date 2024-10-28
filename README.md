# Supabase Auth and Database with React Native

A React Native application that implements user authentication using Supabase. This project serves as a straightforward example of how to integrate Supabase authentication into your React Native app.

## Features

- **User Authentication**: Provides functionalities for signing up, logging in, and logging out users.
- **Supabase Integration**: Easily connect to Supabase for backend services, including user management.
- **Quick Start**: Based on the official [Supabase documentation](https://supabase.com/docs/guides/auth/quickstarts/react-native), making it easy to follow along and customize for your own projects.
- **Unstyled**: The application is intentionally left unstyled, allowing you to customize the UI to match your project's aesthetic.

<img width="390" alt="Screenshot 2024-10-28 at 4 51 49 PM" src="https://github.com/user-attachments/assets/19b6b8b1-3832-4e08-ab25-0dba7c5e0109">
<img width="390" alt="Screenshot 2024-10-28 at 4 51 59 PM" src="https://github.com/user-attachments/assets/68657e2e-40cf-4499-9617-c76c4533156f">

## Getting Started

### Prerequisites

- Node.js
- React Native CLI or Expo
- A Supabase account and project
- Docker (optional. If you haven't set this up, you may check and [learn how to configure and deploy Supabase with Docker](https://supabase.com/docs/guides/self-hosting/docker) here.

### Installation

1. Clone the repository and navigate to the project directory

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Configure your Supabase credentials:
   - Create a `.env.local` file in the root of the project with the following contents:
   ```plaintext
   YOUR_REACT_NATIVE_SUPABASE_URL=your_supabase_url
   YOUR_REACT_NATIVE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm start
   ```

6. Run the application:
   ```bash
   npm run ios   # for iOS
   npm run android  # for Android
   ```

## Usage

Once the application is running, you will have access to the authentication features provided by Supabase. You can customize the UI and functionality to match your specific requirements.

### Key Functions

- **Sign Up**: Create a new user account.
- **Log In**: Authenticate existing users.
- **Log Out**: Sign users out of the application.


```**Thanks for exploring this project! Dive in and happy coding!!**```

