# Anime Character Gallery

A beautiful and responsive React application that displays anime characters from the Jikan API (MyAnimeList). Browse, search, and favorite your favorite anime characters with a sleek dark theme interface.

## 🚀 Features

- **Character Gallery**: Browse anime characters in a responsive grid layout
- **Search Functionality**: Search for specific characters by name
- **Character Details**: Click on characters to view detailed information in a modal
- **Favorites System**: Add/remove characters to your favorites list
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Dark Theme**: Modern dark UI with gradient backgrounds
- **Image Download**: Download favorite character images directly from the app

## 🛠️ Tech Stack

- **Frontend**: React 18 with Hooks
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **API**: Jikan API (MyAnimeList)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bhaktialappanavar/Anime-Character-Gallery.git
   cd anime-character-gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 Usage

- **Browse Characters**: Scroll through the character gallery on the home page
- **Search**: Use the search bar in the navbar to find specific characters
- **View Details**: Click on any character card to see detailed information
- **Add to Favorites**: Click the heart icon on character cards or in the modal
- **View Favorites**: Click "Favorites" in the navbar to see your saved characters
- **Download Images**: Hover over favorite characters and click "Download" to save images

## 🏗️ Project Structure

```
anime-character-gallery/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation and search bar
│   │   ├── CharacterCard.jsx   # Individual character display
│   │   ├── CharacterModal.jsx  # Character details modal
│   │   └── FavoritesPage.jsx   # Favorites management page
│   ├── api.js                  # API functions for Jikan API
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.cjs
├── postcss.config.cjs
└── README.md
```

## 🎨 Customization

### Theme Colors
Modify the gradient background in `src/index.css`:

```css
body {
  @apply bg-gradient-to-br from-[#0f172a] via-[#081129] to-[#07121a] text-white font-poppins;
}
```

### API Configuration
The app uses the Jikan API. All API calls are centralized in `src/api.js`. You can modify endpoints or add new API functions there.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Jikan API**: For providing comprehensive anime and manga data
- **MyAnimeList**: The source of all character information
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations and transitions

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact the maintainers.

---

**Made with ❤️ for anime fans worldwide**