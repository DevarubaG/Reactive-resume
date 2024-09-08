document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("main section");

    for (let link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = event.target.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);

            sections.forEach(sec => sec.classList.remove("active"));
            section.classList.add("active");

            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});
