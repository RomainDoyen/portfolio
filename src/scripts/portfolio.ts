export function initPortfolioAnimations() {
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const container = document.getElementById('particles-container');
	if (!container) return;

	if (!prefersReducedMotion) {
		for (let i = 0; i < 50; i++) {
			const particle = document.createElement('div');
			particle.className = 'particle';
			const size = Math.random() * 5 + 2;
			particle.style.width = `${size}px`;
			particle.style.height = `${size}px`;
			particle.style.left = `${Math.random() * 100}%`;
			particle.style.top = `${Math.random() * 100}%`;
			const duration = Math.random() * 15 + 10;
			const delay = Math.random() * -20;
			particle.animate(
				[
					{ transform: 'translate(0, 0) scale(1)', opacity: '0.1' },
					{
						transform: `translate(${Math.random() * 300 - 150}px, ${Math.random() * 300 - 150}px) scale(1.5)`,
						opacity: '0.35',
					},
					{ transform: 'translate(0, 0) scale(1)', opacity: '0.1' },
				],
				{
					duration: duration * 1000,
					delay: delay * 1000,
					iterations: Infinity,
					easing: 'ease-in-out',
				},
			);
			container.appendChild(particle);
		}

		document.addEventListener('mousemove', (e) => {
			const x = e.clientX / window.innerWidth;
			const y = e.clientY / window.innerHeight;
			container.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #2d2b55 0%, #19120a 100%)`;
		});
	}

	const revealObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add('visible');
			});
		},
		{ threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
	);
	document.querySelectorAll('.scroll-reveal').forEach((el) => revealObserver.observe(el));

	const navAnchors = document.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]');
	const sectionNavLinks = document.querySelectorAll<HTMLAnchorElement>('nav a[data-nav-section]');

	navAnchors.forEach((anchor) => {
		anchor.addEventListener('click', (e) => {
			const href = anchor.getAttribute('href');
			if (!href?.startsWith('#')) return;
			e.preventDefault();
			const target = document.querySelector(href);
			if (!target) return;
			window.scrollTo({
				top: target.getBoundingClientRect().top + window.scrollY - 80,
				behavior: prefersReducedMotion ? 'auto' : 'smooth',
			});
			sectionNavLinks.forEach((l) => {
				l.classList.remove('nav-link-active', 'text-primary');
				l.classList.add('text-on-surface-variant');
			});
			if (anchor.hasAttribute('data-nav-section')) {
				anchor.classList.add('nav-link-active', 'text-primary');
				anchor.classList.remove('text-on-surface-variant');
			}
			document.getElementById('mobile-menu')?.classList.add('hidden');
		});
	});

	const menuBtn = document.getElementById('mobile-menu-btn');
	const mobileMenu = document.getElementById('mobile-menu');
	menuBtn?.addEventListener('click', () => {
		mobileMenu?.classList.toggle('hidden');
	});
}
