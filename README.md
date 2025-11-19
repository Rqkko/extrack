# ExTrack — Personal Finance Tracker

ExTrack is a full-stack personal finance tracking app built with **Next.js**, **AWS Lambda**, and **DynamoDB**.  
It allows users to manage income/expenses, view monthly summaries, visualize categories with charts, and upload receipt images.

---

## 🚀 Tech Stack

### **Frontend**
- Next.js (App Router)
- Recharts (Pie charts)
- Tailwind CSS + custom UI
- Lucide Icons

### **Backend**
- AWS Lambda (Node.js)
- DynamoDB (Users, Admins, Categories, Payment Methods, Transactions)
- S3 (Receipt storage using pre-signed URLs)
- API Gateway

### **Hosting**
- AWS Amplify (Frontend)
- AWS Lambda + DynamoDB (Backend)

---

## 🧩 Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_BASE_URL=***
AWS_REGION=ap-southeast-7
AWS_ACCESS_KEY_ID=***
AWS_SECRET_ACCESS_KEY=***
USERS_TABLE_NAME=Users
```

---

## Run Locally

```
npm install
npm run dev
```

App starts at

```
http://localhost:3000
```
