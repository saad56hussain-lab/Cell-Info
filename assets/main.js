document.getElementById("navbar").innerHTML = `
<nav class="navbar">
    <h1 class="logo">CELL INFO</h1>

    <ul class="navlinks">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>

        <li class="dropdown">
            <a href="#">Categories ▾</a>
            <ul class="dropdownmenu">
                <li><a href="apple.html">Apple</a></li>
                <li><a href="samsung.html">Samsung</a></li>
                <li><a href="pixel.html">Pixel</a></li>
            </ul>
        </li>

        <li><a href="comparision.html">Comparision</a></li>
        <li><a href="contact.html">Contact Us</a></li>
    </ul>
</nav>`
document.getElementById("footer").innerHTML = `
<footer class="footer">
<div class="child2">
<h2>CELL INFO</h2>
<p>Our company provides users to get information and knowledge about different mobile phones of different companies such as Apple,Samsung and many more so that it can help them to buy new phone.</p>
</div>
<div class="child3">
    <h2>HELPFUL LINKS</h2>
<a href="">HOME</a>
<a href="">ABOUT</a>
<a href="">CATEGORIES</a>
<a href="">COMPARISION</a>
<a href="">CONTACT</a>
</div>
<div class="child4">
    <h2>CATEGORIES</h2>
<a href="">APPLE</a>
<a href="">SAMSUNG</a>
<a href="">PIXEL</a>
</div>
<div class="child5">
    <h2>CONTACT</h2>
<a href="">
    <i class="fa-solid fa-location-dot"></i>
     A-65, ACME Co., Street no 12, New York</a>
<a href="">
    <i class="fa-solid fa-phone"></i>
    +1-28272300*, *2466</a>
<a href="">
    <i class="fa-solid fa-envelope"></i> webmaster@cellinfo.com
</a>
</div>
    </footer>`