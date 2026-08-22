# Firebase setup & deploy (local instructions)

1. Install Firebase CLI (if not installed):

```bash
npm install -g firebase-tools
```

2. Login and select/create a project:

```bash
firebase login
firebase projects:create my-project-name   # optional: create a project
firebase use --add                        # associate local repo with a Firebase project
```

3. Install Cloud Functions dependencies:

```bash
cd functions
npm install
cd ..
```

4. Replace the placeholders in `.firebaserc` (project id) and the `firebaseConfig` object in `index.html` with your Firebase project's values.

5. Emulate and test functions locally (optional):

```bash
firebase emulators:start --only functions,hosting
```

6. Deploy to Firebase Hosting + Functions:

```bash
firebase deploy --only hosting,functions
```

Notes:
- The hosting `public` is set to the project root so existing HTML files remain as-is.
- Requests to `/api/*` are rewritten to the Cloud Function named `api` (see `functions/index.js`).
