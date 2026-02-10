const library = document.getElementById("library");
const reader = document.getElementById("reader");

const pageImg = document.getElementById("pageImg");
const pageInfo = document.getElementById("pageInfo");
const mangaTitle = document.getElementById("mangaTitle");

const backBtn = document.getElementById("backBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPages = [];
let currentPageIndex = 0;
let currentMangaId = null;

const mangas = {
  hxh: {
    title: "Hunter x Hunter",
    pages: [
      "mangas/hxh/1.jpg",
      "mangas/hxh/2.jpg",
      "mangas/hxh/3.jpg"
    ]
  },
  jujutsu: {
    title: "Jujutsu Kaisen",
    pages: [
      "mangas/jujutsu/1.jpg",
      "mangas/jujutsu/2.jpg",
      "mangas/jujutsu/3.jpg"
    ]
  },
  baki: {
    title: "Baki: Son of Ogre",
    pages: [
      "mangas/baki/1.jpg",
      "mangas/baki/2.jpg",
      "mangas/baki/3.jpg"
    ]
  }
};

function openManga(id){
  currentMangaId = id;
  currentPages = mangas[id].pages;
  currentPageIndex = 0;

  mangaTitle.textContent = mangas[id].title;

  library.classList.add("hidden");
  reader.classList.remove("hidden");

  showPage();
}

function showPage(){
  pageImg.src = currentPages[currentPageIndex];
  pageInfo.textContent = `Página ${currentPageIndex + 1} / ${currentPages.length}`;

  prevBtn.disabled = currentPageIndex === 0;
  nextBtn.disabled = currentPageIndex === currentPages.length - 1;
}

prevBtn.addEventListener("click", () => {
  if(currentPageIndex > 0){
    currentPageIndex--;
    showPage();
  }
});

nextBtn.addEventListener("click", () => {
  if(currentPageIndex < currentPages.length - 1){
    currentPageIndex++;
    showPage();
  }
});

backBtn.addEventListener("click", () => {
  reader.classList.add("hidden");
  library.classList.remove("hidden");
});

document.querySelectorAll(".manga-card").forEach(card => {
  card.addEventListener("click", () => {
    openManga(card.dataset.id);
  });
});
