# 🔍 Semantic API Search MVP

## 📖 Background & Inspiration
While exploring **Postman’s Search** feature, I noticed how powerful it is for discovering APIs.  
But I also realized that most search experiences are still **keyword-based** — meaning developers have to know the exact name of an API or a specific keyword to find it.  

This sparked an idea 💡:  
What if developers could search **by intent**, like *“send OTP”*, *“weather forecast”*, or *“music playlist”*, and instantly discover the most relevant APIs?  

That’s how this **Semantic API Search MVP** was born.  
It uses **semantic embeddings + similarity search** to let developers find APIs **by meaning, not just keywords**.

---

## 🛠️ Tech Stack

### Backend
- **Node.js (Express)** – API server  
- **@xenova/transformers** – free, local embeddings (no paid APIs)  
- **Cosine Similarity** – ranking of search results  
- **Dataset** – curated list of popular APIs across domains (Auth, Payments, Maps, AI, Weather, Social, Productivity)  

### Frontend
- **React.js + TypeScript** – UI for search & results  
- **Tailwind CSS** – clean, responsive design  
- **Fetch API** – connect frontend with backend  

---

## 📂 Dataset
For this MVP, I curated a dataset of **30 widely-used APIs** including:  
- **Payments**: Stripe, PayPal, Razorpay  
- **Auth & Security**: Firebase Auth, Auth0, Okta  
- **Communication**: Twilio, Vonage, Slack, Discord  
- **Maps & Weather**: Google Maps, Mapbox, OpenWeather, Weatherstack  
- **AI & NLP**: OpenAI, Hugging Face, IBM Watson  
- **Social & Media**: Twitter, Reddit, YouTube, Spotify  
- **Productivity**: Jira, Trello, Notion, Calendly  

Each entry includes:
- API **name**  
- **Description**  
- **Tags** for context  
- **Docs link**  

👉 Stored in `dataset.json` → preprocessed into embeddings for semantic search.  

---

## ⚡ Features
- Search APIs **by intent/meaning**, not just keywords  
- Returns **top 5 most relevant APIs** with score  
- Includes **API name, description, tags, docs link**  
- Free & open-source: uses **local embeddings** (no API costs)  

---

## 🚀 Running the Project

### 1. Backend
```bash
cd semantic-search-api
npm install
npm run dev
```
Server runs at: `http://localhost:5000`

### 2. Frontend
```bash
cd semantic-search-frontend
npm install
npm start
```
App runs at: `http://localhost:3000`

---

## 🎯 Example Queries
- `send otp` → Twilio, Firebase Auth, Vonage  
- `payment gateway` → Stripe, Razorpay, PayPal  
- `maps navigation` → Google Maps, Mapbox  
- `weather forecast` → OpenWeather, Weatherstack  
- `sentiment analysis` → IBM Watson, Hugging Face  

---

## 📚 What I Learned
- How **Postman’s Search Team** focuses on API discovery and ease of use.  
- How semantic search can unlock **new ways of API discovery** beyond simple keywords.  
- Building with **@xenova/transformers** for free, local embeddings (no paid API).  
- Full-stack integration: React + TypeScript frontend connected to a Node.js backend.  

---

## 🚀 Future Scaling Plan
This MVP demonstrates intent-based API discovery. To scale it into a **full product**:  

1. **Larger Dataset**  
   - Index **all APIs in Postman’s Public API Network** (millions of collections).  
   - Auto-refresh dataset using Postman’s API lifecycle updates.  

2. **Search Infrastructure**  
   - Replace in-memory similarity search with a **vector database** (e.g., Pinecone, Weaviate, Milvus).  
   - Enable **sub-second search** at scale.  

3. **Personalization & Ranking**  
   - Use developer history (recent APIs, domain) to personalize search results.  
   - Add **popularity & usage signals** to ranking.  

4. **Inline Try-Outs**  
   - Let users **send sample requests directly from search results** (no context switching).  

5. **Advanced Filters & Facets**  
   - Filter by **auth method, category, provider, popularity**.  
   - Explore “similar APIs” recommendations.  

---

## 🌍 Vision
This MVP is a **proof-of-concept** showing how API search can evolve:  
- Developers searching in **natural language**.  
- Results that adapt to **intent & context**, not just string matches.  
- Faster discovery → faster innovation.  

---

✨ Built as a passion project inspired by **Postman’s mission** to enable the API-first world.  
