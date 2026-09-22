# Chess Review — Android build

See the step-by-step guide from Claude for how to build this on GitHub
from your phone (no computer needed). In short:

1. Create a GitHub repo and upload every file in this folder (keep the
   `.github/workflows/android.yml` path exactly as-is).
2. Go to the repo's **Actions** tab, open **Build Android**, tap
   **Run workflow**.
3. Wait for the green checkmark, open the finished run, and download
   the `chess-review-debug-apk` artifact — it's a zip containing
   `app-debug.apk`.
4. Unzip on your phone and install `app-debug.apk` (allow "install
   unknown apps" for your file manager / browser when asked).
