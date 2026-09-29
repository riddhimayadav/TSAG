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
                <form class="subscribe-form" novalidate style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; align-items: flex-start; max-width: 440px; margin: 0 auto;">
                    <input type="email" name="email" required placeholder="you@email.com" class="subscribe-input" aria-label="Email address" style="flex: 1; min-width: 200px; padding: 14px 20px; border-radius: 999px; border: none; font-size: 1rem; font-family: 'Red Hat Display', sans-serif;">
                    <input type="text" name="website" class="subscribe-honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" style="position: absolute; left: -9999px;">
                    <button type="submit" class="button-redhat" style="display: inline-block; background: white; color: #bf5700; padding: 14px 30px; font-size: 1.05rem; font-weight: 600; border: none; border-radius: 999px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.2); transition: all 0.3s ease; white-space: nowrap;">
                        Subscribe →
                    </button>
                    <span class="subscribe-message" hidden style="display: block; width: 100%; color: #fff; font-size: 0.9rem;"></span>
                </form>
            </div>
        </section>

        <!-- Footer Section -->
        <footer class="footer-container rounded-section">
            <div class="footer-inner">
                <h1 class="footer-logo">BOSSO</h1>
                <div class="footer-grid">
                    <div class="footer-column">
                        <p style="font-weight: 600;">QUICK LINKS</p>
                        <a href="/index.html" class="footer-link">Home</a>
                        <a href="/pages/about.html" class="footer-link">About</a>
                        <a href="/newsletter.html" class="footer-link">Portfolio</a>
                        <a href="/pages/joinus_app.html" class="footer-link">Join Us</a>
                        <a href="/pages/contact.html" class="footer-link">Sponsor Us</a>
                    </div>
                    <div class="footer-column">
                        <p style="font-weight: 600;">SOCIAL</p>
                        <a href="https://utexas.campuslabs.com/engage/organization/txbosso" target="_blank" class="footer-link">HornsLink</a>
                        <a href="https://linktr.ee/texasbosso" target="_blank" class="footer-link">LinkTree</a>
                        <a href="https://www.instagram.com/txbosso/" target="_blank" class="footer-link">Instagram</a>
                        <a href="https://www.linkedin.com/company/txbosso/" target="_blank" class="footer-link">LinkedIn</a>
                        <a href="https://open.spotify.com/show/16Nnwts9OfKgd134xZtdMu" target="_blank" class="footer-link">Spotify</a>
                    </div>
                    <div class="footer-column">
                        <p style="font-weight: 600;">CONTACT</p>
                        <p>board@txbosso.com</p>
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

            .newsletter-section a:hover,
            .newsletter-section button:hover {
                background: #f0f0f0 !important;
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
            }

            .newsletter-section .subscribe-success {
                font-weight: 700;
                color: #ffffff;
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

// Handles any .subscribe-form on the page (footer, newsletter.html hero,
// newsletter.html subscribe banner) so people can sign up without ever
// leaving the site. Delegated on document so it works even for the
// footer's form, which is injected after this script runs.
document.addEventListener('submit', function (event) {
    var form = event.target.closest('.subscribe-form');
    if (!form) return;
    event.preventDefault();

    var emailInput = form.querySelector('input[type="email"]');
    var honeypot = form.querySelector('input[name="website"]');
    var button = form.querySelector('button');
    var message = form.querySelector('.subscribe-message');

    if (honeypot && honeypot.value) return;
    var email = emailInput ? emailInput.value.trim() : '';
    if (!email) return;

    var originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Subscribing…';
    if (message) {
        message.hidden = true;
        message.textContent = '';
    }

    fetch('https://bosso-portal.vercel.app/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, website: honeypot ? honeypot.value : '' })
    })
        .then(function (response) {
            return response.json().catch(function () { return {}; }).then(function (data) {
                return { ok: response.ok, data: data };
            });
        })
        .then(function (result) {
            if (!result.ok) throw new Error((result.data && result.data.error) || 'Something went wrong. Please try again.');
            form.innerHTML = '<span class="subscribe-success">You&rsquo;re subscribed! &#10003;</span>';
        })
        .catch(function (error) {
            button.disabled = false;
            button.textContent = originalText;
            if (message) {
                message.textContent = error.message;
                message.hidden = false;
            }
        });
});
