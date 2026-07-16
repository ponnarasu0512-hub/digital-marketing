# Vercel Deployment Guide: ACT ON Creation 🚀

This document outlines the step-by-step deployment configuration and variable mapping required to deploy the **ACT ON Creation** premium agency website to Vercel.

---

## 🔑 Crucial Pre-requisite: Gemini API Key Mapping

The interactive **Act On AI** virtual concierge chatbot is powered by the server-side `@google/genai` SDK. To enable live AI reasoning, you must map your `GEMINI_API_KEY` in the Vercel dashboard.

### How to Configure `GEMINI_API_KEY` on Vercel:

1. **Access the Vercel Dashboard**:
   Go to [vercel.com](https://vercel.com) and log in to your account.

2. **Select Your Project**:
   Click on the **ACT ON Creation** project card from your dashboard list.

3. **Navigate to Project Settings**:
   Click on the **Settings** tab at the top of the project view.

4. **Open Environment Variables Panel**:
   Select **Environment Variables** from the left-hand navigation sidebar.

5. **Add the Key**:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: *[Your Google Gemini API Key]* (Should start with `AIzaSy...`)
   - **Environments**: Make sure to check **Production**, **Preview**, and **Development**.

6. **Save Changes**:
   Click the **Add** or **Save** button.

7. **Redeploy**:
   - Navigate to the **Deployments** tab.
   - Click the three dots next to your latest deployment and select **Redeploy** to apply the new environment variable changes.

---

## 🛠️ Verification & Fail-Safe Architecture

The website features an automated check that queries the server before attempting to initialize the live AI service:

- **AI Live Status (Success)**: When `GEMINI_API_KEY` is mapped and active, the chatbot header displays an **AI LIVE** green badge. It securely handles conversations using the high-performance `gemini-3.5-flash` model.
- **Intelligent Sandbox Mode (Fail-safe)**: If the key is missing or is set to a placeholder, the chatbot header displays a **SANDBOX** amber badge, notifying developers or users. The system seamlessly falls back to our bespoke intelligent responsive rules matching Chennai office location queries, pricing options, and services dynamically to keep user experience perfect.

---

## 🏗️ Technical Stack & Build Setup

- **Frontend**: React 19 + Vite 6 + Tailwind CSS 4 + Motion Animations (GSAP, Framer Motion)
- **Backend**: Node.js Express Server running full-stack routing proxy
- **Vercel Engine Config**:
  Ensure your `vercel.json` matches the build-out requirements for Node.js Express serverless functions mapping.
