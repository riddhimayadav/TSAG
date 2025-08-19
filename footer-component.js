// footer-component.js
function loadFooter() {
    const footerHTML = `
        <!-- Orange Call to Action Section -->
        <section class="orange-section rounded-section">
            <div style="max-width: 900px; margin: auto;">
                <h1 style="font-size: 2.5rem; font-weight: 600;">Ready to get started?</h1>
                <p style="font-size: 1.2rem; margin-top: 20px;">
                    Interested in joining the founding class of the premier sports business group at UT? Follow us on Instagram (<b>@TXSportsAnalytics</b>) to stay up to date!
                </p>
                <button class="button-redhat" style="margin-top: 30px; background: white; color: black; padding: 12px 25px; font-size: 1rem; border: none; border-radius: 999px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    Contact Us →
                </button>
            </div>
        </section>

        <!-- Footer Section -->
        <footer class="footer-container rounded-section">
            <div class="footer-inner">
                <h1 class="footer-logo">BOSSO</h1>
                <div class="footer-grid">
                    <div class="footer-column">
                        <p style="font-weight: 600;">QUICK LINKS</p>
                        <a href="index.html" class="footer-link">Home</a>
                        <a href="about.html" class="footer-link">About</a>
                        <span class="footer-disabled">Projects</span>
                        <a href="joinus.html" class="footer-link">Join Us</a>
                        <a href="contact.html" class="footer-link">Sponsor Us</a>
                    </div>
                    <div class="footer-column">
                        <p style="font-weight: 600;">SOCIAL</p>
                        <a href="https://utexas.campuslabs.com/engage/organization/txsportsanalytics" target="_blank" class="footer-link">HornsLink</a>
                        <a href="https://linktr.ee/txsportsanalytics" target="_blank" class="footer-link">LinkTree</a>
                        <a href="https://www.instagram.com/txsportsanalytics/" target="_blank" class="footer-link">Instagram</a>
                    </div>
                    <div class="footer-column">
                        <p style="font-weight: 600;">CONTACT</p>
                        <p>TXSportsAnalytics@Gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
        
        <style>
            .rounded-section {
                border-top-left-radius: 30px;
                border-top-right-radius: 30px;
                overflow: hidden;
                position: relative;
                width: 100vw;
                box-sizing: border-box;
                max-width: 100%;
                margin: 0 auto;
                display: block;
            }

            .orange-section {
                background-color: #bf5700;
                color: black;
                padding: 60px 20px 100px 20px;
                font-family: 'Red Hat Display', sans-serif;
                width: 100vw;
                max-width: 100%;
                margin: -60px auto 0;
                position: relative;
                z-index: 2;
                border-top-left-radius: 30px;
                border-top-right-radius: 30px;
                box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.15);
                box-sizing: border-box;
            }

            .footer-container {
                background-color: #0a0a0a;
                color: white;
                padding: 60px 40px;
                width: 100vw;
                max-width: 100%;
                margin: -60px auto 0;
                box-sizing: border-box;
                position: relative;
                z-index: 3;
                border-top-left-radius: 30px;
                border-top-right-radius: 30px;
                box-shadow: 0 -10px 20px rgba(0,0,0,0.2);
            }

            .footer-inner {
                max-width: 1200px;
                margin: auto;
            }

            .footer-logo {
                font-size: 3.5rem;
                font-weight: 800;
                margin-bottom: 40px;
            }

            .footer-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 40px;
            }

            .footer-column p {
                margin: 0 0 10px;
                transition: color 0.3s ease;
            }

            .footer-link {
                display: block;
                margin: 0 0 10px;
                color: white;
                text-decoration: none;
                transition: color 0.3s ease;
            }

            .footer-disabled {
                display: block;
                margin: 0 0 10px;
                color: #666;
                cursor: not-allowed;
                text-decoration: none;
            }

            .footer-column p:hover,
            .footer-link:hover {
                color: #bf5700;
                cursor: pointer;
            }

            .button-redhat {
                font-family: 'Red Hat Display', sans-serif;
            }

            @media (max-width: 900px) {
                .footer-grid {
                    grid-template-columns: 1fr 1fr;
                }
            }

            @media (max-width: 600px) {
                .footer-grid {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    
    const contactButton = document.querySelector('.orange-section button');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    }
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);