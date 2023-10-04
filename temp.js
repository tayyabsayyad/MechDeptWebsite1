let nav = document.getElementById("navbar");

nav.innerHTML = `
<div class="container-fluid">
  <div class="row">
    <nav class="navbar bgcol_pri navbar-expand-sm nav-hide">
      <div class="container-fluid justify-content-center">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link top-nav-text" aria-current="page" href="https://dbit.in/">DBIT Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link top-nav-text" href="http://parent.dbit.in/">Parent Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link top-nav-text" href="https://alumni.dbit.in/">Alumni</a>
          </li>
          <li class="nav-item">
            <a class="nav-link top-nav-text" href="https://moodle.dbit.in/">Moodle</a>
          </li>
          <li class="nav-item">
            <a class="nav-link top-nav-text" href="https://elearn.dbit.in/">E-Learn</a>
          </li>
          <li class="nav-item">
            <a class="nav-link top-nav-text" href="http://dbitlrc.dbit.in/">Library</a>
          </li>
          <li class="nav-item">
            <a class="nav-link top-nav-text" href="https://dbcldrive.dbit.in/">DBCL Drive</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="row">
    <img class="p-0" src="/assets/mech-banner2.png" alt="" srcset="" />
  </div>
</div>

<header class="sticky-top bgcol_pri" style="z-index: 10">
  <nav class="navbar navbar-expand-xl bg-light container-fluid justify-content-between">
    <span class="navbar-brand mb-0 h1 ms-3">MECH DBIT</span>
    <button class="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header justify-content-end">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 offcanvas-nav">
          <li class="nav-item text-center">
            <a class="nav-link" aria-current="page" href="/index.html">HOME</a>
          </li>
          <li class="nav-item text-center">
            <a class="nav-link" href="/aboutus/aboutus.html">ABOUT US</a>
          </li>
          <li class="nav-item dropdown text-center">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ACADEMICS
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/academics/academic-calendar.html">Academic Calendar</a>
              </li>
              <li>
                <a class="dropdown-item" href="/academics/timetable.html">Timetable</a>
              </li>
              <li>
                <a class="dropdown-item" href="/academics/lab.html">Laboratories</a>
              </li>
              <li>
                <a class="dropdown-item" href="/academics/syllabus.html">Syllabus</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Academic Advisory Board</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown text-center">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              FACULTY
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="/faculty/faculty_profile.html">Profile</a>
              </li>
              <li>
                <a class="dropdown-item" href="/faculty/faculty_recognition.html">Recognition</a>
              </li>
              <li class="dropend drop-down">
                <a class="dropdown-item dropdown-toggle" href="#" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Research
                </a>
                <ul class="dropdown-menu sub-menu">
                  <li>
                    <a class="dropdown-item" href="/faculty/major_grant.html">Major Grants</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/faculty/minor_grant.html">Minor Grants</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown text-center">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              STUDENTS
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              
              <li>
                <a class="dropdown-item" href="/students/notice.html">Notice</a>
              </li>
              <li>
                <a class="dropdown-item" href="/students/recognition.html">Recognition</a>
              </li>
              <li>
                <a class="dropdown-item" href="/students/undergraduate-project.html">Undergraduate Projects</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown text-center">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              EXAMINATION
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="/academics/exam-calendar.html">Exam Timetable</a>
              </li>
              <li class="dropend drop-down">
                <a class="dropdown-item dropdown-toggle" href="#" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Rank Holders
                </a>
                <ul class="dropdown-menu sub-menu">
                  <li>
                    <a class="dropdown-item" href="/Examination/Rank_holder_D.html">Department</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Examination/university_RH.html">University</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          
          <li class="nav-item dropdown text-center">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              CO-CURRICULAR ACTIVITIES
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/cocurricular/newsletter.html">Newsletter</a>
              </li>
              <li class="dropend drop-down">
                <a class="dropdown-item dropdown-toggle" href="#">Events</a>
                <ul class="dropdown-menu sub-menu">
                  <li>
                    <a class="dropdown-item" href="/cocurricular/departmentday.html">Department Day</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/cocurricular/events.html">Project</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="dropdown-item" href="/cocurricular/clubs.html">Clubs</a>
              </li>
              <li>
                <a class="dropdown-item" href="/cocurricular/Industrial_visit.html">Industrial Visit</a>
              </li>
              <li>
                <a class="dropdown-item" href="/cocurricular/certificate.html">Certificate program</a>
              </li>
              <li>
                <a class="dropdown-item" href="/cocurricular/gate_study.html">Gate Study circle</a>
              </li>
              <li>
                <a class="dropdown-item" href="/cocurricular/guest_lecture.html">Guest Lectures</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown text-center">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              PLACEMENT & INTERNSHIP
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="/placement&internship/Internship_Records.html">Internship Record</a>
              </li>
              <li>
                <a class="dropdown-item" href="/placement&internship/Placement_Records.html">Placement Record</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

`;
