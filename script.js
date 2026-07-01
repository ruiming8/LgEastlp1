document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new FormData(this);
  const name = data.get('name') || '';
  const email = data.get('email') || '';
  const organization = data.get('organization') || '';
  const message = data.get('message') || '';
  const subject = encodeURIComponent(`LG East Partners inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\n\n${message}`);
  window.location.href = `mailto:ray.gu@lgeast.com?subject=${subject}&body=${body}`;
});
