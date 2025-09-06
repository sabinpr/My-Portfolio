# React Portfolio

A clean, responsive developer portfolio built with **React + Vite + TailwindCSS**. Includes multiple sections: Hero, About, Projects, Skills, Experience, Contact, and Footer. Features dark mode toggle and a project modal.

---

## 🚀 Features

- ⚡ Vite + React setup (fast build)
- 🎨 TailwindCSS for styling
- 🌙 Dark mode toggle
- 🗂️ Split components (Navbar, Hero, About, Projects, Skills, Experience, Contact, Footer)
- 💡 Project modal with details
- 📱 Responsive design

---

## 📂 Project Structure

```
src/
├── App.jsx
├── index.css
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectModal.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── Container.jsx
├── data/
│   ├── projects.js
│   ├── skills.js
│   └── experiences.js
```

---

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-portfolio.git
   cd react-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run development server:

   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`

---

## 🎨 Tailwind Setup

Tailwind is already configured in `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

If you need to customize, edit `tailwind.config.js`.

---

## 📦 Build for Production

```bash
npm run build
npm run preview
```

---

## ☁️ Deployment

### Deploy to **Vercel**:

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com/).
3. Import your repo.
4. Select **Vite** as the framework.
5. Deploy!

### Deploy to **Netlify**:

1. Run `npm run build`.
2. Drag and drop the `dist/` folder into Netlify dashboard.

---

## 📝 Customization

- Update your details in **Hero.jsx** and **About.jsx**.
- Add/edit projects in `data/projects.js`.
- Update skills in `data/skills.js`.
- Update experiences in `data/experiences.js`.
- Change email, GitHub, and LinkedIn in **Contact.jsx**.

---

## 📄 License

MIT License © 2025 Sabin Prajapati
