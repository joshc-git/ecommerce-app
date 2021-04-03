module.exports = ({content}) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">
            <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
            <script src="https://use.fontawesome.com/25519d21c7.js"></script>
            <link rel="stylesheet" href="style.css">
            <title>Manhattan</title>
        </head>
        <body>
            <header>
                <div id="header-top">
                    <div id="logo">
                        <a href="#"><img src="images/logo.png" width="344" height="148" alt="MicroD Home Furnishings"></a>
                    </div>
                    <div id="search-box">
                        <input id="SearchValue" name="SearchValue" type="text" placeholder="What are you looking for?" value="">
                        <button><i class="fa fa-search" aria-hidden="true"></i> <span class="hide-on-mobile">Search</span></button>
                    </div>
                    <div id="account">
                        <ul>
                            <li class="hide-on-mobile"><a href="#"><i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i> Cart (0)</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-user fa-lg" aria-hidden="true"></i> <span class="hide-on-mobile">Account</span></a>
                                <ul>
                                    <li id="login"><a href="/signin" rel="nofollow">Login</a></li>
                                    <li id="viewAccountLink" style="display: none;"><a href="/modifyaccount.aspx" rel="nofollow">View Account</a></li>
                                    <li id="logoutLink" style="display: none;"><a href="/homepage.aspx?logout=true" rel="nofollow">Logout</a></li>
                                    <li id="registerlink"><a href="/signup" rel="nofollow">Register</a></li>
                                    <li><a href="/favorites.aspx" rel="nofollow">Favorites</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div id="sticky-nav">
                <nav id="main-nav">
                    <a class="mobile-nav" href="javascript:void(0);" target="_self"><i class="fa fa-bars fa-lg" aria-hidden="true"><span class="hidden"></span></i> MENU</a>
                    <ul>
                        <li><a href="javascript:void(0)">Shop <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                            <ul>
                                <li><a href="#">Living Room</a></li>
                                <li><a href="#">Dining Room</a></li>
                                <li><a href="#">Bedroom</a></li>
                                <li><a href="#">Home Office</a></li>
                                <li><a href="#">Entertainment</a></li>
                                <li><a href="#">Decor</a></li>
                                <li><a href="#">Mattresses</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0)">Design <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                            <ul>
                                <li><a href="#">Design Center</a></li>
                                <li><a href="#">Room Planner</a></li>
                                <li><a href="#">Find a Designer</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0)">Learn <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                            <ul>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Brands We Carry</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0)">Specials <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                            <ul>
                                <li><a href="#">Trending Wall</a></li>
                                <li><a href="#">Special Events</a></li>
                                <li><a href="#">Clearance</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Financing</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <ul>
                    <li><strong>FREE SHIPPING</strong> on orders over $100. <a class="accent" href="#">See Details</a></li>
                    <li><i class="fa fa-phone" aria-hidden="true"><span class="hidden">Phone</span></i> <a href="tel:18008888888">1-800-888-8888</a></li>
                    <li class="hide-on-desktop hide-on-tablet"><a href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i> (0)</a></li>
                </ul>
            </div>
            <main>
                ${content}
            </main>
            <footer>
                <div id="footer-top">
                    <div>
                        <div><i class="fa fa-phone fa-lg" aria-hidden="true"><span class="hidden">Phone</span></i></div>
                        <div>
                            <h2>MicroD Home Furnishings</h2>
                            <p>11301 Carmel Commons Blvd.<br>Charlotte, NC 28226</p><br>
                            <p><strong>Phone:</strong> <a href="tel:8888888888">888-888-8888</a></p><br>
                            <a class="footer-button" href="#">Get Directions</a>
                        </div>
                    </div>
                    <div>
                        <div><i class="fa fa-user fa-lg" aria-hidden="true"><span class="hidden">Account</span></i></div>
                        <div>
                            <h2>Account Info</h2>
                            <ul>
                                <li><a href="/signin">My Account</a></li>
                                <li><a href="#">View Cart</a></li>
                                <li><a href="#">Favorites</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div><i class="fa fa-map-marker fa-lg" aria-hidden="true"><span class="hidden">Map</span></i></div>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.8978098614166!2d-80.846861684112!3d35.08428598033782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569d0638ac62ad%3A0xd148a4320a165608!2sMicroD!5e0!3m2!1sen!2sus!4v1615899090499!5m2!1sen!2sus" width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                <div id="footer-bottom">
                    <div>
                        <a href="#"><img src="images/logo.png" width="344" height="148" alt="MicroD Home Furnishings"></a>
                    </div>
                    <div>
                        <h2>Company Info</h2>
                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Promotions</a></li>
                            <li><a href="#">Design Center</a></li>
                            <li><a href="#">Room Planner</a></li>
                            <li><a href="#">Brands</a></li>
                            <li><a href="#">Newsletter</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Shop</h2>
                        <ul>
                            <li><a href="#">Living Room</a></li>
                            <li><a href="#">Dining Room</a></li>
                            <li><a href="#">Bedroom</a></li>
                            <li><a href="#">Home Office</a></li>
                            <li><a href="#">Entertainment</a></li>
                            <li><a href="#">Decor</a></li>
                            <li><a href="#">Mattresses</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Brands</h2>
                        <ul>
                            <li><a href="#">A America</a></li>
                            <li><a href="#">American Woodcrafters</a></li>
                            <li><a href="#">ART Furniture</a></li>
                            <li><a href="#">Artistica Home</a></li>
                            <li><a href="#">Ashley</a></li>
                            <li><a href="#">Aspenhome</a></li>
                            <li><a href="#">Barcalounger</a></li>
                            <li><a href="#">Benchcraft</a></li>
                            <li><a href="#">Bernhardt</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Social Media</h2>
                        <div id="footer-social">
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook fa-lg" aria-hidden="true"><span class="hidden">Facebook</span></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram fa-lg" aria-hidden="true"><span class="hidden">Instagram</span></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter fa-lg" aria-hidden="true"><span class="hidden">Twitter</span></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest fa-lg" aria-hidden="true"><span class="hidden">Pinterest</span></i></a></li>
                                <li><a href="#"><i class="fa fa-youtube fa-lg" aria-hidden="true"><span class="hidden">YouTube</span></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="copyright">
                    <p>&copy; 2021 MicroD Home Furnishings. All rights reserved. <a href="#">Design and Development: MicroD, LLC</a></p>
                </div>
            </footer>
            <script>
                // MOBILE NAV
                const mobileNav = document.querySelector('.mobile-nav');
                const mainNavList = document.querySelector('#main-nav ul');
                const mobileSubNav = document.querySelectorAll('#main-nav > ul > li > a');
        
                // Toggle Mobile Nav
                mobileNav.addEventListener('click', () => {
                    mainNavList.classList.toggle('nav-active');
                });
        
                // Toggle Mobile Sub Navs
                mobileSubNav.forEach(list => {
                    list.addEventListener('click', (e) => {
                        e.currentTarget.parentElement.querySelector('ul').classList.toggle('nav-active');
                    })
                });
        
                // Hide Mobile Nav when clicking outside
                document.addEventListener('click', (e) => {
                    if (!mobileNav.contains(e.target) && !mainNavList.contains(e.target)) {
                        mainNavList.classList.remove('nav-active');
                    }
                });
                // END MOBILE NAV
            </script>
        </body>
        </html>
    `
}