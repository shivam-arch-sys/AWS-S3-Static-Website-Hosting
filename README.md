# 🚀 AWS S3 Static Website Hosting – Cloud Portfolio Deployment

> A cloud-based portfolio website deployed using Amazon S3 Static Website Hosting as part of my Cloud Computing Internship at DecodeLabs.

---

# 📌 Project Overview

This project demonstrates how a modern static portfolio website can be hosted globally using Amazon Web Services (AWS) without managing any servers.

The portfolio showcases my skills, projects, certifications, internship experience, and cloud computing journey while leveraging AWS cloud services for deployment.

---

# 🌐 Live Demo

**Portfolio Website**

http://shivamsingh-portfolio.s3-website.eu-north-1.amazonaws.com

---

# 💻 GitHub Repository

https://github.com/shivam-arch-sys/AWS-S3-Static-Website-Hosting

---

# 🖼️ Project Screenshots

## Portfolio Homepage

```md
![Portfolio Homepage](screenshots/portfolio-homepage.png)
```
<img width="1470" height="956" alt="Screenshot 2026-07-11 at 5 14 12 PM" src="https://github.com/user-attachments/assets/5fcd6004-c227-4836-b1b0-d97ea0592e01" />
---

## AWS S3 Bucket Objects

```md
![S3 Bucket Objects](screenshots/s3-bucket-objects.png)
```
<img width="1135" height="398" alt="Screenshot 2026-07-11 at 5 14 02 PM" src="https://github.com/user-attachments/assets/b53d6521-5d75-4dd8-ab1b-7891efa97b9a" />
---

## Static Website Hosting Configuration

```md
![Static Website Hosting](screenshots/static-website-hosting.png)
```
<img width="1150" height="392" alt="Screenshot 2026-07-11 at 5 13 10 PM" src="https://github.com/user-attachments/assets/517f249f-52de-44ee-b83e-5e23811b9961" />
---

## Bucket Policy Configuration

```md
![Bucket Policy](screenshots/bucket-policy.png)
```
<img width="1136" height="569" alt="Screenshot 2026-07-11 at 5 13 39 PM" src="https://github.com/user-attachments/assets/fbacd958-e639-480f-bf15-a54c7b9b1324" />
---

# 🏗️ Architecture Workflow

```text
                    ┌─────────────┐
                    │    User     │
                    └──────┬──────┘
                           │
                           ▼
          ┌─────────────────────────────┐
          │ AWS S3 Website Endpoint     │
          └──────────────┬──────────────┘
                         │
                         ▼
          ┌─────────────────────────────┐
          │      S3 Static Bucket       │
          │                             │
          │  index.html                 │
          │  style.css                  │
          │  script.js                  │
          │  assets/                    │
          └──────────────┬──────────────┘
                         │
                         ▼
          ┌─────────────────────────────┐
          │ Static Website Hosting      │
          └─────────────────────────────┘
```
<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/aab9a076-4d4d-4435-a039-b34cde10c83b" />

---

# ⚙️ Technologies Used

| Technology | Purpose |
|------------|---------|
| AWS S3 | Static Website Hosting |
| HTML5 | Website Structure |
| CSS3 | Styling & Responsive Design |
| JavaScript | Website Interactivity |
| GitHub | Version Control |
| AWS IAM | Access Management |
| JSON Bucket Policy | Public Access Configuration |

---

# 📂 Project Structure

```text
AWS-S3-Static-Website-Hosting/
│
├── assets/
│   └── profile-image.jpg
│
├── index.html
├── style.css
├── script.js
│
├── screenshots/
│   ├── portfolio-homepage.png
│   ├── s3-bucket-objects.png
│   ├── static-website-hosting.png
│   └── bucket-policy.png
│
└── README.md
```

---

# 🚀 Deployment Steps

## Step 1 – Create an S3 Bucket

Create a bucket with a globally unique name.

Example:

```text
shivamsingh-portfolio
```

---

## Step 2 – Upload Website Files

Upload:

```text
index.html
style.css
script.js
assets/
```

to the bucket.

---

## Step 3 – Disable Block Public Access

Navigate to:

```text
S3 Bucket
→ Permissions
→ Block Public Access
```

Disable:

```text
Block all public access
```

---

## Step 4 – Enable Static Website Hosting

Navigate to:

```text
Properties
→ Static Website Hosting
```

Configuration:

```text
Hosting Type:
Bucket Hosting

Index Document:
index.html

Error Document:
index.html
```

---

## Step 5 – Configure Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::shivamsingh-portfolio/*"
    }
  ]
}
```

---

## Step 6 – Access Website

AWS automatically generates a website endpoint:

```text
http://shivamsingh-portfolio.s3-website.eu-north-1.amazonaws.com
```

Your website becomes publicly accessible through this URL.

---

# 🎯 Key Learnings

✅ AWS S3 Static Website Hosting

✅ Bucket Policy Configuration

✅ Public Access Management

✅ Static Website Deployment

✅ Cloud Infrastructure Fundamentals

✅ Hosting Without Servers

✅ GitHub Version Control

---

# 📈 Future Enhancements

- AWS CloudFront CDN
- Custom Domain Integration
- HTTPS using AWS Certificate Manager
- Contact Form using AWS Lambda
- Visitor Analytics Dashboard
- GitHub Actions CI/CD Pipeline

---

# 👨‍💻 Author

## Shivam Singh

**B.Tech CSE (Cloud Computing)**  
GLA University (2024 – 2028)

📍 Varanasi, Uttar Pradesh, India

### Connect With Me

**LinkedIn**  
https://www.linkedin.com/in/shivam-singh-187919326

**GitHub**  
https://github.com/shivam-arch-sys

**LeetCode**  
https://leetcode.com/u/shivamsingh1324

---

# 🙏 Acknowledgement

This project was completed as part of my **Cloud Computing Internship at DecodeLabs**.

I would like to thank **DecodeLabs** for providing practical exposure to cloud technologies and hands-on experience with AWS services.

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

## 📜 License

This project is intended for educational, learning, and portfolio purposes.

© 2026 Shivam Singh. All Rights Reserved.
