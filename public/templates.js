// Create Header/Navbar Object

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <a href="index.html" title="Return to startpage">
          <img src="images/1log.png" class="d-block w-100" alt="...">
          </a>
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <a href="index.html" title="Return to startpage">
          <img src="images/3heli.png" class="d-block w-100" alt="...">
          </a>
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <a href="index.html" title="Return to startpage">
          <img src="images/5heli_rtw.png" class="d-block w-100" alt="...">
          </a>
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <a href="index.html" title="Return to startpage">
          <img src="images/6heliroof.png" class="d-block w-100" alt="...">
          </a>
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <a href="index.html" title="Return to startpage">
          <img src="images/2heli_fenster.png" class="d-block w-100" alt="...">
          </a>
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <a href="index.html" title="Return to startpage">
          <img src="images/4karte_s-h.png" class="d-block w-100" alt="...">
          </a>
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <a href="index.html" title="Return to startpage">
          <img src="images/7heli_sun.png" class="d-block w-100" alt="...">
          </a>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev"> 
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  
  
  
  
  
  
    <nav class="navbar navbar-expand-sm ">
      <button class="navbar-toggler mx-auto m-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse text-center navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-item nav-link fw-bold" href="index.html">Start</a>
            </li>
            <li class="nav-item">
              <a class="nav-item nav-link fw-bold" href="team.html">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-item nav-link fw-bold" href="technik.html">Technik</a>
            </li>
            <li class="nav-item">
              <a class="nav-item nav-link fw-bold" href="umgebung.html">Umgebung</a>
            </li>
            <li class="nav-item">
              <a class="nav-item nav-link fw-bold" href="todos.html">ToDo's</a>
            </li> 
            <li class="nav-item">
              <a class="nav-item nav-link fw-bold" href="moreToDos.html">MoreToDo's</a>
            </li>
            <li class="nav-item">
              <a class="nav-item nav-link fw-bold" href="emergencyAndProcedure.html">Emergency & Procedure</a>
            </li>
            <li class="nav-item">
              <a class="nav-item nav-link fw-bold" href="more.html">More</a>
            </li>
          </ul>
        </div>
    </nav>
          `
    }
  }
  
  
  // Insert HeaderObject in html-file
  customElements.define('main-header', Header);

