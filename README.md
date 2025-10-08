# 🧠 Graphica: AI Graph Creator

**AI Graph Creator** is an intelligent, privacy-first platform that transforms user prompts into beautiful, data-driven visualizations — instantly.  
It lets users connect their own data (Google Sheets or cloud sources), generate graphs through AI, and collaborate with others — without ever uploading their raw data.

---

## 🚀 Features

- 💬 **Prompt-to-Graph AI:** Describe your chart in natural language — e.g. *“Show me sales in November”* — and the AI suggests the best visuals.
- 🧩 **Smart Graph Recommendations:** The system understands data context and offers the top 3 visualization options.
- ⚠️ **Aesthetic Warnings:** If a chosen chart type misfits the data, the AI gently warns before rendering.
- ✏️ **Editable Metrics:** Users can tweak values, fields, or filters — graphs update in real time.
- 🔐 **Data Privacy by Design:** No raw data is ever stored. Only graph definitions, metadata, and snapshots.
- 🧠 **AI Story Generator:** Auto-generates short business reports that explain trends and insights.
- 🗂️ **Snapshots & Versioning:** Save graph states, revert to older versions, or compare changes visually.
- 💬 **Collaboration:** Users can comment, review, and approve graphs with full version history.

---

## 🧱 Tech Stack

**Frontend:** Next.js (React + TypeScript)  
**Backend:** Node.js / FastAPI (modular REST API)  
**Database:** PostgreSQL / MongoDB (for snapshots, versions, and comments)  
**Auth:** Google OAuth (for secure BYOD access)  
**Vector DB (AI):** Pinecone / Weaviate (for graph embeddings and AI context)  
**LLM Integration:** Gemini / OpenAI GPT for prompt → graph generation and report writing  
**Visualization Engine:** Vega-Lite / Plotly / Deck.gl

---

## ⚙️ How It Works

1. **Connect Your Data** — Sign in via Google and link your Sheets or cloud dataset.  
2. **Ask Naturally** — Type or speak: *“Compare revenue and profit by region.”*  
3. **AI Suggests Graphs** — Instantly see 3 suggested charts tailored to your data.  
4. **Select or Edit** — Pick one, or edit metrics and visuals freely.  
5. **AI Insight Report** — Auto-generate an executive summary for the graph.  
6. **Save Snapshot** — Store graph definitions and versions securely.  

🧩 *No raw data leaves your account — only graph configurations and metadata are stored.*

---

## 🧠 AI Intelligence Layer

Each graph internally exists as a **graph vector JSON**, which the AI:
- Understands, edits, and improves through prompt engineering  
- Learns from user preferences over time  
- Uses to recommend better visuals and explain insights  
- Keeps fully detached from sensitive datasets  

---

## 🧪 Local Setup (MVP Example)

```bash
# 1. Clone the repository
git clone https://github.com/MainakVerse/Graph.git
cd ai-graph-creator

# 2. Install dependencies
npm install
# or
yarn install

# 3. Run development server
npm run dev
# App will start at http://localhost:3000
