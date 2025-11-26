# React Static Website – Deployment Guide (S3 + CloudFront)

This repository contains a **React.js static website** built using **Vite** and deployed to **AWS S3** with global delivery through **AWS CloudFront**.

This document helps contributors understand:

* How to **set up the project locally**
* How to **build** the application
* How to **deploy** the build artifacts to S3 (manual and CI/CD)
* How to **create pull requests (PRs)** correctly

---

## 🚀 Project Overview

* **Framework**: React.js (Vite)
* **Hosting**: AWS S3 (static website hosting)
* **CDN**: AWS CloudFront
* **CI/CD**: GitHub Actions (optional)

---

## 🧰 Prerequisites

Before working on this project, ensure you have the following installed:

* **Node.js** (LTS recommended – check using `node -v`)
* **npm** or **yarn**
* **AWS CLI** (optional for manual deployment)
* **Git

---

## 🛠️ Local Setup

## 🔀 Creating a Pull Request (PR)

If you are contributing through a forked workflow, follow these steps:

### 1. Fork the Repository

* Go to the GitHub repository
* Click **Fork** to create your copy under your GitHub account

### 2. Clone Your Fork

```bash
git clone <your-fork-url>
cd <project-folder>
```

### 3. Add Upstream Remote

This allows you to pull the latest changes from the main repository:

```bash
git remote add upstream https://github.com/Tanisha-b3/PravinSirWebsite
```

### 4. Pull Latest Changes from Upstream

Before working on any new feature:

```bash
git pull upstream main
```

### 5. Install Dependencies

```bash
npm install
```

### 6. Make Your Changes

Update code, assets, documentation, etc.


### 7. Run the Dev Server

```bash
npm run dev
```

Your app will be available at:

```
http://localhost:5173
```

### 8. Commit Your Changes

```bash
git add .
git commit -m "Describe your changes"
```

### 9. Push Changes to Your Remote Fork either to feature or main

```bash
git push origin main
```


---

## 🏗️ Building the Project (Before Deployment)

Before pushing to S3, create a production build:

```bash
npm run build
```

This creates a **dist/** folder containing optimized static files.

### 10. Raise a Pull Request

* Go to your fork on GitHub
* You will see a **Compare & Pull Request** button
* Ensure the PR is targeting the **upstream main branch**
* Add a meaningful title + description
* Submit for review




---

## ☁️ Deploying to AWS S3

You can deploy **manually** or via **GitHub Actions**.

### Manual Deployment (AWS CLI)

Make sure your AWS CLI is configured:

```bash
aws configure
```

Upload the build files to S3:

```bash
aws s3 sync dist/ s3://<your-bucket-name> --delete
```

### CloudFront Cache Invalidation

After uploading:

```bash
aws cloudfront create-invalidation --distribution-id <CF_DISTRIBUTION_ID> --paths "/*"
```

---


## 📦 GitHub Actions (Optional CI/CD)

A GitHub Action workflow can:

* Build the project
* Upload the `dist/` folder to S3
* Invalidate CloudFront

If needed, add a workflow under `.github/workflows/deploy.yml`.

---

## 📁 Project Structure

```
website/
dist/
node-modules/
public/
src/
  components/
  assets/
  pages/
  error-pages/
  App.jsx
  main.jsx
  ...
index.html
vite.config.js
```

---

## ❓ Need Help?

Reach out to the repository maintainers or raise an issue.

---

Happy coding and contributing! 🚀

---

## 🧭 Contribution Workflow Diagram (Fork → Clone → Upstream → PR)

```
          ┌──────────────┐                ┌────────────────────────┐
          │ Original Repo │                │   Your GitHub Account  │
          └───────┬──────┘                └──────────┬─────────────┘
                  │                                   │
                  │            Fork                   │
                  └──────────────────────────────────▶│
                                                      │
                                              (Your Forked Repo)
                                                      │
                                                      ▼
                                            ┌──────────────────┐
                                            │    git clone     │
                                            └─────────┬────────┘
                                                      │
                                                      ▼
                                           ┌─────────────────────┐
                                           │  Local Workspace    │
                                           └─────────┬───────────┘
                                                     │
               Add upstream remote                   │
        git remote add upstream <original>           │
        git pull upstream main                       │
                                                     ▼
                                           ┌─────────────────────┐
                                           │  Create Branch      │
                                           │ git checkout -b ... │
                                           └─────────┬───────────┘
                                                     │
                                                     ▼
                                           ┌─────────────────────┐
                                           │ Make changes        │
                                           │ Commit + Push       │
                                           └─────────┬───────────┘
                                                     │
                                                     ▼
          ┌────────────────────────────────────────────────────────────────┐
          │   GitHub: Open Pull Request to Original Repo (Upstream Main)   │
          └────────────────────────────────────────────────────────────────┘
```

---

## 🔍 Automated Checks Before Opening a PR

Run these steps locally to ensure a clean PR:

### 1. Build the Application

```bash
npm run build
```

Confirm that the `dist/` folder is generated successfully.

### 2. Preview Production Build

(Optional but recommended)

```bash
serve dist
```

### 3. Sync with Upstream Before Pushing

```bash
git pull upstream main
```

### 4. Validate Linux Case-Sensitivity

Since CI runs on Linux:

* Ensure file names match imports exactly
* Check that asset paths (e.g., images) exist
* Remove unused imports to avoid CI failures

---
