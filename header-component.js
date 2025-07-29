// header-component.js
function loadHeader() {
    const headerHTML = `
        <header style="display: flex; align-items: center; justify-content: space-between; padding: 20px 40px; background-color: black; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); position: relative;">
            <div style="display: flex; align-items: center; gap: 20px;">
                <a href="index.html" style="text-decoration: none;">
                    <img src="logo.png" alt="TSAG Logo" style="height: 50px; width: auto; flex-shrink: 0; cursor: pointer;">
                </a>
                <a href="index.html" style="text-decoration: none; color: inherit;">
                    <h1 style="font-size: 20px; font-weight: 700; color: white; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer;">Texas Sports Analytics Group</h1>
                </a>
            </div>
            
            <!-- Hamburger Button -->
            <button id="hamburger-btn" style="display: flex; flex-direction: column; justify-content: space-around; width: 30px; height: 30px; background: transparent; border: none; cursor: pointer; padding: 0;">
                <span class="hamburger-line" style="width: 100%; height: 3px; background-color: white; border-radius: 2px; transition: all 0.3s ease;"></span>
                <span class="hamburger-line" style="width: 100%; height: 3px; background-color: white; border-radius: 2px; transition: all 0.3s ease;"></span>
                <span class="hamburger-line" style="width: 100%; height: 3px; background-color: white; border-radius: 2px; transition: all 0.3s ease;"></span>
            </button>
            
            <!-- Navigation Menu -->
            <nav id="nav-menu" style="position: absolute; top: 100%; right: 0; background-color: black; flex-direction: column; gap: 0; padding: 0; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); transform: translateY(-10px); opacity: 0; visibility: hidden; transition: all 0.3s ease; z-index: 1000; display: flex; width: 250px; border-left: 1px solid #333; border-right: 1px solid #333; border-bottom: 1px solid #333; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;">
                <a href="index.html" style="color: white; text-decoration: none; font-weight: 600; font-size: 16px; transition: all 0.3s ease; padding: 16px 24px; border-bottom: 1px solid #333; display: block; text-align: center;">Home</a>
                <a href="about.html" style="color: white; text-decoration: none; font-weight: 600; font-size: 16px; transition: all 0.3s ease; padding: 16px 24px; border-bottom: 1px solid #333; display: block; text-align: center;">About</a>
                <a href="projects.html" style="color: white; text-decoration: none; font-weight: 600; font-size: 16px; transition: all 0.3s ease; padding: 16px 24px; border-bottom: 1px solid #333; display: block; text-align: center;">Projects</a>
                <span style="color: #666; font-weight: 600; font-size: 16px; cursor: not-allowed; padding: 16px 24px; border-bottom: 1px solid #333; display: block; text-align: center;">Recruitment</span>
                <a href="contact.html" style="color: white; text-decoration: none; font-weight: 600; font-size: 16px; transition: all 0.3s ease; padding: 16px 24px; display: block; text-align: center;">Contact</a>
            </nav>
        </header>
        
        <style>
            /* Navigation hover effects */
            header nav a:hover {
                color: #B45F06 !important;
            }
            
            /* Hamburger menu styles */
            #hamburger-btn.active .hamburger-line:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            #hamburger-btn.active .hamburger-line:nth-child(2) {
                opacity: 0;
            }
            
            #hamburger-btn.active .hamburger-line:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
            
            /* Active menu state */
            #nav-menu.active {
                transform: translateY(0) !important;
                opacity: 1 !important;
                visibility: visible !important;
            }
            
            /* Menu item hover effects */
            #nav-menu a:hover {
                background-color: #B45F06 !important;
                color: white !important;
            }
            
            #nav-menu a:last-child:hover {
                border-bottom-left-radius: 15px !important;
                border-bottom-right-radius: 15px !important;
            }
            
            @media (max-width: 600px) {
                header h1 {
                    font-size: 14px !important;
                }
                
                header {
                    padding: 15px 20px !important;
                }
                
                #nav-menu {
                    width: 200px !important;
                }
                
                #nav-menu a, #nav-menu span {
                    padding: 14px 20px !important;
                    font-size: 15px !important;
                    text-align: center !important;
                }
            }
            
            @media (max-width: 480px) {
                header h1 {
                    font-size: 13px !important;
                }
                
                #nav-menu {
                    width: 180px !important;
                }
                
                #nav-menu a, #nav-menu span {
                    font-size: 14px !important;
                    padding: 12px 16px !important;
                    text-align: center !important;
                }
            }
        </style>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    
    // Detect if device supports touch
    function isTouchDevice() {
        return (('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                (navigator.msMaxTouchPoints > 0));
    }
    
    // Hamburger menu functionality
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburgerBtn && navMenu) {
        const isTouch = isTouchDevice();
        let hoverTimeout;
        
        if (isTouch) {
            // Touch device: use click events
            hamburgerBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                hamburgerBtn.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!hamburgerBtn.contains(event.target) && !navMenu.contains(event.target)) {
                    hamburgerBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        } else {
            // Non-touch device: use hover events on hamburger button only
            hamburgerBtn.addEventListener('mouseenter', function() {
                clearTimeout(hoverTimeout);
                hamburgerBtn.classList.add('active');
                navMenu.classList.add('active');
            });
            
            hamburgerBtn.addEventListener('mouseleave', function() {
                hoverTimeout = setTimeout(() => {
                    hamburgerBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                }, 200);
            });
            
            // Keep menu open when hovering over the nav menu itself
            navMenu.addEventListener('mouseenter', function() {
                clearTimeout(hoverTimeout);
            });
            
            navMenu.addEventListener('mouseleave', function() {
                hoverTimeout = setTimeout(() => {
                    hamburgerBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                }, 200);
            });
        }
        
        // Close menu when clicking on a link (for both touch and non-touch)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeader);