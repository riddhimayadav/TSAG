// footer-component.js
function loadFooter() {
    const footerHTML = `
        <!-- Newsletter Section -->
        <section class="newsletter-section rounded-section">
            <div style="max-width: 900px; margin: auto; text-align: center;">
                <h1 style="font-size: 2.5rem; font-weight: 600; color: white; margin-bottom: 20px;">Stay in the Loop</h1>
                <p style="font-size: 1.2rem; color: rgba(255,255,255,0.9); margin-bottom: 30px;">
                    Subscribe to our newsletter for updates on events, opportunities, and insights from the world of sports analytics.
                </p>
                <a href="https://docs.google.com/forms/d/1jMR-KpWR46873mDVbxaI9najP-QKDfgtN4dNEGWJAOg/viewform" target="_blank" class="button-redhat" style="display: inline-block; background: white; color: #bf5700; padding: 15px 40px; font-size: 1.1rem; font-weight: 600; border: none; border-radius: 999px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.2); text-decoration: none; transition: all 0.3s ease;">
                    Subscribe to Newsletter →
                </a>
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
                        <a href="projects.html" class="footer-link">Projects</a>
                        <a href="newsletter.html" class="footer-link">Media Hub</a>
                        <a href="joinus.html" class="footer-link">Join Us</a>
                        <a href="contact.html" class="footer-link">Sponsor Us</a>
                    </div>
                    <div class="footer-column">
                        <p style="font-weight: 600;">SOCIAL</p>
                        <a href="https://utexas.campuslabs.com/engage/organization/txsportsanalytics" target="_blank" class="footer-link">HornsLink</a>
                        <a href="https://linktr.ee/txbosso" target="_blank" class="footer-link">LinkTree</a>
                        <a href="https://www.instagram.com/txbosso/" target="_blank" class="footer-link">Instagram</a>
                        <a href="https://www.linkedin.com/company/txbosso/" target="_blank" class="footer-link">LinkedIn</a>
                    </div>
                    <div class="footer-column">
                        <p style="font-weight: 600;">CONTACT</p>
                        <p>external@txbosso.com</p>
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

            .newsletter-section {
                background: linear-gradient(135deg, #bf5700 0%, #d66a00 100%);
                color: white;
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

            .newsletter-section a:hover {
                background: #f0f0f0 !important;
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
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
                
                .newsletter-section h1 {
                    font-size: 2rem !important;
                }
                
                .newsletter-section p {
                    font-size: 1rem !important;
                }
            }
        </style>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);
