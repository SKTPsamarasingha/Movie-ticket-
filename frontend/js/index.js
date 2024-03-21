let allMovieData = [
  {
    id: 1,
    movieName: "FIGHTER",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/56ffa1e9-b59f-47d5-bec0-f81a2ad6a835.jpg",
    videoId: "973Ct2AC3EA",
  },
  {
    id: 2,
    movieName: "1970 LOVE STORY",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/3dbd0242-afa0-43a8-8faa-432809fc08ef.jpg",
    videoId: "R_KwNFbiLDg",
  },
  {
    id: 3,
    movieName: "AQUAMAN AND THE LOST KINGDOM",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/67b2c919-fa3c-4b88-97b3-71ba4892fd98.jpg",
    videoId: "FV3bqvOHRQo",
  },
  {
    id: 4,
    movieName: "DUNKI",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/61084983-5928-46ca-92c3-8c5a3abf1cc3.jpg",
    videoId: "ACKQDAlAfFE",
  },
  {
    id: 5,
    movieName: "WONKA",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/f96f1cfd-d2ae-4950-8fcf-a071e757028e.jpg",
    videoId: "otNh9bTjXWg",
  },
  {
    id: 6,
    movieName: "MIGRATION",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/6da5f6c2-23ec-4581-a28d-5abdf5bb2a87.jpg",
    videoId: "cQfo0HJhCnE",
  },
  {
    id: 7,
    movieName: "THE BEEKEEPER",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/646003c4-0613-4b3d-8d58-4567d698a281.jpg",
    videoId: "SzINZZ6iqxY",
  },
  {
    id: 8,
    movieName: "ARGYLLE",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/1ba32c22-fab5-4737-b004-b8c1dd2cd803.jpg",
    videoId: "7mgu9mNZ8Hk",
  },
  {
    id: 9,
    movieName: "KATHURU MITHURU",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/afbe48ba-627a-45a6-86fc-551986b9b779.jpg",
    videoId: "eXfk7hTsmGQ",
  },
  {
    id: 10,
    movieName: "ANATOMY OF A FALL",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/ef26b90b-3035-4e0d-8567-a54d612e6296.jpg",
    videoId: "fTrsp5BMloA",
  },
  {
    id: 11,
    movieName: "TERI BAATON MEIN AISA ULJHA JIYA",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/b6687051-b8c0-49dc-abd0-9c56e2383cba.jpg",
    videoId: "tNWdAvHCtbo",
  },
  {
    id: 12,
    movieName: "MEAN GIRLS",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/b64cac3d-5ff2-4375-bbd8-e0af711f6c3b.jpg",
    videoId: "fFtdbEgnUOk",
  },
  {
    id: 13,
    movieName: "LAL SALAM",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/1086f174-c88f-4091-859a-e9f7dc0dc5f0.jpg",
    videoId: "7tQPxLKsSgg",
  },
  {
    id: 14,
    movieName: "DUNE: PART ONE",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/5113226f-2b39-4d40-b5c7-762ffe570ba6.jpg",
    videoId: "n9xhJrPXop4",
  },
  {
    id: 15,
    movieName: "BOB MARLEY: ONE LOVE",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/a746a7e0-f6e7-4f65-9429-29180cf5bd3f.jpg",
    releaseDate: "In Cinemas 15th February",
    videoId: "ajw425Kuvtw",
  },
  {
    id: 16,
    movieName: "LAND OF BAD",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/d30d7945-90dd-4372-8ad3-1985fb571309.jpg",
    releaseDate: "In Cinemas 16th February",
    videoId: "dKcHOR-V1G4",
  },
  {
    id: 17,
    movieName: "MADAME WEB",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/a7b1c6dd-15c8-4252-8373-899b11ee516a.jpg",
    releaseDate: "In Cinemas 16th February",
    videoId: "s_76M4c4LTo",
  },
  {
    id: 18,
    movieName: "SIREN",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/4db27abc-5351-4a86-99fe-caa681009b70.jpg",
    releaseDate: "In Cinemas 16th February",
    videoId: "ATmYzgRQphU",
  },
  {
    id: 19,
    movieName: "THE ROYAL BALLET - MANON",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/35926154-acd3-4bc4-8446-91189eee64d1.jpg",
    releaseDate: "In Cinemas 29th February",
    videoId: "bJRO0VKBsJw",
  },
  {
    id: 20,
    movieName: "DUNE: PART TWO",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/56489f60-395a-4066-977a-4dbaaab01ee9.jpg",
    releaseDate: "In Cinemas 1st March",
    videoId: "U2Qp5pL3ovA",
  },
  {
    id: 21,
    movieName: "KUNG FU PANDA 4",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/b895a256-f386-4400-8d40-5430435c3e5c.jpg",
    releaseDate: "In Cinemas 8th March",
    videoId: "_inKs4eeHiI",
  },
  {
    id: 22,
    movieName: "GODZILLA X KONG: THE NEW EMPIRE",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/1f6e18a3-3d88-44ef-8958-c710e7aec849.jpg",
    releaseDate: "In Cinemas 29th March",
    videoId: "lV1OOlGwExM",
  },
  {
    id: 23,
    movieName: "GHOSTBUSTERS: FROZEN EMPIRE",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/14e3b5f6-2c8e-4cf2-88b6-f111d276f456.jpg",
    releaseDate: "In Cinemas 12th April",
    videoId: "k_6CbpF2FSk",
  },
  {
    id: 24,
    movieName: "THE FALL GUY",
    imageUrl:
      "https://theatersollution.s3.amazonaws.com/29cbc891-7e80-4039-a047-237c66a54bc5.jpg",
    releaseDate: "In Cinemas 3rd May",
    videoId: "j7jPnwVGdZ8",
  },
];
const availableMovies = [];
const unavailableMovies = [];
// sorting movies now showing and coming soon
function sortMovies() {
  allMovieData.forEach((item) => {
    if (item.releaseDate !== undefined) {
      unavailableMovies.push(item);
    } else {
      availableMovies.push(item);
    }
  });
}
sortMovies();
// adding header and footer
class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="nav-bar">

        <!-- logo container -->
        <div class="logo-container">
            <a href="#">Cineplex |</a>
        </div>
        <!-- nav links -->
        <ul class="nav-list">
            <li><a href="./index.html">HOME</a></li>
            <li><a href="./movies.html">MOVIES</a></li>
            <li><a href="#">TICKETS</a></li>
            <li><a href="#">EVENTS</a></li>
            <li><a href="#">PROMOTIONS</a></li>
            <li><a href="#">THEATER INFO</a></li>
        </ul>
        <!-- login and register container -->
        <div class="login-container">
            <button href="#" class="register"><span class="cover"></span><i class="fa-regular fa-user"></i> Sign
                up</button>
            <button href="#" class="login"><span class="cover"></span><i class="fa-solid fa-right-to-bracket"></i>
                Login</button>
        </div>
        <!-- nav toggle btn -->
        <button class="nav-btn">
            <i class="fas fa-bars"></i>
            <!-- login tag -->
            <a href="#"><i class="fa-solid fa-arrow-right-to-bracket"></i></a>
        </button>

        <div class="small-movie-nav">
            <a class="now-btn active">Now showing</a>
            <a class="upcoming-btn">Coming soon</a>
        </div>
    </header>`;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="footer">
        <div class="footer-left">
            <ul>
                <li><a href="./index.html">HOME</a></li>
                <li><a href="#">EVENTS</a></li>
                <li><a href="./movies.html">MOVIES</a></li>
                <li><a href="#">TICKETS</a></li>
                <li><a href="#">PROMOTIONS</a></li>
                <li><a href="#">THEATER INFO</a></li>
            </ul>
            <ul>
                <li><a href="#">CAREERS</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">ADVERTISE</a></li>
                <li><a href="#">DISCLAIMER</a></li>
                <li><a href="#">CONTACT US</a></li>
                <li><a href="#">TERMS AND CONDITIONS</a></li>
            </ul>
            <div class="copyright">
                <p>© Copyright 2023</p>
                <p>Cineplex Cinema Design, Inc.</p>
                <p>All rights reserved</p>
            </div>
        </div>
        <div class="footer-right">
            <ul>
                <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-square-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                <a href="#"><i class="fa-brands fa-telegram"></i></a>
                <a href="#"><i class="fa-brands fa-pinterest"></i></a>
            </ul>
        </div>
    </footer>`;
  }
}

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);

// adding color to nav when scrolling

$(window).on("scroll", () => {
  const nav = $(".nav-bar");
  const smallNavBtn = $(".nav-btns");
  const scroll = Math.round($(window).scrollTop());

  if (scroll > 1) {
    nav.addClass("nav-scrolled");
  } else {
    $(".nav-scrolled").removeClass("nav-scrolled");
  }
});

const nav = $(".nav-list");
const btn = $(".fa-bars");

btn.on("click", () => {
  btn.toggleClass("fa-solid fa-x");
  nav.toggleClass("show-nav");
});

const carousel = $(".carousel");

// coming soon sliders
const loadSlider = (arr) => {
  let sliders = arr.map((item) => {
    let releaseDate = "NOW SCREENING";
    if (item.releaseDate !== undefined) {
      releaseDate = item.releaseDate;
    }
    return ` <div class="card movie" id=${item.id}>
        <img src=${item.imageUrl} alt="">
        <div class="movie-info">
            <p>${item.movieName}</p>
            <p>${releaseDate}</p>
        </div>

        <a class="videoBtn">Watch trailer</a>
        <a >Buy ticket</a>
    </div>`;
  });
  sliders = sliders.join("");
  return sliders;
};
let url =
  "https://mylifefm.com/wp-content/uploads/2024/02/Argylle-Movie-banner.jpg";
$(".banner-img").attr("src", `${url}`);
carousel.html(loadSlider(unavailableMovies));

const arrowBtns = $(".wrapper i");
const cardWidth = $(".card").width();
const children = carousel.children().clone();

// let firstCards = [children.slice(0, children.length / 2)];
// let lastCards = [children.slice(children.length / 2, children.length)];

carousel.append(children.slice(0, children.length / 2));
carousel.prepend(children.slice(children.length / 2, children.length));

arrowBtns.on("click", (e) => {
  let id = $(e.target).attr("id");
  let scrollAmount = id === "left" ? -cardWidth : cardWidth;
  $(".carousel").scrollLeft($(".carousel").scrollLeft() + scrollAmount);
});

const infiniteScroll = () => {
  const scrollPosition = Math.round(carousel.scrollLeft());
  const offsetWidth = Math.round(carousel.outerWidth());
  const totalWidth = carousel[0].scrollWidth;

  if (scrollPosition === 0) {
    carousel.addClass("no-transition");
    carousel.scrollLeft(totalWidth - offsetWidth * 2);
    carousel.removeClass("no-transition");
  } else if (scrollPosition === totalWidth - offsetWidth) {
    carousel.addClass("no-transition");
    carousel.scrollLeft(offsetWidth);
    carousel.removeClass("no-transition");
  }
};

carousel.on("scroll", infiniteScroll);
const videoContainer = $(".video-container");
const video = $("iframe");

$(".wrapper").on("click", (e) => {
  if ($(e.target).hasClass("videoBtn")) {
    const movieId = $(e.target).closest(".movie").attr("id") - 1;
    const videoId = allMovieData[movieId].videoId;
    let src = `https://www.youtube.com/embed/${videoId}`;
    video.attr("src", src);
    videoContainer.addClass("show-video");
  }
});

// video close btn function
$(".close-btn").on("click", () => {
  video.attr("src", "");
  videoContainer.removeClass("show-video");
});
